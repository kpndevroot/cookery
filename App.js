import { StatusBar } from "expo-status-bar";
import SplashScreen from "react-native-splash-screen";

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import Recipe from "./src/components/recipe/Recipe";
import { APP_ID, APP_KEY } from "@env";
export default function App() {
  // const APP_ID = process.env.APP_ID;
  // const APP_KEY = process.env.APP_KEY;
  const [search, setSearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Chicken");
  useEffect(() => {
    SplashScreen.hide();
    getRecipes();
  }, [query]);

  // const updateSearch = (e) => {
  //   setSearch(search);
  //   // console.log(search);
  // };
  const getSearch = (e) => {
    setQuery(search);
    setSearch("");
  };
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits[0].recipe.label);
  };

  return (
    <>
      <StatusBar barStyle="light" />
      <View style={styles.appContainer}>
        {/* innerContainer */}
        <View style={styles.innerContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={setSearch}
              value={search}
              onSubmitEditing={() => getSearch()}
            />
          </View>
          <View style={styles.cardDeck}>
            <View style={styles.container}>
              <FlatList
                data={recipes}
                renderItem={({ item }) => (
                  // <Text style={styles.item}>{item.recipe.label}</Text>
                  <Recipe
                    title={item.recipe.label}
                    calories={item.recipe.calories}
                    image={item.recipe.image}
                    ingredients={item.recipe.ingredients}
                    mealType={item.recipe.mealType}
                    nutrient={item.recipe.totalNutrients}
                  />
                )}
              />
            </View>
          </View>
        </View>

        {/* innerContainer */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#FF7832",
  },
  innerContainer: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  inputContainer: {
    flex: 0.5,
  },
  cardDeck: {
    flex: 4.5,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
    // flex: 0.3,
    // backgroundColor: "e0e0e0",
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  CardImageStyle: {
    width: 50,
    height: 50,
    marginVertical: 3,
    marginHorizontal: 3,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#fff7ed",
    backgroundColor: "#fff7ed",
    width: "100%",
    color: "#120438",
    borderRadius: 8,
    padding: 10,
  },
});
