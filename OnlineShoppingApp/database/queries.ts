import { CartItem, Product } from '../types';
import { db } from './init';

// Products
export const getAllProducts = async (): Promise<Product[]> => {
  const products = await db.getAllAsync<Product>('SELECT * FROM products');
  return products;
};

// Cart
export const getCartItems = async (): Promise<CartItem[]> => {
  const items = await db.getAllAsync<CartItem>(`
    SELECT c.*, p.name as product_name, p.price as product_price
    FROM cart c
    JOIN products p ON c.product_id = p.id
  `);
  return items;
};

export const addToCart = async (productId: number): Promise<void> => {
  try {
    // Kiểm tra tồn kho
    const product = await db.getFirstAsync<Product>(
      'SELECT * FROM products WHERE id = ?',
      [productId]
    );
    
    if (!product || product.stock <= 0) {
      throw new Error('Sản phẩm hết hàng');
    }

    // Kiểm tra xem sản phẩm đã có trong giỏ chưa
    const existingItem = await db.getFirstAsync<CartItem>(
      'SELECT * FROM cart WHERE product_id = ?',
      [productId]
    );

    if (existingItem) {
      // Kiểm tra tồn kho trước khi tăng
      if (existingItem.quantity >= product.stock) {
        throw new Error('Không đủ hàng trong kho');
      }
      // Tăng quantity
      await db.runAsync(
        'UPDATE cart SET quantity = quantity + 1 WHERE id = ?',
        [existingItem.id]
      );
    } else {
      // Insert mới
      await db.runAsync(
        'INSERT INTO cart (product_id, quantity) VALUES (?, 1)',
        [productId]
      );
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

export const updateCartQuantity = async (
  cartId: number,
  quantity: number
): Promise<void> => {
  try {
    if (quantity <= 0) {
      await removeFromCart(cartId);
      return;
    }

    // Kiểm tra tồn kho
    const cartItem = await db.getFirstAsync<CartItem>(
      `SELECT c.*, p.stock 
       FROM cart c 
       JOIN products p ON c.product_id = p.id 
       WHERE c.id = ?`,
      [cartId]
    );

    if (!cartItem) {
      throw new Error('Không tìm thấy sản phẩm trong giỏ');
    }

    if (quantity > (cartItem as any).stock) {
      throw new Error('Không đủ hàng trong kho');
    }

    await db.runAsync(
      'UPDATE cart SET quantity = ? WHERE id = ?',
      [quantity, cartId]
    );
  } catch (error) {
    console.error('Error updating cart quantity:', error);
    throw error;
  }
};

export const removeFromCart = async (cartId: number): Promise<void> => {
  try {
    await db.runAsync('DELETE FROM cart WHERE id = ?', [cartId]);
  } catch (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
};

export const clearCart = async (): Promise<void> => {
  await db.runAsync('DELETE FROM cart');
};

// Orders
export const createOrder = async (
  totalAmount: number,
  vatAmount: number,
  finalAmount: number,
  cartItems: CartItem[]
): Promise<void> => {
  try {
    // Bắt đầu transaction
    await db.execAsync('BEGIN TRANSACTION');

    try {
      // 1. Tạo order
      const result = await db.runAsync(
        `INSERT INTO orders (total_amount, vat_amount, final_amount, created_at) 
         VALUES (?, ?, ?, ?)`,
        [totalAmount, vatAmount, finalAmount, new Date().toISOString()]
      );

      const orderId = result.lastInsertRowId;

      // 2. Tạo order_items và trừ tồn kho
      for (const item of cartItems) {
        const subtotal = (item.product_price || 0) * item.quantity;
        
        // Insert order_item
        await db.runAsync(
          `INSERT INTO order_items 
           (order_id, product_id, product_name, price, quantity, subtotal) 
           VALUES (?, ?, ?, ?, ?, ?)`,
          [
            orderId,
            item.product_id,
            item.product_name || '',
            item.product_price || 0,
            item.quantity,
            subtotal,
          ]
        );

        // Trừ tồn kho
        await db.runAsync(
          'UPDATE products SET stock = stock - ? WHERE id = ?',
          [item.quantity, item.product_id]
        );
      }

      // 3. Xóa giỏ hàng
      await clearCart();

      // Commit transaction
      await db.execAsync('COMMIT');
    } catch (error) {
      // Rollback nếu có lỗi
      await db.execAsync('ROLLBACK');
      throw error;
    }
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};