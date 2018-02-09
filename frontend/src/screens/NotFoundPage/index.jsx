import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="row">
    <div className="col-xs-12">
      <div className="box">
        <div className="box-header with-border">404 </div>
        <div className="box-body"><h4>Page Not Found</h4></div>
        <div className="box-footer clearfix"><Link to="/"> Go back to homepage </Link></div>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
