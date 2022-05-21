import React, { Component } from 'react'
import GlasesList from '../GlassesList/GlasesList';
import Model from '../Model/Model';
import './GlassesPage.css';
import data from '../data.json';
export default class GlassesPage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       glassesChoice: "",
    }
  }
  onChoice = (glasses)=>{
    this.setState({glassesChoice:glasses});
  }
  render() {
    
    return (
      <div className="glassesPage">
          <Model glassesChoiced = {this.state.glassesChoice}/>
          <GlasesList glassesList = {data} onChoice={this.onChoice}/>
      </div>
    )
  }
}
