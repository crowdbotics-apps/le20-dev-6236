import React from "react"
import { View } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input
} from "react-native-ui-kitten"

import Slider from "@react-native-community/slider"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = {}

  render = () => (
    <View
      editableName="View1"
      style={{
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderStyle: "solid",
        backgroundSize: "auto"
      }}
    >
      <Text
        input
        placeholder="Username"
        editable={true}
        value=""
        editableName="Text input2"
        style={{
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderStyle: "solid"
        }}
      />
      <Text
        input
        placeholder="Password"
        editable={true}
        value=""
        editableName="Text input3"
        style={{
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderStyle: "solid"
        }}
      />
      <Button
        editableName="Button4"
        style={{
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderStyle: "solid",
          backgroundColor: "#3366FF"
        }}
        onPress={() => alert("Pressed!")}
      >
        Login
      </Button>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
