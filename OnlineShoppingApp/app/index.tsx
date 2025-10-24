import { useFocusEffect, useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProductItem from '../components/ProductItem';
import { addToCart, getAllProducts } from '../database/queries';
import { Product } from '../types';

export default function ProductsScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useFocusEffect(() => {
    loadProducts();
  });

  const loadProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  const handleAddToCart = async (productId: number) => {
    try {
      await addToCart(productId);
      alert('✓ Đã thêm vào giỏ hàng!');
      loadProducts();
    } catch (error: any) {
      alert(error.message || 'Có lỗi xảy ra');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🛍️ Sản phẩm</Text>
        <Text style={styles.headerSubtitle}>{products.length} sản phẩm</Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem product={item} onAddToCart={handleAddToCart} />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.cartButton}
          onPress={() => router.push('/cart')}
        >
          <Text style={styles.cartButtonText}>🛒 Xem giỏ hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f5f6fa',
  },
  header: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginLeft: '30%',
  },
  listContent: {
    paddingVertical: 8,
  },
  footer: { 
    padding: 16, 
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  cartButton: {
    backgroundColor: '#27ae60',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});