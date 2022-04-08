import { Text as RNText, View } from 'react-native';

import React from 'react';

interface TextProps {
  text: string;
}

const Text: React.FC<TextProps> = ({ text }) => {
  return (
    <View>
      <RNText>{text}</RNText>
    </View>
  );
};

export default Text;
