"use client";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
	className?: string;
	variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
	size?: "sm" | "md" | "lg";
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
	children,
	className,
	variant = "primary",
	size = "md",
	leftIcon,
	rightIcon,
	...props
}: ButtonProps) => {
	const baseStyles =
		"flex items-center justify-center gap-2 font-medium transition-all rounded-md";

	const variantStyles = {
		primary: "bg-blue-600 text-white hover:bg-blue-700",
		secondary: "bg-gray-700 text-white hover:bg-gray-800",
		outline: "border border-gray-500 hover:bg-gray-100",
		ghost: "text-gray-600 hover:bg-gray-200",
		danger: "bg-red-600 text-white hover:bg-red-700",
	};

	const sizeStyles = {
		sm: "px-3 py-1 text-sm",
		md: "px-4 py-2 text-base",
		lg: "px-5 py-3 text-lg",
	};

	return (
		<button
			className={cn(
				baseStyles,
				variantStyles[variant],
				sizeStyles[size],
				className
			)}
			{...props}
		>
			{leftIcon && <span>{leftIcon}</span>}
			{children}
			{rightIcon && <span>{rightIcon}</span>}
		</button>
	);
};

export default Button;
