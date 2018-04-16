import React from 'react';
import { ContentWrapper } from '../../components/Wrappers';

const Segments = function Segments() {
  return (
    <ContentWrapper title="Segments">
      <div>
        Header Controlls
      </div>

      <div className="box box-clean">
        <div className="box-header">header</div>
        <div className="box-body">this is the Segments</div>
        <div className="box-footer box-footer-clean clearfix">footer</div>
      </div>

    </ContentWrapper>
   );
};

export default Segments;
