 import { Fragment } from 'react';
 import  ReactDOM  from 'react-dom';
import classes from './Modal.module.css';
interface ModalProps {
    onClose: () => void;
  }
 interface PropsChildren{
    children:React.ReactNode;
 }
 const Backdrop = (  props:ModalProps ) =>{
     return(
        <div className={classes.backdrop} onClick={props.onClose} />
     )
 }
 const  ModalOverlay = (props:PropsChildren   ) =>{
     return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
     )
 }
const portalElement  = document.getElementById('overlays') as HTMLElement;
const Modal = (props:PropsChildren  & ModalProps ) => {
    return (
        <Fragment> 
            {ReactDOM.createPortal(<Backdrop  onClose={props.onClose} />,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay >{props.children}</ModalOverlay>,portalElement)}
            
        </Fragment>
    );
};

export default Modal;