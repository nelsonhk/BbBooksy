<template>
  <div class="home">
    <div class="heading">
    <div class="heading1">
      <h1> Welcome to Booksy! </h1> 
    </div>
    <div class="heading2">
      <h4> Browse below to find your favorite books. Check out the reviews, then head to our review
        page to add one of your own! </h4> 
    </div>
    </div>
    <div class = "image-gallery"> 
        <Books :books="books" /> 
    </div>
      
  </div> <!--home-->
</template>

<script>
import Books from "../components/Books.vue"
export default {
  name: 'Home',
  components: {
    Books
  },
  computed: {
    books () {
      return this.$root.$data.books;
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
body {
  height: 100%;
  width: 100%;
  background-color: #eb7f4d;

}

.main-container {
  background-color: #eb7f4d;
}

.image-gallery {
  height: 100%;
}

.home {
  height: 100%;
  padding: 3%;
  padding-left: 7%; 
  padding-right: 7%;
  background-color: #eb7f4d;
  color:black;
}

.heading1, .heading2 {
  text-align: center;
  padding-left: 20%;
  padding-right: 20%;
  margin-bottom: 2%;
  font-size: 1.3em; 
}

.heading1 {
  margin-top: 2%;
}

.heading {
  background-color: antiquewhite;
  padding: 1%;
  margin-bottom: 4%;
  border: 4px solid #a13b0c;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}
.image-gallery {
  column-gap: 1.5em;
}
.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
  padding: 10%;
  background-color: antiquewhite;
  border: 4px solid #a13b0c;
}
.image img {
  width: 100%;
}

.title, .description, .bookCover {
  margin: 1%;
  padding-top: 1%;
  padding-bottom: 1%;
}

/* Masonry on large screens */
@media only screen and (min-width: 1400px) {
  .image-gallery {
    column-count: 4;
  }
}
/* Masonry on medium-sized screens */
@media only screen and (max-width: 1399px) and (min-width: 1000px) {
  .image-gallery {
    column-count: 3;
  }
}
/* Masonry on small screens */
@media only screen and (max-width: 999px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
}
</style>