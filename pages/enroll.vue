<!-- Low On Caffeine, Please Forgive Coding Style -->
<template>
  <div class="container p-5">
    <div class="columns">
      <div class="column is-8 mx-auto">
        <h3 class="is-size-3" style="margin-top: 2em">ลงทะเบียนเรียน</h3>
        <div class="card">
          <form v-if="studentInfo.stdID == null || studentInfo.stdID == ''">
            <div class="card-content">
              <div class="content">
                <b-field label="Student ID">
                  <b-input v-model="studentForm.stdID"></b-input>
                </b-field>
                <b-field label="Student Name">
                  <b-input v-model="studentForm.stdName"></b-input>
                </b-field>
                <p>{{ studentForm.stdID }}</p>
                <p>{{ studentForm.stdName }}</p>
                <b-button type="is-primary" @click="submitStudentForm"
                  >เข้าสู่ระบบ</b-button
                >
              </div>
            </div>
          </form>
          <div v-else>
            <div class="card-content">
              <div class="content">
                <table class="table">
                  <thead>
                    <th>รหัสรายวิชา</th>
                    <th>ชื่อรายวิชา</th>
                    <th colspan="2">หน่วยกิต</th>
                  </thead>
                  <tbody>
                    <tr v-for="(courseInfo, key) in course" :key="key">
                      <td>{{ courseInfo.course_id }}</td>
                      <td>
                        <a
                          @click="
                            isComponentModalActive = true
                            dataKey = key
                          "
                        >
                          {{ courseInfo.course_name }}</a
                        >
                      </td>
                      <td>{{ courseInfo.credit }}</td>
                      <td>
                        <b-button type="is-success" @click="addToCart(key)"
                          >เพิ่มเข้าตะกร้า</b-button
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="studentInfo.stdID != null && studentInfo.stdID != ''"
        class="column is-4 mx-auto"
      >
        <h3 class="is-size-3" style="margin-top: 2em">ข้อมูลของฉัน</h3>
        <div class="card">
          <div class="card-content">
            <div class="content">
              <h4 class="is-size-5 m-0">รหัสนักศึกษา</h4>
              <p>{{ studentInfo.stdID }}</p>
              <h4 class="is-size-5 m-0">ชื่อนักศึกษา</h4>
              <p>{{ studentInfo.stdName }}</p>
              <hr />
              <b>ตะกร้าของฉัน</b>
              <table class="table" style="width: 100%">
                <thead>
                  <th>ลำดับที่</th>
                  <th>ชื่อวิชา</th>
                </thead>
                <tbody>
                  <tr v-for="(courseInfo, key) in basket" :key="key">
                    <td>{{ key + 1 }}</td>
                    <td>{{ courseInfo.subject }}</td>
                  </tr>
                </tbody>
              </table>
              <b-button type="is-primary" @click="beforeStore">ยืนยันการลงทะเบียน</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useCourseEnrollmentStore } from '@/store/enrollments'
import courseData from '@/assets/json/cs_courses.json'

export default {
  setup() {
    const courseState = useCourseEnrollmentStore()

    // eslint-disable-next-line no-console
    console.log(courseState.$state.enrollments)

    return courseState
  },
  data() {
    return {
      studentForm: {
        stdID: '',
        stdName: '',
      },
      studentInfo: ref([]),
      course: courseData,
      datakey: ref(0),
      basket: ref([]),
    }
  },
  methods: {
    submitStudentForm() {
      // eslint-disable-next-line no-console
      this.studentInfo = this.studentForm
      // eslint-disable-next-line no-console
    },
    addToCart(key) {
      this.basket.push({
        subject: this.course[key].course_name,
      })
      console.log(this.basket)
    },
    beforeStore(){
        if(confirm("ต้องการบันทึกข้อมูลหรือไม่?")) {

            this.basket = ref([]);
            alert("saved")
        }
    }
  },
}
</script>
<style></style>
