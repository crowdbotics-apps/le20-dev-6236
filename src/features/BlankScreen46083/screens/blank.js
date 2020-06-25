import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = {}

  render = () => (
    <View
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
        backgroundSize: "auto",
        fontFamily: "System"
      }}
    >
      <Text
        input
        placeholder="Username"
        editable={true}
        value=""
        style={{
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderStyle: "solid",
          fontFamily: "System"
        }}
      />
      <Text
        input
        placeholder="NewUsername"
        editable={true}
        value=""
        editableName="Text input4"
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
        style={{
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderStyle: "solid",
          fontFamily: "System"
        }}
      />
      <Button
        style={{
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          borderStyle: "solid",
          fontFamily: "System",
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
