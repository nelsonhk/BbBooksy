<template>
<div class="wrapper">
  <div class="books">
    <div class="image" v-for="book in books" :key="book.id">
      <div class="info1">
        <div class="info-item1">
          <h2>{{book.title}}</h2>
        </div>
        <div class="info-item1">
          <p>By: {{book.person}}</p>
        </div>
        <!-- <p>Description: {{book.description}}</p> -->
      </div>
      <div class="cover">
        <img :src="book.cover"/>
      </div>
      <div class="info-item"> 
          <p>Genre: {{book.genre}}</p>
        </div>
      <div class="info2">
        <div class="info-item"> 
          <p>Average Rating: {{book.rating}}</p>
        </div>
        <div class="info-item"> 
          <p>What critics are saying: {{book.review}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Books',
  props: {
    books: Array
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
  padding: 10%;
  background-color: antiquewhite;
  border: 4px solid #a13b0c;
}
.cover {
  width: 70%;
  margin: auto;
}

.info1 {
  padding-bottom: 6%;
}

.info2 {
  padding-top: 6%;
}

.info-item {
  padding-top: 1%;
  padding-bottom: 1%;
}

.info-item1 {
  text-align: center;
}

</style>