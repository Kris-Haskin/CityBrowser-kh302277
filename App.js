import * as React from 'react';
import art from './assets/art.png';
import mile from './assets/mile.png';
import pier from './assets/pier.png';
import water from './assets/water.png';
import willis from './assets/willis.png';
import * as SplashScreen from 'expo-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Image, StyleSheet, View,} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Button from './Button';


SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 1000);



function ArtInstitute() {

  return (
    <View style={styles.container}>
      <Image source={art} style={styles.picture} />
      <Button info
        onPress={() => WebBrowser.openBrowserAsync('https://www.artic.edu/')}
      ></Button>
    </View>
  );
}

function MagnificentMile() {
  return (
    <View style={styles.container}>
      <Image source={mile} style={styles.picture} />
      <Button info
        onPress={() => WebBrowser.openBrowserAsync('https://www.themagnificentmile.com/')}
      ></Button>
    </View>
  );
}
function NavyPier() {
  return (
    <View style={styles.container}>
      <Image source={pier} style={styles.picture} />
      <Button info
        onPress={() => WebBrowser.openBrowserAsync('https://navypier.org/')}
      ></Button>
    </View>
  );
} function WaterTower() {
  return (
    <View style={styles.container}>
      <Image source={water} style={styles.picture} />
      <Button info
        onPress={() => WebBrowser.openBrowserAsync('https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html')}
      ></Button>
    </View>
  );
} function WillisTower() {
  return (
    <View style={styles.container}>
      <Image source={willis} style={styles.picture} />
      <Button info
        onPress={() => WebBrowser.openBrowserAsync('https://www.willistower.com/'
        )}
      ></Button>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
          <Drawer.Screen name="Art Institute of Chicago" component={ArtInstitute} />
          <Drawer.Screen name="Magnificent Mile" component={MagnificentMile} />
          <Drawer.Screen name="Navy Pier" component={NavyPier} />
          <Drawer.Screen name="Water Tower" component={WaterTower} />
          <Drawer.Screen name="Willis Tower" component={WillisTower} />
        </Drawer.Navigator>
      </NavigationContainer>
    );

  }



}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  picture: {
    width: 240,
    height: 360,
    margin: 20,
  },
  
});
