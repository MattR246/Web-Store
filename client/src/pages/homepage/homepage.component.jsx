import React, { Profiler } from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <Profiler id="Directory" onRender={(id, phase, actualDuration, props) => {
      console.log({
        id,
        phase,
        actualDuration,
        props
      });
    }}>
      <Directory />
    </Profiler>
  </HomePageContainer>
);


export default HomePage;
