interface ButtonProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "ghost";
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "light",
  className,
  href,
  type = "button",
  disabled = false,
}) => {
  const baseStyles =
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold leading-normal transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8BD3F] active:translate-y-px active:scale-[0.99]";

  const variantStyles = {
    light:
      "bg-[#F6F3EC] text-[#101113] shadow-[0_10px_30px_rgba(246,243,236,0.12)] hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_40px_rgba(246,243,236,0.18)]",
    dark:
      "bg-[#E8BD3F] text-[#101113] shadow-[0_12px_32px_rgba(232,189,63,0.22)] hover:-translate-y-0.5 hover:bg-[#f1c94f] hover:shadow-[0_18px_42px_rgba(232,189,63,0.3)]",
    ghost:
      "border border-current/15 bg-transparent hover:-translate-y-0.5 hover:bg-current/5",
  };

  const Tag = href ? "a" : "button";
  const isButton = Tag === "button";

  return (
    <Tag
      href={href}
      className={`${baseStyles} ${disabled ? "pointer-events-none opacity-60" : ""} ${variantStyles[variant]} ${className || ""}`}
      {...(isButton && { type, disabled })}
    >
      {children}
    </Tag>
  );
};

export default Button;
