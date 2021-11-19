import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";

export default function InfoTable() {
    return (
        <>
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

            <View style={{ height: "30%", width: "100%" }}>
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
        </>
    )
}