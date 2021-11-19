import React from "react";
import { View, Text, ScrollView } from "react-native";

import BigTitle from "./BigTitle";
import InfoCard from "./InfoCard";
import InfoTable from "./InfoTable";

export default function IndexBudget() {
  return (
    <View style={{ flex: 1 }}>
      {/* TITLE PAGE */}
      <BigTitle title="Mis ahorros" />

      {/* SCROLL VIEW HORIZONTAL*/}
      <View style={{ height: "25%", width: "100%" }}>
        <ScrollView horizontal={true}>
          {/* INGRESOS CARD */}
          <View
            style={{
              backgroundColor: "#5624D0",
              height: "95%",
              width: 273,
              marginLeft: 20,
              marginRight: 20,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                marginTop: "10%",
                marginLeft: "5%",
                fontSize: 18,
                color: "white",
              }}
            >
              Ingresos
            </Text>

            <Text
              style={{
                marginTop: "10%",
                marginLeft: "5%",
                fontSize: 14,
                color: "white",
              }}
            >
              En el mes
            </Text>
            <Text style={{ marginLeft: "5%", fontSize: 18, color: "white" }}>
              $1,500.50
            </Text>

            <View style={{ alignItems: "flex-end", marginRight: "5%" }}>
              <Text style={{ fontSize: 14, color: "white" }}>Total</Text>
              <Text style={{ fontSize: 18, color: "white" }}>$1,500.50</Text>
            </View>
          </View>

          {/* EGRESOS CARD */}
          <View
            style={{
              backgroundColor: "#D02424",
              height: "95%",
              width: 273,
              borderRadius: 20,
              marginRight: 20,
            }}
          >
            <Text
              style={{
                marginTop: "10%",
                marginLeft: "5%",
                fontSize: 18,
                color: "white",
              }}
            >
              Egresos
            </Text>
            <Text
              style={{
                marginTop: "10%",
                marginLeft: "5%",
                fontSize: 14,
                color: "white",
              }}
            >
              En el mes
            </Text>
            <Text style={{ marginLeft: "5%", fontSize: 18, color: "white" }}>
              $1,500.50
            </Text>

            <View style={{ alignItems: "flex-end", marginRight: "5%" }}>
              <Text style={{ fontSize: 14, color: "white" }}>Total</Text>
              <Text style={{ fontSize: 18, color: "white" }}>$1,500.50</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* INFO CARD */}
      <InfoCard />

      {/* TABLE CONTENT */}
      <InfoTable />
    </View>
  );
}
