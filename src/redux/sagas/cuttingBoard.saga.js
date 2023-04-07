import axios from 'axios';
import { useSelector } from 'react-redux';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* cuttingBoardSaga(props) {
    yield takeLatest('FETCH_CUTTING_BOARD', fetchCuttingBoard);
    yield takeEvery('POST_CUTTING_BOARD', postCuttingBoard);

}

// worker Sage fire with FETCH_CUTTING_BOARD action
function* fetchCuttingBoard() {
    try {
        // const config = {
        //     headers: { 'Content-Type': 'application/json' },
        //     withCredentials: true,
        // };
        const cuttingBoard = yield axios.get('/api/cuttingBoard'); //deleted "config" as a passed parameter
        console.log('get all from cuttingBoard: ', cuttingBoard.data);
        yield put({ type: 'SET_CUTTING_BOARD', payload: cuttingBoard.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* postCuttingBoard(action) {
    console.log('new cuttingBoard item: ', action.payload);
    try {
        yield axios.post('/api/cuttingBoard', action.payload);
        yield fetchCuttingBoard({ type: 'FETCH_CUTTING_BOARD', payload: action.payload});
    }
    catch (error) {
        console.log('err with postCuttingBoard', error);
    }

}


export default cuttingBoardSaga;