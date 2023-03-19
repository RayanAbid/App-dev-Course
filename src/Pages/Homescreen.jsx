import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../utils/firebase";

function HomeScreen({ navigation }) {
  console.log("gegege");

  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(true);

  const callApi = () => {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.chucknorris.io/jokes/random",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log("Api response", response.data);
        setApiData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("yesyys");
    callApi();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <>
          <Text>{apiData?.value}</Text>
          <Image
            width={100}
            height={100}
            style={{
              width: 100,
              height: 100,
            }}
            source={{
              uri: apiData?.icon_url,
            }}
          />
        </>
      )}

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Form")}
      />

      <Button
        title="Logout"
        onPress={() => {
          auth.signOut();
          navigation.reset({ index: 0, routes: [{ name: "Login" }] });
        }}
      />
    </View>
  );
}

export default HomeScreen;
