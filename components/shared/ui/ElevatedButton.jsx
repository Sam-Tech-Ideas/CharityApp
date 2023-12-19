import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ElevatedButton = ({title, className, onPress}) => {
  return (
    <TouchableOpacity  className={`w-4/5 py-4 bg-blue-700  bottom-2 rounded-lg + ${className}`} onPress={onPress}>
        <View className="flex-row justify-center items-center">
      <Text className="text-center text-white" >
        {title}
      </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ElevatedButton