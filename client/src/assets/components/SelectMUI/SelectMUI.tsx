
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FieldError } from 'react-hook-form';



const SelectMUI = ({
    className,
    name,
    label,
    margin,
    options,
    value,
    onChange,
    size,
    errors
}: {
    errors: FieldError | undefined,
    className: string | undefined
    size: "small" | "medium" | undefined
    margin: "dense" | "none" | undefined;
    name: string;
    label: string;
    options: string[];
    value: string;
    onChange: (event: SelectChangeEvent) => void;
}) => {

    return (
        <FormControl fullWidth size={size} className={className} error={!!errors}>
            <InputLabel id={name}>{label}</InputLabel>
            <Select
                margin={margin}
                labelId={name}
                id={name}
                value={value}
                label={label}
                onChange={onChange}
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectMUI