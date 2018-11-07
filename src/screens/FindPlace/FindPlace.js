import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import ListContainer from '../../components/ListContainer';

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavigationButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  }
  
  itemSelectedHandler = key => {
    const selectedPlace = this.props.places.fild(p => p.key === key);

    this.props.navigator.push({
      screen: "awesome-places.PlaceDetailScreen",
      title: selectedPlace.name,
      passProps: { selectedPlace }
    });
  }

  render () {
    return (
      <View>
        <ListContainer
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}/>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  places: state.places.places
});

export default connect(mapStateToProps)(FindPlaceScreen);
