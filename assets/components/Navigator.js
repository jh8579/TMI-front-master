import React from 'react'
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';

class registeredItem extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>registeredItem!</Text>
        </View>
      );
    }
  }
  class unregisteredItem extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>unregisteredItem!</Text>
        </View>
      );
    }
  }
  class settings extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>settings!</Text>
        </View>
      );
    }
  }

export default createBottomTabNavigator(
    {
        registeredItem,
        unregisteredItem,
        settings,
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    } 
);