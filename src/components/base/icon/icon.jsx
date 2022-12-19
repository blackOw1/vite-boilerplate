import styles from './icon.module.css';
import sprite from 'assets/sprite.svg';

const Icon = ({ icon, ...rest }) => {
  const targetIcon = icon === 'menu' || `${sprite}#${icon}`;

  const iconBase = (
    <span {...rest}>
      <svg className={styles.icon}>
        <use href={targetIcon}></use>
      </svg>
    </span>
  );

  const iconMenu = (
    <span className={styles.iconMenuContainer} {...rest}>
      <span className={styles.iconMenu}></span>
    </span>
  );

  return (icon === 'menu' && iconMenu) || iconBase;
};

export default Icon;
