import { View, Text,Image,StyleSheet,useWindowDimensions} from 'react-native'
import React from 'react'
import CustomInput from '../../customInput/CustomInput'
import CustomButton from '../../customButton/CustomButton'
import Logo from '../../../../assets/download.png'
import image from '../../../../assets/regimg.jpg'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native'

const SignUp = () => {
  const navigation = useNavigation();
  const{height}=useWindowDimensions()
  const[firstName,setFirstName]=useState("")
  const[email,setEmail]=useState("")
  const[lastName,setLastName]=useState("")
  const[password,setPassword]=useState("")

  const handlePress = () => {
    // Handle the onPress event for "Login In" text
    // Add your navigation logic here to navigate to the login page
    navigation.navigate('login'); // Replace 'Login' with the actual name of your login page screen
  };
  return (
    <>
  

    <View style={style.root}>
    <Image source={Logo} style={[style.Logo,{height:height*0.3, alignSelf: 'center' }]} resizeMode="contain" />
    <Image source={image} style={[style.image,{height:height*0.2, alignSelf: 'center' }]} resizeMode="contain" />
      <CustomInput placeholder={"FirstName"} value={firstName} setValue={setFirstName}/>
      <CustomInput placeholder={"LastName"} value={lastName} setValue={setLastName}/>
      <CustomInput placeholder={"Email"} value={email} setValue={setEmail}/>
      <CustomInput placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustomButton />
      <View style={style.textContainer}>
        <Text style={style.text}>Have an Account? </Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={style.textSignIn}>Login In</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  )
}
const style =StyleSheet.create({
  container: {
    alignItems: 'center',
    // paddingTop:80,
    // marginTop:80,
    // justifyContent: 'center',
  },
  root: {
    alignItems: 'center',
    backgroundColor: 'white',
    // position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  textContainer: {
    flexDirection: 'row', // Use row direction for child components
  },
  text: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: 'black',
    marginRight:5,
    paddingTop:10
  },
  textSignIn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    paddingTop:10

  },
Logo:{
  width:"70%",
  maxWidth:300,
  maxHeight:100,
},
Text:{
  color:'blue',
  fontSize: 32,
  fontWeight: 'bold',
  // paddingBo,ttom:10
},
})

export default SignUp