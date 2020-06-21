import * as React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StyleSheet, Text, TouchableOpacity, View, Image, Button} from "react-native";
import ScreenHeader from "../../components/ScreenHeader";
import Logo from "../../components/Logo";
import Translate_img from "../../components/Translate_img";
// import { createStackNavigator } from '@react-navigation/stack';

import Translate from '../Translate/index.js';
import About from '../About/index.js';

// const instructions = Platform.select({
//   ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
//   android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
// });

export default function Home( {navigation} ) {
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
      <View
          pointerEvents="box-none"
          style={{
            height: 200,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
        <NavigateTranslate navigation={navigation}></NavigateTranslate>
        <NavigateAbout navigation={navigation}></NavigateAbout>
      </View>
    </View>
  );
}

function NavigateTranslate({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'space-around' }}>
     <Translate_img />
     <Button
      title="Translate"
      onPress={() => navigation.navigate(Translate)}
    />
    </View>
  );
}

function NavigateAbout({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'space-around' }}>
     <Translate_img />
     <Button
      title="About"
      onPress={() => navigation.navigate(About)}
    />
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
