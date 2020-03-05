import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const filterBtn = () => {
    return (

        <View style={styles.filterBtn}>
            <AntDesign
                name="filter"
                size={20} color="rgba(148,148,148,100)"
                style={styles.filterIcon}
            />
            <Text style={styles.span}>Filter</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    filterBtn: {
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 2,
        paddingLeft: 2,
        marginTop: 14,
        width: "25%",

        borderRadius: 8,
        shadowColor: "black",
        shadowRadius: 12,
        shadowOpacity: 0.1,
    },
    filterIcon: {
        paddingLeft: 8,
        paddingTop: 8,
        paddingBottom: 8,
    },
    span: {
        color: "rgba(65,68,70,100);",
        paddingRight: 8,
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: 16,
        fontWeight: "500"
    }
})

export default filterBtn;