<template>
  <div class="list">
    <v-card
      max-width="550"
      class="mx-auto">
      <v-container>
        <h1>Top books of all time</h1>
      </v-container>
      
      <v-row no-gutters>
        <v-col>
          <v-text-field
            placeholder="Text search for title and synopsis"
            class="search-text"
            v-model="searchText"
          ></v-text-field>
        </v-col>
        <v-col lg="2">
          <v-btn class="search-btn" small color="warning" v-on:click="search">Search</v-btn>
        </v-col>
      </v-row>

      <v-pagination
        v-model="pagination.page"
        :length="pagination.length"
        :total-visible="5"
        circle
      ></v-pagination>
      
      <v-container>
        <v-row dense>
        <v-col
          v-for="(book, index) in books"
          :key="index"
          cols="12"
        >
          <v-card
            class="mx-auto"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content class="book-info">
                <v-list-item-title class="headline mb-1"><a class="title" :href="'/detail/' + book.slug">{{ ((pagination.page - 1) * 5 + index + 1) + '. ' + book.title }}</a>
                  <span class="rating">{{ '(' + book.rating + '/10)' }}</span>
                </v-list-item-title>
                <div class="overline mb-4"><i>{{ book.author }}</i></div>
                <div><p>{{ book.synopsis }}</p></div>
                <v-card-actions>
                  <v-btn class="upvoted" small color="warning" :outlined="book.upvoted">Upvote</v-btn>
                  <div class="upvoted-times">Upvoted {{ book.upvotes }} times</div>
                </v-card-actions>
              </v-list-item-content>
        
              <a :href="'/detail/' + book.slug">
                <v-avatar
                  class="ma-4 cover"
                  width="100"
                  height="150"
                  tile
                >
                  <v-img :src="book.cover"></v-img>
              </v-avatar></a>
            </v-list-item>
          </v-card>
        </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-pagination
      v-model="pagination.page"
      :length="pagination.length"
      :total-visible="5"
      circle
    ></v-pagination>

  </div>
</template>

<script>
import BooksApi from '@/services/api/Books'
import Common from '@/assets/js/common'

export default {
  name: 'Home',

  data() {
    return {
      allBookList: [],
      bookList: [],
      pagination: {
        page: 1,
        length: 0,
      },
      searchText: '',
    }
  },

  mounted() {
    BooksApi.getBookLists()
      .then(books => {
        this.bookList = books.data.books
        Common.getTitle(this.bookList)
        this.allBookList = this.bookList
        this.pagination.length = parseInt(this.bookList.length / 5)
      })
      .catch(error => console.log(error))
  },

  computed: {
    books: function() {
      let end = this.pagination.page * 5
      if (this.pagination.page * 5 - 1 > this.bookList.length)
        end = this.bookList.length
      return this.bookList.slice((this.pagination.page - 1) * 5, end)
    }
  },

  methods: {
    search() {
      this.bookList = this.allBookList

      const str = this.searchText.toLowerCase()
      const searchedBooks = []
      for (let i = 0; i < this.bookList.length; i ++) {
        if (this.bookList[i].slug.toLowerCase().includes(str) || this.bookList[i].synopsis.toLowerCase().includes(str))
          searchedBooks.push(this.bookList[i])
      }
      Common.getTitle(searchedBooks)
      this.bookList = searchedBooks
      this.pagination.length = parseInt(this.bookList.length / 5)
    }
  }
}
</script>

<style lang="sass" scoped>
  .list
    padding-bottom: 20px
    h1
      color: #ffbb22
      text-align: center
    .book-info
      .headline
        font-size: 18px !important
        .title
          color: #dd8822
          text-decoration: initial !important
      .rating
        margin-left: 5px
        color: black
        font-size: 12px
      .overline
        text-transform: initial
      .upvoted
        text-transform: initial
      .upvoted-times
        margin-left: 15px
        font-size: 12px
    .cover
      border-radius: 5px
    .search-text
      padding: 0 30px
</style>
