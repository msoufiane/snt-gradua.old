import React from 'react';
import { ContentWrapper } from '../../components/Wrappers';

const Configuration = function Configuration() {
  return (
    <ContentWrapper title="Configuration">
      <div>
        Header Controlls
      </div>

      <div className="box box-clean">
        <div className="box-header">header</div>
        <div className="box-body">this is the Configuration</div>
        <div className="box-footer box-footer-clean clearfix">footer</div>
      </div>

    </ContentWrapper>
   );
};

export default Configuration;
