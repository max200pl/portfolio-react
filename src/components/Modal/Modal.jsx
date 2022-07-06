import React from 'react'
import ReactDOM from "react-dom";
import s from "./Modal.module.scss"
import { CSSTransition } from 'react-transition-group';

const Modal = (props) => {
	if (!props.show) {
		return null
	}
	return ReactDOM.createPortal(

		<CSSTransition
			in={props.show}
			unmountOnExit
			timeout={{ enter: 0, exit: 300 }}
		>
			<div className={s.modal} onClick={props.onClose}>
				<div className={s.modal__dialog} onClick={e => e.stopPropagation()} >
					<button onClick={props.onClose} className={s.modal__buttonClose}>Close</button>
					<div className={s.modal__content} >
						<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veritatis dolorum dolore! Quasi assumenda, architecto similique expedita excepturi quisquam vitae modi. Facere eius similique cumque tempora voluptates suscipit perspiciatis ea!</h1>
					</div>
				</div>
			</div>
		</CSSTransition>,
		document.getElementById("root")
	);
}

export default Modal;