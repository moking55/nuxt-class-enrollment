<script setup>
import news from "../json/news.json";
</script>

<template>
  <div>
    <h3>ข่าวสารล่าสุด</h3>
    <article>
      <table class="table table-bordered table-striped">
        <tr v-for="news_content in news" :key="news_content.newsId">
          <td style="text-align: left">
            <img
              style="height: 150px; width: 150px; object-fit: cover"
              :src="news_content.News_Picture"
              alt="News_Picture"
            />
          </td>
          <td style="text-align: left">
            <span class="badge bg-secondary">{{ news_content.News_Date }}</span>
            <a :href="news_content.News_links" style="text-decoration: none">
              {{ news_content.News_Title }}</a
            >
          </td>
        </tr>
      </table>
    </article>
  </div>
</template>
<style scoped>
.content {
  margin-top: 1em;
  margin-bottom: 1em;
}
.m-0 {
  margin: unset;
}

.color-gray {
  color: gray;
}
td {
  border: 1px solid #000;
}

tr td:nth-child(1) {
  width: 1%;
  white-space: nowrap;
}
</style>
