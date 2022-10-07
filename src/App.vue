<template>
  <div class="wrapper" :class="showMode ? ['bg-[#191A23]', 'dark'] : ''">
    <div
      class="navbar header z-50 flex flex-row flex-wrap gap-x-30 sm: justify-between w-[100%] px-8.35 items-center mobile:mx-[0%] mobile:w-[100%] mobile:bg-[rgb(25,26,35)] mobile:pb-1 mobile:top-0"
      :class="showMode ? ['top-[2px]', 'fixed'] : ['fixed']"
      id="navHeader"
    >
      <div class="logo py-2 flex-4">
        <img
          src="./assets/logo_light.png"
          alt=""
          v-if="!showMode"
          class="lg:w-[100%] md:w-[70%] sm:w-[60%] mobile:w-[70%]"
        />
        <img
          src="./assets/logo_dark.png"
          alt=""
          v-if="showMode"
          class="lg:w-[100%] md:w-[70%] sm:w-[60%] mobile:w-[70%]"
        />
      </div>

      <!-- toggle button -->

      <label
        for="toggle__checkbox"
        class="toggle__mode lg:hidden md:hidden sm:block mobile:block absolute top-4 right-0 mobile:top-3 dark:top-2 dark:mobile:top-[16px]"
      >
        <fa icon="bars" class="w-10 text-white mobile:w-14" />
      </label>
      <input
        type="checkbox"
        id="toggle__checkbox"
        hidden
        class="toggle__button"
      />

      <!-- content header -->
      <div
        class="header__nav py-2 flex-1 flex justify-end gap-x-10 items-center lg:flex-row lg:flex md:flex-row md:flex sm:flex-col sm:hidden mobile:flex-col mobile:hidden"
      >
        <router-link
          to="/"
          class="font-roboto font-normal text-sm leading-6 text-white mobile:text-xl focus:bg-[#282933] hover:bg-[#282933] rounded-lg p-1"
          >Home</router-link
        >
        <div class="solution hover:bg-[#282933] rounded-lg p-1 relative">
          <div class="flex flex-row">
            <p
              class="solution__title font-roboto font-normal text-sm mobile:text-xl leading-6 h-5 pt-0 text-white focus:bg-[#282933]"
              id="solution_dropdown"
            >
              Solution
            </p>
            <ul
              class="solution__list bg-[#282933] w-40 pt-2 left-0"
              id="list_solution"
            >
              <li
                class="solution__item font-roboto text-sm text-white pl-2 py-1 hover:text-blue-400 opacity-75 mobile:text-lg"
              >
                Solution 1
              </li>
              <li
                class="solution__item font-roboto text-sm text-white pl-2 py-1 hover:text-blue-400 opacity-75 mobile:text-lg"
              >
                Solution 2
              </li>
              <li
                class="solution__item font-roboto text-sm text-white pl-2 py-1 hover:text-blue-400 opacity-75 mobile:text-lg"
              >
                Solution 3
              </li>
            </ul>
            <fa
              icon="angle-down"
              class="solution__down mt-2 pl-1 h-3 text-gray-50"
            />
          </div>
        </div>
        <router-link
          to="/news"
          class="font-roboto font-normal text-sm leading-6 text-white focus:bg-[#282933] hover:bg-[#282933] rounded-lg p-1 mobile:text-xl"
          >News</router-link
        >
        <router-link
          to="/partner"
          class="font-roboto font-normal text-sm leading-6 text-white focus:bg-[#282933] hover:bg-[#282933] rounded-lg p-1 mobile:text-xl"
          >Partner</router-link
        >
        <router-link
          to="/contact"
          class="font-roboto font-normal text-sm leading-6 text-white focus:bg-[#282933] hover:bg-[#282933] rounded-lg p-1 mobile:text-xl"
          >Contacts</router-link
        >
        <div class="language flex flex-row gap-4 items-center">
          <div
            class="flex flex-row gap-1 hover:bg-[#282933] rounded-lg p-1 relative"
          >
            <p
              class="language__title font-roboto font-normal text-sm leading-6 mobile:text-xl text-white flex flex-row"
            >
              Language
              <img :src="state.nation" alt="" class="w-5 h-4 mt-1 pl-1" />
            </p>
            <ul class="language__list bg-[#282933] w-24 pt-3">
              <li
                class="language__item font-roboto text-white text-sm hover:text-blue-400 pl-2 py-1 opacity-75 mobile:text-lg flex flex-row gap-2 items-center"
                @click="state.nation = vietnam"
              >
                <img src="./assets/Vietnam-2-128.webp" alt="" class="w-[20%]" />
                <p>VN</p>
              </li>
              <li
                class="language__item font-roboto text-white text-sm hover:text-blue-400 pl-2 py-1 opacity-75 mobile:text-lg flex flex-row gap-2 items-center"
                @click="state.nation = england"
              >
                <img src="./assets/Britain-128.webp" alt="" class="w-[20%]" />
                <p>EN</p>
              </li>
              <li
                class="language__item font-roboto text-white text-sm hover:text-blue-400 pl-2 py-1 opacity-75 mobile:text-lg flex flex-row gap-2 items-center"
                @click="state.nation = france"
              >
                <img src="./assets/France-2-256.webp" alt="" class="w-[20%]" />
                <p>FRN</p>
              </li>
            </ul>
            <fa
              icon="angle-down"
              class="language__down mt-2 pl-1 h-3 text-gray-50 mobile:hidden"
            />
          </div>
          <!-- <div class="search relative">
            <button @click="changeSearch">
              <fa icon="search" style="color: white; opacity: 0.75" />
            </button>
            <label v-if="showSearch" for="search__input" class="search_input right-0">
              <input
                type="text"
                name=""
                id="search__input"
                class="border-1 border-black rounded-lg pl-2 focus:border-blue-500"
              />
            </label>
          </div> -->
          <div class="light_dark_mode">
            <fa
              icon="sun"
              style="color: white"
              class="mode"
              v-if="!showMode"
              @click="changeMode"
            />
            <fa
              icon="moon"
              style="color: white"
              class="mode"
              v-if="showMode"
              @click="changeMode"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="display_views">
      <router-view
        :class="[
          showMode ? ['bg-[#191A23]', 'pb-10'] : 'mobile:mt-8',
          'router__view',
          'h-full',
        ]"
      >
      </router-view>
    </div>
    <div
      class="footer pt-5 mt-16 dark:mt-0 text-center bg-[#414141] dark:bg-[#0D0D10] mobile:px-2 lg:px-8.35 md:px-8.35 sm:px-8.35"
    >
      <div class="footer__nav flex flex-row justify-between mb-5 items-center">
        <div class="nav1">
          <router-link
            to="/"
            class="mr-5 font-roboto text-gray-300 leading-[30px] text-[15px] hover:text-[#5A27ED] lg:text-[15px] md:text-sm sm:text-sm"
            >Solution</router-link
          >
          <router-link
            to="/news"
            class="font-roboto text-gray-300 leading-[30px] text-[15px] hover:text-[#5A27ED] lg:text-[15px] md:text-sm sm:text-sm"
            >News</router-link
          >
        </div>
        <img
          src="./assets/logo__brand.png"
          alt=""
          class="lg:block md:block sm:hidden mobile:hidden"
        />
        <div class="nav2">
          <router-link
            to="/partner"
            class="font-roboto text-gray-300 leading-[30px] text-[15px] hover:text-[#5A27ED] lg:text-[15px] md:text-sm sm:text-sm"
            >Partner</router-link
          >
          <router-link
            to="/Contact"
            class="ml-5 font-roboto text-gray-300 leading-[30px] text-[15px] hover:text-[#5A27ED] lg:text-[15px] md:text-sm sm:text-sm"
            @click.prevent="clickContact"
            >Contact</router-link
          >
        </div>
      </div>
      <hr class="w-96.5 ml-1.75 h-[2px]" />
      <div class="footer__brand mt-10">
        <div class="brands my-5 flex flex-row gap-8 justify-center">
          <fa
            :icon="['fab', 'facebook']"
            class="scale-[150%]"
            style="color: white"
          />
          <fa
            :icon="['fab', 'youtube']"
            class="scale-[150%]"
            style="color: white"
          />
          <fa
            :icon="['fab', 'skype']"
            class="scale-[150%]"
            style="color: white"
          />
          <fa
            :icon="['fab', 'twitter']"
            class="scale-[150%]"
            style="color: white"
          />
        </div>
        <div
          class="footer__text font-roboto text-gray-300 pb-10 leading-[30px] text-[15px] lg:text-[15px] md:text-sm sm:text-sm"
        >
          Sigma, Inc. 2022 We love our users!
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";

