import React     from "react";
import { Query } from 'react-apollo';
import gql       from "graphql-tag";

const GET_PERMISSIONS = gql`query{
  allPermissions{
    id
    appLabel
    model
    permissionSet{
      id
      name
      codename
    }
  }
}`;

export default () => (
  <Query query={GET_PERMISSIONS}>
    {({loading, error, data: {allPermissions}}) => {
      if (loading) return <p>Loading ...</p>;
      if (error) return <p>Error ...</p>;

      return (
        <div>
          <div className="col-md-5">
            <div className="pb-md">
              <ul className="list-group list-group-tabs">
                {allPermissions.map(permission => (
                  <li key={permission.id} className="list-group-item">
                    {permission.model} Permissions (0 / {permission.permissionSet.length})
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-7">
            <div className="tab-content">
              {allPermissions.map(permission => (
                <div key={permission.id} role="tabpanel" className="tab-pane active">
                  {permission.permissionSet.map(ps => (
                    <div key={ps.id} className="row">
                      <div className="form-group col-xs-12">
                        <div className="choice-wrapper">
                          <div className="checkbox">
                            <label htmlFor="role_name">
                              <input name="role_name" type="checkbox" />
                              {ps.name}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }}
  </Query>
);

/*
 <div>
 <div className="col-md-5">
 <div className="pb-md">
 <ul className="list-group list-group-tabs">
 <li className="list-group-item active">permission.model</li>
 <li className="list-group-item">Mghanen</li>
 </ul>
 </div>
 </div>

 <div className="col-md-7">
 <div className="tab-content">
 <div role="tabpanel" className="tab-pane active">
 <div className="row">
 <div className="form-group col-xs-12">
 <pre>Soufiane</pre>
 <div className="choice-wrapper">
 <div className="checkboxm">
 <input name="password"/>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>*/