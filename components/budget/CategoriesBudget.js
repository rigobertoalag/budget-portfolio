import React from 'react'
import { ScrollView, Text, View } from 'react-native'

export default function CategoriesBudget() {
    return (
        <>
            <Text style={{ fontSize: 24, marginLeft: "5%" }}>Categorias</Text>

            <ScrollView
                horizontal={true}
                style={{ marginLeft: "5%", marginTop: "2.5%" }}
            >
                <View
                    style={{
                        backgroundColor: "grey",
                        height: 144,
                        width: 163,
                        borderRadius: 20,
                        marginRight: 20,
                    }}
                >
                    <Text>Categoria 1</Text>
                </View>
                <View
                    style={{
                        backgroundColor: "grey",
                        height: 144,
                        width: 163,
                        borderRadius: 20,
                        marginRight: 20,
                    }}
                >
                    <Text>Categoria 2</Text>
                </View>
                <View
                    style={{
                        backgroundColor: "grey",
                        height: 144,
                        width: 163,
                        borderRadius: 20,
                        marginRight: 20,
                    }}
                >
                    <Text>Categoria 3</Text>
                </View>
            </ScrollView>
        </>
    )
}