import React, { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View, StyleSheet, Text, Image, ImageBackground } from "react-native";

const App = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onPress = () => {
    Alert.alert(`Đăng nhập thành công với tên người dùng ${email} và mật khẩu ${password}`);
  };

  return (
    <ImageBackground source={require('./asset/img/macos.jpg')} // Background cha
        resizeMode="cover"
    style={styles.container}>
    <Text style={styles.logo}>TDMU</Text>
    <View style={styles.card}>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Nhập tên người dùng" 
        placeholderTextColor="#9BA4B5"
        onChangeText={setEmail}
        value={email}
        />
    </View>
    <View style={styles.inputView} >
      <TextInput  
        secureTextEntry
        style={styles.inputText}
        placeholder="Nhập PassWord" 
        placeholderTextColor="#9BA4B5"
        onChangeText={setPassword}
        value={password}/>
    </View>
      <TouchableOpacity 
      style={styles.forgot}
    ><Text style={styles.forgot}>Quên mật khẩu?</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={styles.loginBtn}
      onPress={onPress}
    ><Text style={styles.loginText}>Đăng nhập</Text>
    </TouchableOpacity>
      <TouchableOpacity 
      style={styles.signUpBtn}
    ><Text style={styles.loginText}>Đăng ký</Text>
    </TouchableOpacity>
  </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40A2E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#FFF6E9",
    marginBottom:20,
    elevation: 5,
  },
  inputView:{
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 10,
    padding: 2,
    width: '90%',
    elevation: 5,
  },
  inputText:{
    height:50,
    color:'#9BA4B5',
  },
  forgot:{
    color:'#40A2E3',
    fontSize:12,
    marginLeft:'30%',
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    width: '85%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent:'center',
  },
  loginBtn:{
    width:"90%",
    backgroundColor:"#40A2E3",
    borderRadius:20,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },
  signUpBtn:{
    width:"90%",
    backgroundColor:"#91C8E4",
    borderRadius:20,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:5,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});

export default App;
