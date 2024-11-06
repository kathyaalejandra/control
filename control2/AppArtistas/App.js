import React from 'react';
import { StyleSheet, Text, Pressable, View, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

{/* Marcelo Bustamante - Kathya Mansilla*/}

function MainScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <Pressable 
        style={styles.iconButton} 
        onPress={() => navigation.navigate('Home')}
      >
      </Pressable>

      <View style={styles.buttonContainer}>
        <Pressable 
          style={styles.button} 
          onPress={() => Alert.alert("Alerta", "Has presionado el botón normal")}
        >
          <Ionicons name="musical-note" size={20} color="white" style={styles.iconLeft} />
          <Text style={styles.buttonText}>Agregar a la playlist</Text>
        </Pressable>
        
        <Pressable 
          style={styles.button}
        >
          <FontAwesome name="heart" size={20} color="white" style={styles.iconLeft} />
          <Text style={styles.buttonText}>Favoritos</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF5733',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  iconLeft: {
    marginRight: 8,
  },
});
