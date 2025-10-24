import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CartItem as CartItemType } from '../types';
import { formatCurrency } from '../utils/helpers';

interface CartItemProps {
  item: CartItemType;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function CartItem({ 
  item, 
  onIncrease, 
  onDecrease, 
  onRemove 
}: CartItemProps) {
  const subtotal = (item.product_price || 0) * item.quantity;

  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imagePlaceholderText}>📦</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>{item.product_name}</Text>
        <Text style={styles.price}>{formatCurrency(item.product_price || 0)}</Text>

        <View style={styles.actions}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity 
              style={styles.quantityButton} 
              onPress={() => onDecrease(item.id)}
            >
              <Text style={styles.quantityButtonText}>−</Text>
            </TouchableOpacity>
            
            <View style={styles.quantityBadge}>
              <Text style={styles.quantity}>{item.quantity}</Text>
            </View>
            
            <TouchableOpacity 
              style={styles.quantityButton} 
              onPress={() => onIncrease(item.id)}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.removeButton}
            onPress={() => onRemove(item.id)}
          >
            <Text style={styles.removeText}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.subtotal}>{formatCurrency(subtotal)}</Text>
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
  imagePlaceholder: {
    width: 90,
    height: 90,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  imagePlaceholderText: {
    fontSize: 28,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 4,
  },
  quantityButton: {
    width: 28,
    height: 28,
    backgroundColor: '#3498db',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityBadge: {
    paddingHorizontal: 12,
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  removeButton: {
    padding: 8,
  },
  removeText: {
    fontSize: 20,
  },
  rightSection: {
    justifyContent: 'flex-end',
    marginLeft: 8,
    marginBottom: 10,
  },
  subtotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
});