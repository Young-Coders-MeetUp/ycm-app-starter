import * as React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StyleSheet, Text, TouchableOpacity, View, Image, Button} from "react-native";
import ScreenHeader from "../../components/ScreenHeader";
import Logo from "../../components/Logo";
import Translate_img from "../../components/Translate_img";
import { createStackNavigator } from '@react-navigation/stack';

import Translate from '../Translate/index.js';
// import About from './App/screens/About';

// const instructions = Platform.select({
//   ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
//   android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
// });

export default function Home() {
  return (
    <View>
      <ScreenHeader 
          title = "Sign2Word"
          subTitle = "Welcome back"
          height = {180} />
      <View
          pointerEvents="box-none"
          style={{
            height: 200,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}>
        <Logo />
      </View>
      <View style={{flexDirection: "row"}}>
      <TouchableOpacity
        // onPress={() => navigation.navigate('Translate')}
        onPress={() => alert('Hello')}
        style={{ backgroundColor: 'rgb(0, 230, 230)', }}>
        <Text style={{ fontSize: 40, color: "rgb(103, 26, 87)"}}>Translate</Text>
        <Translate_img />
      </TouchableOpacity>
      <HomeScreen></HomeScreen>
      </View>
       <TouchableOpacity
        onPress={() =>  alert('Hello')}
        style={{ backgroundColor: 'rgb(230, 230, 230)', }}>
        <Text style={{ fontSize: 40, color: "rgb(103, 26, 87)" }}>About</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <Button
      title="Translate"
      onPress={() => navigation.navigate(Translate)}
    />
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //  {/* <Translate_img /> */}
    
    // </View>
  );
}


const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
