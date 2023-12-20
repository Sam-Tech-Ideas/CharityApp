import { View, Text ,TextInput} from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper';
import { Paystack ,paystackProps} from "react-native-paystack-webview";

const DonationScreen = () => {
    const [amount,setAmount] = useState("0");

    const paystackWebViewRef = useRef(paystackProps.PaystackRef);


 
 
  const handlePayButtonPress = () => {
    // Convert amount to a valid numeric value
    const numericAmount = parseFloat(amount);

    // Check if the numericAmount is a valid number
    if (!isNaN(numericAmount) && numericAmount > 0) {
      // Open Paystack WebView with the specified amount
      // Note: You may want to format the amount to meet Paystack's requirements
      Paystack.payWithPaystack({
        amount: numericAmount * 100, // Convert to kobo (Paystack uses the smallest currency unit)

        currency: "GHS",
        billingEmail: "powersam360@gmail.com",
        activityIndicatorColor: "green",
        onCancel: (e) => {
          // Handle cancellation
        },
        onSuccess: (res) => {
          // Handle success
        },
        autoStart: true, // Start the payment automatically
      });
    } else {
      // Show an error message or handle invalid input
      console.error("Invalid amount");
    }
  };

  return (
    <SafeAreaView className="h-full bg-white w-full">
      <View className="flex-col items-center justify-between h-full">
        <View className="w-5/6 flex-col items-center">
          <Text className="font-bold text-lg">Enter the Amount</Text>
          <View className="border-2 w-full h-24 my-4 rounded-md border-blue-500 flex-row justify-center items-center">
            <Text className="font-bold text-2xl">GHS </Text>
            <TextInput
              keyboardType="numeric"
              className="font-bold text-2xl"
              value={amount}
              onChangeText={(amount) => setAmount(amount)}
            />
          </View>
        </View>

        {/* <Button
          mode="contained"
          className="bg-blue-700 rounded-lg bottom-4  w-3/4"
          onPress={handlePayButtonPress}
        >
          Pay
        </Button> */}

        <Paystack
          paystackKey="pk_test_b19fb24f73df146796bbab6916a774c19108a72a"
          amount={amount}
          currency="GHS"
          billingEmail="powersam360@gmail.com"
          billingName="Samuel"
          billingMobile="0559911251"
          onCancel={(e) => {
            // handle response here
            setAmount("0")
            
          }}
          onSuccess={(res) => {
            // handle response here
          }}
          ref={paystackWebViewRef}
          autoStart={false}
        />
        <Button
          mode="contained"
          className="bg-blue-700 rounded-lg bottom-4  w-3/4"
          onPress={() => paystackWebViewRef.current.startTransaction()}
        
          > Pay
        </Button>

      </View>
    </SafeAreaView>
  );
}

export default DonationScreen