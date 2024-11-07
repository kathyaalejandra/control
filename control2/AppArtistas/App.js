import React from 'react';
import { StyleSheet, Text, Pressable, View, Image, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

// Marcelo Bustamante - Kathya Mansilla

function MainScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <Pressable 
        style={styles.iconButton} 
        onPress={() => navigation.navigate('Home')}
      >
        <Image 
          source={require('./assets/camiloo.png')}
          style={styles.imagenprincipal}
        />
      </Pressable>
      <Text style={styles.text}>Camilo</Text>
      <Text style={styles.subtitulo}>20 Canciones</Text>

      <View style={styles.rowContainer}>
        <View style={styles.artistContainer}>
          <Pressable 
            style={styles.iconButton} 
            onPress={() => navigation.navigate('Home')}
          >
            <Image 
              source={require('./assets/bunkers.jpg')}
              style={styles.icon}
            />
          </Pressable>
          <Text style={styles.text}>Los Bunkers</Text>
          <Text style={styles.subtitulo}>8 Canciones</Text>
        </View>
        <View style={styles.artistContainer}>
          <Pressable 
            style={styles.iconButton} 
            onPress={() => navigation.navigate('Home')}
          >
            <Image 
              source={require('./assets/jere.jpg')}
              style={styles.icon}
            />
          </Pressable>
          <Text style={styles.text}>Jere Klein</Text>
          <Text style={styles.subtitulo}>10 Canciones</Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.artistContainer}>
          <Pressable 
            style={styles.iconButton} 
            onPress={() => navigation.navigate('Home')}
          >
            <Image 
              source={require('./assets/marciano.jpg')}
              style={styles.icon}
            />
          </Pressable>
          <Text style={styles.text}>Marcianeke</Text>
          <Text style={styles.subtitulo}>9 Canciones</Text>
        </View>
        <View style={styles.artistContainer}>
          <Pressable 
            style={styles.iconButton} 
            onPress={() => navigation.navigate('Home')}
          >
            <Image 
              source={require('./assets/miranda.jpg')}
              style={styles.icon}
            />
          </Pressable>
          <Text style={styles.text}>Miranda</Text>
          <Text style={styles.subtitulo}>17 Canciones</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable 
          style={styles.button} 
          onPress={() => Alert.alert("Favoritos", "¿Deseas agregar alguno de estos artistas a tu playlist?")}
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  artistContainer: {
    alignItems: 'center',
    width: '45%',
  },
  iconButton: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },
  icon: {
    width: 120,
    height: 120,
    borderRadius: 5,
  },
  imagenprincipal: {
    width: 350,
    height: 220,
    borderRadius: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginTop: 5,
  },
  subtitulo: {
    fontSize: 14,
    color: 'black',
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
