import axiosClient from './axiosClient';
import { Courses, CoursesUpdated } from '../state/action';
const baseURL = '';

export interface CourseUpdatedRes {
  title?: string;
  author?: string;
  image?: string;
  price?: number;
  rating?: number;
  buyAmount?: number;
  bestSeller?: boolean;
}

const CourseAPI = {
  getCoursesList() {
    const url = baseURL + '.json';
    return axiosClient.get<Courses[], Courses[]>(url);
  },

  addCourses(course: Courses) {
    const url = baseURL + '.json';
    return axiosClient.post<string>(url, course);
  },

  updatedCourses(courseUpdated: CoursesUpdated) {
    const url = baseURL + `/${courseUpdated.id}.json`;

    return axiosClient.patch(url, courseUpdated);
  },

  deleteCourses(id: string) {
    const url = baseURL + `/${id}.json`;
    return axiosClient.delete(url);
  },
};

export default CourseAPI;
