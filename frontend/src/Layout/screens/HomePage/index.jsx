import React from 'react';
import { ContentWrapper } from '../../';

const HomePage = function HomePage() {
  return (
    <ContentWrapper title="Home Page">
      <div>
        Header Controlls
      </div>

      <div className="box box-clean">
        <div className="box-header">header</div>
        <div className="box-body">this is the Home Page</div>
        <div className="box-footer box-footer-clean clearfix">footer</div>
      </div>

    </ContentWrapper>
   );
};

export default HomePage;
