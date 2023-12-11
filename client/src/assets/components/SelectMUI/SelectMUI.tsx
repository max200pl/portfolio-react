
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const SelectMUI = ({
    className,
    name,
    label,
    margin,
    options,
    value,
    onChange,
    size,
}: {
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
        <FormControl fullWidth size={size} className={className}>
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