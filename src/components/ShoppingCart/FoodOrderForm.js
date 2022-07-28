import { useReducer } from 'react';

import FoodOrderFormReducer from './reducer/FoodOrderFormReducer';
import './FoodOrderForm.css'

const initialFormState = {
    name: "",
    street: "",
    postCode: "",
    city: ""
}

const FoodOrderForm = () =>{
    const [order, dispatch] = useReducer(FoodOrderFormReducer, initialFormState)    

    return <div>
        <form>
            <p className='labels'>Your Name</p>
            <input type='text' className="labels"/>
            <p className='labels'>Street</p>
            <input type='text' className="labels"/>
            <p className='labels'>Postal Code</p>
            <input type='text' className="labels"/>
            <p className='labels'>City</p>
            <input type='text' className="labels"/>
        </form>
    </div>
}

export default FoodOrderForm;