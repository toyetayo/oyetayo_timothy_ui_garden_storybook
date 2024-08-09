import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  disabledBackgroundColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const modeClass = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const sizeClass = `storybook-button--${size}`;

  return (
    <button
      type="button"
      className={['storybook-button', sizeClass, modeClass].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
