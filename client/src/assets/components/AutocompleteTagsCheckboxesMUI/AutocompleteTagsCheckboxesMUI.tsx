
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FC } from 'react';
import { styled, lighten, darken } from '@mui/system';

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
    name: string,
    label: string;
    placeholder: string;
    options: CheckboxesTagsOptions;
}


const AutocompleteTagsCheckboxes: FC<Props> = ({ name, label, options, placeholder }) => {
    return (
        <Autocomplete
            fullWidth={true}
            multiple
            id={name}
            options={options}
            disableCloseOnSelect
            onChange={(event, values) => console.log(values)}
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
    );
}

export default AutocompleteTagsCheckboxes