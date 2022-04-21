import { Action, Courses } from '../action';
import { ActionType } from '../action-type';

const initialState: Courses[] = [];

export const courseReducer = (
  state: Courses[] = initialState,
  actions: Action,
) => {
  switch (actions.type) {
    case ActionType.ADD_COURSES:
      const cloneCourses = [...state];
      const item = actions.payload;
      cloneCourses.push(item);
      return [...cloneCourses];
    case ActionType.UPDATED_COURSES:
      let { id } = actions.payload;
      let coursesList = [...state];
      const indexItem = coursesList.findIndex(item => item.id === id);
      if (indexItem !== -1) {
        coursesList[indexItem] = {
          ...coursesList[indexItem],
          ...actions.payload,
        };
      }
      return [...coursesList];
    case ActionType.DELETE_COURSES:
      let idCourse = actions.payload;
      let list = [...state];
      const indexItems = list.findIndex(item => item.id === idCourse);
      if (indexItems !== -1) {
        list.splice(indexItems, 1);
      }
      return [...list];
    // case ActionType.FETCH_DATA
    default:
      return [...state];
  }
};
