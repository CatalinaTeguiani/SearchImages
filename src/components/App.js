import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import './App.css'

class App extends React.Component {
  state = {
    images: []
  }

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos/', {
      params: { query: term, per_page: 20 }
    })
    this.setState({ images: response.data.results })
  }
  
  render() {
    return (
      <div className="ui container" style={{marginTop: '2rem', position: 'relative', width: '80vw'}}>
        
        <div style={{fontFamily:'Montserrat', fontSize: '4vw', color: '#fec312', textShadow: '0.1rem 0.1rem 0.1rem #000', paddingTop:'2rem', paddingBottom:'2rem'}} > The Image Finder  </div>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App