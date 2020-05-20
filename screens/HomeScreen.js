import * as React from 'react';
import {
  View,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';


export default function HomeScreen() {
  return (
    <View>
      <MapView
      style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }} />
    </View>
  );
}

function fetchMaps() {
  var api_key="xxx";
  fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&keyword=cruise&key='+api_key)
    .then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
}
HomeScreen.navigationOptions = {
  header: null,
};
