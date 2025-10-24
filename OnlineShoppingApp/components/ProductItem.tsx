import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Product } from '../types';
import { formatCurrency } from '../utils/helpers';

interface ProductItemProps {
  product: Product;
  onAddToCart: (productId: number) => void;
}

export default function ProductItem({ product, onAddToCart }: ProductItemProps) {
  const isOutOfStock = product.stock === 0;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>📦</Text>
        </View>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
        <Text style={styles.price}>{formatCurrency(product.price)}</Text>
        
        <View style={styles.footer}>
          <View style={styles.stockBadge}>
            <Text style={[styles.stockText, isOutOfStock && styles.outOfStock]}>
              {isOutOfStock ? '❌ Hết hàng' : `✓ Còn ${product.stock}`}
            </Text>
          </View>
          
          <TouchableOpacity 
            style={[styles.addButton, isOutOfStock && styles.addButtonDisabled]}
            onPress={() => onAddToCart(product.id)}
            disabled={isOutOfStock}
          >
            <Text style={styles.addButtonText}>
              {isOutOfStock ? 'Hết hàng' : '+ Thêm'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    marginRight: 12,
  },
  imagePlaceholder: {
    width: 90,
    height: 90,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    fontSize: 32,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stockBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: '#e8f5e9',
  },
  stockText: {
    fontSize: 12,
    color: '#27ae60',
    fontWeight: '600',
  },
  outOfStock: {
    color: '#e74c3c',
  },
  addButton: {
    backgroundColor: '#FF6600',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addButtonDisabled: {
    backgroundColor: '#bdc3c7',
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});