import React from "react";
import { View, Text, Button } from "react-native";

import BigTitle from '../budget/BigTitle'

export default function Profile() {
  return (
    <View style={{ flex: 1 }}>

      <BigTitle title="Perfil"/>

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
            height: "40%",
            width: "40%",
            backgroundColor: "gray",
            borderRadius: 100,
          }}
        ></View>

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
        <Button title="Cerrar sesion" />
      </View>
    </View>
  );
}
