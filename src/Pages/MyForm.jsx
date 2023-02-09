import React, { useState } from "react";
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

function MyForm() {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>Login!</Text>
      <MyInput
        newName={(e) => {
          setName(e);
        }}
        placeholder="Fo,e"
      />
      <MyInput
        newName={(e) => {
          setName(e);
        }}
        placeholder="emai,e"
      />
      <Button
        title="Click"
        onPress={() => {
          console.log(name);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          console.log(name);
        }}
      >
        <Image
          width={100}
          height={100}
          style={{
            width: 100,
            height: 100,
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
          }}
        />

        <Image
          width={100}
          height={100}
          style={{
            width: 100,
            height: 100,
          }}
          source={require("../../assets/favicon.png")}
        />
      </TouchableOpacity>
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
