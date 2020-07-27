import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Cart from '../../components/Cart'
import Product from '../../components/Product'

export default function Comunication() {
  const [totalProduct, setTotalProduct] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi komunikasi antar Component</Text>
      <Cart quantity={totalProduct} />
      <Product onButtonPress={() => setTotalProduct(totalProduct + 1)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
})
