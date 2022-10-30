import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  text,
  mealType,
  nutrient,
}) => {
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <View style={styles.imageContainer}>
        <Image
          // source={require("./src/asset/icons/copy.png")}
          source={{ uri: `${image}` }}
          style={styles.CardImageStyle}
        />
        <View style={styles.extraDetails}>
          <Text style={styles.extraText}>{mealType}</Text>
          <Text style={styles.extraText}>
            calories:{Math.floor(calories)}{" "}
            <Text style={{ textTransform: "none" }}>kJ</Text>
          </Text>
          <Text style={styles.extraText}>
            {nutrient.FAT.label}:{Math.floor(nutrient.FAT.quantity)}{" "}
            <Text style={{ textTransform: "none" }}>{nutrient.FAT.unit}</Text>
          </Text>
          <Text style={styles.extraText}>
            {nutrient.SUGAR.label}:{Math.floor(nutrient.SUGAR.quantity)}{" "}
            <Text style={{ textTransform: "none" }}>{nutrient.SUGAR.unit}</Text>
          </Text>
          <Text style={styles.extraText}>
            {nutrient.PROCNT.label}:{Math.floor(nutrient.PROCNT.quantity)}{" "}
            <Text style={{ textTransform: "none" }}>
              {nutrient.PROCNT.unit}
            </Text>
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        {ingredients.map((item, index) => (
          <Text key={index} style={styles.ingredients}>
            {item.text}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 25,
    paddingHorizontal: 20,
    width: "100%",
    marginVertical: 8,
  },
  title: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 1,
  },
  imageContainer: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "center",

    // alignItems: "center",
  },
  ingredients: {
    color: "black",
    fontSize: 15,
    textAlignVertical: "center",
    textAlign: "justify",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  CardImageStyle: {
    width: 80,
    height: 90,
    flex: 1.5,
    marginVertical: 3,
    marginHorizontal: 3,
    borderRadius: 5,
    marginRight: 15,
  },
  extraDetails: {
    flex: 2,
    marginHorizontal: 5,
  },
  extraText: {
    color: "#302e2b",
    textTransform: "capitalize",
    fontWeight: "550",
    fontSize: 13,
  },
});

export default Recipe;
