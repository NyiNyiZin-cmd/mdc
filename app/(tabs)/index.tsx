import { StyleSheet, FlatList, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Card from "@/components/shop/Card";

const users = [
  { id: 1, name: "ko ko" },
  { id: 2, name: "mg mg" },
  { id: 3, name: "soe soe" },
  { id: 4, name: "ni ni" },
  { id: 5, name: "mu mu" },
  { id: 6, name: "bo bo" },
  { id: 7, name: "pu pu" },
  { id: 8, name: "hla hla" },
  { id: 9, name: "ma ma" },
  { id: 10, name: "nyi nyi" },
];

const { width, height } = Dimensions.get("screen");

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <FlatList
        data={users}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.container}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        // pagingEnabled
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 17,
    gap: 7,
  },
  row: {
    justifyContent: "space-between",
  },
});
