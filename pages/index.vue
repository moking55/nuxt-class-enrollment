<template>
  <div>
    <SectionContent
      title="ระบบลงทะเบียนเรียนออนไลน์"
      subtitle="สาขา วิทยาการคอมพิวเตอร์"
      :bg="require(`~/assets/main_bg.jpg`)"
      btnTitle="รายชื่อวิชาในแผนการเรียน"
      bgColor="#109D59"
      link="courses"
    />
    <SectionContent
      title="ลงทะเบียนผ่านเว็บไซต์"
      :bg="require(`~/assets/main_bg_2.jpg`)"
      bgColor="#546F7A"
      btnTitle="สมัครลงทะเบียน"
      link="enroll"
    />
    <SectionContent
      title="ข่าวประกาศ"
      subtitle="ข่าวสารประกาศสำหรับนักศึกษา"
      :bg="require(`~/assets/main_bg_3.jpg`)"
      bgColor="#FF8B66"
      btnTitle="ไปหน้าข่าวสารทั้งหมด"
      link="news"
    />
  </div>
</template>

<script>
import SectionContent from '~/components/SectionContent.vue'
export default {
  name: 'IndexPage',
  components: {
    SectionContent,
  },
}
</script>
