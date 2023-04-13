import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message'; // Import the toast message library

import { useNavigation } from '@react-navigation/native';
const CustomButton = () => {
    const navigation = useNavigation();
  const handlePress = () => {
    // Show toast message when clicked
    // Toast.show({
    //   type: 'success',
    //   text1: 'Submit Clicked',
    //   text2: 'Clicked on Submit', // Actual toast message content
    //   position: 'center',
    //   autoHide: true,
    //   bottomOffset: 60,
    //   visibilityTime: 2000, // Time for which the toast message is visible (in milliseconds)
    // });

    navigation.navigate('login');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>Submit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: '50%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomButton;
