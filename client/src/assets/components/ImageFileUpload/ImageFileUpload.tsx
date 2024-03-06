// https://spacejelly.dev/posts/uploading-files-in-react-from-a-form-with-drag-and-drop/

import { FC, useCallback, useEffect, useState } from "react";
import s from "./ImageFileUpload.module.scss";
import ImageLazyLoad from "../ImageLazyLoad/ImageLazyLoad";
import { useDropzone } from "react-dropzone";
import ImgFileUpload from "../../images/upload_image.svg";
import ImageChangeFileUpload from "../../images/change_upload.svg";

import { ReactComponent as ImageDeleted } from "../../images/delete.svg";
import { FieldErrors, UseFormClearErrors, UseFormSetValue } from "react-hook-form";
import { IFormInput } from "../../../modals/ModalWorkManager/ModalWorkManagerForm/ModalWorkManagerForm";

type Props = {
    urlImage: string | undefined;

    setValue: UseFormSetValue<IFormInput>;
    errors: FieldErrors<IFormInput> | undefined;
    clearErrors: UseFormClearErrors<IFormInput>
}

const ImageFileUpload: FC<Props> = ({
    clearErrors,
    urlImage,
    setValue,
    errors,
}) => {
    const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

    useEffect(() => {
        if (urlImage !== undefined) {
            setPreview(urlImage);
            setValue('image', urlImage, { shouldDirty: false })
        }
    }, [setValue, urlImage])

    const onDrop = useCallback((acceptedFiles: Array<File>) => {
        const file = new FileReader();
        file.onload = () => {
            setPreview(file.result);
        };
        file.readAsDataURL(acceptedFiles[0]);

        setValue('image', acceptedFiles[0], { shouldDirty: true });
        clearErrors(['image']);
    }, [clearErrors, setValue]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement & { files: FileList; }
        const file = new FileReader();

        file.onload = () => {
            setPreview(file.result);
        };

        setValue('image', target.files[0], { shouldDirty: true });
        clearErrors(['image']);
    }

    const helperText = errors?.image?.message as string | undefined;

    return (
        <div error-state={String(!!errors?.image)} className={s.container} {...getRootProps()}>
            <input
                {...getInputProps()}
                onInput={handleOnChange}
                onChange={handleOnChange}
                className="file-input"
                type="file"
                name="image"
                accept="image/*"
            />

            {preview && (
                <>
                    <ImageLazyLoad url={preview as string} />
                    <img
                        className={s.image_change_upload}
                        src={ImageChangeFileUpload}
                        alt="change upload"
                    />
                    <ImageDeleted
                        className={s.image_deleted}
                        onClick={(e) => {
                            e.stopPropagation();
                            setPreview(null);
                            setValue('image', undefined)
                        }}
                    />
                </>
            )}

            {!preview && (
                <img className={s.image_upload} src={ImgFileUpload} alt="upload" />
            )}

            {helperText && <p className={s.helper_text}>{helperText}</p>}

            {isDragActive && !helperText ? (
                <p className={s.helper_text}>Drop the Image here ...</p>
            ) : !preview && !helperText ? (
                <p className={s.helper_text}>Drag the Image here, or click</p>
            ) : null}
        </div>
    );
};

export default ImageFileUpload;
