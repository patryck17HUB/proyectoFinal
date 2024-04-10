import * as React from 'react';
import { View, useWindowDimensions, Text} from 'react-native';
import { TabView, SceneMap, TabBar} from 'react-native-tab-view';
import { styles } from "../styles/explorestyles";
import { globalstyles } from "../styles/GlobalStyles";
import { Color, FontSize, FontFamily } from "../styles/GlobalStyles";

<<<<<<< HEAD
import Auth from '../components/Auth';

=======
>>>>>>> parent of 2b4da45 (Entrega 1)
const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: Color.primary }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: Color.primary }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function Explore({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ 
        backgroundColor: 'pink', 
      }}

      labelStyle={{ color: 'black' }} // Cambia el color del texto aquí

      renderLabel={({ route, focused, color }) => (
        <Text style={{ color, margin: 8 }}>
          {route.title}
        </Text>
      )}
      
    />
  );
  
  return (
    <View style={globalstyles.background}>
      <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      indicatorStyle={{ backgroundColor: Color.secondary }}
      style={{backgroundColor: Color.primary}}
      />
      <Auth />
    </View>
  );
}