import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
/*import Button from "./Button";*/

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.errorText, styles.title]}>An error occured</Text>
      <Text style={styles.errorText}>{message}</Text>
      {/*<Button onPress={onConfirm}>Okay</Button>*/}
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  errorText: {
    color: GlobalStyles.colors.white,
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
