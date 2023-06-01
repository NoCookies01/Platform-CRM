import * as React from 'react';
import { connect } from 'react-redux';
import { Table } from './table/Table';

export const Home = () => {

  return(
    <>
      <Table/>
    </>
  )
}

connect()(Home);
