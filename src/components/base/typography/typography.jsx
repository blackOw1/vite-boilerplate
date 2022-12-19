import { createElement } from 'react';

import styles from './typography.module.css';

const Typography = ({ children, className, variant }) => {
  const fontClass = styles.font;
  const classes = (className && `${fontClass} ${className}`) || fontClass;

  return createElement(variant, { className: classes }, { children });
};

export default Typography;
