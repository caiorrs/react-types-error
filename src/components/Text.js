import { Text as RNText, View } from 'react-native';
import React from 'react';
const Text = ({ text }) => {
    return (React.createElement(View, null,
        React.createElement(RNText, null, text)));
};
export default Text;
