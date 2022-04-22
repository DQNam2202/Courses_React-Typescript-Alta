import { ActionType } from '../action-type/';

export interface Courses {
  id: string;
  title: string;
  author: string;
  image: string;
  price: number;
  rating: number;
  buyAmount: number;
  bestSeller: boolean;
}

export interface CoursesCreate {
  title: string;
  author: string;
  image: string;
  price: number;
  rating: number;
  buyAmount: number;
  bestSeller: boolean;
}

export interface CoursesUpdated {
  id: string;
  title?: string;
  author?: string;
  image?: string;
  price?: number;
  rating?: number;
  buyAmount?: number;
  bestSeller?: boolean;
}

interface AddCourseAction {
  type: ActionType.ADD_COURSES;
  payload: Courses;
}

interface UpdatedCourseAction {
  type: ActionType.UPDATED_COURSES;
  payload: CoursesUpdated;
}

interface DeleteCourseAction {
  type: ActionType.DELETE_COURSES;
  payload: string;
}

interface FetchData {
  type: ActionType.FETCH_DATA;
  payload: Courses[];
}
export type Action =
  | AddCourseAction
  | UpdatedCourseAction
  | DeleteCourseAction
  | FetchData;
