import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import InvoiceItem from '../components/InvoiceItem';
import { createOrder, getCartItems } from '../database/queries';
import { CartItem } from '../types';
import { calculateVAT, formatCurrency, formatDateTime } from '../utils/helpers';

export default function InvoiceScreen() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCartData();
  }, []);

  const loadCartData = async () => {
    const data = await getCartItems();
    setCartItems(data);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => {
      return sum + (item.product_price || 0) * item.quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const vat = calculateVAT(subtotal);
  const total = subtotal + vat;

  const handleComplete = async () => {
    if (cartItems.length === 0) {
      Alert.alert('Lỗi', 'Giỏ hàng trống');
      return;
    }

    setLoading(true);
    try {
      await createOrder(subtotal, vat, total, cartItems);
      Alert.alert(
        'Thành công',
        'Đơn hàng đã được tạo!',
        [
          {
            text: 'OK',
            onPress: () => router.push('/'),
          },
        ]
      );
    } catch (error: any) {
      Alert.alert('Lỗi', error.message || 'Không thể tạo đơn hàng');
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <View style={[styles.container, styles.emptyContainer]}>
        <Text style={styles.emptyText}>Không có sản phẩm nào</Text>
        <Button title="Quay lại" onPress={() => router.back()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOÁ ĐƠN</Text>
      <Text style={styles.date}>Ngày: {formatDateTime(new Date())}</Text>

      <View style={styles.divider} />

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <InvoiceItem
            productName={item.product_name || ''}
            price={item.product_price || 0}
            quantity={item.quantity}
            subtotal={(item.product_price || 0) * item.quantity}
          />
        )}
        style={styles.itemsList}
      />

      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tạm tính:</Text>
          <Text style={styles.summaryValue}>{formatCurrency(subtotal)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>VAT (10%):</Text>
          <Text style={styles.summaryValue}>{formatCurrency(vat)}</Text>
        </View>
        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text style={styles.totalLabel}>Tổng cộng:</Text>
          <Text style={styles.totalValue}>{formatCurrency(total)}</Text>
        </View>
      </View>

      <Button 
        title={loading ? 'Đang xử lý...' : 'Hoàn tất'} 
        onPress={handleComplete}
        disabled={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16,
    backgroundColor: 'white',
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#7f8c8d',
    marginBottom: 20,
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 8,
  },
  date: {
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginBottom: 16,
  },
  itemsList: {
    flex: 1,
    marginBottom: 16,
  },
  summary: { 
    padding: 16, 
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#2c3e50',
  },
  summaryValue: {
    fontSize: 16,
    color: '#2c3e50',
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
});