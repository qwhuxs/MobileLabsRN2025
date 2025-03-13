import React, { Component } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import newLogo1 from "./assets/logo4.jpg";
import newLogo2 from "./assets/logo1.png";
import newLogo3 from "./assets/logo2.png";
import newLogo4 from "./assets/logo3.png";
import newsImage from "./assets/logo4.jpg";

const Stack = createStackNavigator();

const mockNews = Array(8).fill({
  title: "Заголовок новини",
  date: "Дата новини",
  summary: "Короткий текст новини",
  image: newsImage,
});

const photoGallery = [
  require("./assets/природа1.jpg"),
  require("./assets/природа2.jpg"),
  require("./assets/природа3.jpg"),
  require("./assets/природа4.jpg"),
  require("./assets/природа5.jpg"),
  require("./assets/природа6.jpg"),
  require("./assets/природа7.jpg"),
  require("./assets/природа8.jpg"),
  require("./assets/природа9.jpg"),
  require("./assets/природа10.jpg"),
];

const galleryData = photoGallery.map((img) => ({ img }));

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <TopHeader />
        <NavigationBar navigation={this.props.navigation} currentTab="Main" />
        <Text style={styles.newsHeader}>Новини</Text>
        <FlatList
          data={mockNews}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.newsCard}>
              <Image source={item.image} style={styles.newsImage} resizeMode="contain" />
              <View style={styles.newsDetails}>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsDate}>{item.date}</Text>
                <Text style={styles.newsSummary}>{item.summary}</Text>
              </View>
            </View>
          )}
        />
        <Footer />
      </View>
    );
  }
}

class PhotoGalleryScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <TopHeader />
        <NavigationBar navigation={this.props.navigation} currentTab="Gallery" />
        <FlatList
          data={galleryData}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <Image source={item.img} style={styles.galleryImage} resizeMode="cover" />
          )}
        />
        <Footer />
      </View>
    );
  }
}

class UserProfileScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <TopHeader />
        <NavigationBar navigation={this.props.navigation} currentTab="Profile" />
        <Text style={styles.newsHeader}>Форма реєстрації</Text>
        <View style={styles.formContainer}>
          <Text style={styles.formLabel}>Електронна пошта</Text>
          <TextInput style={styles.inputField} />

          <Text style={styles.formLabel}>Пароль</Text>
          <TextInput style={styles.inputField} secureTextEntry />

          <Text style={styles.formLabel}>Підтвердження пароля</Text>
          <TextInput style={styles.inputField} secureTextEntry />

          <Text style={styles.formLabel}>Прізвище</Text>
          <TextInput style={styles.inputField} />

          <Text style={styles.formLabel}>Ім’я</Text>
          <TextInput style={styles.inputField} />

          <TouchableOpacity style={{ ...styles.inputField, backgroundColor: "#007bff", alignItems: "center" }}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Зареєструватися</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </View>
    );
  }
}

class TopHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image source={newLogo1} style={styles.logoImage} resizeMode="contain" />
        <Text style={styles.appTitle}>МійМобільнийДодаток</Text>
      </View>
    );
  }
}

class NavigationBar extends Component {
  render() {
    const { navigation, currentTab } = this.props;
    return (
      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Main")}>
          <View style={styles.navItem}>
            <Image source={newLogo2} style={styles.navIcon} resizeMode="contain" />
            <Text style={currentTab === "Main" ? styles.activeTab : styles.inactiveTab}>Головна</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Gallery")}>
          <View style={styles.navItem}>
            <Image source={newLogo3} style={styles.navIcon} resizeMode="contain" />
            <Text style={currentTab === "Gallery" ? styles.activeTab : styles.inactiveTab}>Фотогалерея</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Profile")}>
          <View style={styles.navItem}>
            <Image source={newLogo4} style={styles.navIcon} resizeMode="contain" />
            <Text style={currentTab === "Profile" ? styles.activeTab : styles.inactiveTab}>Профіль</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>Козік Анастасія Ігорівна, ВТк-24-1</Text>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Gallery" component={PhotoGalleryScreen} />
          <Stack.Screen name="Profile" component={UserProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: "#fff", paddingTop: 40 },
  header: { flexDirection: "row", alignItems: "center", padding: 10 },
  logoImage: { width: 120, height: 40, marginRight: 10 },
  appTitle: { fontSize: 20, fontWeight: "bold", marginLeft: 50 },
  navigation: { flexDirection: "row", justifyContent: "space-around", paddingBottom: 5 },
  navButton: { padding: 8 },
  navItem: { alignItems: "center" },
  navIcon: { width: 100, height: 30, marginBottom: 5 },
  activeTab: { fontWeight: "bold", color: "blue", textAlign: "center" },
  inactiveTab: { color: "gray" },
  newsHeader: { fontSize: 22, fontWeight: "bold", padding: 10, textAlign: "center" },
  newsCard: { flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#ccc", alignItems: "center" },
  newsImage: { width: 60, height: 60, marginRight: 10 },
  newsDetails: { flex: 1 },
  newsTitle: { fontSize: 16, fontWeight: "bold" },
  newsDate: { color: "gray" },
  newsSummary: { color: "black" },
  galleryImage: { width: 178, height: 120, margin: "2.5%", borderRadius: 10 },
  formContainer: { padding: 20 },
  inputField: { borderWidth: 1, borderColor: "#ccc", borderRadius: 5, padding: 10, marginBottom: 10 },
  footer: { position: "absolute", bottom: 0, width: "100%", backgroundColor: "#fff", padding: 10, alignItems: "center" },
  footerText: { color: "gray" },
  formLabel: { fontSize: 14, marginBottom: 5 },
});

export default App;
