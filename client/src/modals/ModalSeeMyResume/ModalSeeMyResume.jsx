/* eslint-disable no-unused-vars */
// How To Generate PDF From HTML Using Javascript
//  https://techsolutionstuff.com/post/how-to-generate-pdf-from-html-using-javascript

import s from "././ModalSeeMyResume.module.scss";
import exitImg from "../../assets/images/modal/exit.svg";
import Resume from "./Resume/Resume";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Html2Pdf from "js-html2pdf";
import ModalSeeMyResumeActionBar from "./ModalSeeMyResumeActionBar";

import ModalHireMe from "../ModalHireMe/ModalHireMe";
import Modal from "../../assets/components/Modal/Modal";

const nameFile = "Maksym_Poskannyi_Frontend_Developer_Resume";

const ModalSeeMyResume = ({ isOpen, handleClose }) => {
    const [isPrinting, setIsPrinting] = useState(false);
    const [isOpenHireMeModal, setIsOpenHireMeModal] = useState(false);

    const componentRef = useRef();
    const promiseResolveRef = useRef(null);

    useEffect(() => {
        if (isPrinting && promiseResolveRef.current) {
            promiseResolveRef.current();
        }
    }, [isPrinting]);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: nameFile,
        onBeforeGetContent: () => {
            return new Promise((resolve) => {
                promiseResolveRef.current = resolve;
                setIsPrinting(true);
            });
        },
        onAfterPrint: () => {
            promiseResolveRef.current = null;
            setIsPrinting(false);
        },
    });

    const handleSavePDF = useReactToPrint({
        content: () => componentRef.current,
        removeAfterPrint: true,
        onBeforeGetContent: () => {
            return new Promise((resolve) => {
                promiseResolveRef.current = resolve;
                setIsPrinting(true);
            });
        },
        print: async (printIframe) => {
            const document = printIframe.contentDocument;
            if (document) {
                const html = document.getElementById("RESUME");
                console.log(html);
                const exporter = new Html2Pdf(html, {
                    margin: 0,
                    fontWeight: 16,
                    filename: nameFile,
                    image: { type: "jpeg", quality: 1 },
                    html2canvas: { scale: 3 },
                    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
                });
                exporter.getPdf(true);
            }
        },
        onAfterPrint: () => {
            promiseResolveRef.current = null;
            setIsPrinting(false);
        },
    });

    return (
        <div className={s.modal__dialog} onClick={(e) => e.stopPropagation()}>
            <div className={s.modal__content}>
                <button className={s.modal__close} onClick={handleClose} type="button">
                    <img className={s.modal__close_image} src={exitImg} alt="Close" />
                </button>
                <ModalSeeMyResumeActionBar
                    isPrinting={isPrinting}
                    handlePrint={() => handlePrint()}
                    handleSavePDF={() => handleSavePDF()}
                    openHireMeModal={() => setIsOpenHireMeModal(true)}
                />
                <Resume ref={componentRef} isPrinting={isPrinting} />

                <Modal
                    handleClose={() => setIsOpenHireMeModal(false)}
                    isOpen={isOpenHireMeModal}
                >
                    <ModalHireMe
                        handleClose={() => setIsOpenHireMeModal(false)}
                        isOpen={isOpenHireMeModal}
                    />
                </Modal>
            </div>
        </div>
    );
};

export default ModalSeeMyResume;
