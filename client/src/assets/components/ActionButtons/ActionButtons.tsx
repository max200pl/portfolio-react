import React, { ButtonHTMLAttributes, FC } from "react";
import "./ActionButtons.scss";

interface IActionButtons {
    className?: string;
    actionButtons: IActionButton[];
    position?: "bottom_center" | "right" | "left";
    offsetBottom?: number;
}

export type styleColorButton = "blue" | "yellow" | "red" | "green" | "grey";
export interface styleType {
    type: "advanced" | "link";
    color?: styleColorButton;
}

export interface IActionButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: "button" | "submit";
    role?: "primary" | "secondary";
    styling?: styleType;
    name: string;
    onClick?: () => void;
    disabled?: boolean;
}

const getStyleType = (styling: styleType | undefined) => {
    let style = "";

    if (styling !== undefined) {
        style += styling.type ?? "";
        style += styling.color ? " " + styling.color : "";
    }

    return style;
};

const ActionButtons: FC<IActionButtons> = ({
    actionButtons,
    className,
    position,
    offsetBottom,
}) => {
    return (
        <div
            style={{ marginBottom: offsetBottom }}
            buttons-position={position}
            className={`action_buttons ${className}`}
        >
            {actionButtons.map((item: IActionButton, id) => {
                const { name, role = "secondary", type = "button", disabled, onClick, styling, hidden } = item;

                return (
                    <button
                        key={id}
                        role={role}
                        type={type}
                        className="button"
                        disabled={disabled}
                        onClick={onClick}
                        style-type={getStyleType(styling)}
                        hidden-button={String(hidden)}
                    >
                        <span className="button_text">{name}</span>
                    </button>
                );
            })}
        </div>
    );
};

export default ActionButtons;
