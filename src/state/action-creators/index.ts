import { Dispatch } from 'redux';
import CourseAPI from '../../API/coursesAPI';
import { Action, Courses, CoursesUpdated, CoursesCreate } from '../action';
import { ActionType } from '../action-type';

export const addCourse = (courseCreate: CoursesCreate) => {
  return (dispatch: Dispatch<Action>) => {
    CourseAPI.addCourses(courseCreate).then(data => {
      let course: Courses = {
        id: data.name,
        ...courseCreate,
      };
      dispatch({
        type: ActionType.ADD_COURSES,
        payload: course,
      });
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
    CourseAPI.deleteCourses(id)
      .then(res => {
        dispatch({
          type: ActionType.DELETE_COURSES,
          payload: id,
        });
      })
      .catch(error => {
        console.log(error);
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
