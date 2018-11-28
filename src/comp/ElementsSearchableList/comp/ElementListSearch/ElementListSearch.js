import React, { Component } from 'react';
//import PropTypes from 'prop-types'

class ElementsListSearch extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        searchKey:''
      }
    }
    
    handleChange = (ev) => {
        this.setState({searchKey: ev.target.value});
    }

    handleClick = (ev) => {
        console.log('Buscando='+this.state.searchKey);
    }

    handleKeyUp = (ev) => {
        if(ev.keyCode===13 || this.state.searchKey.length>=3){
            console.log('Buscando='+this.state.searchKey);
        }
    }
    
  render() {
    return (
      <div>
        <input type="text" name="searchKey" value={this.state.searchKey} onChange={this.handleChange} onKeyUp={this.handleKeyUp}></input>
        <button name="searchButton" onClick={this.handleClick}>Buscar</button>
      </div>
    )
  }
}

export default ElementsListSearch;