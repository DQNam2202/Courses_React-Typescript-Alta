import axiosClient from './axiosClient';
import { Courses, CoursesCreate, CoursesUpdated } from '../state/action';
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
interface CoursesCreateRes {
  name: string;
}

const CourseAPI = {
  getCoursesList() {
    const url = baseURL + '.json';
    return axiosClient.get<Courses[], Courses[]>(url);
  },

  addCourses(course: CoursesCreate) {
    const url = baseURL + '.json';
    return axiosClient.post<CoursesCreateRes, CoursesCreateRes>(url, course);
  },

  updatedCourses(courseUpdated: CoursesUpdated) {
    const url = baseURL + `/${courseUpdated.id}.json`;
    return axiosClient.patch<CoursesUpdated, CoursesUpdated>(
      url,
      courseUpdated,
    );
  },

  deleteCourses(id: string) {
    const url = baseURL + `/${id}.json`;
    return axiosClient.delete(url);
  },
};

export default CourseAPI;
