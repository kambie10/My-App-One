import React from 'react';
import {View, Text, Image} from 'react-native';

import macbook from '../assets/image/macbook.jpg';

export default function StylingReactNativeComponent() {
  return (
    <View
      style={{
        padding: 12,
        backgroundColor: '#F2F2F2',
        width: 212,
        borderRadius: 8,
      }}>
      <Image
        source={macbook}
        style={{width: 188, height: 107, borderRadius: 8}}
      />
      <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
        New Macbook Pro 2019
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: 'bold',
          color: '#F2994A',
          marginTop: 12,
        }}>
        Rp. 25.000.000
      </Text>
      <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
        Jakarta Barat
      </Text>
      <View
        style={{
          backgroundColor: '#6FCF97',
          paddingVertical: 6,
          borderRadius: 25,
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: 'white',
            textAlign: 'center',
          }}>
          BELI
        </Text>
      </View>
    </View>
  );
}
