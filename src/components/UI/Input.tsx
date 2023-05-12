 import  { forwardRef  } from 'react';
import classes from './Input.module.css';
interface PropsInterface{
    label:string;
 input:{
    id:string;
    type:string;
    max:number,
    min:number,
    step:number,
    defaultValue:number,
 }
}
const Input =  forwardRef<HTMLInputElement, PropsInterface>((props:PropsInterface,ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    );
});

export default Input; 