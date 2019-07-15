import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src= "https://github.com/Shawnpal/MyPortfolio/blob/master/src/components/Imgs/Shawn.png?raw=true"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Developer</h1>

            <hr/>

          <p>HTML/CSS | C++ | JavaScript | React | C# | NodeJS | Java | Unity | .NET framework </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/xiang-shawn-chen-13b4098a/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Shawnpal" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>



        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
