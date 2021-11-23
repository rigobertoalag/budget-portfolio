import React from "react";
import { View, Text, TextInput, Button, TouchableHighlight } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import BigTitle from "./BigTitle";

export default function AddOrRemove() {
  return (
    <View style={{ flex: 1 }}>
      <BigTitle title="Añadir ahorro" />

      <View
        style={{
          width: "100%",
          height: "6%",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "5%",
        }}
      >
        <View
          style={{
            backgroundColor: "grey",
            justifyContent: "center",
            padding: "4%",
            borderRadius: 60,
          }}
        >
          <Text style={{ fontSize: 14 }}>Añadir ahorro</Text>
        </View>
        <View
          style={{
            backgroundColor: "grey",
            justifyContent: "center",
            padding: "3%",
            borderRadius: 60,
          }}
        >
          <Text style={{ fontSize: 14 }}>Realizar retiro</Text>
        </View>
      </View>

      <View
        style={{
          justifyContent: "center",
          marginTop: "15%",
          height: "50%",
          marginLeft: "5%",
        }}
      >
        <Text style={{ fontSize: 24, alignSelf: 'center' }}>Ingresa la cantiad a añadir</Text>

        <View style={{ flexDirection: 'row', justifyContent:'center', height: "15%", marginTop: "10%" }}>
          <MaterialIcons name="attach-money" size={54} color="#5624D0" />
          <TextInput
            //   onChangeText={setEmail}
            //   value={email}
            keyboardType={"numeric"}
            placeholder="Añadir"
            style={{
              width: "50%",
              borderBottomWidth: 1,
              borderBottomColor: "#5624D0",
            }}
          />

        </View>
        <TouchableHighlight style={{ marginTop: "15%", backgroundColor: '#5624D0', padding: "2.5%", width:"80%", alignSelf:'center' }}>
            <Text style={{alignSelf: 'center', color:"white", fontSize: 24 }}>Añadir</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
