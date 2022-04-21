import { Dispatch } from 'redux';
import CourseAPI from '../../API/coursesAPI';
import { Action, Courses, CoursesUpdated } from '../action';
import { ActionType } from '../action-type';

export const addCourse = (courses: Courses) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_COURSES,
      payload: courses,
    });
  };
};

export const updatedCourse = (courseUpdate: CoursesUpdated) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATED_COURSES,
      payload: courseUpdate,
    });
  };
};

export const deleteCourse = (id: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_COURSES,
      payload: id,
    });
  };
};

export const fetchCourseAPI = () => {
  return (dispatch: Dispatch<Action>) => {
    CourseAPI.getCoursesList()
      .then(res => {
        let courseList: Courses[] = [];
        let nameKeyList = Object.keys(res);

        [...nameKeyList].forEach((id: string) => {
          let obj = { ...res[id as any] };
          obj.id = id;
          courseList.push(obj);
        });
        console.log(res);
        dispatch({
          type: ActionType.FETCH_DATA,
          payload: courseList,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
