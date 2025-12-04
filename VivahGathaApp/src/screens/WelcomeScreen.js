import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Vivah Gatha</Text>
            <Text style={styles.subtitle}>Find Your Perfect Match</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFE8D6'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#6A040F',
    },
    subtitle: {
        fontSize: 18,
        marginVertical: 20,
        color: '#9D0208'
    },
    button: {
        backgroundColor: '#9D0208',
        padding: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginTop: 30
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
});
