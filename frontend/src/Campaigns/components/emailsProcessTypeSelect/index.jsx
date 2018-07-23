import React     from 'react';
import PropTypes from 'prop-types';

const emailsProcessTypeSelect = ({input, meta: {touched, error}, ...custom}) => {
  const hasError = touched && error !== undefined;
  return (
    <div className={hasError ? 'form-group has-feedback has-error' : 'form-group has-feedback'}>
      <label htmlFor="splitEmailsBySelect" style={{width: "100%"}}>Emails Process Type
        <select name="splitEmailsBySelect" className="form-control">
          <option>option 1</option>
          <option>option 2</option>
          <option>option 3</option>
          <option>option 4</option>
          <option>option 5</option>
        </select>
      </label>
      {hasError && <span className="help-block"> {error} </span>}
    </div>
  );
};

emailsProcessTypeSelect.propTypes = {
  input: PropTypes.instanceOf(Object).isRequired,
  meta: PropTypes.instanceOf(Object).isRequired,
};

export default emailsProcessTypeSelect;
