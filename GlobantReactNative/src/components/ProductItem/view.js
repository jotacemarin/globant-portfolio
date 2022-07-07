import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';

const ProductItem = ({item, onPress = () => false}) => {
  const {images, title, price} = item;
  const [image] = images;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
          onError={error => console.log(error)}
        />
        <View style={styles.detail}>
          <Text style={styles.textName}>{title}</Text>
          <Text style={styles.textAge}>$ {price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    margin: 4,
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderColor: '#d6d7da',
  },
  image: {
    width: 100,
    height: 100,
  },
  detail: {
    flexDirection: 'column',
    marginLeft: 8,
  },
  textName: {
    fontSize: 18,
  },
  textAge: {
    lineHeight: 75,
  },
});

export default ProductItem;
