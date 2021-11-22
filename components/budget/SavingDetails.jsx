import React from "react";
import { View, Text } from "react-native";
import NumberFormat from "react-number-format";

import BigTitle from "./BigTitle";
import CategoriesBudget from "./CategoriesBudget";
import ChartEntries from "./ChartEntries";

const entriesByMonth = [
  {
    month: "Enero",
    entries: 2000,
  },
  {
    month: "Febrero",
    entries: 5000,
  },
  {
    month: "Marzo",
    entries: 200,
  },
  {
    month: "Abril",
    entries: 2000,
  },
  {
    month: "Mayo",
    entries: 5000,
  },
  {
    month: "Junio",
    entries: 200,
  },
];

export default function SavingDetails() {
  const months = entriesByMonth.map((ebm) => ebm.month);
  const totalEntries = entriesByMonth.map((te) => te.entries);
  const sumEntries = totalEntries.reduce((a, b) => a + b, 0);

  return (
    <View style={{ flex: 1 }}>
      {/* HEADER  */}
      <BigTitle title="Ahorros Totales" />

      <View style={{ marginTop: "5%", width: "100%", alignItems: "flex-end" }}>
        <Text style={{ marginRight: "10%", fontSize: 24, color: "green" }}>
          <NumberFormat
            value={sumEntries}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"+ $"}
            renderText={(value) => <Text>{value}</Text>}
          />
        </Text>
      </View>

      {/* GRAPH CONTAINER */}
      <View
        style={{
          marginTop: "5%",
          marginLeft: "5%",
        }}
      >
        <ChartEntries months={months} totalEntries={totalEntries} />
      </View>

      <View style={{ marginTop: "10%", height: "25%", width: "100%" }}>
        <CategoriesBudget />
      </View>
    </View>
  );
}
