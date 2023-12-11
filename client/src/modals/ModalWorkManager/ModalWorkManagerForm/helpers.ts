import { IActionButton } from "../../../assets/components/ActionButtons/ActionButtons";
import { CheckboxesTagsOptions } from "../../../assets/components/AutocompleteTagsCheckboxesMUI/AutocompleteTagsCheckboxesMUI";
import { InterfaceTech } from "../../../assets/interfaces/interfaces";

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

export const getOptionsGroupAutocomplete = <T extends keyof InterfaceTech>(
    technologies: InterfaceTech[T]
): CheckboxesTagsOptions => {
    const optionsPrep: CheckboxesTagsOptions = [];

    technologies.flatMap(option => {
        const [group, values] = Object.entries(option)[0];

        if (values) {
            values.forEach(value => {
                optionsPrep.push({ group, value });
            });
        }

        return values;
    });

    return optionsPrep
}
