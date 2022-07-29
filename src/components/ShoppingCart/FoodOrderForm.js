import { useReducer } from 'react';

import FoodOrderFormReducer from './reducer/FoodOrderFormReducer';
import './FoodOrderForm.css'

const initialFormState = {
    name: "",
    street: "",
    postCode: "",
    city: '',
}

const types = {
    name: 'changeName',
    street: 'changeStret',
    postCode: 'changeCode',
    city: 'changeCity',
}


const reducer = (state,action) =>{
    switch(action.type){
        case  types.name:
            return {...state, name: action.value}
        case types.street:
            return {...state, street: action.value}
        case types.postCode:
            return {...state, postCode: action.value}
        case types.city:
            return {...state, city: action.value}
    }

}

const FoodOrderForm = () =>{
    const [state, dispatch] = useReducer(reducer, initialFormState)
    
    const onChangeFormHandler = (e, dependency) => {
        dispatch({type: dependency , value: e.target.value});
    }
    const onFormSubmit = (e) => {}


    return <div>
        <form onSubmit={onFormSubmit}>
            <p className='labels'>Your Name</p>
            <input type='text' className="labels" value={state.name}  onChange={e => {onChangeFormHandler(e, types.name)}}/>
            <p className='labels'>Street</p>
            <input type='text' className="labels" value={state.street} onChange={e =>onChangeFormHandler(e, types.street)}/>
            <p className='labels'>Postal Code</p>
            <input type='text' className="labels" value={state.postCode}  onChange={e => onChangeFormHandler(e, types.postCode)}/>
            <p className='labels'>City</p>
            <input type='text' className="labels" value={state.city} onChange={e => onChangeFormHandler(e, types.city)}/>
            <input type='submit'/>
        </form>
    </div>
}

export default FoodOrderForm;