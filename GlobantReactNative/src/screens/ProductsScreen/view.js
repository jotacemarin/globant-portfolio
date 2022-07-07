import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import ProductsList from '../../components/ProductsList';
import useProducts from '../../hooks/useProducts';

const ProductsScreen = ({navigation}) => {
  const {products, loading} = useProducts();

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  }

  return <ProductsList products={products} navigation={navigation} />;
};

const styles = StyleSheet.create({
  loading: {flex: 1, padding: 20},
});

export default ProductsScreen;