const vietnam = new URL("./assets/Vietnam-2-128.webp", import.meta.url).href;
const england = new URL("./assets/Britain-128.webp", import.meta.url).href;
const france = new URL("./assets/France-2-256.webp", import.meta.url).href;
var state = reactive({
  nation: vietnam,
});
const store = useStore();
var showSearch = computed(() => store.getters["showSearch"]);
var showMode = computed(() => store.getters["showMode"]);
var showToggle = computed(() => store.getters["showToggle"]);

function changeSearch(): any {
  store.commit("SEARCH");
}
function changeMode() {
  store.commit("MODE");
}
function changeToggle() {
  store.commit("TOGGLE");
}

function navScroll() {
  var navHeader = document.getElementById("navHeader");
  if (navHeader != null) {
    if (window.scrollY > 40) {
      navHeader.style.backgroundColor = "rgba(25,26,35,0.75)";
      navHeader.style.top = "0";
    }
  } else {
    console.log("error");
  }
}
function clickContact() {
  var navHeader = document.getElementById("navHeader");
  if (navHeader != null) {
    navHeader.style.backgroundColor = "rgba(25,26,35,0.75)";
    navHeader.style.top = "0";
  } else {
    console.log("error");
  }
}
onMounted(() => {
  document.addEventListener("scroll", navScroll);
});
</script>

