import React from 'react';
import { ContentWrapper } from '../../Layout/components/Wrappers';

const Account = function Account() {
  return (
    <ContentWrapper title="Account">
      <div>
        Header Controlls
      </div>

      <div className="box box-clean">
        <div className="box-header">header</div>
        <div className="box-body">this is the Account</div>
        <div className="box-footer box-footer-clean clearfix">footer</div>
      </div>

    </ContentWrapper>
   );
};

export default Account;
