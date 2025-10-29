import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
   rel?: string;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  target,
}) => {
  // Base styles
  const baseStyles =
    "rounded-full font-semibold transition-transform duration-200 inline-flex items-center justify-center";

  // Size styles
  const sizeStyles: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-lg",
    lg: "px-8 py-4 text-xl",
  };

  // Variant styles
  const variantStyles: Record<string, string> = {
    primary:
      "bg-gradient-to-r from-[#0D1E4C] to-[#C48CB3] text-white hover:scale-105 shadow-lg hover:shadow-xl",
    secondary:
      "border border-[#C48CB3] text-[#0D1E4C] dark:text-[#E5C9D7] hover:bg-[#C48CB3]/10 dark:hover:bg-[#C48CB3]/20 hover:scale-105",
  };

  // Combine all classes
  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  // Render button or link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;
