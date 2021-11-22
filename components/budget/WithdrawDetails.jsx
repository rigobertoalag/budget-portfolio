import React from "react";
import { View, Text } from "react-native";
import NumberFormat from "react-number-format";

import BigTitle from "./BigTitle";
import CategoriesBudget from "./CategoriesBudget";
import ChartDraws from "./ChartDraws";

const drawsByMonth = [
  {
    month: "Enero",
    draws: 200,
  },
  {
    month: "Febrero",
    draws: 2500,
  },
  {
    month: "Marzo",
    draws: 400,
  },
  {
    month: "Abril",
    draws: 300,
  },
  {
    month: "Mayo",
    draws: 7000,
  },
  {
    month: "Junio",
    draws: 555,
  },
];

export default function WithDrawDetails() {

  const months = drawsByMonth.map((dbm) => dbm.month);
  const totalDraws = drawsByMonth.map((td) => td.draws);
  const sumDraws = totalDraws.reduce((a, b) => a + b, 0);

  return (
    <View style={{ flex: 1 }}>
      {/* HEADER  */}
      <BigTitle title="Gastos Totales" />

      <View style={{ marginTop: "5%", width: "100%", alignItems: "flex-end" }}>
        <Text style={{ marginRight: "10%", fontSize: 24, color: "red" }}>
          <NumberFormat
            value={sumDraws}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"- $"}
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
        <ChartDraws months={months} totalDraws={totalDraws} />
      </View>

      <View style={{ marginTop: "10%", height: "25%", width: "100%" }}>
        <CategoriesBudget />
      </View>
    </View>
  );
}
