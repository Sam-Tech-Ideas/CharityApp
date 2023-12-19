import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ height: '100%' }}
      >
        <View className="bg-red-500 flex-row justify-center items-center h-14">
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home