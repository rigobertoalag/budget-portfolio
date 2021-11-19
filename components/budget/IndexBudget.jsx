import React from "react";
import { View, Text, ScrollView } from "react-native";
import NumberFormat from "react-number-format";

import BigTitle from "./BigTitle";
import InfoCard from "./InfoCard";
import InfoTable from "./InfoTable";

import {getAllData} from './resources/getAllData'
import {getEntries} from './resources/getEntries'
import {getDraws} from './resources/getDraws'

const resultEntries = getEntries.map((data) => data.mount);
const sumEntries = resultEntries.reduce((a, b) => a + b, 0);

const resultDraws = getDraws.map((data) => data.mount);
const sumDraws = resultDraws.reduce((a, b) => a + b, 0);

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
              <NumberFormat
                value={sumEntries}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                renderText={(value) => <Text>{value}</Text>}
              />
            </Text>

            <View style={{ alignItems: "flex-end", marginRight: "5%" }}>
              <Text style={{ fontSize: 14, color: "white" }}>Total</Text>
              <Text style={{ fontSize: 18, color: "white" }}>
                <NumberFormat
                  value={sumEntries * 1.5}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  renderText={(value) => <Text>{value}</Text>}
                />
              </Text>
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
              <NumberFormat
                value={sumDraws}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                renderText={(value) => <Text>{value}</Text>}
              />
            </Text>

            <View style={{ alignItems: "flex-end", marginRight: "5%" }}>
              <Text style={{ fontSize: 14, color: "white" }}>Total</Text>
              <Text style={{ fontSize: 18, color: "white" }}>
                <NumberFormat
                  value={sumDraws * 2.5}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  renderText={(value) => <Text>{value}</Text>}
                />
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* INFO CARD */}
      <InfoCard />

      {/* TABLE CONTENT */}
      <InfoTable data={getAllData} />
    </View>
  );
}
