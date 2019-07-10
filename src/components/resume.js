import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Resume extends Component {
  render(){

    return(
      <div>
        <Grid>
        <Cell col={4}>
          <div style={{textAlign: 'center'}}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              style={{height: '200px'}}
               />
          </div>

          <h2 style={{paddingTop: '2em'}}>Shawn Chen</h2>

          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          <p>Desktop Support Analyst at Shaw Communications.</p>
          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          <h5>Address</h5>
          <p>15720 96A Ave</p>
          <h5>Phone</h5>
          <p>(778) 985-3151</p>
          <h5>Email</h5>
          <p>ShawnChen1915@gmail.com</p>

          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
        </Cell>
          <Cell className ="resume-right-col" col={8}>Right Side</Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
