import axios from 'axios';
import { useSelector } from 'react-redux';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* removeItemSaga(props) {
    yield takeEvery('REMOVE_ITEM', removeItem);
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

export default removeItemSaga;