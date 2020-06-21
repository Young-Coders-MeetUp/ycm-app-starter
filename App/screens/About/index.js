import * as React from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import ScreenHeader from "../../components/ScreenHeader";
import Logo from "../../components/Logo";
import * as Linking from 'expo-linking';
export default function About() {
  return (
    <View>
      <ScrollView>
        <View>
        <ScreenHeader
          title="About Us"
          subtitle=""
          height={150} />
      </View>
      <View>
        
        <Text style={styles.heading} >
          Here is all about how this project came about.
        </Text>
        <View
          pointerEvents="box-none"
          style={{
            height: 300,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Logo />
        </View>
        <Text style={styles.paragraph}>
          This app, created be the YCM (Young Coder's Meetup), is designed to help Deaf learners take more responsibility of their own education. We have also entered the app into the Longitude Explorer Prize and hope to win. Here is the link to the website:</Text> 
          Linking.openURL('https://longitudeexplorer.challenges.org/im-a-longitude-explorer-finalist/')
          <Text>We hope you enjoy the app! Stay in touch:</Text>
        
      </View>
      </ScrollView>
    </View>


  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  paragraph: {
    fontSize: 15,
    textAlign: "center",
    margin: 10,
  },
});
