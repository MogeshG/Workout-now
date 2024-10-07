import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();
  return (
    <View className=" flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image className="w-full h-full absolute" source={require("../assets/images/welcome.png")} />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end space-y-8 pb-12"
      >
        <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">
          <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wider">
            Best <Text className="text-rose-500">Workout</Text>
          </Text>
          <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wider">
            For You
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).springify()} className="flex items-center">
          <TouchableOpacity
            onPress={() => router.push("/home")}
            style={{ width: wp(80), height: hp(8) }}
            className="border-[2px] border-white flex items-center justify-center rounded-full shadow-sm bg-rose-500"
          >
            <Text style={{ fontSize: hp(3) }} className="text-white font-bold tracking-wider">
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
