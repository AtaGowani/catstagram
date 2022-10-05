<template>
  <div class="vuegram-post">
    <div class="header">
      <div class="text-left">
        <figure class="d-inline">
          <img
            src="../assets/profile.jpg"
            class="rounded-circle profile-thumbnail"
          />
        </figure>
        <span class="username">{{ post.username }}</span>
      </div>
    </div>
    <div
      class="image-container"
      :class="post.filter"
      :style="{ backgroundImage: 'url(' + post.postImage + ')' }"
      @dblclick="like"
    ></div>
    <div class="content">
      <div class="icons d-flex flex-row text-left">
        <div class="heart p-0">
          <b-icon icon="heart" style="width: 20px"></b-icon>
        </div>
        <div class="heart p-0">
          <b-icon icon="heart" style="width: 20px"></b-icon>
        </div>
        <div class="heart p-0">
          <b-icon icon="heart" style="width: 20px"></b-icon>
        </div>
      </div>

      <p class="likes">{{ post.likes }} likes</p>
      <p class="caption">
        <span>{{ post.username }}</span> {{ post.caption }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VuegramPost",
  props: {
    post: Object,
  },
  methods: {
    like() {
      // this.post.hasBeenLiked ? this.post.likes-- : this.post.likes++;
      // this.post.hasBeenLiked = !this.post.hasBeenLiked;
    },
  },
};
</script>

<style lang="scss" src="../styles/vuegram-post.scss">
// Styles from stylesheet
</style>
