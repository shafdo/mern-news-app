import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className: string;
  children: React.ReactNode;
};

const Button = ({ className, children }: ButtonProps) => {
  return <button className={className}>{children}</button>;
};

export default Button;
