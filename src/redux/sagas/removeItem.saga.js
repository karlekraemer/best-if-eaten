import axios from 'axios';
import { useSelector } from 'react-redux';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* removeItemSaga(props) {
    takeEvery('DELETE_ITEM', deleteItem);
}

function* deleteItem(action) {
    console.log('action.payload inside delete item saga', action.payload);
    // const item = action.payload.item.id;

}
export default removeItemSaga;