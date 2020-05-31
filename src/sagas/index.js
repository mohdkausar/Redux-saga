import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
  const json = yield fetch('https://www.googleapis.com/calendar/v3/calendars/en.ae%23holiday%40group.v.calendar.google.com/events?key=AIzaSyBrDZ2wOk_LCGD0hhjID80xiDfyGFE8zd8')
        .then(response => response.json(), );    
  yield put({ type: "HOLIDAY_RECEIVED", json: json.items, });
}
function* actionWatcher() {
     yield takeLatest('GET_HOLIDAYS', fetchNews)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}