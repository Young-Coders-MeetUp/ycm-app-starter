import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Camera } from "expo-camera";
import {
  cameraWithTensors,
  bundleResourceIO,
} from "@tensorflow/tfjs-react-native";
import * as tf from "@tensorflow/tfjs";
// import * as tmImage from '@teachablemachine/image'; // this depends on the client being a web client with a document object

import * as mobilenet from "@tensorflow-models/mobilenet";

// const modelJson = require("../../assets/models/test2/model.json");
// const modelWeights = require("../../assets/models/test2/weights.bin");
// const modelMeta = require("../../assets/models/test2/metadata.json");

// // the test model URL
// const modelURL = "https://teachablemachine.withgoogle.com/models/KwS_dXTBa/";

const TensorCamera = cameraWithTensors(Camera);
const styles = StyleSheet.create({
  camera: {
    height: 320,
    width: 240,
  },
});

class TFCamera extends React.Component {
  constructor(prop) {
    super(prop);
    this.name = "tf-adam";
    this.state = {
      isModelReady: false,
      useModel: {},
      model: null,
    };
  }

  init() {}

  async componentDidMount() {
    await tf.ready();
    // Signal to the app that tensorflow.js can now be used.
    console.log("componentDidMount: tf.ready is set");
    const { status } = await Camera.requestPermissionsAsync();
    // this.setState({cameraPermission: status === 'granted'});
    console.log("start loading model");

    // mobilenet - generic image classification
    const model = await mobilenet.load();

    // load our local model downloaded from teachable machine
    // const model = await tf.loadLayersModel(
    //   bundleResourceIO(modelJson, modelWeights)
    // );

    // load the hosted model from teachable machine
    // const model = await tmImage.load(`${modelURL}model.json`,`${modelURL}metadata.json`);

    // const model = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeights));

    this.setState({ isModelReady: true, model });
    console.log("model loaded");
  }

  makeHandleCameraStream() {
    return (images, updatePreview, gl, cameraTexture) => {
      const loop = async () => {
        const nextImageTensor = images.next().value;

        // some tensor manipulation to get it to what the model expects (not working :( ))
        // .expandDims(0).reshape([null, 244, 244, 3]);

        try {
          // prediction model - can't get this working with our custom teachable machine
          // end up with mismatches of shape or image size.
          // possibly need to retrain with compatible shape as created for the tensor

          // const predictions = await this.state.model.predict(nextImageTensor);

          // classification model (mobilenet) - this works for recognising objects
          const predictions = await this.state.model.classify(nextImageTensor);
          this.setState({ predictions });

          // console.log(this.state.predictions);
          requestAnimationFrame(loop);
        } catch (error) {
          console.log(error);
        }
      };
      loop();
    };
  }

  render() {
    let textureDims;
    if (Platform.OS === "ios") {
      textureDims = {
        height: 1920,
        width: 1080,
      };
    } else {
      textureDims = {
        height: 1200,
        width: 1600,
      };
    }

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: "#F5FCFF",
        }}
      >
        <View
          style={{
            height: 40,
          }}
        >
          {this.state.predictions && (
            <Text>{this.state.predictions[0].className}</Text>
          )}
        </View>

        <View>
          {this.state.model ? (
            <TensorCamera
              // Standard Camera props
              style={styles.camera}
              type={Camera.Constants.Type.front}
              // Tensor related props
              cameraTextureHeight={textureDims.height}
              cameraTextureWidth={textureDims.width}
              resizeHeight={244}
              resizeWidth={244}
              resizeDepth={3}
              onReady={this.makeHandleCameraStream()}
              autorender={true}
            />
          ) : (
            <View>
              <Text>Loading model...</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default TFCamera;
