import React from 'react'
import { Text } from 'react-native'

export default function BigTitle({ title }) {
    return (
        <Text Text
            style={{
                marginTop: "20%",
                marginLeft: "5%",
                marginBottom: "5%",
                fontSize: 28,
                fontWeight: "bold",
            }
            }
        >
            {title}
        </Text>
    )
}