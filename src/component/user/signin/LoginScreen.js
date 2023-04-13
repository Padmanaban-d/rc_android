import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  
} from "react-native";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
import {ForgotPassword} from "../../Screens/ForgotPassword";

import React from "react";
import logo from "../../../../assets/download.png";
import image from "../../../../assets/regimg.jpg";

const LoginScreen = () => {
  const [userName, setUsername] = React.useState();
  const [number, onChangeNumber] = React.useState();
  // const stack = createNativeStackNavigator();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={logo} />
      <Image source={image} style={styles.logo} />
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={userName}
        placeholder="Enter Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter your password"
        secureTextEntry={true}
      />

      <TouchableOpacity>
        <Text style={{ marginBottom: 20, marginTop: 10, color: "#556ee6" }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <Button style={{ padding: 10 }} title="LogIn" color="#556ee6" />

      <Text style={{ marginTop: 30 }}>
        or <Text style={{ fontSize: 16, color: "#556ee6" }}>Signup</Text>
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  logo: {
    width: 350,
    height: 300,
  },
  input: {
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 4,
  },
});

export default LoginScreen;
