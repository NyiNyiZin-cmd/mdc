import { StyleSheet, FlatList, ActivityIndicator, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "expo-router";

import Card from "@/components/shop/Card";
import { API_URL } from "@/config";

type UserProps = {
  id: number;
  name: string;
  image: string;
};

export default function HomeScreen() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  useFocusEffect(
    useCallback(() => {
      fetchUsers();
    }, [])
  );

  const fetchUsers = async () => {
    console.log("fetching users");
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
