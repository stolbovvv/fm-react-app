import './button.scss';
import PropTypes from 'prop-types';

function Button({ className, size, theme, variant, type, onClick, children, disabled }) {
  const classList = className ? `${className} ` : '';
  const classBase = 'ui-button';
  const classSize = size ? ` ${classBase}_${size}` : '';
  const classTheme = theme ? ` ${classBase}_${theme}` : '';

  return (
    <button
      className={classList + classBase + classTheme + classSize}
      type={type}
      data-variant={variant}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  theme: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  classSize: PropTypes.string,
  calssVariant: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

export default Button;
