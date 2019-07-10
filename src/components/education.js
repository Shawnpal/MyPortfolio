import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
          <h5 style={{marginTop:'0px'}}>{this.props.certification}</h5>
          <p>{this.props.certificationDescription1}<br/>{this.props.certificationDescription2}<br/>{this.props.certificationDescription3}</p>

        </Cell>
      </Grid>
    )
  }
}

export default Education;
