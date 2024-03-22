import { ButtonHTMLAttributes } from "react";

type ButtonVariants = keyof typeof variants;

type ButtonProps = {
  variant: ButtonVariants;
  children: React.ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const variants = {
  primary: "bg-yellow-500 rounded px-5 py-2",
  secondary: "bg-green-500 rounded px-5 py-2",
  outlined: "border-2 border-white text-white rounded px-5 py-2",
};

function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <button className={`${variants[variant]}`} {...rest}>
      {children}
    </button>
  );
}

export { Button };
