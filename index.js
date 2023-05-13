import React from "react";
import { PropsWithChildren } from "react";

import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  // Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

type SectionProps = PropsWithChildren<{
  title: string,
}>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "pink",
        borderWidth: 2,
        borderColor: "green",
      }}
    >
      <View style={styles.rootContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.title}>
            <Text style={styles.logoText}>My Timer</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const windowHeight = Dimensions.get("window").height; //returns height of window

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "yellow",
    justifyContent: "space-between",
  },
  title: {
    justifyContent: "center",
  },
  logoText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  headerContainer: {
    width: "100%",
    justifyContent: "center",
    // height: windowHeight * 0.1, //10% of total screen
    // flexDirection: 'row',
    // alignItems: 'center',
    // elevation: 2,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.1,
    // shadowRadius: 10,
    backgroundColor: "white",
  },
});

export default App;
