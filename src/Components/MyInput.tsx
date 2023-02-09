import React from "react";
import { TextInput } from "react-native";

function MyInput({ newName, placeholder }) {
  return (
    <TextInput
      onChangeText={newName}
      placeholder={placeholder}
      style={{
        borderColor: "black",
        borderWidth: 1,
        width: 100,
        borderRadius: 10,
      }}
    />
  );
}

export default MyInput;
