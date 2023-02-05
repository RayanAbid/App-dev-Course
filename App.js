import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text>Login!</Text>

      <TextInput
        onChangeText={(e) => {
          setName(e);
        }}
        style={{
          borderColor: "black",
          borderWidth: 1,
          width: 100,
          borderRadius: 10,
        }}
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
          source={require("./assets/favicon.png")}
        />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
