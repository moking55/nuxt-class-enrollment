<template>
  <h3>รายวิชาทั้งหมด</h3>
  <hr />
  <table class="table">
    <tr>
      <th>รหัสวิชา</th>
      <th>ชื่อวิชา</th>
    </tr>

    <tr v-for="(course, index) in courses" :key="index">
      <td style="text-align: left">{{ course.course_id }}</td>
      <td style="text-align: left">
        <a @click="showAlert(index)" href="#">{{ course.course_name }}</a>
      </td>
    </tr>
  </table>
</template>
<script>
import courses from "../json/cs_courses.json";
export default {
  methods: {
    showAlert(key) {
      // Use sweetalert2
      this.$swal({
        title: `<h4>${this.courses[key].course_name}</h4>`,
        html: [
          `<p style="margin: 0;"><strong>รหัสวิชา:</strong> ${this.courses[key].course_id}</p>
          <p style="margin: 0;"><strong>หน่วยกิต:</strong> ${this.courses[key].credit}</p>
          <p style="margin: 0;"><strong>อาจารย์ผู้สอน:</strong> unknow</p>`,
        ],
        icon: "info",
      });
    },
  },
  data() {
    return { courses };
  },
};
</script>
<style></style>
