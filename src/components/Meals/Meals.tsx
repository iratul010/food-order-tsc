import {Fragment} from 'react';
import MealsSummary from './MealsSummary';
import AvailAbleMeals from './AvailAbleMeals';
 
const Meals = () => {
    return (
        <Fragment >
            <MealsSummary/>
            <AvailAbleMeals/>
        </Fragment>
    );
};

export default Meals;