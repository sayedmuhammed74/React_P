import React, {Component} from 'react'
import axios from 'axios';
import {WorkSection, WorkTitle , Icon, PartTitle , PartDesc, WorkPart, Line, Span} from './style.js';

class Work extends Component{
  state = {
    works : []
  }

  componentDidMount(){
    axios.get('./js/data.json').then(res => {this.setState({works : res.data.works})});
  }

  render(){
    const {works} = this.state;
    const worksList = works.map((workItem) => {
      return(
        <WorkPart key={workItem.id} first={workItem.id}>
            <Icon className={workItem.icon_name}></Icon>
            <PartTitle>{workItem.title}</PartTitle>
            <Line/>
            <PartDesc>
                {workItem.body}
            </PartDesc>
        </WorkPart>
      )
    }) 
    return (
      <WorkSection id='work'>
        <div className="container">
          <WorkTitle><Span>My</Span> Work</WorkTitle>
          {worksList}
        </div>
      </WorkSection>
    );
  }
}


export default Work;
