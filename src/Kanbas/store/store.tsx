import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./modulesReducer";
import coursesReducer from "./coursesReducer";
import assignmentsReducer from "./assignmentsReducer";
import quizzesReducer from "./quizzesReducer";

export type QuizzType = {
  _id: string;
  title: string;
  isPublished: boolean;
  availableDate: string;
  availableUntilDate: string;
  dueDate: string;
  points: number;
  numberOfQuestions: number;
  course: string;
};

export type CourseType = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
};

<<<<<<< HEAD
<<<<<<< HEAD
export type assignmentType = {
  _id?: string;
  title: string;
  description: string;
  point: number;
  dueDate: string;
  availableFromDate: string;
  availableUntilDate: string;
  course: string;
};
=======
=======
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
// export type assignmentType = {
//   _id?: string;
//   title: string;
//   description: string;
//   point: number;
//   dueDate: string;
//   availableFromDate: string;
//   availableUntilDate: string;
//   course: string;
// };
<<<<<<< HEAD
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472

export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };
  coursesReducer: {
    courses: CourseType[];
    course: CourseType;
  };
  assignmentsReducer: {
<<<<<<< HEAD
<<<<<<< HEAD
    assignments: assignmentType[];
    assignment: assignmentType | null;
=======
    assignments: any[];
    assignment: any | null;
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
    assignments: any[];
    assignment: any | null;
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
  };
  quizzesReducer: {
    quizzes: QuizzType[];
    quiz: QuizzType;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
    coursesReducer,
    assignmentsReducer,
    quizzesReducer,
  },
});

export default store;
