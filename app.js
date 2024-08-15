import { techSkills, selfPresentation, experience, languages, educations, commonInfo } from "./data.js";
import { BLOCK_TITLES } from './constants/index.js'

const { createApp, ref } = Vue;

const app = createApp({
  data() {
    return {
      titles: ref(BLOCK_TITLES),
      user: ref(commonInfo),
      techSkills: ref(techSkills),
      selfPresentation: ref(selfPresentation),
      experience: ref(experience),
      languages: ref(languages),
      educations: ref(educations),
    };
  },

  methods: {}
});

app.mount("#app");

