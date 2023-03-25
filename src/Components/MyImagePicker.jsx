import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, ActivityIndicator } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { auth, storage, firebase, db } from "../utils/firebase";

export default function MyImagePicker() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("testing", result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      // uploadImage()
    }
  };

  const uploadImage = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });
    const ref = firebase
      .storage()
      .ref()
      .child(`Pictures/${auth.currentUser.uid}`);
    const snapshot = ref.put(blob);
    snapshot.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        setUploading(true);
      },
      (error) => {
        setUploading(false);
        console.log(error);
        blob.close();
        return;
      },
      () => {
        snapshot.snapshot.ref.getDownloadURL().then((url) => {
          setUploading(false);
          console.log("Download URL: ", url);
          setImage(url);

          db.collection("users")
            .doc(auth.currentUser.uid)
            .update({
              profileImage: url,
            })
            .then((data) => {
              console.log("Success");
            })
            .catch((error) => {
              console.log("Error getting document:", error);
            });

          blob.close();
          return url;
        });
      }
    );
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      {!uploading ? (
        <Button title="Upload Image" onPress={uploadImage} />
      ) : (
        <ActivityIndicator size={"small"} color="black" />
      )}
    </View>
  );
}
