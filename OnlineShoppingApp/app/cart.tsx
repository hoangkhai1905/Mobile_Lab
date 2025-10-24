import { useFocusEffect, useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import CartItemComponent from '../components/CartItem';
import { getCartItems, removeFromCart, updateCartQuantity } from '../database/queries';
import { CartItem } from '../types';
import { formatCurrency } from '../utils/helpers';

export default function CartScreen() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const router = useRouter();

  useFocusEffect(() => {
    loadCart();
  });

  const loadCart = async () => {
    const data = await getCartItems();
    setCartItems(data);
  };

  const handleIncrease = async (cartId: number) => {
    try {
      const item = cartItems.find(i => i.id === cartId);
      if (item) {
        await updateCartQuantity(cartId, item.quantity + 1);
        await loadCart();
      }
    } catch (error: any) {
      Alert.alert('Lỗi', error.message || 'Không thể tăng số lượng');
    }
  };

  const handleDecrease = async (cartId: number) => {
    try {
      const item = cartItems.find(i => i.id === cartId);
      if (item) {
        await updateCartQuantity(cartId, item.quantity - 1);
        await loadCart();
      }
    } catch (error: any) {
      Alert.alert('Lỗi', error.message || 'Không thể giảm số lượng');
    }
  };

  const handleRemove = async (cartId: number) => {
    Alert.alert(
      'Xác nhận',
      'Bạn có chắc muốn xóa sản phẩm này?',
      [
        { text: 'Hủy', style: 'cancel' },
        {
          text: 'Xóa',
          style: 'destructive',
          onPress: async () => {
            try {
              await removeFromCart(cartId);
              await loadCart();
            } catch (error: any) {
              Alert.alert('Lỗi', error.message || 'Không thể xóa sản phẩm');
            }
          },
        },
      ]
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      return sum + (item.product_price || 0) * item.quantity;
    }, 0);
  };

  if (cartItems.length === 0) {
    return (
      <View style={[styles.container, styles.emptyContainer]}>
        <Text style={styles.emptyText}>Giỏ hàng trống</Text>
        <Button title="Tiếp tục mua sắm" onPress={() => router.push('/')} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItemComponent
            item={item}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
          />
        )}
      />
      <View style={styles.footer}>
        <Text style={styles.total}>Tổng: {formatCurrency(calculateTotal())}</Text>
        <Button 
          title="Thanh toán" 
          color="#ff0000ff"
          onPress={() => router.push('/invoice')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  emptyContainer: { justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 18, color: '#7f8c8d', marginBottom: 20 },
  footer: { padding: 16, borderTopWidth: 2, borderColor: '#ddd' },
  total: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});