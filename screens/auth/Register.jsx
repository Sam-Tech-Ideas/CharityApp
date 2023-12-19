import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import ElevatedButton from "../../components/shared/ui/ElevatedButton";
//import { TextInput } from 'react-native-paper';

const Register = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    
  
  return (
    <SafeAreaView className="bg-white h-full flex-col items-center w-full justify-between ">
      <Image
        source={require("../../assets/pana.png")}
        style={{
          width: "100%",
          height: "30%",
          resizeMode: "contain",
        }}
      />
      <View>
        <View className="flex-row justify-between items-center bg-gray-100 mx-4 rounded-lg">
          <View className="p-2">
            <TextInput
              label="Password"
              outlineColor="transparent"
              // value={password}

              placeholder="Enter your password"
              className="w-[300] md:w-auto  border-none  bg-transparent"
              // onChangeText={(password) => setPassword(password)}
            />

            {/* <Ionicons name="mail-outline" size={30} className="" /> */}
          </View>
        </View>
        <View className="flex-row justify-between items-center bg-gray-100 mx-4 rounded-lg my-4">
          <View className="p-2">
            <TextInput
              label="Password"
              outlineColor="transparent"
              // value={password}

              placeholder="Enter your password"
              className="w-[300] md:w-auto  border-none  bg-transparent"
              // onChangeText={(password) => setPassword(password)}
            />

            {/* <Ionicons name="mail-outline" size={30} className="" /> */}
          </View>
        </View>
      </View>

      <View className="w-full flex-row items-center justify-center">
        <ElevatedButton title="Register" onPress={
          () => navigation.navigate("Home")
        } />
      </View>
    </SafeAreaView>
  );
};
export default Register;
