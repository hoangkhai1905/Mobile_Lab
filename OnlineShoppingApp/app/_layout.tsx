import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { initDatabase } from '../database/init';

export default function Layout() {
  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Sản phẩm' }} />
      <Stack.Screen name="cart" options={{ title: 'Giỏ hàng' }} />
      <Stack.Screen name="invoice" options={{ title: 'Hoá đơn' }} />
    </Stack>
  );
}