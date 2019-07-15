
import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render(){

    return(
        <div className = "contact-body">
          <Grid className = "contact-grid">
            <Cell className ="contact-cell" col={6}>
            <h2>Shawn Chen</h2>
              <hr/>
            <img src="Imgs/Shawn.png"
            alt="avatar"
            style={{height:'250px'}}/>
            <p style={{width:'75%' ,margin:'auto',paddingTop:"1em"}}> Desktop Support Analyst at Shaw Communications Inc.</p>

            </Cell>
            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr/>

              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                      (778)985-3151
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      shawnchen1915@gmail.com
                    </ListItemContent>
                  </ListItem>



                </List>
              </div>
            </Cell>
          </Grid>
        </div>
    )
  }
}

export default Contact;
