import { defineStore } from "pinia";

/* Trust me, I'm an engineer!...
 * What the f*ck did just happened here? */
export const useCourseEnrollmentStore = defineStore('courseEnrollment', {
  state: () => ({
    courses: [],
    enrollments: [],
    selectedCourse: null,
    studentName: ""
  }),
  actions: {
    enroll(state) {
      this.$state.enrollments.push({
        student: state.studentName,
        course: state.selectedCourse
      });
    }
  },
  getters: {
    enrollmentsGetter: (state) => state.enrollments
  }
});