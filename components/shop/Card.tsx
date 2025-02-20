import { StyleSheet, Pressable, View, Dimensions } from "react-native";
import { Image } from "expo-image";
import React, { useState } from "react";

import { API_URL } from "@/config";

type CardProps = {
  id: number;
  name: string;
  image: string;
};
const { width, height } = Dimensions.get("screen");

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Card = ({ id, name, image }: CardProps) => {
  const [isCLick, setIsCLick] = useState(false);

  return (
    <Pressable
      style={[styles.card, isCLick && { backgroundColor: "#0a7ea4" }]}
      onPress={() => setIsCLick(!isCLick)}
    >
      {/* <Text style={styles.text}>{name}</Text> */}
      <Image
        style={styles.image}
        source={{ uri: API_URL + image }}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: width / 2 - 24,
    height: height > 600 ? 200 : 300,
    backgroundColor: "#687076",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
