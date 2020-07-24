import React from 'react';
import {View} from 'react-native';

import StylingReactNativeComponent from './pages/StylingReactNativeComponent';
import PositionReactNative from './pages/PositionReactNative';

const App = () => {
  return (
    <View>
      <StylingReactNativeComponent />
      <PositionReactNative />
    </View>
  );
};

export default App;
