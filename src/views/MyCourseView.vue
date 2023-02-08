<template>
  <div class="container">
    <h3>วิชาที่ฉันลงทะเบียนทั้งหมด</h3>
    <table class="table" v-if="myEnrollment.length > 0">
      <thead>
        <tr>
          <th>รหัสวิชา</th>
          <th>ชื่อวิชา</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(subject, index) in myEnrollment" :key="index">
          <td>{{ subject.course_id }}</td>
          <td>{{ subject.course_name }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>ท่านยังไม่ได้ลงทะเบียนวิชาใดๆ</div>
  </div>
</template>
<script setup>
import { useEnrollment } from "../stores/useEnrollment";

const enrollmentList = useEnrollment();

const myEnrollment = enrollmentList.getState;
</script>
<style></style>
