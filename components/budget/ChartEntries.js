import React from 'react'
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function ChartEntries({ months, totalEntries }) {
    const SCREEN_WIDTH = Dimensions.get("window").width * 0.9;
    const SCREEN_HEIGHT = Dimensions.get("window").height * 0.35;

    return (
        <LineChart
            data={{
                labels: months,
                datasets: [
                    {
                        data: totalEntries,
                    },
                ],
            }}
            fromZero={true}
            width={SCREEN_WIDTH}
            height={SCREEN_HEIGHT}
            yAxisLabel="$"
            verticalLabelRotation={30}
            chartConfig={{
                backgroundColor: "#46d024",
                backgroundGradientFrom: "#499c34",
                backgroundGradientTo: "#70bd5d",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#46d024",
                },
            }}
            bezier
        />
    );
}