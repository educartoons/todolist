import { cva, type VariantProps } from "class-variance-authority";

const button = cva("px-4 py-2 text-xl rounded", {
  variants: {
    variant: {
      primary: "bg-yellow-500 text-black",
      secondary: "bg-green-500 text-black",
      outlined: "border-2 border-white text-white",
    },
    width: {
      regular: "w-auto",
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "outlined",
    width: "regular",
  },
});

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> &
  VariantProps<typeof button>;

function Button({ variant, width, children, ...rest }: ButtonProps) {
  return (
    <button className={button({ variant, width })} {...rest}>
      {children}
    </button>
  );
}

export { Button };
