import { Text, View , StyleSheet } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "Pink",
        }
    }
)
