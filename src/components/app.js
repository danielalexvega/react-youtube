import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyDNwVYR39VhH_Azb706OHj7OhniTSOBQDY';

class App extends React.Component {

  onTermSubmit = term => {
    youtube.get('/search', {
      params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
      </div>
    )
  };
}

export default App;