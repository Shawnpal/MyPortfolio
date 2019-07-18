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
              src="https://github.com/Shawnpal/MyPortfolio/blob/master/src/components/Imgs/AboutMe.jpg?raw=true"
              alt="avatar"
              style={{height: '42em',width:'53em', margin:'auto',paddingTop:"3em"}}
               />
          </div>

        </Cell>
          <Cell className ="aboutme-right-col" col={6}>
                    <h2 style={{paddingTop: '2em'}}>Shawn Chen</h2>

                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p  >Junior Programmer</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <h5>About me</h5>
                    <p style = {{width:'65%'}}>Hi, and welcome to my MyPortfolio page. I'm a tech enthusiast. This means I enjoy creating,
                     buying, testing, evaluating and learning about new technology. Prehaps that's why I got into IT & software development. When I'm not working
                     I'm usually working on my own projects. </p>
                     <p style = {{width:'65%'}}>
                     I graduated of the Industrial instrumentation program at BCIT but I also hold a Computer Science Diploma. Currently a Part time Student of Bachelor of Computer Technology Development
                    <br/>

                     </p>
                     <p>
                     Programming Languages I often uses: <b>
                     Python,
                     C++,
                     C#,
                     Java
                     </b>
                     </p>


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
