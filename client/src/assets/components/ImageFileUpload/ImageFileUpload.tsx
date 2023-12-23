// https://spacejelly.dev/posts/uploading-files-in-react-from-a-form-with-drag-and-drop/

import { Dispatch, FC, useCallback, useEffect, useState } from "react";
import s from "./ImageFileUpload.module.scss";
import ImageLazyLoad from "../ImageLazyLoad/ImageLazyLoad";
import { useDropzone } from "react-dropzone";
import ImgFileUpload from "../../images/upload_image.svg";
import ImageChangeFileUpload from "../../images/change_upload.svg";

import { ReactComponent as ImageDeleted } from "../../images/delete.svg";
import { SetStateAction } from "../../interfaces/interfaces.helpers";


type Props = {
    urlImage: string | undefined;
    imageHandle: Dispatch<SetStateAction<File | undefined>>
}

const ImageFileUpload: FC<Props> = ({
    imageHandle,
    urlImage,
}) => {
    const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

    useEffect(() => {
        if (urlImage !== undefined) {
            setPreview(urlImage);
        }
    }, [urlImage])

    const onDrop = useCallback((acceptedFiles: Array<File>) => {
        const file = new FileReader();
        file.onload = () => {
            setPreview(file.result);
        };
        file.readAsDataURL(acceptedFiles[0]);
        imageHandle(acceptedFiles[0])
    }, [imageHandle]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement & { files: FileList; }
        const file = new FileReader();

        file.onload = () => {
            setPreview(file.result);
        };

        imageHandle(target.files[0]);
    }

    return (
        <div className={s.container} {...getRootProps()}>
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
                        }}
                    />
                </>
            )}

            {!preview && (
                <img className={s.image_upload} src={ImgFileUpload} alt="upload" />
            )}

            {isDragActive ? (
                <p className={s.helper_text}>Drop the Image here ...</p>
            ) : !preview ? (
                <p className={s.helper_text}>Drag the Image here, or click</p>
            ) : null}
        </div>
    );
};

export default ImageFileUpload;
