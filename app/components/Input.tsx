"use client";
import { cn } from "@/lib/utils";
import { ChangeEvent, ChangeEventHandler } from "react";

type InputProps = {
	className?: string;
	type?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	value?: string;
	error?: string;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	disabled?: boolean;
};

const Input = ({
	className,
	type = "text",
	onChange,
	onFocus,
	onBlur,
	placeholder,
	value,
	error,
	disabled,
}: InputProps) => {
	return (
		<input
			type={type}
			className={cn(
				`${className} w-60 h-12 bg-white border rounded-md px-4 py-2 outline-none focus:ring-1 focus:ring-gray-700 transition-all ${
					error ? "border-red-500" : "border-gray-500"
				}`
			)}
			onChange={onChange}
			value={value}
			placeholder={placeholder}
			onFocus={onFocus}
			onBlur={onBlur}
			disabled={disabled}
		/>
	);
};

export default Input;
