import { FC, useState } from "react";
import { useForm, SubmitHandler, Controller, Form } from "react-hook-form";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SelectMUI from "../../../assets/components/SelectMUI/SelectMUI";
import s from "./ModalWorkManagerForm.module.scss";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
    actionButtonsForm,
    deleteButtonForm,
    getOptionsGroupAutocomplete,
} from "./helpers";
import { Work } from "../../../assets/interfaces/interfaces";
import Data from "./data.json";
import AutocompleteTagsCheckboxes, {
    CheckboxesTagsOptions,
} from "../../../assets/components/AutocompleteTagsCheckboxesMUI/AutocompleteTagsCheckboxesMUI";
import ActionButtons, { IActionButton } from "../../../assets/components/ActionButtons/ActionButtons";

export type IFormInput = {
    name: string;
    category: string;
    client: string;
    date: Date;
    frontTech: CheckboxesTagsOptions | [];
}

interface Props {
    onClose: () => {};
    work: Work;
}

const schema = yup.object({
    name: yup.string().required(),
    client: yup.string().required(),
    category: yup.string().required(),
    date: yup.date().required(),
    frontTech: yup.array().required().of(
        yup.object({
            group: yup.string().required(),
            value: yup.string().required(),
        })
    ),
});

const ModalWorkManagerForm: FC<Props> = ({ onClose, work }) => {
    // const showFrontTech = watch("showFrontTech", false);
    // const showBackTech = watch("showBackTech", false);
    const [showFrontTech, setShowFrontTech] = useState(false);
    const [showBackTech, setShowBackTech] = useState(false);

    const { control, handleSubmit,
        formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
    } = useForm<IFormInput>({
        // mode: "onBlur",
        resolver: yupResolver(schema),
        defaultValues: {
            frontTech: [],
            name: "",
            category: "",
            client: "",
            date: undefined,
        }
    });

    const onDelete = () => {
        throw new Error("Function not implemented.");
    };

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        // async request which may result error
        alert(JSON.stringify(data))
        try {
            // await fetch()
        } catch (e) {
            // handle your error
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <div className={s.form__content}>
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            className={s["form_control"]}
                            {...field}
                            variant="outlined"
                            label="Name"
                            size="small"
                            margin="none"
                            fullWidth
                        />
                    )}
                />
                <Controller
                    name="client"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            className={s["form_control"]}
                            {...field}
                            variant="outlined"
                            label="Client"
                            size="small"
                            margin="none"
                            fullWidth
                        />
                    )}
                />

                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                        <SelectMUI
                            margin="none"
                            className={s["form_control"]}
                            label="Category"
                            value={field.value}
                            name={field.name}
                            size="small"
                            options={["Landing", "Website"]}
                            onChange={(e) => field.onChange(e.target.value)}
                        />
                    )}
                />

                <Controller
                    name="date"
                    control={control}
                    render={({ field }) => (
                        <DatePicker
                            value={field.value}
                            slotProps={{ textField: { size: "small" } }}
                            className={s["form_control"]}
                            label="Finished date"
                            onChange={(date) => field.onChange(date)}
                        />
                    )}
                />

                <FormControlLabel
                    control={
                        <Checkbox onChange={() => setShowFrontTech(!showFrontTech)} />
                    }
                    label="You use frontend technologies?"
                />

                {showFrontTech && (
                    <AutocompleteTagsCheckboxes
                        control={control}
                        name={"frontTech"}
                        options={getOptionsGroupAutocomplete(Data.frontend)}
                        label="Used Frontend Technologies"
                        placeholder="Add Technology"
                    />
                )}
            </div>


            <div className={s.form__footer}>
                <ActionButtons
                    position="left"
                    actionButtons={deleteButtonForm(onDelete)}
                />
                <ActionButtons
                    position="right"
                    actionButtons={actionButtonsForm(onClose)}
                />
            </div>
        </form>
    );
};

export default ModalWorkManagerForm;
