import { InputHTMLAttributes } from "react";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "className">;

function Input({ ...props }: InputProps) {
  return (
    <input
      className="w-full bg-zinc-800 rounded py-5 px-4 text-white text-xl"
      {...props}
    />
  );
}

export { Input };
