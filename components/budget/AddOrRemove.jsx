import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import BigTitle from "./BigTitle";

export default function AddOrRemove() {
  const [isAdd, setAdd] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      {isAdd ? (
        <BigTitle title="Añadir ahorro" />
      ) : (
        <BigTitle title="Realizar retiro" />
      )}

      <View
        style={{
          width: "100%",
          height: "6%",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "5%",
        }}
      >
        {isAdd ? (
          <>
            <TouchableHighlight
              onPress={() => setAdd(true)}
              style={{
                backgroundColor: "#39cf4dc4",
                justifyContent: "center",
                padding: "3%",
                borderRadius: 60,
                marginLeft: "5%",
              }}
            >
              <Text style={{ fontSize: 14 }}>Añadir ahorro</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => setAdd(false)}
              style={{
                backgroundColor: "#C4C4C4C4", //C4C4C4C4
                justifyContent: "center",
                padding: "3%",
                borderRadius: 60,
                marginRight: "5%",
              }}
            >
              <Text style={{ fontSize: 14, color: "black" }}>
                Realizar retiro
              </Text>
            </TouchableHighlight>
          </>
        ) : (
          <>
            <TouchableHighlight
              onPress={() => setAdd(true)}
              style={{
                backgroundColor: "#C4C4C4C4",
                justifyContent: "center",
                padding: "3%",
                borderRadius: 60,
                marginLeft: "5%",
              }}
            >
              <Text style={{ fontSize: 14 }}>Añadir ahorro</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => setAdd(false)}
              style={{
                backgroundColor: "#f74444c4",
                justifyContent: "center",
                padding: "3%",
                borderRadius: 60,
                marginRight: "5%",
              }}
            >
              <Text style={{ fontSize: 14, color: "white" }}>
                Realizar retiro
              </Text>
            </TouchableHighlight>
          </>
        )}
      </View>

      <View
        style={{
          justifyContent: "center",
          marginTop: "15%",
          height: "50%",
          marginLeft: "5%",
        }}
      >
        <Text style={{ fontSize: 24, alignSelf: "center" }}>
          Ingresa la cantiad para {isAdd ? "añadir" : "retirar"}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            height: "15%",
            marginTop: "10%",
          }}
        >
          {isAdd ? (
            <MaterialIcons name="attach-money" size={54} color="#39cf4dc4" />
          ) : (
            <MaterialIcons name="attach-money" size={54} color="#f74444c4" />
          )}
          {isAdd ? (
            <TextInput
              //   onChangeText={setEmail}
              //   value={email}
              keyboardType={"numeric"}
              placeholder="0.00"
              style={{
                width: "50%",
                borderBottomWidth: 1,
                borderBottomColor: "#2fac3fc4",
                color: "#11741ec4",
                fontSize: 32,
              }}
            />
          ) : (
            <TextInput
              //   onChangeText={setEmail}
              //   value={email}
              keyboardType={"numeric"}
              placeholder="0.00"
              style={{
                width: "50%",
                borderBottomWidth: 1,
                borderBottomColor: "#d63434c4",
                color: "#921919c4",
                fontSize: 32,
              }}
            />
          )}
        </View>
        {isAdd ? (
          <TouchableHighlight
            style={{
              marginTop: "15%",
              backgroundColor: "#39cf4dc4",
              padding: "2.5%",
              width: "80%",
              alignSelf: "center",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: "white",
                fontSize: 24,
                color: "#555555",
              }}
            >
              Añadir
            </Text>
          </TouchableHighlight>
        ) : (
          <TouchableHighlight
            style={{
              marginTop: "15%",
              backgroundColor: "#f74444c4",
              padding: "2.5%",
              width: "80%",
              alignSelf: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ alignSelf: "center", color: "#f5f5f5", fontSize: 24 }}>
              Retirar
            </Text>
          </TouchableHighlight>
        )}
      </View>
    </View>
  );
}
