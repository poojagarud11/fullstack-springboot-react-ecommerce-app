import React from 'react';
import PageTitle from './PageTitle';

function PageHeading(props) {
  return (
    <div className="page-heading-container">
      
      <PageTitle title="Explore Easy Stickers" />
      {props.children}
    </div>
  );
};

export default PageHeading
