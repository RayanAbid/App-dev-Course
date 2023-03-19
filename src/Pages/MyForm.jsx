import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MyInput from "../Components/MyInput";
import { auth, db } from "../utils/firebase";

function MyForm() {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");

  const getUserData = async () => {
    console.log("auth.currentUser.uid", auth.currentUser.uid);
    db.collection("users")
      .doc(auth.currentUser.uid)
      .get()
      .then((data) => {
        if (data.exists) {
          console.log("Document data:", data.data());
          setUser(data?.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hi</Text>

      <Text>{user?.name}</Text>
      <Text>{user?.email}</Text>
    </View>
  );
}

export default MyForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
