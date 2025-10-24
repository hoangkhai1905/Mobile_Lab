import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('shopping.db');

export const initDatabase = async () => {
  try {
    // Tạo bảng products
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        stock INTEGER NOT NULL DEFAULT 0,
        image_url TEXT
      );
    `);

    // Tạo bảng cart
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS cart (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL DEFAULT 1,
        FOREIGN KEY (product_id) REFERENCES products(id)
      );
    `);

    // Tạo bảng orders
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        total_amount REAL NOT NULL,
        vat_amount REAL NOT NULL,
        final_amount REAL NOT NULL,
        created_at TEXT NOT NULL
      );
    `);

    // Tạo bảng order_items
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS order_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        product_name TEXT NOT NULL,
        price REAL NOT NULL,
        quantity INTEGER NOT NULL,
        subtotal REAL NOT NULL,
        FOREIGN KEY (order_id) REFERENCES orders(id)
      );
    `);

    // Thêm dữ liệu mẫu nếu bảng rỗng
    const result = await db.getFirstAsync<{ count: number }>(
      'SELECT COUNT(*) as count FROM products'
    );
    
    if (result?.count === 0) {
      await db.execAsync(`
        INSERT INTO products (name, price, stock) VALUES
          ('Laptop ROG STRIX G513 2025', 25000000, 100),
          ('iPhone 15 Pro', 28000000, 150),
          ('Tai nghe SOUNDPEATS T3 PRO', 5500000, 20),
          ('Bàn phím cơ AULA', 899000, 8),
          ('Chuột ATK X1', 799000, 12),
          ('Monitor LG 27UP850', 12000000, 15),
          ('Webcam Logitech C920', 2500000, 30),
          ('Microphone Blue Yeti', 3500000, 25),
          ('Ghế Gaming DXRacer', 7000000, 10),
          ('Bàn Gaming E-Dra', 3000000, 5);
      `);
    }

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};