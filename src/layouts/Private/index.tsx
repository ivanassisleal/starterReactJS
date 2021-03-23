import React from 'react';
import Header from '../../components/Header';

const Private: React.FC = (props) => {
  return (
   <>
    <Header/>
    <div>{props.children}</div>  
   </>
   );
}

export default Private;