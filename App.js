import { StyleSheet, Text, View } from 'react-native'
import Main from './src/components/Main';
import Navbar from './src/components/Navbar';
import Title from './src/components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
      <Navbar/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    backgroundColor: '#242526',
  },
});