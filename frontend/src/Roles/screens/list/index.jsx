import React from 'react';
import { Link } from 'react-router-dom';
import { ContentWrapper } from '../../../Layout/components/Wrappers';

const Roles = function Roles() {
  return (
    <ContentWrapper title="Roles">
      <Link className="btn btn-default" to="/roles/new" style={{ marginTop : '20px', marginBottom : '10px'}}>
        <span><i className="fa fa-plus" /> <span className="hidden-xs hidden-sm">New</span></span>
      </Link>

      <div className="box box-clean">
        <div className="box-header">header</div>
        <div className="box-body">this is the Roles</div>
        <div className="box-footer box-footer-clean clearfix">footer</div>
      </div>

    </ContentWrapper>
   );
};

export default Roles;
