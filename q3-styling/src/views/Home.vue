<template>
  <div class="list">
    <v-container>
      <h1>Top books</h1>
    </v-container>
    
    <v-container class="grey lighten-5 featured-book">
      <v-row no-gutters>
        <v-col class="book" cols="12" sm="12">
          <v-badge
            class="recommended"
            color="#ffcc00"
            content="Recommended"
            overlap
            offset-x="90">
              <v-img
                class="white--text align-end featured-book"
                style="float: left; margin-right: 20px; border-radius: 15px;"
                width="auto"
                height="auto"
                src="../assets/images/01-becoming.jpg">
              </v-img>

              <div style="margin-left: 10px; margin-right: -50px;">
                <div>
                  <h1 class="title" style="font-size: 32px !important">Becoming</h1>
                  <v-card-subtitle class="author">Michelle Obama</v-card-subtitle>
                </div>
                <v-card-subtitle class="pb-0 book-info">
                  <div class="synopsis">
                    <p>
                      In a life filled with meaning and accomplishment,
                      Michelle Obama has emerged as one of the most iconic
                      and compelling women of our era. As First Lady of the
                      United States of America—the first African American
                      to serve in that role—she helped create the most
                      welcoming and inclusive White House in history, while
                      also establishing herself as a powerful advocate for
                      women and girls in the U.S. and around the world,
                      dramatically changing the ways that families pursue
                      healthier and more active lives, and standing with
                      her husband as he led America through some of its
                      most harrowing moments. Along the way, she showed us
                      a few dance moves, crushed Carpool Karaoke, and raised
                      two down-to-earth daughters under an unforgiving media
                      glare.
                    </p>
                    <p>
                      In her memoir, a work of deep reflection and mesmerizing
                      storytelling, Michelle Obama invites readers into her world,
                      chronicling the experiences that have shaped her—from her
                      childhood on the South Side of Chicago to her years as an
                      executive balancing the demands of motherhood and work, to
                      her time spent at the world’s most famous address. With
                      unerring honesty and lively wit, she describes her triumphs
                      and her disappointments, both public and private, telling
                      her full story as she has lived it—in her own words and on
                      her own terms.
                    </p>
                  </div>
                </v-card-subtitle>
              </div>
          </v-badge>
        </v-col>
      </v-row>
    </v-container>


    <div class="top-voted">
      <v-container>
        <h2>Top voted</h2>
      </v-container>

      <v-container class="grey lighten-5 books-list">
        <v-row no-gutters>
          <v-col class="book" cols="12" sm="6" md="4">
            <v-badge
              color="#ffcc00"
              content="1"
              overlap>
              <v-img
                class="white--text align-end"
                src="../assets/images/02-where.jpg">
              </v-img>

              <div>
                <h3 class="title">Where the Crawdads Sing</h3>
                <v-card-subtitle class="author">Delia Owens</v-card-subtitle>
              </div>
              <v-card-subtitle class="pb-0 book-info">
                <div class="synopsis">
                  <p>
                    For years, rumors of the "Marsh Girl" have haunted Barkley
                    Cove, a quiet town on the North Carolina coast. So in late
                    1969, when handsome Chase Andrews is found dead, the locals
                    immediately suspect Kya Clark, the so-called Marsh Girl. But
                    Kya is not what they say. Sensitive and intelligent, she has
                    survived for years alone in the marsh that she calls home,
                    finding friends in the gulls and lessons in the sand. Then
                    the time comes when she yearns to be touched and loved. When
                    two young men from town become intrigued by her wild beauty,
                    Kya opens herself to a new life--until the unthinkable happens.
                  </p>
                </div>
              </v-card-subtitle>
            </v-badge>

          </v-col>

          <v-col class="book" cols="12" sm="6" md="4">
            <v-badge
                color="#ffcc00"
                content="2"
                overlap>
                <v-img
                  class="white--text align-end"
                  src="../assets/images/03-girl.jpg">
                </v-img>

                <div>
                  <h3 class="title">
                    Girl, Wash Your Face: Stop Believing the Lies About Who You Are
                    so You Can Become Who You Were Meant to Be
                  </h3>
                  <v-card-subtitle class="author">Delia Owens</v-card-subtitle>
                </div>
                <v-card-subtitle class="pb-0 book-info">
                  <div class="synopsis">
                    <p>
                      As the founder of the lifestyle website TheChicSite.com and CEO
                      of her own media company, Rachel Hollis developed an immense
                      online community by sharing tips for better living while
                      fearlessly revealing the messiness of her own life. Now, in this
                      challenging and inspiring new book, Rachel exposes the twenty lies
                      and misconceptions that too often hold us back from living joyfully
                      and productively, lies we’ve told ourselves so often we don’t even
                      hear them anymore.
                    </p>
                  </div>
                </v-card-subtitle>
            </v-badge>
          </v-col>

          <v-col class="book" cols="12" sm="6" md="4">
            <v-badge
                color="#ffcc00"
                content="3"
                overlap>

              <v-img
                class="white--text align-end"
                src="../assets/images/04-educated.jpg">
              </v-img>

              <div>
                <h3 class="title">Educated: A Memoir</h3>
                <v-card-subtitle class="author">Tara Westover</v-card-subtitle>
              </div>
              <v-card-subtitle class="pb-0 book-info">

                <div class="synopsis">
                  <p>
                    Born to survivalists in the mountains of Idaho, Tara Westover was
                    seventeen the first time she set foot in a classroom. Her family
                    was so isolated from mainstream society that there was no one to
                    ensure the children received an education, and no one to intervene
                    when one of Tara’s older brothers became violent. When another
                    brother got himself into college, Tara decided to try a new kind
                    of life. Her quest for knowledge transformed her, taking her over
                    oceans and across continents, to Harvard and to Cambridge University.
                    Only then would she wonder if she’d traveled too far, if there was
                    still a way home.
                  </p>
                </div>
              </v-card-subtitle>
            </v-badge>
          </v-col>

        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style lang="sass" scoped>
  .list
    margin-top: 20px !important
    margin-left: 20px !important
  @media (max-width: 800px)
    .v-image.featured-book
      margin-right: 0 !important
      float: none !important
  .v-image
    height: 30%
    width: 30%
    margin: auto
  .title
    padding: 16px
    padding-bottom: 0
  .author
    padding-top: 0px
  .synopsis
    padding-right: 40px
  .top-voted
    margin-bottom: 60px
</style>
