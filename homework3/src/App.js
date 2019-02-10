import React, { Component } from 'react';
import './App.css';
import $ from "jquery"
import Giphs from "./Giphy/Giphy"


class App extends Component {
    constructor(props){
      super(props)

      this.state = {}

      this.performSearch() 
    }

    performSearch (searchTerm) {
      const urlString = "http://api.giphy.com/v1/gifs/search?api_key=YhhVRchyyTcth2W1JsIfUHBOLFHxtYWv&limit=25&q=" + searchTerm
      
      $.ajax({
        url: urlString,
        success: (searchResults) => {
          console.log("successfully fetch data")
          const results = searchResults

          const Gifresults = []

          results.forEach((gif) => {
            console.log(gif._score)
            const gifrow = <Gifresults gif = {gif}/>
            Gifresults.push(gifrow)
          })
        },
        error : (err) => {
          console.log("failed to load data")
        }
      })

     }

searchChangeHandler(event) {
        console.log(event.target.value)
        const boundObject = this
        const searchTerm = event.target.value
        boundObject.performSearch(searchTerm)
      }
  

  render() {
    return (
      <div className="App">
      <table className ="titleBar">
        <body>
          <tr>
            <td>
              <img alt = "Giphy Icon" width = "50" src = "logo.png"/>
            </td>
          </tr>
          <h2 className = "inst">Type a word to search Giphy</h2>
        </body>
      </table>

      <input style = {{
        fontSize : 24,
        display: "block",
        width: "99%",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16
      }} onChange = {this.searchChangeHandler.bind(this)} placeholder = "Search Gifs"/>

          <h2><Giphs/></h2>


      </div>
    );
  }
}

export default App;
