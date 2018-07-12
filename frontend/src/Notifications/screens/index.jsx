import React from 'react';
import { ContentWrapper } from '../../Layout/components/Wrappers';

const Notifications = function Notifications() {
  return (
    <ContentWrapper title="Notifications">
      <div>
        Header Controlls
      </div>

      <div className="box box-clean">
        <div className="box-header">header</div>
        <div className="box-body">this is the Notifications</div>
        <div className="box-footer box-footer-clean clearfix">footer</div>
      </div>

    </ContentWrapper>
   );
};

export default Notifications;
