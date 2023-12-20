import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useCallback, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ElevatedButton from '../components/shared/ui/ElevatedButton';
import { Button } from 'react-native-paper';
import { StyleSheet } from "react-native";
import BottomSheet from "react-native-simple-bottom-sheet";

const DetailScreen = ({navigation}) =>{

  const panelRef = useRef(null);


  return (
    <SafeAreaView className="bg-white h-full flex-col items-center p-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="">
          <Image
            source={require("../assets/water.jpg")}
            style={{ width: 360, height: 240 }}
            className="p-4 rounded-lg "
          />
          <Text className="text-xl font-bold">
            Help The World Get Clean Water
          </Text>
          <Text className="text-gray-500 text-sm">
            Help the world get clean water
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sunt
            cupiditate excepturi iure? A ut tenetur, porro praesentium quas
            necessitatibus! Ad ut pariatur alias velit dolores iusto corrupti
            minus expedita?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sunt
            cupiditate excepturi iure? A ut tenetur, porro praesentium quas
            necessitatibus! Ad ut pariatur alias velit dolores iusto corrupti
            minus expedita?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sunt
            cupiditate excepturi iure? A ut tenetur, porro praesentium quas
            necessitatibus! Ad ut pariatur alias velit dolores iusto corrupti
            minus expedita?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sunt
            cupiditate excepturi iure? A ut tenetur, porro praesentium quas
            necessitatibus! Ad ut pariatur alias velit dolores iusto corrupti
            minus expedita?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sunt
            cupiditate excepturi iure? A ut tenetur, porro praesentium quas
            necessitatibus! Ad ut pariatur alias velit dolores iusto corrupti
            minus expedita?
          </Text>

          <Text className="text-xl font-bold my-4">Donation</Text>
        </View>
        {/* <Button mode="contained" className="bg-blue-700 rounded-lg bottom-4 ">
          Donate
        </Button> */}

        {/* <ElevatedButton title={"Donate"} className={""} /> */}
      </ScrollView>
      <View className=" p-4 absolute left-0 right-0 bottom-4 ">
        <Button
          mode="contained"
          className="bg-blue-700 rounded-lg bottom-4 "
          onPress={() => navigation.navigate("Donate")}
        >
          Donate
        </Button>
      </View>
     
    </SafeAreaView>
  );
}

export default DetailScreen


