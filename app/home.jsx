import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import ImageSlider from "../components/ImageSlider";

export default function home() {
  return (
    <SafeAreaView className='space-y-6 flex-1 bg-white' edges={['top']}>
      <StatusBar style="light" />
      <View className='mx-5'>
        <Text style={{ fontSize: hp(5) }} className="font-bold tracking-wide">
          READY TO
        </Text>
        <Text style={{ fontSize: hp(5) }} className="text-rose-500 font-bold tracking-wide">
          WORKOUT
        </Text>
      </View>
      <View>
        <ImageSlider />
      </View>
    </SafeAreaView> 
  );
}
