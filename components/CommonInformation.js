import { commonInfo } from "../data.js";
import { BLOCK_TITLES } from '../constants/index.js'

export default {
  setup() {
    const { fullName, jobTitle, avatar: img, contacts } = commonInfo;
    const title = Vue.ref(BLOCK_TITLES.CONTACTS);

    return {
      fullName,
      jobTitle,
      img,
      contacts,
      title,
    };
  },

  template: `
      <h1>{{ fullName }}</h1>
      <h3 class="bg-grey">{{ jobTitle }}</h3>

      <img
        v-bind:src="img.src"
        v-bind:alt="img.alt"
        v-bind:title="img.title"
        v-bind:width="img.width"
        v-bind:height="img.height"
      >

      <h3 class="bg-grey">{{ title }}:</h3>

      <div v-for="item in contacts">
        <h4>{{ item.title }}</h4>
        <a v-bind:href="item.href" v-bind:target="item.target">{{ item.value }}</a>
      </div>
    `,
};
