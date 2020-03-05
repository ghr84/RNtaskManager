import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MonthBtn = () => {
    return (
        <View style={styles.monthBtnContainer}>
            <View style={styles.MonthBtn}>
                <Text style={styles.h2}>Jan</Text>
            </View>
            <View style={styles.MonthBtn}>
                <Text style={styles.h2}>Feb</Text>
            </View>
            <View style={styles.MonthBtn}>
                <Text style={styles.h2}>Mar</Text>
            </View>
            <View style={styles.MonthBtn}>
                <Text style={styles.h2}>Apr</Text>
            </View>
            <View style={styles.MonthBtn}>
                <Text style={styles.h2}>May</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    monthBtnContainer: {
        flexDirection: "row",
        marginTop: 14
    },
    MonthBtn: {
        height: 88,
        width: 76,
        backgroundColor: "white",
        borderRadius: 8,
        shadowColor: "black",
        shadowRadius: 12,
        shadowOpacity: 0.1,
        marginRight: 10
    },
    h2: {
        color: "rgba(65,68,70,100);",
        padding: 8,
        fontSize: 16,
        fontWeight: "400"
    }
})

export default MonthBtn;