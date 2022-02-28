import React from 'react'
import {ProfileSection, ProfileSkills, ProfileItem, ProfileList, Span, SpanWeb, Skills, SkillsDesc, Bar, BarTitle, Perc, Parent, ParentSpan, Title, TitleSpan} from './style.js';

const Profile = () => {
  const myList = [
    {title: 'Bootstrap',perc : '100%', id:1},
    {title: 'CSS',perc : '90%', id:2},
    {title: 'Photoshop',perc : '80%', id:3}
  ];
  const BarSection = myList.map(item => {
    return(
      <Bar key={item.id}>
        <BarTitle>{item.title}</BarTitle>
        <Perc>{item.perc}</Perc>
        <Parent>
            <ParentSpan active={item.id}></ParentSpan>
        </Parent>
      </Bar>
    )
  })
    return (
        <ProfileSkills>
          <div class="container">
              <ProfileSection>
                  <Title><TitleSpan>My </TitleSpan>Profile</Title>
                  <ProfileList>
                      <ProfileItem>
                          <Span>Name</Span>
                          Hamza Nabil
                      </ProfileItem>
                      <ProfileItem>
                          <Span>Birthday</Span>
                          21/1/1996
                      </ProfileItem>
                      <ProfileItem>
                          <Span>Address</Span>
                          Ain shams
                      </ProfileItem>
                      <ProfileItem>
                          <Span>Phone</Span>
                          4444 5555 6666
                      </ProfileItem>
                      <ProfileItem>
                          <Span>Email</Span>
                          hamza@hamza.com
                      </ProfileItem>
                      <ProfileItem>
                          <Span>Website</Span>
                          <SpanWeb>www.google.com</SpanWeb>
                      </ProfileItem>
                  </ProfileList>
              </ProfileSection>
              
              <Skills>
                  <Title>Some <TitleSpan>skills</TitleSpan></Title>
                  <SkillsDesc>
                  Lorem ipsum dolor sit amet, consectetur adipisicing eProfileItemt. Quos praesentium blanditiis esse cupiditate, omnis simiProfileItemque.
                  </SkillsDesc>
                  {BarSection}
              </Skills>
              
          </div>
        </ProfileSkills>
    );
}


export default Profile;
