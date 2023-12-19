import { View, Text, ImageBackground, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ElevatedButton from '../components/shared/ui/ElevatedButton';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground
        className="opacity-1 brightness-100 "
        source={require("../assets/welcome.png")}
        style={{ width: "100%", height: "100%" ,
        
     
    }}
      >
        <View className=" flex-col justify-between h-screen items-center">
          <View>
            <Text className="text-4xl text-center text-black font-bold pt-4">
              Small change big,{"\n"}
              difference
            </Text>
          </View>
    <ElevatedButton onPress={
        ()=>navigation.navigate("Login")
    
    } title={"Get started"}/>
        
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Welcome