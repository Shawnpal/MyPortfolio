import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Education from './education';
import Experience from './experience';


class Resume extends Component {
  render(){

    return(
      <div>
        <Grid>
        <Cell col={4}>
          <div style={{textAlign: 'center'}}>
            <img
              src=""
              alt="avatar"
              style={{height: '200px'}}
               />
          </div>

          <h2 style={{paddingTop: '2em'}}>Shawn Chen</h2>

          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          <p>Desktop Support Analyst at Shaw Communications.</p>
          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          <h5>Address</h5>
          <p>Vancouver</p>
          <h5>Email</h5>
          <p>ShawnChen1915@gmail.com</p>

          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
        </Cell>
          <Cell className ="resume-right-col" col={8}>
          <h2>Education</h2>
          <Education
            startYear="SEPT 2018"
            endYear="SEPT 2020 (on going)"
            schoolName="BCIT"
            certification="Bachelor of Technology "
            certificationDescription1="•	C#, Java and C++ for mobile application development."
            certificationDescription2="•	Written testes and documentation for software engineering."
            certificationDescription3="•	WRITE ENCRYPTION AND DECRYPTION PROGRAMS USING PYTHON IN LINUX"
             />

             <Education
               startYear="SEPT 2014"
               endYear="DEC 2016"
               schoolName="BCIT"
               certification="Industrial Instrumentation & Control Technician Dipoma "
               certificationDescription1="•	Studied Network fundamentals and packet analysis "
               certificationDescription2="•	Write programs for PLCs with set conditions and test them in plant processes loops."
               certificationDescription3="•	Written Documentation for keeping maintenance records"
                />

                <Education
                  startYear="SEPT 2012"
                  endYear="June 2014"
                  schoolName="Douglas College"
                  certification="Computer Science And Information Systems Dipoma "
                  certificationDescription1="•	Studied a wild range of programming languages, C#, Java, C++, JavaScript  "
                  certificationDescription2="•	Using MySQL to configure databases and apply them in Windows forms"
                  certificationDescription3="•	Using Excel to import analyzed data and build into reports"
                   />
              <hr style={{borderTop: '3px solid #e22947'}} />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
