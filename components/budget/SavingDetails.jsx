import React from "react";
import { View, Text } from "react-native";

import BigTitle from './BigTitle'
import CategoriesBudget from "./CategoriesBudget";

export default function SavingDetails() {
  return (
    <View style={{ flex: 1 }}>

      {/* HEADER  */}
      <BigTitle title="Ahorros Totales"/>

      <View style={{ marginTop: "5%", width: "100%", alignItems: "flex-end" }}>
        <Text style={{ marginRight: "10%", fontSize: 24, color: 'green' }}>+ $1,500.50</Text>
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
      
      <CategoriesBudget />
      </View>
    </View>
  );
}
