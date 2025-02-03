import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const H1 = ({
	children,
	className,
}: {
	children?: ReactNode;
	className?: string;
}) => {
	return <h1 className={cn(`text-5xl ${className}`)}>{children}</h1>;
};

export default H1;
