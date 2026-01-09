import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {styles.form_model}>Edit app/index.tsx to edit this screen.</Text>
      <Text style= {styles.form_model}>test hollo world.</Text>
      <StatusBar style="dark" />

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  form_model:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  }
});