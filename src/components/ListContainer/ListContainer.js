import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "./ListItem";

const listContainer = props => {
  const placesOutput = props.places.map((place, i) => (
    <ListItem key={i} placeName={place} onItemPressed={() => props.onItemDeleted(i)}/>
  ));
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={info => (
        <ListItem
        placeName={info.item.name}
        placeImage={info.item.image}
        onItemPressed={() => props.onItemSelected(info.item.key)}/>
      )}>{placesOutput}</FlatList>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 5,
    width: "100%"
  }
});

export default listContainer;
