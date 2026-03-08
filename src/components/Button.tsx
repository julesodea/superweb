interface ButtonProps {
  children: React.ReactNode;
  variant?: "light" | "dark"; // Optional variant prop with union type
  className?: string; // Optional additional classes
  href?: string; // Optional href prop for link behavior
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "light",
  className,
  href,
  type = "button",
}) => {
  const baseStyles =
    "group flex items-center align-center justify-center gap-2 font-medium leading-normal px-4 py-2 rounded-3xl transition-all duration-200";

  const variantStyles = {
    light: "bg-slate-100 text-slate-800",
    dark: "bg-amber-300 text-slate-800",
  };

  const Tag = href ? "a" : "button";
  const isButton = Tag === "button";

  return (
    <Tag
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`}
      {...(isButton && { type: type })}
    >
      {children}
    </Tag>
  );
};

export default Button;
