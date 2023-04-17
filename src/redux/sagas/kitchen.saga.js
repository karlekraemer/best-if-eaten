import axios from 'axios';
import { useSelector } from 'react-redux';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* kitchenSaga(props) {
    yield takeLatest('FETCH_KITCHEN', fetchKitchen);
    yield takeEvery('ADD_FOOD', addFood);
    yield takeEvery('BACK_TO_KITCHEN_CUTTING_BOARD', backToKitchen);
    yield takeEvery('BACK_TO_KITCHEN_SPOILED', backToSpoiled);
    yield takeEvery('REMOVE_ITEM', removeItem);
}

function* backToKitchen(action) {
    console.log('new cuttingBoard item: ', action.payload);
    try {
        yield axios.post('/api/kitchen', action.payload);
        yield fetchCuttingBoard({ type: 'FETCH_KITCHEN', payload: action.payload});
    }
    catch (error) {
        console.log('err with backToKitchen from CuttingBoard', error);
    }

}

function* backToSpoiled(action) {
    console.log('new spoiled item: ', action.payload);
    try {
        yield axios.post('/api/kitchen', action.payload);
        yield fetchSpoiled({ type: 'FETCH_KITCHEN', payload: action.payload});
    }
    catch (error) {
        console.log('err with backToKitchen from Spoiled', error);
    }

}

function* removeItem(action) {
    console.log('action.payload inside delete item saga', action.payload);
    const item = action.payload.item.id;
    try{
        yield axios.delete(`/api/kitchen/${item}`);
        yield put({ type: 'FETCH_KITCHEN' })
    } catch(err){
        console.log('error in Saga Delete Item', err);
        alert('issue with SAGA DELETE item')
    }
};
// worker Sage fire with FETCH_KITCHEN action
function* fetchKitchen() {
    try {
        const kitchen = yield axios.get('/api/kitchen');
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