import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function SavingDetails() {
  return (
    <View style={{ flex: 1 }}>
      {/* HEADER  */}
      <Text
        style={{
          marginTop: "15%",
          marginLeft: "5%",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Ahorros Totales
      </Text>
      <View style={{ marginTop: "5%", width: "100%", alignItems: "flex-end" }}>
        <Text style={{ marginRight: "10%", fontSize: 24 }}>+ $1,500.50</Text>
      </View>

      {/* GRAPH CONTAINER */}
      <View
        style={{
          marginTop: "5%",
          height: "35%",
          width: "90%",
          marginLeft: "5%",
          backgroundColor: "grey",
        }}
      >
        <Text>Aqui va la grafica</Text>
      </View>

      <View style={{ marginTop: "10%", height: "25%", width: "100%" }}>
        <Text style={{ fontSize: 24, marginLeft: "5%" }}>Categorias</Text>

        <ScrollView
          horizontal={true}
          style={{ marginLeft: "5%", marginTop: "2.5%" }}
        >
          <View
            style={{
              backgroundColor: "grey",
              height: 144,
              width: 163,
              borderRadius: 20,
              marginRight: 20,
            }}
          >
            <Text>Categoria 1</Text>
          </View>
          <View
            style={{
              backgroundColor: "grey",
              height: 144,
              width: 163,
              borderRadius: 20,
              marginRight: 20,
            }}
          >
            <Text>Categoria 2</Text>
          </View>
          <View
            style={{
              backgroundColor: "grey",
              height: 144,
              width: 163,
              borderRadius: 20,
              marginRight: 20,
            }}
          >
            <Text>Categoria 3</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
