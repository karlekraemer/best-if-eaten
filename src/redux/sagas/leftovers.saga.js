import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* leftoversSaga(props) {
    yield takeLatest('FETCH_LEFTOVERS', fetchleftovers);
}

// worker Sage fire with FETCH_leftovers action
function* fetchleftovers() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const leftovers = yield axios.get('/api/leftovers', config);
        console.log('get all from leftovers: ', leftovers.data);
        yield put({ type: 'SET_LEFTOVERS', payload: leftovers.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

export default leftoversSaga;