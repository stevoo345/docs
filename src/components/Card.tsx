import {ReactNode} from "react";
import {cn} from "@site/src/lib/utils";

interface CardProps {
    children?: ReactNode;
    className?: string;
}

export const Card = ({children, className}: CardProps) => {
    return (
        <div
            className={cn("max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700", className)}>
            {children}
        </div>
    );
}