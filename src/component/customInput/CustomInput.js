import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View style={style.container}>
      <TextInput
       placeholder={placeholder} 
       style={style.input} 
       value={value}
       onChangeText={setValue}
       secureTextEntry={secureTextEntry}/>
    </View>
  )
}
const style= StyleSheet.create({
container:{
    backgroundColor:'white',
    width:'85%',


    borderColor:'#e8e8e8',
    borderWidth:1,
    borderRadius:5,
    
marginTop:10,
    paddingHorizontal:10,
    paddingVertical:10,
    
},
input:{
    marginBottom: 5,
    paddingBottom:5,
    
}
})

export default CustomInput