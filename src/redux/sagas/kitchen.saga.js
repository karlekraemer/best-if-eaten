import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* kitchenSaga(props) {
    yield takeLatest('FETCH_KITCHEN', fetchKitchen);
}

// worker Sage fire with FETCH_KITCHEN action
function* fetchKitchen() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const kitchen = yield axios.get('/api/kitchen', config);
        console.log('get all from kitchen: ', kitchen.data);
        yield put({ type: 'SET_KITCHEN', payload: kitchen.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

export default kitchenSaga;