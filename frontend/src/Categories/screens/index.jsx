import React from 'react';
import { ContentWrapper } from '../../Layout/components/Wrappers';

const Categories = function Categories() {
  return (
    <ContentWrapper title="Categories">
      <div>
        Header Controlls
      </div>

      <div className="box box-clean">
        <div className="box-header">header</div>
        <div className="box-body">this is the Categories</div>
        <div className="box-footer box-footer-clean clearfix">footer</div>
      </div>

    </ContentWrapper>
   );
};

export default Categories;
