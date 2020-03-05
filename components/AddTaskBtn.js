import React from 'react';
import { StyleSheet, View } from 'react-native';
import Feather from '@expo/vector-icons';

export const Addbtn = () => {
    return (
        <View style={styles.addBtn}>
            <Feather
                name="plus"
                size={40} color="#BED4FF"
                style={styles.settingsIcon}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    addBtn: {
        alignItems: "center",
        justifyContent: "center",
        height: 75,
        width: 75,
        borderRadius: 100,
        backgroundColor: "#1F51D1",
        shadowColor: "#1F51D1",
        shadowOffset: { width: 0, height: 7 },
        shadowRadius: 6,
        shadowOpacity: 0.4

    }
})