import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TaskCard = () => {

    return (
        <View style={styles.screen}>
            <View style={styles.dateHeading}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.h1}>Today </Text>
                    <Text style={styles.taskCount}>– 2 Tasks</Text>
                </View>

                <Text style={styles.date}>13.Jan – Wednesday</Text>
            </View>
            <View style={styles.taskCard}>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.h2}>Swimming</Text>
                        <Text style={styles.span}>Weekly event</Text>
                    </View>
                    <Text style={styles.desc}>Swim 200meters - stroke/back</Text>
                </View>
                <View style={styles.icon}>
                    <Text>|</Text>
                </View>
            </View>
            <View style={styles.taskCard}>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.h2}>Buy a cactus</Text>
                        <Text style={styles.span}>Single task</Text>
                    </View>
                    <Text style={styles.desc}>Go to garðartorg and shop a mexican candle cactus</Text>
                </View>
                <View style={styles.icon}>
                    <Text>|</Text>
                </View>
            </View>
            <View style={styles.dateHeading}>
                <Text style={styles.h1}>Tomorrow</Text>
                <Text style={styles.date}>14.Jan – Thursday</Text>
            </View>
            <View style={styles.taskCard}>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.h2}>Swimming</Text>
                        <Text style={styles.span}>Weekly event</Text>
                    </View>
                    <Text style={styles.desc}>Swim 200meters - stroke/back</Text>
                </View>
                <View style={styles.icon}>
                    <Text>|</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        marginBottom: 32
    },
    dateHeading: {
        width: "100%",
        height: 52,
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginTop: 24,
        marginBottom: 20,

    },
    cardHeading: {
        padding: 12
    },
    h1: {
        color: "rgba(65,68,70,100);",
        fontSize: 24,
        fontWeight: "600",
        justifyContent: "flex-start"
    },
    taskCount: {
        color: "rgba(65,68,70,100);",
        fontSize: 20,
        fontWeight: "300",
    },
    date: {
        color: "#888888",
        fontSize: 16,
        fontWeight: "300"
    },
    taskCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "white",
        marginBottom: 12,
        borderRadius: 4,
        shadowColor: "black",
        shadowRadius: 12,
        shadowOpacity: 0.1
    },
    content: {
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    h2: {
        color: "rgba(65,68,70,100);",
        fontSize: 18,
        fontWeight: "600",
        paddingBottom: 1
    },
    span: {
        color: "rgba(65,68,70,100);",
        fontSize: 13,
        fontWeight: "500",
        paddingBottom: 4
    },
    desc: {
        color: "rgba(65,68,70,100);",
        fontSize: 14,
        fontWeight: "300"
    },
    icon: {
        paddingRight: 12
    }
})


export default TaskCard;