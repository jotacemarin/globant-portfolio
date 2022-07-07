import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export const ProductScreen = ({route}) => {
  const {product} = route.params;
  const {title, price, description, category, images} = JSON.parse(product);
  const [image] = images;

  return (
    <ScrollView>
      <Image style={styles.backgroundImage} source={{uri: image}} />
      <View style={styles.title}>
        <Text style={styles.name}>{title}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.sub}>
          <Text style={styles.item}>Price:</Text>
          <Text style={styles.itemDescription}>${price}</Text>
        </View>

        <View style={styles.sub}>
          <Text style={styles.item}>Category:</Text>
          <Text style={styles.itemDescription}>{category.name}</Text>
        </View>

        <View>
          <View style={styles.sub}>
            <Text style={styles.item}>Description:</Text>
          </View>

          <View style={styles.sub}>
            <Text style={styles.itemDescriptionLarge}>{description}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 250,
  },
  title: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  name: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  sub: {
    flexDirection: 'row',
  },
  item: {
    fontWeight: 'bold',
    fontSize: 16,
    width: '50%',
  },
  itemDescription: {
    width: '50%',
    textAlign: 'right',
  },
  itemDescriptionLarge: {
    width: '100%',
    textAlign: 'left',
  },
  listMap: {
    marginLeft: 50,
  },
});

export default ProductScreen;
