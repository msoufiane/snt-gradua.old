import React     from 'react';
import PropTypes from 'prop-types';
import Select    from 'react-select';

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'}
];


const serverSelect = ({input, meta: {touched, error}, ...custom}) => {
  const hasError = touched && error !== undefined;
  return (
    <div className={hasError ? 'form-group has-feedback has-error' : 'form-group has-feedback'}>
      <label htmlFor="availableMTA" style={{width: "100%"}}>Servers
        <Select isMulti options={options} />
      </label>
      {hasError && <span className="help-block"> {error} </span>}
    </div>
  );
};

serverSelect.propTypes = {
  input: PropTypes.instanceOf(Object).isRequired,
  meta: PropTypes.instanceOf(Object).isRequired,
};

export default serverSelect;


