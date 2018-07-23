import React     from 'react';
import PropTypes from 'prop-types';

const availableMTASelect = ({input, meta: {touched, error}, ...custom}) => {
  const hasError = touched && error !== undefined;
  return (
    <div className={hasError ? 'form-group has-feedback has-error' : 'form-group has-feedback'}>
      <label htmlFor="availableMTA" style={{width: "100%"}}>Available MTAs
        <select name="availableMTA" multiple className="form-control">
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

availableMTASelect.propTypes = {
  input: PropTypes.instanceOf(Object).isRequired,
  meta: PropTypes.instanceOf(Object).isRequired,
};

export default availableMTASelect;
