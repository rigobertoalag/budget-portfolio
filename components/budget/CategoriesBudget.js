import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import NumberFormat from "react-number-format";

const categories = [
    {
        id: 1,
        name: "Ahorro escuela",
        color: "#39cf4dc4",
        amount: 2000
    },
    {
        id: 2,
        name: "Gasto despensa",
        color: "#f74444c4",
        amount: 500
    },
    {
        id: 3,
        name: "Gasto farmacia",
        color: "lightblue",
        amount: 900
    }
]

export default function CategoriesBudget() {

    return (
        <>
            <Text style={{ fontSize: 24, marginLeft: "5%" }}>Categorias</Text>

            <ScrollView
                horizontal={true}
                style={{ marginLeft: "5%", marginTop: "2.5%" }}
            >
                {
                    categories.map((cat) => (
                        <View
                            key={cat.id}
                            style={{
                                backgroundColor: cat.color,
                                height: "90%",
                                width: 150,
                                borderRadius: 20,
                                marginRight: 20,
                            }}
                        >
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ marginBottom: "2.5%" }}>{cat.name}</Text>
                                <Text>Cantidad: <NumberFormat
                                    value={cat.amount}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    renderText={(value) => <Text>{value}</Text>}
                                /></Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </>
    )
}