// https://spacejelly.dev/posts/uploading-files-in-react-from-a-form-with-drag-and-drop/

import { useCallback, useState } from "react";
import s from "./FileUpload.module.scss";
import ImageLazyLoad from "../ImageLazyLoad/ImageLazyLoad";
import { useDropzone } from "react-dropzone";
import ImageFileUpload from "../../images/upload_image.svg"
import ImageChangeFileUpload from "../../images/change_upload.svg"


import { ReactComponent as ImageDeleted } from "../../images/delete.svg";

const FileUpload = () => {
    const [file, setFile] = useState<File | undefined>();
    const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

    const onDrop = useCallback((acceptedFiles: Array<File>) => {
        const file = new FileReader();
        file.onload = function () {
            setPreview(file.result);
        }
        file.readAsDataURL(acceptedFiles[0]);
    }, [])

    const { getRootProps, getInputProps, isDragActive, } = useDropzone({ onDrop, });

    const handleFileChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement & {
            files: FileList;
        };

        setFile(target.files[0]);

        const file = new FileReader();

        file.onload = function () {
            setPreview(file.result);
        }

        file.readAsDataURL(target.files[0]);
    };



    return (
        <div className={s.container} {...getRootProps()}>
            <input
                {...getInputProps()}
                className="file-input"
                type="file"
                name="image"
                onChange={handleFileChange}
                accept="image/*"
            />

            {preview &&
                <>
                    <ImageLazyLoad url={preview as string} />
                    <img className={s.image_change_upload} src={ImageChangeFileUpload} alt="change upload" />
                    <ImageDeleted className={s.image_deleted} onClick={(e) => {
                        e.stopPropagation();

                        setFile(undefined)
                        setPreview(null)
                    }} />
                </>
            }

            {!preview &&
                <img className={s.image_upload} src={ImageFileUpload} alt="upload" />
            }

            {
                isDragActive ?
                    <p className={s.helper_text}>Drop the Image here ...</p>
                    : !preview ? <p className={s.helper_text} >Drag the Image here, or click</p> : null
            }

        </div>
    );
};

export default FileUpload;
