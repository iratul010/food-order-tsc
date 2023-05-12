import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

interface Props {
  onAddToCart: (amount: number) => void;
}

const MealItemForm: React.FC<Props> = (props) => {
  const amountInputRef = useRef<HTMLInputElement>(null);
  const [amountIsValid, setAmountIsValid] = useState(true);

 
const submitHandler = (event: React.FormEvent) => {
  event.preventDefault();
  if (!amountInputRef.current) {
    // Input element is not defined
    return;
  }

  const enteredAmount = amountInputRef.current.value;
  const enteredAmountNumber = +enteredAmount;

  if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
    setAmountIsValid(false);
    return;
  }
  props.onAddToCart(enteredAmountNumber);
};

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref={amountInputRef} label="Amount" input={{
        id: 'amount',
        type: 'number',
        max: 5,
        min: 1,
        step: 1,
        defaultValue: 1,
      }} />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
