import React from 'react';
import { ContentWrapper } from '../../components/Wrappers';

const CustomFields = function CustomFields() {
  return (
    <ContentWrapper title="Custom Fields">
      <div>
        Header Controlls
      </div>

      <div className="box box-clean">
        <div className="box-header">header</div>
        <div className="box-body">this is the Custom Fields</div>
        <div className="box-footer box-footer-clean clearfix">footer</div>
      </div>

    </ContentWrapper>
   );
};

export default CustomFields;
