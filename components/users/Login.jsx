import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import validDataInput from '../resources/validDataInput'

export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState({});

  useEffect(() => {
    if(valid.correo === true & valid.pass === true){
      navigation.navigate("TabNav")
    }
  }, [valid])

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {/* ICON VIEW */}
      <View
        style={{
          marginTop: "20%",
          width: "60%",
          height: 159,
          justifyContent: "center",
        }}
      >
        <MaterialIcons
          name="lock"
          size={125}
          color="#5624D0"
          style={{ alignSelf: "center" }}
        />
      </View>

      {/* WELCOME MESSAGE */}
      <View style={{ marginTop: "5%", marginBottom: "10%" }}>
        <Text style={{ textAlign: "center", fontSize: 24, padding: "1.5%" }}>
          Bienvenido
        </Text>
        <Text style={{ fontSize: 14, color: "#696969" }}>
          Por favor inicia sesion
        </Text>
      </View>

      {/* LOGIN INPUTS */}
      <View style={{ alignItems: "center", height: "20%", width: "100%" }}>
        {/* EMAIL */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: "40%",
            width: "90%",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#a7a7a7",
          }}
        >
          <MaterialIcons
            name="person"
            size={24}
            color="#5624D0"
            style={{ marginLeft: "5%" }}
          />
          <TextInput
            onChangeText={setEmail}
            value={email}
            keyboardType={"email-address"}
            autoCapitalize={"none"}
            placeholder="Email"
            style={{
              marginLeft: "5%",
              height: "100%",
              width: "100%",
            }}
          />
        </View>

        {/* ERROR NO MAIL */}
        <View style={{ alignSelf: 'flex-start', marginLeft: "5%", marginTop: "1%" }}>
          {valid.correo === false ? <Text style={{ color: 'red', fontSize:14 }}>*Ingresa un correo</Text> : null}
        </View>

        {/* PASS */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: "40%",
            width: "90%",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#a7a7a7",
            marginTop: "5%",
          }}
        >
          <MaterialIcons
            name="vpn-key"
            size={24}
            color="#5624D0"
            style={{ marginLeft: "5%" }}
          />
          <TextInput
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            placeholder="Contraseña"
            style={{
              marginLeft: "5%",
              height: "100%",
              width: "100%",
            }}
          />
        </View>

        {/* ERROR NO PASS */}
        <View style={{ alignSelf: 'flex-start', marginLeft: "5%", marginTop: "1%", marginBottom:"5%" }}>
          {valid.pass === false ? <Text style={{ color: 'red', fontSize:14 }}>*Ingresa la contraseña</Text> : null}
        </View>
      </View>

      {/* LOGIN BUTTON */}
      <TouchableOpacity
        // onPress={() => navigation.navigate("TabNav")}
        onPress={() => setValid(validDataInput(email, password))}
        style={{
          justifyContent: "center",
          backgroundColor: "#5624D0",
          width: "90%",
          height: "7%",
          borderRadius: 10,
          marginTop: "15%",
        }}
      >
        <Text style={{ color: "white", alignSelf: "center", fontSize: 22 }}>
          Ingresar
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: "10%", alignItems: "center" }}>
        <View>
          <Text
            style={{ color: "#5624D0", fontSize: 14 }}
            onPress={() =>
              Alert.alert("Ooops!", "Parece que esto aun no funciona :(", [
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ])
            }
          >
            ¿Olvidaste tu contraseña?
          </Text>
        </View>
        <View style={{ marginTop: "15%", flexDirection: "row" }}>
          <Text style={{ fontSize: 14 }}>¿No tienes cuenta? </Text>
          <Text
            style={{ color: "#5624D0", fontSize: 14 }}
            onPress={() =>
              Alert.alert("Ooops!", "Parece que esto aun no funciona :(", [
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ])
            }
          >
            Registrate
          </Text>
        </View>
      </View>
    </View>
  );
}
