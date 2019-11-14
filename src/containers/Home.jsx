import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';

const Home = () => (
  <>
    <Search />
  </>
);

export default connect(null, null)(Home);
