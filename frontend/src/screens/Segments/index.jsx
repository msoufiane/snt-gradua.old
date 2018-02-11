import React from 'react';
import Body from '../../containers/Content/Body';
import BreadCrumb from '../../containers/Content/BreadCrumb';

const Segments = function Segments() {
  return (
    <Body headerTitle='Segments' headerControls={BreadCrumb}>
      <div className="row">
        <div className="col-xs-12">
          <div className="box box-clean">
            <div className="box-header">header</div>
            <div className="box-body">this is the Segments</div>
            <div className="box-footer box-footer-clean clearfix">footer</div>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Segments;
