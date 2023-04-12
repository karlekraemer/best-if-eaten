import axios from 'axios';
import { useSelector } from 'react-redux';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* spoiledSaga(props) {
    yield takeLatest('FETCH_SPOILED', fetchSpoiled);
    yield takeEvery('POST_SPOILED', postSpoiled);

}

// worker Sage fire with FETCH_SPOILED action
function* fetchSpoiled() {
    try {
        const spoiled = yield axios.get('/api/spoiled'); 
        console.log('get all from spoiled: ', spoiled.data);
        yield put({ type: 'SET_SPOILED', payload: spoiled.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* postSpoiled(action) {
    console.log('new spoiled item: ', action.payload);
    try {
        yield axios.post('/api/spoiled', action.payload);
        yield fetchSpoiled({ type: 'FETCH_SPOILED', payload: action.payload});
    }
    catch (error) {
        console.log('err with postSpoiled', error);
    }

}


export default spoiledSaga;