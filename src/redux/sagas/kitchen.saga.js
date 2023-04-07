import axios from 'axios';
import { useSelector } from 'react-redux';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* kitchenSaga(props) {
    yield takeLatest('FETCH_KITCHEN', fetchKitchen);
    yield takeLatest('ADD_FOOD', addFood)
}

// worker Sage fire with FETCH_KITCHEN action
function* fetchKitchen() {
    try {
        // const config = {
        //     headers: { 'Content-Type': 'application/json' },
        //     withCredentials: true,
        // };
        const kitchen = yield axios.get('/api/kitchen'); //deleted "config" as a passed parameter
        console.log('get all from kitchen: ', kitchen.data);
        yield put({ type: 'SET_KITCHEN', payload: kitchen.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* addFood(action) {
    console.log('inside post request saga for addFood')
    const id = action.payload.id;
    try{
        yield axios.post(`/api/kitchen`, {
                name: action.payload.foodName,
                type: action.payload.foodType,
                location: action.payload.location,
                amount: action.payload.quantity,
                exp_date: action.payload.expiration
            })
            yield put ({ type: 'FETCH_KITCHEN', payload: id })
        } catch (error){
        console.log('addFood request failed', error)
        alert("Something went wrong with addFood Saga axios post");
    }
}

export default kitchenSaga;