import React,{Component} from 'react';
import './App.css';
import Header from "./Header";
import SearchBox from "./SearchBox";
import ShoeList from "./ShoeList";
import {ShoeInfo} from "./ShoeInfo";

class App extends Component {
  constructor() {
    super()
    this.state = {
      ShoeInfo: ShoeInfo,
      searchfield: ''
    }
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    
  }
  render(){
    const filterShoes = this.state.ShoeInfo.filter(ShoeInfo => {
      return ShoeInfo.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      ;
    })
    return (
      <div className="App">
        <Header />
        <SearchBox className="title" searchChange={this.onSearchChange} />
        <div className="flexWrap">
          <ShoeList ShoeInfo={filterShoes}/>
        </div>
      </div>
    );
  }
  
}

export default App;
