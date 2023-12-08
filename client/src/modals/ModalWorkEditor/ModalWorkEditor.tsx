
import exitImg from "../../assets/images/modal/exit.svg";
import { Fade } from "react-awesome-reveal";

import s from "./ModalWorkEditor.module.scss";
import ActionButtons, { IActionButton } from "../../assets/components/ActionButtons/ActionButtons";
import { FC } from "react";
import { Work } from "../../assets/interfaces/interfaces";
import { useForm } from 'react-hook-form';
import TextInput from "../../assets/components/Inputs/TextInput/TextInput";

interface IModalWorkEditor {
    onClose: () => {};
    work: Work
}

const ModalWorkEditor: FC<IModalWorkEditor> = ({
    onClose,
    work
}) => {

    const actionButtons: IActionButton[] = [
        {
            role: "secondary",
            name: "Close",
            type: "button",
            styling: {
                type: "advanced",
            },
        },
        {
            role: "primary",
            name: "Save",
            type: "button",
            styling: {
                type: "advanced"
            },
        }
    ]

    const deleteButton: IActionButton[] = [
        {
            type: "button",
            styling: {
                type: "advanced",
                color: "red"
            },
            name: "Delete",
        },
    ]

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);
    console.log(errors);


    return (
        <div className={s.modal}>
            <button className={s.modal__close} onClick={() => onClose()} type="button">
                <img className={s.modal__close_image} src={exitImg} alt="Close" />
            </button>
            <div className={s.modal__header}>
                <Fade duration={100} triggerOnce={true} direction="left" cascade className={s.modal__title}>
                    Create or update work
                </Fade>
            </div>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                    <div className={s.form__content}>
                        <TextInput name="name" type="text" autoComplete="false" label="Work name" />


                        <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
                        <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />


                        <input {...register("Developer", { required: true })} type="radio" value="Yes" />
                        <input {...register("Developer", { required: true })} type="radio" value="No" />
                    </div>


                    <div className={s.form__footer}>
                        <ActionButtons position="left" actionButtons={deleteButton} />
                        <ActionButtons position="right" actionButtons={actionButtons} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalWorkEditor