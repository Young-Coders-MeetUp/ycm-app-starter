import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const styles = StyleSheet.create({

    Translate_img: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignContent: "center",
    },
    
})

const Translate_img = () => {
    return (
        <Image
        source={require("../../assets/translate-2.png")}
        style={styles.Translate_img}/>
    )
};

export default Translate_img