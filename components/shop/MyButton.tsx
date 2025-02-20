import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";

interface MyButtonProps {
  title: string;
}

export default function MyButton({ title }: MyButtonProps) {
  return (
    <Pressable onPress={() => {}} style={styles.btn}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#007AFF80",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
