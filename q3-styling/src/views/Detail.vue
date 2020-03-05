<template>
  <div class="detail">
    <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
    >
      <v-img
        :src="book.cover"
      ></v-img>
  
      <v-card-title class="title">{{ book.title }}</v-card-title>

      <v-card-title class="author"><i>
        {{ book.author }}
      </i></v-card-title>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            v-bind:value="book.rating / 2"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ml-4">{{ book.rating }} /10</div>
        </v-row>
  
        <div class="my-4 subtitle-1 synopsis">
          Synopsis
        </div>
  
        <div>{{ book.synopsis }}</div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-text>
        <v-card-actions>
          <v-btn class="upvoted" small color="warning" :outlined="book.upvoted">Upvote</v-btn>
          <div class="upvoted-times">Upvoted {{ book.upvotes }} times</div>
        </v-card-actions>
      </v-card-text>
    </v-card>
    <v-card
      class="mx-auto my-12"
      width="500"
    >
      <v-textarea
        background-color="grey lighten-2"
        color="cyan"
        label="Comment"
      ></v-textarea>
      
      <v-card-actions>
        <v-btn color="primary">Post</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import BooksApi from '@/services/api/Books'
import Common from '@/assets/js/common'

export default {
  name: 'Detail',

  data() {
    return {
      loading: false,
      selection: 1,
      slug: this.$route.params.slug,
      book: [],
    }
  },
  mounted() {
    BooksApi.getBook(this.slug)
      .then(book => {
        this.book = book.data
        Common.getTitle(this.book)
      })
      .catch(error => console.log(error))
  },

  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

<style lang="sass" scoped>

  .title
    color: #dd8822
    text-decoration: initial !important
  .author
    font-weight: 300
    margin-top: -45px
    font-size: 11px
  .synopsis
    font-weight: 900
  .upvoted
    text-transform: initial
  .upvoted-times
    margin-left: 20px
    font-size: 12px
  .content
    font-size: 12px
</style>
