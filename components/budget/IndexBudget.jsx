import React from "react";
import { View, Text, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function IndexBudget() {
  return (
    <View style={{ flex: 1 }}>
      {/* BIG TITLE */}
      <Text
        style={{
          marginTop: "20%",
          marginLeft: "5%",
          marginBottom: "5%",
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        Mis ahorros
      </Text>

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
      <View
        style={{
          marginTop: "10%",
          width: "90%",
          height: "15%",
          backgroundColor: "grey",
          alignSelf: "center",
          borderRadius: 20,
          alignItems: "center",
          backgroundColor: "#C4C4C4",
          justifyContent: "center",
        }}
      >
        <Text>Conoce estrategias para mejorar tu ahorro</Text>
      </View>

      {/* TABLE HEADER */}
      <View
        style={{
          width: "90%",
          marginLeft: "5%",
          marginTop: "10%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ marginLeft: "5%" }}>Categoria</Text>
        <Text>Fecha</Text>
        <Text style={{ marginRight: "5%" }}>Monto</Text>
      </View>

      {/* TABLE VIEW */}
      <View style={{ height: "34%", width: "100%" }}>
        <ScrollView style={{ marginLeft: "5%", marginRight: "5%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "2.5%",
              borderBottomWidth: 1,
              borderColor: "#C4C4C4",
              paddingBottom: "5%",
            }}
          >
            <MaterialIcons
              name="arrow-drop-up"
              size={24}
              color="green"
              style={{ position: "absolute" }}
            />
            <Text style={{ marginLeft: "5%" }}> Categoria 1</Text>
            <Text>17/11/21</Text>
            <Text>$1500.50</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "2.5%",
              borderBottomWidth: 1,
              borderColor: "#C4C4C4",
              paddingBottom: "5%",
            }}
          >
            <MaterialIcons
              name="arrow-drop-down"
              size={24}
              color="red"
              style={{ position: "absolute" }}
            />
            <Text style={{ marginLeft: "5%" }}> Categoria 1</Text>
            <Text>17/11/21</Text>
            <Text>$1500.50</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "2.5%",
              borderBottomWidth: 1,
              borderColor: "#C4C4C4",
              paddingBottom: "5%",
            }}
          >
            <MaterialIcons
              name="arrow-drop-up"
              size={24}
              color="green"
              style={{ position: "absolute" }}
            />
            <Text style={{ marginLeft: "5%" }}> Categoria 1</Text>
            <Text>17/11/21</Text>
            <Text>$1500.50</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "2.5%",
              borderBottomWidth: 1,
              borderColor: "#C4C4C4",
              paddingBottom: "5%",
            }}
          >
            <MaterialIcons
              name="arrow-drop-down"
              size={24}
              color="red"
              style={{ position: "absolute" }}
            />
            <Text style={{ marginLeft: "5%" }}> Categoria 1</Text>
            <Text>17/11/21</Text>
            <Text>$1500.50</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "2.5%",
              borderBottomWidth: 1,
              borderColor: "#C4C4C4",
              paddingBottom: "5%",
            }}
          >
            <MaterialIcons
              name="arrow-drop-up"
              size={24}
              color="green"
              style={{ position: "absolute" }}
            />
            <Text style={{ marginLeft: "5%" }}> Categoria 1</Text>
            <Text>17/11/21</Text>
            <Text>$1500.50</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "2.5%",
              borderBottomWidth: 1,
              borderColor: "#C4C4C4",
              paddingBottom: "5%",
            }}
          >
            <MaterialIcons
              name="arrow-drop-down"
              size={24}
              color="red"
              style={{ position: "absolute" }}
            />
            <Text style={{ marginLeft: "5%" }}> Categoria 1</Text>
            <Text>17/11/21</Text>
            <Text>$1500.50</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "2.5%",
              borderBottomWidth: 1,
              borderColor: "#C4C4C4",
              paddingBottom: "5%",
            }}
          >
            <MaterialIcons
              name="arrow-drop-up"
              size={24}
              color="green"
              style={{ position: "absolute" }}
            />
            <Text style={{ marginLeft: "5%" }}> Categoria 1</Text>
            <Text>17/11/21</Text>
            <Text>$1500.50</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "2.5%",
              borderBottomWidth: 1,
              borderColor: "#C4C4C4",
              paddingBottom: "5%",
            }}
          >
            <MaterialIcons
              name="arrow-drop-down"
              size={24}
              color="red"
              style={{ position: "absolute" }}
            />
            <Text style={{ marginLeft: "5%" }}> Categoria 1</Text>
            <Text>17/11/21</Text>
            <Text>$1500.50</Text>
          </View>
        </ScrollView>
      </View>

      {/* BOTTOM NAVIGATOR */}
      <View
        style={{
          bottom: 0,
          width: "100%",
          height: "7%",
          backgroundColor: "#F2F2F2",
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderTopWidth: 1,
          borderColor: "#C4C4C4",
        }}
      >
        <MaterialIcons
          name="home-filled"
          size={32}
          color="#5624D0"
          style={{ marginLeft: "5%" }}
        />
        <MaterialIcons name="attach-money" size={32} color="#5624D0" />
        <MaterialIcons name="money-off" size={32} color="#5624D0" />
        <MaterialIcons
          name="person"
          size={32}
          color="#5624D0"
          style={{ marginRight: "5%" }}
        />
      </View>

      {/* ADD BUTTON */}
      <View
        style={{ bottom: "3.5%", position: "absolute", alignSelf: "center" }}
      >
        <MaterialIcons
          name="add-circle"
          size={48}
          color="#5624D0"
          style={{ backgroundColor: "#F2F2F2" }}
        />
      </View>
    </View>
  );
}
