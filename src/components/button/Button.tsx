import React from 'react';
import './Button.scss';

export interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  type?: 'submit' | 'button' | 'reset';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

// HTMLButtons have "type" by default, so we only have to add "className".
interface InnerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string
}

const Button = ({size = 'md', variant = 'primary', type = 'button', text, onClick}: ButtonProps) => {
  const innerProps: InnerProps = {
    type,
    className: `btn btn-${variant}`,
  };

  if (size !== 'md') {
    innerProps.className += ` btn-${size}`;
  }

  return <button {...innerProps} onClick={onClick}>{text}</button>;
};

export default Button;
