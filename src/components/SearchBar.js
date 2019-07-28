import React from 'react';
import './App.css';


class SearchBar extends React.Component {
  state = { term: '' }  

onFormSubmit = e => {
  e.preventDefault();
  this.props.onSubmit(this.state.term)
}

  render() {
    return (
      <div className="ui segment" style={{}}>
           
        <form onSubmit={this.onFormSubmit} className="ui form" >
          <div className="field"  >
            <label>You must to enter one or more Keywords</label>
            <input 
              type="text" 
              value={this.state.term} 
              onChange={e => this.setState({ term: e.target.value })} 
             />
            
          </div>
          
        </form>  
      </div>
    )
  }
}

export default SearchBar;


// {this.state.term=""}