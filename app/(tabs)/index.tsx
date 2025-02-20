import { StyleSheet, FlatList, ActivityIndicator, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

import Card from "@/components/shop/Card";
import { API_URL } from "@/config";

// const users = [
//   { id: 1, name: "ko ko" },
//   { id: 2, name: "mg mg" },
//   { id: 3, name: "soe soe" },
//   { id: 4, name: "ni ni" },
//   { id: 5, name: "mu mu" },
//   { id: 6, name: "bo bo" },
//   { id: 7, name: "pu pu" },
//   { id: 8, name: "hla hla" },
//   { id: 9, name: "ma ma" },
//   { id: 10, name: "nyi nyi" },
// ];

type UserProps = {
  id: number;
  name: string;
  image: string;
};

export default function HomeScreen() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL + "users");
      const userList = await response.json();
      setUsers(userList);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator />
      ) : users?.length > 0 ? (
        <FlatList
          data={users}
          renderItem={({ item }) => <Card {...item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.container}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          pagingEnabled
        />
      ) : (
        <Text>No Users Found!</Text>
      )}
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
