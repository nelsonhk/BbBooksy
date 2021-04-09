<template>
    <div class="s-review">
        <h1>Admin Page</h1>
        <div class="inputField-container">
            <div class="inputField">
                <div class="heading">
                    <h2>Edit/Delete a Book:</h2>
                </div> <!--heading-->
                <div class="edit">
                    <div class="form">
                        <p>Choose Your Book:</p>
                        <multiselect label="title" v-model="findItem" :options="allBooks"></multiselect>
                    </div>
                    <div class="editing">
                        <div class="upload" v-if="findItem">
                          <div class="question">
                            <p>Change Book Title:</p>
                            <input v-model="findItem.title">
                          </div>
                          <div class="question">
                            <p>Change Author:</p>
                            <input v-model="findItem.person">
                          </div>
                          <div class="question">
                            <p>Change Book Genre:</p>
                            <input v-model="findItem.genre">
                          </div>
                          <div class="question">
                            <p>Change Book Rating:</p>
                            <input v-model="findItem.rating">
                          </div>
                          <div class="question">
                            <p>Change Book Review:</p>
                            <input v-model="findItem.review">
                          </div>
                          <div class="question">
                            <p>Change Book cover:</p>
                            <input v-model="findItem.cover">
                          </div>
                            <p></p>
                        </div><!--upload-->
                        <div class="actions" v-if="findItem">
                            <button class="action" @click="editItem(findItem)">Edit</button>
                            <div class="upload" v-if="addItem">
                                <h2>Successfully submitted!</h2>
                            </div>
                            <button class="action" @click="deleteItem(findItem)">Delete</button>
                        </div><!--actions-->
                    </div> <!--editing-->
                </div><!--edit-->
            </div> <!--input field-->
        </div> <!--input field-container -->  
    </div><!--s-review-->
</template>

<script>
// import Books from "../components/Books.vue";
import Multiselect from 'vue-multiselect';
export default {
    components: {
        // Books,
        Multiselect,
    },
    name: 'Review',
    data() {
        return {
            title: "",
            author: "",
            descripton: "",
            genre: "",
            rating: "",
            review: "",
            photoURL: "",
            allBooks: [],
            findItem: null,
            addItem: null,
        }
    },
    created() {
        this.getBooks();
    },
    methods: {
        getBooks() {
            this.allBooks = this.$root.$data.books;
        },
        deleteItem(item) {
            if(this.$root.$data.books.length === 0) {
                return;
            }
            let index = this.$root.$data.books.indexOf(item);
            this.$root.$data.books.splice(index,1);
            this.findItem = null;
        },  
        editItem(item) {
            let index = this.$root.$data.books.indexOf(item);
            this.$root.$data.books[index].title = item.title;
            this.$root.$data.books[index].person = item.author;
            this.$root.$data.books[index].genre = item.genre;
            this.$root.$data.books[index].rating = item.rating;
            this.$root.$data.books[index].review = item.review;
            this.$root.$data.books[index].cover = item.photoURL;
            this.findItem = null;
        },
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<style scoped>
.s-review {
    height:100%;
    width: 90%;
    margin: 20px auto;
}
.inputField-container {
    height: 100%;
}
p {
    line-height: 1.5em;

}
.inputField {
    border: 2px solid #eb7f4d;
    background-color: antiquewhite;
    padding: 3%;
    margin: 3%;
    height: 100%;
}

.heading {
    margin-bottom: 20px;
    margin-top: 0px;
}

.heading h2 {
    margin-top: 0px;
    margin-left: 0px;
}
.question {
  margin: 15px;
}
/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  line-height: 1.5em;
}
input {
    width: 100%;
    padding: 2px 5px;
}
.editing {
    width: 80%;
}
.form {
    margin-right: 50px;
    width: 100%;
}
.actions {
    padding: 3px;
    margin: 5px;
}
.action {
    margin: 15px;
}
.upload p, .actions p{
    margin: 0px;
    margin-bottom: 5px;
}

/* Tablet Styles */
@media only screen and (min-width: 500px) and (max-width: 999px) {  
    /* .add,
    .edit {
        display: flex;
    } */
    .form {
      width: 75%;
    }
}

/* Desktop Screen */
@media only screen and (min-width: 1000px) {
/*    .inputField-container {
        display: flex;
    } */
    .form {
      width: 50%;
    }
    .add,
    .edit {
        display: flex;
    }
}

</style>