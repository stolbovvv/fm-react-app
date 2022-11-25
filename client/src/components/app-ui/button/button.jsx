import './button.scss';
import PropTypes from 'prop-types';

function Button({ className, size, theme, view, type, onClick, children, disabled }) {
  const classBase = view ? `ui-button-${view}` : 'ui-button';
  const classSize = size ? ` ${classBase}_size-${size}` : '';
  const classTheme = theme ? ` ${classBase}_theme-${theme}` : '';
  const classNested = className ? `${className} ` : '';

  return (
    <button
      className={classNested + classBase + classTheme + classSize}
      type={type}
      data-variant={view}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  view: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

export default Button;
