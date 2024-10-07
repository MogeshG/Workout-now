import { View, Text } from "react-native";
import React from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { sliderImages } from "../constants";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function ImageSlider() {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoplay={true}
      autoplayInterval={4000}
      renderItem={ItemCard}
      hasParallaxImage={true}
      sliderWidth={wp(100)}
      firstItem={1}
      itemWidth={wp(100) - 70}
      sliderStyle={{ display: "flex", alignItems: "center" }}
    />
  );
}

const ItemCard = () => {
  return <Text>s</Text>;
};
