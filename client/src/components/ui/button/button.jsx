import './button.scss';

function Button({ className, theme, type = 'button', iconLeft = null, iconRight = null, onClick, children }) {
  const classMain = 'button';
  const classList = className ? `${className} ` : '';
  const classTheme = theme ? ` ${classMain}_${theme}` : '';

  return (
    <button className={classList + classMain + classTheme} onClick={onClick} type={type}>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}

export default Button;
