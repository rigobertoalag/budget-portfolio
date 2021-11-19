import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";
import NumberFormat from 'react-number-format';

export default function InfoTable(data) {
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
                    {data.data.map((data) => (
                        <View
                            key={data.id}
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginTop: "2.5%",
                                borderBottomWidth: 1,
                                borderColor: "#C4C4C4",
                                paddingBottom: "5%",
                            }}
                        >
                            {
                                data.type === "entry" ? <MaterialIcons
                                    name="arrow-drop-up"
                                    size={24}
                                    color="green"
                                    style={{ position: "absolute" }}
                                /> : <MaterialIcons
                                    name="arrow-drop-down"
                                    size={24}
                                    color="red"
                                    style={{ position: "absolute" }}
                                />
                            }

                            <Text style={{ marginLeft: "5%" }}>{data.category}</Text>
                            <Text>{data.date}</Text>
                            <NumberFormat
                                value={data.mount}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                renderText={value => <Text>{value}</Text>}
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>
        </>
    )
}