import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";

type CardProps = {
  id: number;
  name: string;
};
const { width, height } = Dimensions.get("screen");

const Card = ({ id, name }: CardProps) => {
  return (
    <View style={styles.card}>
      {/* <Text style={styles.text}>{name}</Text> */}
      <Image source={require("@/assets/images/react-logo.png")} />
    </View>
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
});
