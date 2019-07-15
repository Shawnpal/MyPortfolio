import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
class About extends Component {
  render(){

    return(
      <div>
        <Grid>
        <Cell className ="aboutme-left-col" col={6}>
          <div style={{textAlign: 'center'}}>
            <img
              src=""
              alt="avatar"
              style={{height: '200px'}}
               />
          </div>

        </Cell>
          <Cell className ="aboutme-right-col" col={6}>
                    <h2 style={{paddingTop: '2em'}}>Shawn Chen</h2>

                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p>Junior Programmer</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <h5>Address</h5>
                    <p>15720 96A Ave</p>
                    <h5>Phone</h5>
                    <p>(778) 985-3151</p>
                    <h5>Email</h5>
                    <p>ShawnChen1915@gmail.com</p>


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
