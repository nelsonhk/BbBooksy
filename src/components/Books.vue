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
            <img :src="book.cover" width=100%/>
        </div>
        <div class="info-item"> 
            <p><em>Genre: </em>{{book.genre}}</p>
        </div>
        <div class="info2">
        <div class="info-item"> 
          <p><em>Average Rating: </em>{{book.rating}}</p>
        </div>
        <div class="info-item"> 
          <p><em>What critics are saying:</em> {{book.review}}</p>
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
  margin: 15px auto;
}

.info1 {
  /* padding-bottom: 6%; */
  border: dashed 2px #a13b0c;
  /* margin: 15px 15px; */
}
.info-item1 {
  text-align: center;
  margin: 15px;
  /* margin-bottom: 5px; */
}
/* 
.info2 {
  padding-top: 6%;
} */

.info-item {
    /* border: 2px solid black; */
  line-height: 1.25em;
  padding-top: 1.5%;
  padding-bottom: 1%;
}



</style>