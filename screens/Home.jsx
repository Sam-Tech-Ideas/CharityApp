import { View, Text, Touchable, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native';
import { Avatar, Card, Searchbar } from 'react-native-paper';

const Home = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const categories = [
    {
      name: "No Poverty",
    },
    {
      name: "Good Health",
    },
    {
      name: "Gender Equality",
    },
    {
      name: "Quality Education",
    },
    {
      name: "Clean Water",
    },
    {
      name: "Climate Action",
    },
    {
      name: "Life on Land",
    },
    {
      name: "Peace and Justice",
    },
    {
      name: "Partnerships",
    }

  ];

  return (
    <SafeAreaView className="p-4 bg-white h-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className=" flex-row justify-between items-center h-14">
          <View>
            <Text className="text-black text-2xl">Hello John!</Text>
            <Text className="text-black text-sm">
              Small change, big difference!
            </Text>
          </View>
          <View>
            <Avatar.Image size={34} source={require("../assets/pana.png")} />
          </View>
        </View>
        <View className="my-6">
          <Searchbar className="bg-gray-200" placeholder="Search" />
        </View>

        <ScrollView
          className="gap-4 my-2"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category, index) => (
            <View
              key={index}
              className="flex-row justify-between items-center "
            >
              <Text className="bg-gray-200 py-2 px-2 rounded-lg">
                {category.name}
              </Text>
            </View>
          ))}
        </ScrollView>

        <Text className="text-black text-xl font-bold my-4">Top Programs</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="my-2  "
        >
          <View className="flex-row gap-4">
            <View>
              <Card onPress={
                () => navigation.navigate('Details')
              }
           
                className="w-3/4"
                style={{ height: 200, width: 200, borderRadius: 10 }}
              >
                <Card.Cover
                  source={require("../assets/ann.jpg")}
                  className="object-fit object-cover"
                />

                <Card.Title title="Card Title" subtitle="Card Subtitle" />
                <Card.Content>
                  <Text>Card content</Text>
                </Card.Content>
                <Card.Actions>
                  <TouchableOpacity>
                    <Text>Donate</Text>
                  </TouchableOpacity>
                </Card.Actions>
              </Card>
            </View>

            <View>
              <Card
                className="w-3/4"
                style={{ height: 200, width: 200, borderRadius: 10 }}
              >
                <Card.Cover
                  source={require("../assets/ann.jpg")}
                  className="object-fit object-cover"
                />

                <Card.Title title="Card Title" subtitle="Card Subtitle" />
                <Card.Content>
                  <Text>Card content</Text>
                </Card.Content>
                <Card.Actions>
                  <TouchableOpacity>
                    <Text>Donate</Text>
                  </TouchableOpacity>
                </Card.Actions>
              </Card>
            </View>

            <View>
              <Card
                className="w-3/4"
                style={{ height: 200, width: 200, borderRadius: 10 }}
              >
                <Card.Cover source={require("../assets/ann.jpg")} />

                <Card.Title title="Card Title" subtitle="Card Subtitle" />
                <Card.Content>
                  <Text>Card content</Text>
                </Card.Content>
                <Card.Actions>
                  <TouchableOpacity>
                    <Text>Donate</Text>
                  </TouchableOpacity>
                </Card.Actions>
              </Card>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home