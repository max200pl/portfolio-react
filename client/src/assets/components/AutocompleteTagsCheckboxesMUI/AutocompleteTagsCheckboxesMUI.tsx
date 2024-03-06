
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FC, useState } from 'react';
import { styled, lighten, darken } from '@mui/system';
import { Control, Controller } from 'react-hook-form';
import { IFormInput, KeysIFormInput } from '../../../modals/ModalWorkManager/ModalWorkManagerForm/ModalWorkManagerForm';

const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.primary.main,
    textTransform: "capitalize",
    backgroundColor:
        theme.palette.mode === 'light'
            ? lighten(theme.palette.primary.light, 0.85)
            : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled('ul')({
    padding: 0,
});


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export type CheckboxesTagsOptions = { group: string; value: string }[]

interface Props {
    className: string | undefined
    name: KeysIFormInput,
    label: string;
    placeholder: string;
    options: CheckboxesTagsOptions;
    control: Control<IFormInput>
}


const AutocompleteTagsCheckboxes: FC<Props> = ({ className, control, name, label, options, placeholder }) => {
    const [selectedValues, setSelectedValues] = useState<CheckboxesTagsOptions>([]);
    const [inputValue, setInputValue] = useState('');

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {

                return (
                    <Autocomplete
                        className={className}
                        isOptionEqualToValue={(option, value) => option.value === value.value}
                        onChange={(_, values) => {
                            field.onChange(values);
                            setSelectedValues(values);
                        }}
                        fullWidth={true}
                        multiple

                        value={field.value as CheckboxesTagsOptions ?? selectedValues}
                        options={options}
                        disableCloseOnSelect
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        groupBy={(option) => option.group}
                        getOptionLabel={(option) => option.value}
                        renderOption={(props, option, { selected }) => {
                            return <li {...props}>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{ marginRight: 8 }}
                                    checked={selected}
                                />
                                {option.value}
                            </li>
                        }}

                        renderInput={(params) => (
                            <TextField {...params} label={label} placeholder={placeholder} />
                        )}

                        renderGroup={(params) => (
                            <li key={params.key}>
                                <GroupHeader>{params.group}</GroupHeader>
                                <GroupItems>{params.children}</GroupItems>
                            </li>
                        )}
                    />
                )
            }} />
    )
}

export default AutocompleteTagsCheckboxes