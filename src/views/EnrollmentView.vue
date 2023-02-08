<template>
  <div>
    <h4>ค้นหาวิชาที่ลงทะเบียน</h4>
    <form @submit.prevent="addToBasket">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          v-model="courseID"
          placeholder="รหัสวิชา"
        />
        <button
          class="btn btn-outline-secondary"
          id="button-addon2"
          type="submit"
        >
          เพิ่มเข้าตะกร้า
        </button>
      </div>
      <!-- <input type="text" v-model="courseID" placeholder="รหัสวิชา" />
      <button type="submit">ลงทะเบียน</button> -->
    </form>

    <article v-if="(x = courseData.find((elem) => elem.course_id == courseID))">
      <div class="card">
        <div class="card-body">
          <p>
            <b>รหัสวิชา : </b> <span>{{ x.course_id }}</span>
          </p>
          <p>
            <b>ชื่อวิชา : </b> <span>{{ x.course_name }}</span>
          </p>
          <p>
            <b>หน่วยกิต : </b><span>{{ x.credit }}</span>
          </p>
        </div>
      </div>
    </article>
    <article v-else>
      <div class="alert alert-danger" v-if="courseID != ''">
        ไม่พบผลการค้นหาหรือยังไม่ได้กรอกข้อมูล
      </div>
    </article>
    <div v-if="courseInfo.length > 0">
      <h4>รายวิชารอยืนยัน</h4>
      <table class="table">
        <thead>
          <th>รหัสวิชา</th>
          <th>ชื่อวิชา</th>
          <th>หน่วยกิต</th>
        </thead>
        <tbody>
          <tr v-for="(course, index) in courseInfo" :key="index">
            <td>{{ course.course_id }}</td>
            <td>{{ course.course_name }}</td>
            <td>{{ course.credit }}</td>
            <td>
              <button
                class="btn btn-small btn-outline-danger"
                @click="removeFromBasket(index)"
              >
                ลบ
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="enrollCourse" class="btn btn-primary">
        ยืนยันการลงทะเบียน
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import courseData from "../json/cs_courses.json";
import { useEnrollment } from "../stores/useEnrollment";
import { useBasket } from "../stores/useBasket";
const enrollment = useEnrollment();
const courseID = ref("");
const courseBasket = useBasket();
const courseInfo = courseBasket.getState;
function addToBasket() {
  const data = courseData.find((elem) => elem.course_id == courseID.value);
  //console.log(data);
  if (data) {
    courseBasket.storeState(data);
    courseID.value = "";
  } else {
    alert("โปรดกรอกรหัสวิชาที่ถูกต้อง");
  }
}
function removeFromBasket(course_key) {
  if (confirm("ต้องการลบรายวิชาหรือไม่ ?")) {
    courseBasket.popState(course_key);
  }
}
function enrollCourse() {
  if (courseInfo.length > 0) {
    courseInfo.forEach((subject) => {
      enrollment.storeState(subject);
    });
    while (courseInfo.length != 0) {
      courseBasket.popState(0);
    }
    alert("ลงทะเบียนแล้ว โปรดไปที่หน้า วิชาที่ฉันลงทะเบียน");
  } else {
    alert("โปรดเลือกวิชาก่อนทำการลงทะเบียน");
  }
}
</script>
<style scoped></style>
