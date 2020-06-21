import * as React from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View, Image, Button} from "react-native";
import ScreenHeader from "../../components/ScreenHeader";
import Logo from "../../components/Logo";
import Translate_img from "../../components/Translate_img";


//import Translate_img from "../../components/Translate_img";

//import Translate from './App/screens/Translate.js';
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
      <TouchableOpacity
        onPress={() =>  alert('Hello')}
        style={{ backgroundColor: 'rgb(230, 230, 230)', }}>
        <Text style={{ fontSize: 40, color: "rgb(103, 26, 87)" }}>Translate</Text>
      </TouchableOpacity>
      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Translate"
        onPress={() => navigation.navigate('Translate')}
      />
    </View> */}
       <TouchableOpacity
        onPress={() =>  alert('Hello')}
        style={{ backgroundColor: 'rgb(230, 230, 230)', }}>
        <Text style={{ fontSize: 40, color: "rgb(103, 26, 87)" }}>About</Text>
        <Translate_img />
      </TouchableOpacity>
    </View>
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
