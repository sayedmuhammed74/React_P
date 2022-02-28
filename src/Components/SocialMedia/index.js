import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {SocialSection, Social, SocialDesc, Span, SpanInfo, Icon} from './style.js';

const SocialMedia = ()  =>{

    const [social, setSocial] = useState([])

    useEffect( () => {
      axios.get('js/data.json').then(res => {setSocial(res.data.social)})
    }, [])

    const socialList = social.map(socialItem => {

      return (
        <Social item={socialItem.id} key={socialItem.id}>
          <Icon className={socialItem.icon}></Icon>
          <SocialDesc>
              <Span>{socialItem.title}</Span>
              <SpanInfo>{socialItem.body}</SpanInfo>
          </SocialDesc>
        </Social>
      );
    })
    return (
      <SocialSection>
            {socialList}
      </SocialSection>
    );

}


export default SocialMedia;
