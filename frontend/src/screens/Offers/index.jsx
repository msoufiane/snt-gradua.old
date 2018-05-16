import React from 'react';
import { ContentWrapper } from '../../Layout/components/Wrappers';

const Offers = function Offers() {
  return (
    <ContentWrapper title="Offers">
      <div>
        Header Controlls
      </div>

      <div className="box box-clean">
        <div className="box-header">header</div>
        <div className="box-body">this is the Offers</div>
        <div className="box-footer box-footer-clean clearfix">footer</div>
      </div>

    </ContentWrapper>
   );
};

export default Offers;
