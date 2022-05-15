import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {

  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID i5NTVYabZTFEaM3dJ1fVSVZjc5ek2sFsfSVI_DC-pvk'
      }
    }).then((response) => {
      console.log(response.data.results)
    })
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App
