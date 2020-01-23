import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class store extends React.Component {

    constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    // return fetch('https://facebook.github.io/react-native/movies.json')
    return fetch('http://10.0.0.1:5000/store')
     .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}