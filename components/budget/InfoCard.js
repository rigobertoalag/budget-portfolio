import React from 'react'
import {View, Text} from 'react-native'

export default function InfoCard() {
    return (
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
            }
            }
        >
            <Text>Conoce estrategias para mejorar tu ahorro</Text>
        </View >
    )
}