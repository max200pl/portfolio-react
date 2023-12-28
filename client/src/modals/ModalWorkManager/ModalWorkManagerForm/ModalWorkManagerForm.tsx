import { yupResolver } from "@hookform/resolvers/yup";
import {
    Button,
    Checkbox,
    FormControlLabel,
    Stack,
    TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FC, useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import AutocompleteTagsCheckboxes, {
    CheckboxesTagsOptions,
} from "../../../assets/components/AutocompleteTagsCheckboxesMUI/AutocompleteTagsCheckboxesMUI";
import SelectMUI from "../../../assets/components/SelectMUI/SelectMUI";
import { IWork, InterfaceTechWithApply } from "../../../assets/interfaces/interfaces";
import {
    getOptionsGroupAutocomplete,
    prepareTech,
} from "./ModalWorkManagerForm.helpers";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";
import {
    TypeActionForm,
    SaveWork,
    useCreateWorkMutation,
    useGetTechnologiesQuery,
    useUpdateWorkMutation,
} from "../../../assets/api/api";
import ImageFileUpload from "../../../assets/components/ImageFileUpload/ImageFileUpload";
import { getFolderName, getImageName } from "../../../assets/helpers/helpers";

import s from "./ModalWorkManagerForm.module.scss";
import { getDirtyFields } from "../../../assets/helpers/reactHookForm.helpers";

export type IFormInput = {
    frontTech: CheckboxesTagsOptions | [];
    backTech: CheckboxesTagsOptions | [];
    _id?: string;
    name: string;
    dateFinished?: Date;
    category: string;
    client?: string;
    link?: string;
    image: any;
};

export type KeysIFormInput = keyof IFormInput;

const schema = yup.object({
    name: yup.string().matches(/[^\d]/, 'Field cannot consist only of digits').required("Please write Name Project"),
    client: yup.string(),
    category: yup.string().required("Please write Name Project"),
    dateFinished: yup.date(),
    link: yup.string(),
    image: yup
        .mixed()
        .required("Please upload an image")
        .test("fileType", "Please upload a valid image", (value) => {
            if (!value) return false;
            if (value instanceof File) {
                return value.type.startsWith("image/");
            } else if (typeof value === 'string' && value.startsWith('http')) {
                return true;
            }
            return false;
        }),
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
    const [typeActionForm] = useState<TypeActionForm>(
        work === undefined ? "create" : "update"
    );
    const [showFrontTech, setShowFrontTech] = useState(false);
    const [showBackTech, setShowBackTech] = useState(false);

    const { mutate: createWork } = useCreateWorkMutation();
    const { mutate: updateWork } = useUpdateWorkMutation();

    const [urlImage, setUrlImage] = useState<string | undefined>();
    const { data: technologies, status: statusTechnologies } =
        useGetTechnologiesQuery();

    useEffect(() => {
        if (typeActionForm === "update" && work?.cardImage !== undefined) {
            const nameCardImage = work.cardImage.name;
            const name = getImageName(nameCardImage);
            const project = getFolderName(nameCardImage);

            setUrlImage(
                `http://localhost:8000/works/image?project=${project}&name=${name}`
            );
        }
    }, [typeActionForm, work]);

    useEffect(() => {
        if (statusTechnologies === "success") {
            setShowFrontTech(work?.frontTech.length > 0);
            setShowBackTech(work?.backTech.length > 0);
        }
    }, [statusTechnologies, work?.backTech.length, work?.frontTech.length]);

    const {
        control,
        handleSubmit,
        setValue,
        clearErrors,
        formState: {
            errors,
            dirtyFields,
        },
    } = useForm<IFormInput>({
        mode: "onBlur",
        resolver: yupResolver(schema),
        defaultValues: {
            image: undefined,
            name: work?.name ?? undefined,
            link: work?.link ?? undefined,
            category: work?.category ?? undefined,
            client: work?.client ?? undefined,
            dateFinished: work?.dateFinished ? work.dateFinished : undefined,
            frontTech: work?.frontTech
                ? getOptionsGroupAutocomplete(work.frontTech)
                : [],
            backTech: work?.backTech
                ? getOptionsGroupAutocomplete(work.backTech)
                : [],
        },
    });

    const onDelete = () => {
        throw new Error("Function not implemented.");
    };

    type DirtyFields<T> = Partial<
        Readonly<{
            [K in keyof T]?: boolean | [] | { group?: boolean; value?: boolean }[];
        }>
    >;

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            let result;

            if (typeActionForm === "create") {
                result = await createWork({
                    ...data,
                    frontTech: prepareTech(data.frontTech),
                    backTech: prepareTech(data.backTech),
                } as SaveWork);
            }

            if (typeActionForm === "update") {
                const dataForm: IFormInput = data;
                const dirtyFieldsForm: DirtyFields<IFormInput> = dirtyFields;

                const updatedFields: Partial<IFormInput> = getDirtyFields<
                    Partial<IFormInput>
                >(dataForm, dirtyFieldsForm);

                const prepareBackTech = updatedFields.backTech !== undefined
                    ? {
                        backTech: prepareTech(
                            updatedFields.backTech as CheckboxesTagsOptions
                        ),
                    }
                    : {};
                const prepareFrontTech = updatedFields.frontTech !== undefined
                    ? {
                        frontTech: prepareTech(
                            updatedFields.frontTech as CheckboxesTagsOptions
                        ),
                    }
                    : {};

                result = await updateWork({
                    _id: work._id,
                    ...updatedFields,
                    ...prepareBackTech as { backTech: InterfaceTechWithApply[] },
                    ...prepareFrontTech as { frontTech: InterfaceTechWithApply[] }
                } as Partial<SaveWork>)
            }

            console.log("Work created successfully", result);
        } catch (error) {
            console.error("Error creating work:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <div className={s.form__header}>
                <ImageFileUpload
                    clearErrors={clearErrors}
                    errors={errors}
                    setValue={setValue}
                    urlImage={urlImage}
                />
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
                            value={field.value ? dayjs(field.value) : undefined}
                            slotProps={{ textField: { size: "small" } }}
                            className={s["form_control"]}
                            label="Finished date"
                            onChange={(date) => field.onChange(date)}
                        />
                    )}
                />

                {typeActionForm === "create" && (
                    <FormControlLabel
                        label="Did you use frontend technologies?"
                        control={
                            <Checkbox onChange={() => setShowFrontTech(!showFrontTech)} />
                        }
                    />
                )}

                {showFrontTech && statusTechnologies === "success" && (
                    <AutocompleteTagsCheckboxes
                        className={s["form_control"]}
                        control={control}
                        name={"frontTech"}
                        options={getOptionsGroupAutocomplete(technologies?.frontend)}
                        label="Frontend Technologies"
                        placeholder="Add Technology"
                    />
                )}

                {typeActionForm === "create" && (
                    <FormControlLabel
                        control={
                            <Checkbox onChange={() => setShowBackTech(!showBackTech)} />
                        }
                        label="Did you use backend technologies?"
                    />
                )}

                {showBackTech && statusTechnologies === "success" && (
                    <AutocompleteTagsCheckboxes
                        className={s["form_control"]}
                        control={control}
                        name="backTech"
                        options={getOptionsGroupAutocomplete(technologies?.backend)}
                        label="Backend Technologies"
                        placeholder="Add Technology"
                    />
                )}
            </div>

            <div className={s.form__footer}>
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Button
                        className="action_button_primary"
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        onClick={() => onDelete()}
                    >
                        Delete
                    </Button>

                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" onClick={() => onClose()}>
                            Close
                        </Button>
                        <Button
                            className="action_button_primary"
                            variant="contained"
                            type="submit"
                        >
                            Save
                        </Button>
                    </Stack>
                </Stack>
            </div>
        </form>
    );
};

export default ModalWorkManagerForm;