<style scoped>
.wrapper {
  height: 100vh;
  transition: background-color 1s ease-in-out;
}
.router__view {
  transition: all 1s ease-in-out;
}
.solution__list {
  position: absolute;
  top: 24px;
  border: solid 1px black;
  border-radius: 0rem 0.5rem 0.5rem 0.5rem;
  display: none;
}
.solution__list:hover {
  display: block;
}
.solution__title:hover ~ .solution__list {
  display: block;
}
.solution__down {
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
}
.solution__title:hover ~ .solution__down {
  transform: rotate(180deg);
}
.solution__list:hover ~ .solution__down {
  transform: rotate(180deg);
}

.search_input {
  position: absolute;
  top: 60px;
  right: 20px;
}
.search__input {
  transition: all 0.5s;
}

.language__title:hover ~ .language__down {
  transform: rotate(180deg);
}
.language__down {
  transition: transform 0.5s ease-in-out;
}
.language__list {
  position: absolute;
  top: 24px;
  left: 0;
  border: solid 1px black;
  border-radius: 0 0.5rem 0.5rem 0.5rem;
  display: none;
}
.language__title:hover ~ .language__list {
  display: block;
}
.language__list:hover {
  display: block;
}
.language__list:hover ~ .language__down {
  transform: rotate(180deg);
}

@media screen and (max-width: 768px) {
  .toggle__button:checked ~ .header__nav {
    display: flex;
    position: absolute;
    top: 40px;
    right: 10px;
    width: 48%;
    background-color: #282933;
    z-index: 999;
    border-radius: 20px;
  }
}
</style>
