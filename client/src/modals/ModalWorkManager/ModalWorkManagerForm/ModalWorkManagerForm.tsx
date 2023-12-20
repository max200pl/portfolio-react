import { FC, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button, Checkbox, FormControlLabel, Stack, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SelectMUI from "../../../assets/components/SelectMUI/SelectMUI";
import s from "./ModalWorkManagerForm.module.scss";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
    getOptionsGroupAutocomplete,
} from "./helpers";
import { IWork, } from "../../../pages/Intro/Works/helpers";
import AutocompleteTagsCheckboxes, {
    CheckboxesTagsOptions,
} from "../../../assets/components/AutocompleteTagsCheckboxesMUI/AutocompleteTagsCheckboxesMUI";

import FileUpload from "../../../assets/components/FileUpload/FileUpload";
import { useCreateWork, useTechnologies } from "../../../assets/api/api";
import { prepareDataForRequest } from './helpers';
import DeleteIcon from '@mui/icons-material/Delete';

export type IFormInput = Pick<IWork, 'name' | 'link' | 'category' | 'client' | 'dateFinished'> & {
    frontTech: CheckboxesTagsOptions | [];
    backTech: CheckboxesTagsOptions | [];
}

export type KeysIFormInput = keyof IFormInput;

const schema = yup.object({
    name: yup.string().required("Please write Name Project"),
    client: yup.string(),
    category: yup.string().required("Please write Name Project"),
    dateFinished: yup.date(),
    link: yup.string(),
    frontTech: yup
        .array()
        .required()
        .of(
            yup.object({
                group: yup.string().required(),
                value: yup.string().required(),
            })
        ),
    backTech: yup
        .array()
        .required()
        .of(
            yup.object({
                group: yup.string().required(),
                value: yup.string().required(),
            })
        ),
});

interface Props {
    onClose: () => {};
    work: IWork;
}

const ModalWorkManagerForm: FC<Props> = ({ onClose, work }) => {
    const [showFrontTech, setShowFrontTech] = useState(false);
    const [showBackTech, setShowBackTech] = useState(false);
    const [image, setImage] = useState<File | undefined>();
    const { mutate } = useCreateWork();

    const { data } = useTechnologies();

    const {
        control,
        handleSubmit,
        formState: {
            errors,
            // isDirty,
            // isSubmitting,
            // touchedFields,
            // submitCount
        },
    } = useForm<IFormInput>({
        mode: "onBlur",
        resolver: yupResolver(schema),
        defaultValues: {
            name: work.name,
            link: work.link,
            category: work.category,
            client: work.client,
            dateFinished: work.dateFinished,
            frontTech: work.frontTech,
            backTech: work.backTech,
        },
    });

    const onDelete = () => {
        throw new Error("Function not implemented.");
    };

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const paperedData = prepareDataForRequest(data);

        console.log(paperedData, "<<<<<paperedData");

        let formData = new FormData();

        formData.append("image", image as File);
        for (const key in paperedData) {
            formData.append(key, (paperedData as any)[key]);
        }

        try {
            await mutate(formData as any);
            console.log("Work created successfully");
        } catch (error) {
            console.error("Error creating work:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <div className={s.form__header}>
                <FileUpload imageHandle={setImage} />
            </div>

            <div className={s.form__content + " custom_scroll"}>
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
                            error={!!errors.name}
                            helperText={errors?.name?.message}
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
                            error={!!errors.client}
                            helperText={errors?.client?.message}
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
                            errors={errors.category}
                        />
                    )}
                />

                <Controller
                    name="link"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            className={s["form_control"]}
                            {...field}
                            variant="outlined"
                            label="Link"
                            size="small"
                            margin="none"
                            fullWidth
                            error={!!errors.link}
                            helperText={errors?.link?.message}
                        />
                    )}
                />

                <Controller
                    name="dateFinished"
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
                        className={s["form_control"]}
                        control={control}
                        name={"frontTech"}
                        options={getOptionsGroupAutocomplete(data.frontend)}
                        label="Frontend Technologies"
                        placeholder="Add Technology"
                    />
                )}

                <FormControlLabel
                    control={<Checkbox onChange={() => setShowBackTech(!showBackTech)} />}
                    label="Are You used Backend technologies?"
                />

                {showBackTech && (
                    <AutocompleteTagsCheckboxes
                        className={s["form_control"]}
                        control={control}
                        name="backTech"
                        options={getOptionsGroupAutocomplete(data.backend)}
                        label="Backend Technologies"
                        placeholder="Add Technology"
                    />
                )}
            </div>

            <div className={s.form__footer}>
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => onDelete()}>
                        Delete
                    </Button>

                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" onClick={() => onClose()}>
                            Close
                        </Button>
                        <Button variant="contained" type="submit">
                            Save
                        </Button>
                    </Stack>
                </Stack>
            </div>
        </form>
    );
};

export default ModalWorkManagerForm;
