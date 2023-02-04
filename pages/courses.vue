<template>
  <div>
    <section class="sc-bg">
      <div
        class="is-flex is-align-items-center is-justify-content-center"
        style="height: 100%"
      >
        <h2 class="is-size-2 has-text-white">
          หลักสูตรสาขาวิชาวิทยาการคอมพิวเตอร์
        </h2>
      </div>
      <div class="container" style="max-width: 900px">
        <article class="panel is-info" style="margin-top: -100px">
          <p class="panel-heading">รายชื่อวิชาในแผนการเรียน</p>
          <div class="panel-body">
            <table class="table" style="width: 100%">
              <thead>
                <th>รหัสรายวิชา</th>
                <th>ชื่อรายวิชา</th>
                <th>หน่วยกิต</th>
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
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </section>

    <b-modal
      v-model="isComponentModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      close-button-aria-label="Close"
      aria-modal
    >
      <template v-if="isComponentModalActive">
        <div class="modal-card" style="min-width: 800px">
          <header class="modal-card-head">รายละเอียดวิชา</header>
          <section class="modal-card-body">
            <h3 class="is-size-4">รหัสรายวิชา</h3>
            <p>
              {{ course[dataKey].course_id }}
            </p>
            <br />
            <h3 class="is-size-4">รหัสรายวิชา</h3>
            <p>
              {{ course[dataKey].course_name }}
            </p>
            <br />
            <h3 class="is-size-4">หน่วยกิต</h3>
            <p>
              {{ course[dataKey].credit }}
            </p>
          </section>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
import courseData from '@/assets/json/cs_courses.json'
export default {
  data() {
    return {
      course: courseData,
      isComponentModalActive: false,
      dataKey: 0,
    }
  },
}
</script>
<style scoped>
.sc-bg {
  background-color: #009432;
  background-image: linear-gradient(150deg, #009432 0%, #7bed9f 100%);
  height: 350px;
}

.panel-body {
  padding: 0.5em;
  background: white;
}
</style>
