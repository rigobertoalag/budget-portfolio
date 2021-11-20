import React from "react";
import { View, Text, Button, Image } from "react-native";

import BigTitle from "../budget/BigTitle";

export default function Profile({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <BigTitle title="Perfil" />

      <View
        style={{
          marginTop: "20%",
          width: "90%",
          height: "40%",
          marginLeft: "5%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "50%",
            width: "50%",
            // backgroundColor: "gray",
          }}
        >
          <Image
            style={{ height: "100%", width: "100%", borderRadius: 100, }}
            source={{
              uri: "https://picsum.photos/400/400",
            }}
          />
        </View>

        <Text style={{ marginTop: "5%", fontSize: 18 }}>user.name</Text>
        <Text style={{ marginTop: "5%", fontSize: 18 }}>
          Usuario desde: user.created_at
        </Text>
      </View>
      <View
        style={{
          width: "90%",
          bottom: "10%",
          position: "absolute",
          marginLeft: "5%",
        }}
      >
        {/* <Button title="Cerrar sesion" onPress={() => navigation.navigate('App', {screen: 'Login'})}/> */}
      </View>
    </View>
  );
}
