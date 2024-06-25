import { cloneElement } from "react";

interface LinkButtonProps {
    href: string;
    label: string;
    icon?: JSX.Element;
    iconPosition?: "left" | "right";
}

export default function LinkButton(props: LinkButtonProps) {
    const iconPosition = props.iconPosition ? props.iconPosition : "left";
    const iconHorizontalMargin = iconPosition === "left" ? "mr-2" : "ml-2";
    const clonedClassAddedIcon = props.icon ? cloneElement(props.icon, { size: "1.5rem", className: `  ${iconHorizontalMargin}` }) : null;
    return (
        <a href={props.href} className="flex items-center justify-center  text-base font-medium outline outline-1 outline-gray-600 dark:outline-gray-300 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg"
        >
            {iconPosition === "left" && clonedClassAddedIcon}
            <span   >{props.label}</span>
            {iconPosition === "right" && clonedClassAddedIcon}
        </a>
    );
}