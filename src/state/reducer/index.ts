import { combineReducers } from 'redux';
import { courseReducer } from './courseReducer';
const rootReducer = combineReducers({
  courses: courseReducer,
});
export type State = ReturnType<typeof rootReducer>;
export default rootReducer;
