<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const routers = ref([
  {
    name: "หน้าแรก",
    to: "/",
  },
  {
    name: "รายวิชา",
    to: "/courses",
  },
  {
    name: "ลงทะเบียนเรียน",
    to: "/enrollments",
  },
  {
    name: "วิชาที่ฉันลงทะเบียน",
    to: "/mycourse",
  },
]);
</script>

<template>
  <div class="nuxt-problem py-3">
    <p class="my-auto text-light">
      <strong>NOTE:</strong> เนื่องจาก Nuxt 2 มีปัญหากับ Pinia
      จึงต้องเปลี่ยนกลับมาใช้ Vue ก่อนครับ ขอไปศึกษา Nuxt 3 ก่อนครับอาจารย์ 😁
    </p>
  </div>
  <div class="container">
    <img
      src="https://i.imgur.com/hvtCukn.jpg"
      class="w-100 rounded shadow banner"
      alt="banner"
    />
    <div class="row my-5">
      <div class="col-md-3">
        <div class="list-group" v-for="(router, index) in routers" :key="index">
          <RouterLink
            class="list-group-item list-group-item-action"
            :to="router.to"
            >{{ router.name }}</RouterLink
          >
        </div>
      </div>
      <div class="col-md-9"><RouterView /></div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  height: 300px;
  object-fit: cover;
  margin-top: 20px;
  object-position: center -150px;
}
.nuxt-problem {
  background: #e53935;
  display: flex;
  justify-content: center;
}
</style>
