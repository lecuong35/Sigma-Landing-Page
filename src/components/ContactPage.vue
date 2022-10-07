<template>
  <div
    class="contact dark:lg:pt-[250px] dark:md:pt-[180px] dark:sm:pt-[150px] dark:mobile:pt-[100px]"
    :class="showMode ? ['dark', 'bg-[#191A23]'] : ''"
  >
    <div
      class="contact__banner ml-[1.75%] mr-[1.75%] mobile:mx-0 lg:h-[430px] md:h-[350px] sm:h-[270px] mobile:h-[250px] rounded-2xl mobile:rounded-none mt-3 mobile:mr-0 mobile:mt-0"
      v-if="!showMode"
    >
      <p
        class="banner__text font-roboto text-center min-w-[768px] text-white leading-[56px] font-bold lg:top-[100px] md:top-[100px] sm:top-20 mobile:hidden lg:text-5xl md:text-3xl sm:text-xl"
      >
        Deliver a great experience for your customer
      </p>
    </div>
    <div
      class="pb-5 shadow-md mx-8.35 rounded-2xl dark:bg-[#222330] lg:mt-[-100px] md:mt-[-80px] sm:mt-[-80px] mobile:mt-[0px]"
    >
      <div
        class="flex w-full lg:flex-row md:flex-row sm:flex-col sm:gap-5 mobile:flex-col mobile:gap-5 lg:px-20 lg:py-16 md:px-5 md:py-5 sm:px-5 sm:py-5 mobile:px-2 mobile:py-2 bg-white rounded-2xl dark:bg-[#222330]"
      >
        <!-- contact intro -->
        <div
          class="contact__intro basis-2/3 flex flex-col items-start justify-center"
        >
          <p
            class="font-roboto text-[#11152A] dark:text-white leading-[37.5px] font-bold lg:text-[32px] md:text-[24px] sm:text-[20px] mobile:text-[18px] mb-2"
          >
            Contact
          </p>
          <img src="../assets/hr_topic.png" alt="" class="mb-5" />
          <p
            class="font-roboto text-[#11152A] dark:text-white leading-[50px] text-[20px] lg:text-xl md:text-base sm:text-sm mobile:text-lg mobile:leading-7 lg:leading-[50px] md:leading-[35px] sm:leading-[30px]"
          >
            I think it takes more than three seconds to build your brand, and
            <br />
            consumers are willing to spend the time if your content is <br />
            compelling, relevant, and valuable
          </p>
        </div>
        <!-- contact form -->
        <div
          class="contact__form basis-1/3 flex flex-col gap-5 justify-end lg:px-2 md:px-2 sm:px-0 mobile:px-0"
        >
          <p
            class="font-roboto text-[#11152A] dark:text-gray-300 leading-[30px] text-[15px] lg:text-[15px] md:text-sm sm:text-sm"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <FormKit
            type="form"
            :actions="false"
            :config="{
              classes: {
                message: 'text-sm text-[red] font-roboto',
              },
            }"
          >
            <!-- Company Name -->
            <FormKit
              type="text"
              name="Company Name"
              placeholder="Company Name"
              style="outline: none; border-radius: 6px; padding: 0 6px 0 6px"
              validation="required|alpha|length:3,30"
              validation-visibility="blur"
              :classes="{
                outer: 'mb-5',
                inner:
                  'boder-solid border-[1px] border-gray-700 dark:border-gray-500 rounded-[6px]',
                input:
                  'bg-white dark:bg-[#191A23] text-gray-700 dark:text-white font-roboto h-[35px] w-full',
                message: 'font-roboto text-[red] text-sm',
              }"
            />
            <!-- Email -->
            <FormKit
              type="text"
              placeholder="Email"
              name="Email"
              style="outline: none; border-radius: 6px; padding: 0 6px 0 6px"
              validation-visibility="blur"
              validation="required|email"
              :classes="{
                outer: 'mb-5',
                inner:
                  'boder-solid border-[1px] border-gray-700 dark:border-gray-500 rounded-[6px]',
                input:
                  'bg-white dark:bg-[#191A23] text-gray-700 dark:text-white font-roboto h-[35px] w-full',
              }"
            />

            <div
              class="form__name flex gap-2 lg:flex-row md:flex-col sm:flex-col mobile:flex-col"
            >
              <!-- First Name -->
              <FormKit
                type="text"
                placeholder="First Name"
                name="First Name"
                style="outline: none; border-radius: 6px; padding: 0 6px 0 6px"
                validation-visibility="blur"
                validation="required|alpha|length:2,30"
                :classes="{
                  outer: 'mb-5',
                  inner:
                    'boder-solid border-[1px] border-gray-700 dark:border-gray-500 rounded-[6px]',
                  input:
                    'bg-white dark:bg-[#191A23] text-gray-700 dark:text-white font-roboto h-[35px] w-full',
                }"
              />
              <!-- Last Name -->
              <FormKit
                type="text"
                placeholder="Last Name"
                name="Last Name"
                style="outline: none; border-radius: 6px; padding: 0 6px 0 6px"
                validation-visibility="blur"
                validation="required|alpha|length:2,30"
                :classes="{
                  outer: 'mb-5',
                  inner:
                    'boder-solid border-[1px] border-gray-700 dark:border-gray-500 rounded-[6px] ' +
                    'hover:border-[#5A27ED] hover:border-solid focus:hover-[1px] hover:rounded-lg',
                  input:
                    'w-full bg-white dark:bg-[#191A23] text-gray-700 dark:text-white font-roboto h-[35px]',
                }"
              />
            </div>

            <FormKit
              type="submit"
              label="Send"
              :classes="{
                outer: 'mb-0',
                input:
                  'bg-blue-500 text-white font-bold py-2 px-10 rounded-md w-full',
              }"
            />
          </FormKit>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  help,
  inner,
  inputs,
  label,
  message,
  messages,
  outer,
  submit,
  submitInput,
} from "@formkit/inputs";
import { prefix } from "@fortawesome/free-solid-svg-icons";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
var showMode = computed(() => store.getters["showMode"]);
</script>
<style scoped>
.contact__banner {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("../assets/banner.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.banner__text {
  position: absolute;
  z-index: 9;
  left: 50%;
  transform: translate(-50%, 50%);
}
</style>
