import React, { Component, TouchableHighlight } from 'react';
import { Navigator, Image, View, Text } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Stores && Actions
import store from './store';

// Scene
import Trend from './trend/Trend';
import Story from './story/Story';
import Summary from './summary/Summary';

class App extends Component {
	render() {
		return (
      <Provider store={store}>
        <Navigator
          initialRoute={{name: 'Trend', component: Trend}}
          configureScene={() => ({
          	...Navigator.SceneConfigs.HorizontalSwipeJump,
          	gestures: {},
          })}
          renderScene={(route, navigator) => {
            if(route.name == 'Trend') {
              return <Trend navigator={navigator} {...route.passProps}  />
            }
            if(route.name == 'Story') {
              return <Story navigator={navigator} {...route.passProps}  />
            }
            if(route.name == 'Summary') {
              return <Summary navigator={navigator} {...route.passProps}  />
            }

          	// if (route.component) {
          	// 	return React.createElement(route.component, { navigator, ...route.passProps });
          	// }
          }}
        />
      </Provider>
		)
	}
}

export default App;
