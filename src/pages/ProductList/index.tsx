import React from 'react';

//GENERAL COMPONENTS
import List from '../../components/List';
import { itemData } from './itemData';

const Home: React.FC = () => {
  return (
    <>
      <List items={itemData} action={(item) => {console.log(item)}}/>
    </>
  );
};

export default Home;