import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
class Dashboard extends React.Component {
  constructor() {
    super();
  }
  render() {
    const {email, password} = this.props.route.params;

    return (
      <View style={styles.container}>
        <Text> {email}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Dashboard;
