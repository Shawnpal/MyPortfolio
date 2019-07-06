import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories(){
    if(this.state.activeTab === 0)
    {
      return(<div><h1>This is React</h1></div>)
    } else if(this.state.activeTab === 1)
    {
      return(
        <div><h1>This is 2</h1></div>
      )
    }else if(this.state.activeTab === 2)
    {
      return(
        <div><h1>This is 3</h1></div>
      )
    }else if(this.state.activeTab === 3)
    {
      return(
        <div><h1>This is 4</h1></div>
      )
    }
  }


  render() {
    return(
      <div className ="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>C++</Tab>
          <Tab>Java</Tab>
          <Tab>Unity</Tab>
        </Tabs>

        <section className ="projects-grid">
              {this.toggleCategories()}
        </section>



      </div>
    )
  }
}

export default Projects;
