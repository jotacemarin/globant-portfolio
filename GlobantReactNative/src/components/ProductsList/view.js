import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ProductItem from '../ProductItem';

export const ProductList = ({products = [], navigation}) => {
  if (products.length === 0) {
    return (
      <View style={styles.emptyList}>
        <Text>No products Available</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <ProductItem
            item={item}
            onPress={() => {
              const product = JSON.stringify(item);
              navigation.navigate('Product', {product});
            }}
          />
        )}
        keyExtractor={(_item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emptyList: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default ProductList;
