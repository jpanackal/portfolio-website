import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Web Portfolio
      </SectionTitle>
      <SectionText>
        Hey I'm Jacob, a fresh computer science graduate from University of Wisconsin Madison. Recently, I developed a fascination for web development and I am 
        most interested in working with front-end technologies
      </SectionText>
      <Button onClick={() => window.location = 'https://my.indeed.com/p/jacobp-6b4sr9b'}>Résumé</Button>
    </LeftSection>
  </Section>
);

export default Hero;