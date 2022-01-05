import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function HomeScreen({ navigation }) {

  let [flag, setflag] = React.useState(true);
  let toggleAnimate = () => setflag(previousState => !previousState);
  let heartColor = flag ? "red" : "grey"

  const anim = useRef(new Animated.Value(1));
  
  const loop = useRef(
    // makes the sequence loop
    Animated.loop(
      // runs given animations in a sequence
      Animated.sequence([
        // increase size
        Animated.timing(anim.current, {
          toValue: 1.5,
          duration: 200,
          useNativeDriver: true,
        }),
        // decrease size
        Animated.timing(anim.current, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    )
  ).current

  useEffect( () => {
    if (flag) {
      loop.start();
     } else {
      loop.stop();
      loop.reset();
      anim.current.setValue(1);
    }
  }, [flag]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale: anim.current }] }}>
        <Ionicons onPress={ () => toggleAnimate() }
          name="md-heart" size={160} color={heartColor} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(254, 254, 254)',
    padding: 8,
  },
});