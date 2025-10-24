import { StyleSheet, Text, View } from 'react-native';
import { formatCurrency } from '../utils/helpers';

interface InvoiceItemProps {
  productName: string;
  price: number;
  quantity: number;
  subtotal: number;
}

export default function InvoiceItem({ 
  productName, 
  price, 
  quantity, 
  subtotal 
}: InvoiceItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.name} numberOfLines={2}>{productName}</Text>
        <Text style={styles.detail}>
          {formatCurrency(price)} × {quantity}
        </Text>
      </View>
      <Text style={styles.subtotal}>{formatCurrency(subtotal)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  leftSection: {
    flex: 1,
    marginRight: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  detail: {
    fontSize: 13,
    color: '#7f8c8d',
  },
  subtotal: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
});