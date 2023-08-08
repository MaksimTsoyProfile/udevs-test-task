import cn from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  children,
  type = 'button',
  onClick,
  fullwidth,
  ...restProps
}) => {
  const buttonClasses = cn({
    [styles.button]: true,
    [styles.fullwidth]: fullwidth,
  });
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      {...restProps}
    >
      {
        ...children
      }
    </button>
  );
};

export default Button;
