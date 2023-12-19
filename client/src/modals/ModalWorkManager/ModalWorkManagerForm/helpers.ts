import { IActionButton } from "../../../assets/components/ActionButtons/ActionButtons";
import { CheckboxesTagsOptions } from "../../../assets/components/AutocompleteTagsCheckboxesMUI/AutocompleteTagsCheckboxesMUI";
import { InterfaceTech, InterfaceTechWithApply } from "../../../assets/interfaces/interfaces";
import { IFormInput } from "./ModalWorkManagerForm";

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

export const prepareDataForRequest = (data: IFormInput) => {
    return {
        ...data,
        frontTech: prepareTech(data.frontTech),
        backTech: prepareTech(data.backTech),
    }
}

export const prepareTech = (tech: CheckboxesTagsOptions) => {
    const apply = 100;

    return tech.reduce((acc, currentTech) => {
        const groupName = currentTech.group;
        const existingGroup = acc.find((groupAcc: InterfaceTechWithApply) => Object.keys(groupAcc)[0] === groupName);

        if (existingGroup) {
            existingGroup[groupName].push({ apply, name: currentTech.value });
        } else {
            acc.push({ [groupName]: [{ apply, name: currentTech.value }] });
        }

        return acc;
    }, [] as InterfaceTechWithApply[]);
};