import React, { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';
import './index.css';

interface buttonProps {
  className?: string;
  type?: 'normal' | 'primary' | 'dashed' | 'link' | 'text';
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button(props: buttonProps) {
  const { className, type = 'normal', children, style, onClick } = props;

  const cls = classNames({
    'ant-btn': true,
    [`ant-btn-${type}`]: type,
    [className as string]: !!className,
  });

  return (
    <button className={cls} style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
