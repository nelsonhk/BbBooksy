<template>
    <div class="s-review">
        <h1>All about Reviews</h1>
        <div class="inputField-container">
            <div class="inputField">
                <div class="heading">
                    <h2>Add a Review:</h2>
                </div><!--heading-->
                <div class="add">
                    <div class="form">
                        <p>What is your book called?</p>
                        <input v-model="title" placeholder="title">
                        <p>Who's the author?</p>
                        <input v-model="author" placeholder="author">
                        <p>Write your description!</p>
                        <input v-model="description" placeholder="description">
                        <p>What's the genre?</p>
                        <input v-model="genre" placeholder="genre">
                        <p>Rate the book (0-5):</p>
                        <input v-model="rating" placeholder="rating">
                        <p>Write a review!</p>
                        <input v-model="review" placeholder="review">
                        <button @click="upload()">Submit Book</button>
                    </div><!--form-->
                    <!-- <div class="upload" v-if="addItem">
                        <h2>Successfully submitted!</h2>
                    </div>upload -->
                </div><!--add-->
            </div><!--inputField-->
            <div class="inputField">
                <div class="heading">
                    <h2>Edit/Delete a Book:</h2>
                </div> <!--heading-->
                <div class="edit">
                    <div class="form">
                        <p>Choose Your Book:</p>
                        <!-- <multiselect label="name" v-model="findItem" :options="allReviews"></multiselect>
                        <p>You selected:{{findItem}}</p> -->
                    </div>
                    <div class="editing">
                        <div class="upload" v-if="findItem">
                            <p>Change Book Details:</p>
                            <input v-model="findItem.book">
                            <p></p>
                        </div><!--upload-->
                        <div class="actions" v-if="findItem">
                            <!-- <button class="action" @click="editItem(findItem)">Edit</button>
                            <button class="action" @click="deleteItem(findItem)">Delete</button> -->
                        </div><!--actions-->
                    </div> <!--editing-->
                </div><!--edit-->
            </div> <!--input field-->
        </div> <!--input field-container -->  
    </div><!--s-review-->
</template>

<script>
// import Books from "../components/Books.vue";
export default {
    // components: {
    //     Books,
    // },
    name: 'Review',
    data() {
        return {
            title: "",
            author: "",
            descripton: "",
            genre: "",
            rating: "",
            review: "",
        }
    },
    created() {
        this.getBooks();
    },
    methods: {
    //     fileChanged(event) {
    //         this.file = event.target.files[0]
    //     },
        upload() {
            let index = this.$root.$data.books.length - 1;
            let newID = this.$root.$data.books[index].id + 1;
            // console.log(index);
            // console.log(newID);
            let newBook = { 
                id: newID,
                title: this.title,
                description: this.description,
                genre: this.genre,
                person: this.author,
                rating: this.rating,
                review: this.review,
                cover: "http://dummyimage.com/150x230.png/cc0000/ffffff",
            };
            this.$root.$data.books.unshift(newBook);
            this.title = "";
            this.description = "";
            this.genre = "";
            this.person = "";
            this.rating = "";
            this.review = "";
        },
    //     async getBooks() {
    //         try {
    //             let response = await axios.get("/api/books");
    //             this.books = response.data;
    //             return true;
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     },
    //     async getAllReviews() {
    //         try {
    //             let response = await axios.get("/api/reviews");
    //             this.allReviews = response.data;
    //             return true;
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     },
    //     async deleteItem(item) {
    //         try {
    //             await axios.delete("/api/reviews/" + item._id);
    //             this.findItem = null;
    //             this.getItems();
    //             return true;
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     },  
    //     async editItem(item) {
    //         try {
    //             await axios.put("/api/reviews/" + item._id, {
    //                 review: this.findItem.review,
    //             });
    //             this.findItem = null;
    //             this.getItems();
    //             return true;
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     },
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

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
    margin-right: 50px;
}
.actions {
    padding: 3px;
    margin: 0px;
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
}

/* Desktop Screen */
@media only screen and (min-width: 1000px) {
/*    .inputField-container {
        display: flex;
    } */
    .add,
    .edit {
        display: flex;
    }
}

</style>