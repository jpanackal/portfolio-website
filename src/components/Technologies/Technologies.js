import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've have been introduced to a range of technologies in the web development space.
        Here are a few.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size='3rem' />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Familiar with <br/>
              React.js, HTML5, CSS, JavaScript, Bootstrap
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size='3rem' />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
            Familiar with <br/>
              SQL, Python, C#, Java
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size='3rem' />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
            Familiar with <br/>
              Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <br/>
      <SectionDivider />
      
  </Section>
  
);

export default Technologies;
