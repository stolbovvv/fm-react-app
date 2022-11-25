import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { Warning } from 'phosphor-react';
import './input.scss';

function Label({ className, htmlFor, text }) {
  return (
    <label className={`${className}__label`} htmlFor={htmlFor}>
      {text}
    </label>
  );
}

function Error({ className, text }) {
  return (
    <div className={`${className}__error`}>
      <span className={`${className}__error-icon`}>{<Warning size={16} weight={'bold'} />}</span>
      <span className={`${className}__error-message`}>Error: {text}</span>
    </div>
  );
}

function Input({ className, label, id, name, type, placeholder, icon, error, onChange, value }) {
  const iid = id ? id : uniqueId('input_auto_id_');
  const classBase = 'ui-input';
  const classList = className ? `${className} ` : '';

  return (
    <div className={classList + classBase}>
      {label ? <Label className={classBase} htmlFor={iid} text={label} /> : null}
      <div className={`${classBase}__wrapper`}>
        <span className={`${classBase}__icon`}>{icon}</span>
        <input
          className={`${classBase}__input`}
          id={iid}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
      {error.isErr ? <Error className={classBase} text={error.textErr} /> : null}
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.shape({
    isErr: PropTypes.bool,
    textErr: PropTypes.string,
  }),
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  error: {
    isErr: false,
    textErr: '',
  },
};

export default Input;
