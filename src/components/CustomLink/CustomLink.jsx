import Link from 'next/link';
import styles from './CustomLink.module.scss';
import cn from 'classnames';

const CustomLink = ({
  title,
  active,
  onClick,
  fullwidth,
  ...restProps
}) => {
  
  const linkClasses = cn({
    [styles.link]: true,
    [styles.active]: active,
  })
  
  return (
    <Link
      {...restProps}
      onClick={onClick}
      className={linkClasses}
    >
      {title}
    </Link>
  );
};

export default CustomLink;
