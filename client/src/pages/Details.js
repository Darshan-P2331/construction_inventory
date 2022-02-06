import React from 'react';
import Requests from '../components/Requests';
import Transactions from '../components/Transactions';

const Details = (props) => {
    
  return <div>
      <Requests site_id={props.match.params.id} />

      <Transactions site_id={props.match.params.id} />
  </div>;
};

export default Details;
