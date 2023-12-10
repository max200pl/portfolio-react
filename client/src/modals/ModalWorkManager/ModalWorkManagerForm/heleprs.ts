import { IActionButton } from "../../../assets/components/ActionButtons/ActionButtons";

export const actionButtonsForm = (
    onClose: () => {},
): IActionButton[] => [
        {
            role: "secondary",
            name: "Close",
            type: "button",
            onClick: () => onClose(),
            styling: {
                type: "advanced",
            },
        },
        {
            role: "primary",
            name: "Save",
            type: "submit",
            styling: {
                type: "advanced",
            },
        },
    ];

export const deleteButtonForm = (onDelete: () => {}): IActionButton[] => [
    {
        onClick: () => onDelete(),
        type: "button",
        styling: {
            type: "advanced",
            color: "red",
        },
        name: "Delete",
    },
];
