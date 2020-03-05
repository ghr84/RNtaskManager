import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Search = () => {
    return (
        <View>
            <KeyboardAvoidingView
                behavior="padding"
                enabled>
                <View
                    style={styles.searchContainer}
                >
                    <Ionicons
                        name="ios-search"
                        size={20} color="rgba(148,148,148,100)"
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.SearchBar}
                        placeholder="Search.."
                    />
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        height: 48,
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        shadowColor: "black",
        shadowRadius: 4,
        shadowOpacity: 0.2,
        borderRadius: 4,
        shadowOffset: { width: 0, height: 1 },
    },
    SearchBar: {
        fontSize: 16,
        color: "rgba(65,68,70,100);",
        width: "100%"
    },
    searchIcon: {
        paddingRight: 12
    }

});

export default Search;