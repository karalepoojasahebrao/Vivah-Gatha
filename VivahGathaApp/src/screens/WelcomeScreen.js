import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function WelcomeScreen({ navigation }) {

    // Animations
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(30)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 900,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 900,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <LinearGradient
            colors={['#FFF3EC', '#FFFFFF']}
            style={styles.container}
        >

            {/* Logo Section */}
            <Animated.View
                style={[
                    styles.logoWrapper,
                    {
                        opacity: fadeAnim,
                        transform: [{ translateY: slideAnim }],
                    },
                ]}
            >
                <Animated.Image
                    source={require('../../assets/VivahGatha.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </Animated.View>

            {/* App Name */}
            <Text style={styles.title}> Welcome to</Text>
            <Text style={styles.title}>VivahGatha!!</Text>

            {/* Tagline */}
            <Text style={styles.subtitle}>
                Find your perfect life partner
            </Text>

            {/* Marathi Emotional Line */}
            <Text style={styles.marathiText}>
                तुमच्या आयुष्याच्या नव्या प्रवासाची सुरुवात
            </Text>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <Text style={styles.subtitle}>New User?</Text>
                <TouchableOpacity
                    style={styles.primaryButton}
                    activeOpacity={0.85}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.primaryButtonText}>
                        Create Profile
                    </Text>
                </TouchableOpacity>

                <Text style={styles.orText}>or</Text>

                <Text style={styles.subtitle}>Already Registered?</Text>
                <TouchableOpacity
                    style={styles.secondaryButton}
                    activeOpacity={0.85}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.secondaryButtonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        alignItems: 'center',
    },

    logoWrapper: {
        marginTop: 70,
        marginBottom: 10,
        alignItems: 'center',
    },

    logo: {
        width: 340,
        height: 260,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.18,
        shadowRadius: 8,
        elevation: 8,
    },

    title: {
        fontSize: 34,
        fontWeight: '700',
        color: '#7B1E1E',
        letterSpacing: 1.3,
        marginTop: 10,
    },

    subtitle: {
        fontSize: 16,
        color: '#555',
        marginTop: 12,
        textAlign: 'center',
    },

    marathiText: {
        fontSize: 15,
        color: '#8B3A3A',
        marginTop: 6,
        marginBottom: 50,
        textAlign: 'center',
        fontStyle: 'italic',
    },

    buttonContainer: {
        width: '100%',
    },

    primaryButton: {
        backgroundColor: '#7B1E1E',
        paddingVertical: 16,
        borderRadius: 30,
        alignItems: 'center',

        shadowColor: '#7B1E1E',
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 5,
    },

    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },

    orText: {
        marginVertical: 18,
        color: '#AAA',
        fontSize: 14,
        textAlign: 'center',
    },

    secondaryButton: {
        borderWidth: 2,
        borderColor: '#7B1E1E',
        paddingVertical: 16,
        borderRadius: 30,
        alignItems: 'center',
    },

    secondaryButtonText: {
        color: '#7B1E1E',
        fontSize: 18,
        fontWeight: '600',
    },
});
