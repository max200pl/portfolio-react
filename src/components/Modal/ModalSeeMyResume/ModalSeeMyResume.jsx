/* eslint-disable no-unused-vars */
// How To Generate PDF From HTML Using Javascript
//  https://techsolutionstuff.com/post/how-to-generate-pdf-from-html-using-javascript

import s from "././ModalSeeMyResume.module.scss";
import exitImg from "../../../images/modal/exit.svg";
import Resume from "../../Resume/Resume";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Html2Pdf from 'js-html2pdf';
import ModalSeeMyResumeActionBar from "./ModalSeeMyResumeActionBar";

const ModalSeeMyResume = ({ isOpen, handleClose }) => {
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        /*   onBeforeGetContent: () => {
              return new Promise((resolve) => {
                  promiseResolveRef.current = resolve;
                  setIsPrinting(true);
              });
          }, */
        onAfterPrint: () => console.log("OK")
    })

    const handleSavePDF = useReactToPrint({
        content: () => componentRef.current,
        removeAfterPrint: true,
        print: async (printIframe) => {
            const document = printIframe.contentDocument;
            if (document) {
                const html = document.getElementById("RESUME");
                console.log(html);
                const exporter = new Html2Pdf(html, {
                    margin: 0,
                    fontWeight: 16,
                    filename: 'myfile.pdf',
                    image: { type: 'jpeg', quality: 1 },
                    html2canvas: { scale: 1 },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                },);
                exporter.getPdf(true);
            }
        },
    })

    return (
        <div className={s.modal__dialog}>
            <div className={s.modal__content}>
                <button className={s.modal__close} onClick={handleClose} type="button">
                    <img className={s.modal__close_image} src={exitImg} alt="Close" />
                </button>
                <ModalSeeMyResumeActionBar handlePrint={() => handlePrint()} handleSavePDF={() => handleSavePDF()} />

                <Resume ref={componentRef} />
            </div>
        </div>
    );
};

export default ModalSeeMyResume;
