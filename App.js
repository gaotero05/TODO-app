import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {

  let data = [
    {
      key: "1",
      title: "Title1"
    },
    {
      key: "2",
      title: "Title2"
    }
  ]

  let renderItem = ({ item }) => {
    return <Text>{item.title}</Text>
  }
  return (<SafeAreaView style={styles.container}>
    <FlatList data={data} renderItem={renderItem}></FlatList>
  </SafeAreaView>)
}