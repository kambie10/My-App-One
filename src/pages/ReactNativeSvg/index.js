import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import IllustrationMyApp from '../../assets/image/location_rypt.svg'

export default function ReactNativeSvg() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi menggunakan file SVG</Text>
      <IllustrationMyApp width={244} height={125} />
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
