<template>
  <div id="app">
    <div class="app-header">
      <div class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Catstagram</a>
          <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >[profile pic here]</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="app-phone d-flex flex-row justify-content-center">
      <div class="p-2">
        <phone-body
          :step="step"
          :posts="posts"
          :filters="filters"
          :image="image"
          :selectedFilter="selectedFilter"
          v-model="caption"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PhoneBody from "./components/PhoneBody";

import posts from "./data/posts";
import filters from "./data/filters";

import EventBus from "./event-bus.js";

export default {
  name: "App",
  data() {
    return {
      step: 1,
      posts,
      filters,
      image: "",
      selectedFilter: "",
      caption: "",
    };
  },
  created() {
    EventBus.$on("filter-selected", (evt) => {
      this.selectedFilter = evt.filter;
    });
  },
  methods: {
    uploadImage(evt) {
      const files = evt.target.files;
      if (!files.length) return;

      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (evt) => {
        this.image = evt.target.result;
        this.step = 2;
      };

      // To enable reuploading of same files in Chrome
      document.querySelector("#file").value = "";
    },
    sharePost() {
      const post = {
        username: "fullstack_vue",
        userImage:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/vue_lg_bg.png",
        postImage: this.image,
        likes: 0,
        caption: this.caption,
        filter: this.filterType,
      };
      this.posts.unshift(post);
      this.goToHome();
    },
    goToHome() {
      this.image = "";
      this.selectedFilter = "";
      this.caption = "";
      this.step = 1;
    },
  },
  components: {
    "phone-body": PhoneBody,
  },
};
</script>

<style lang="scss" src="./styles/app.scss">
// Styles from stylesheet
</style>