<template>
  <div class="wrapper__home" :class="showMode ? ['dark'] : ''">
    <div
      class="for__header lg:h-14 md:h-12 sm:h-10 mobile:h-10 bg-[#191A23]"
      v-if="showMode"
    ></div>
    <div
      class="banner ml-[1.75%] mr-[1.75%] mobile:mx-0 lg:h-[430px] md:h-[350px] sm:h-[270px] mobile:h-[250px] rounded-2xl mobile:rounded-none mt-3 dark:mt-0 mobile:mr-0 mobile:mt-0"
    >
      <p
        class="banner__text font-roboto text-center min-w-[768px] text-white leading-[56px] font-bold lg:top-[100px] md:top-[100px] sm:top-20 mobile:hidden dark:sm:top-[100px] dark:md:top-[20%] dark:lg:top-[18%] lg:text-5xl md:text-3xl sm:text-xl"
      >
        Deliver a great experience for your customer
      </p>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        class="banner__button absolute rounded-2xl sm:top-[20%] md:top-[27%] lg:top-[39%] sm:w-[15%] md:w-[15%] lg:w-[15%] sm:h-[30px] md:h-[30px] lg:h-[30px] mobile:top-[120px] mobile:w-[35%] mobile:h-[45px]"
      >
        <p class="font-roboto text-white text-sm mobile:text-lg">Download</p>
      </button>

      <!-- Modal -->
      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog relative pointer-events-none lg:max-w-[100%] sm:max-w-[100%] mobile:max-w-[100%] lg:w-[56%] md:w-[70%] sm:w-[70%] mx-auto mobile:w-[90%] mobile:mt-10"
        >
          <div
            class="modal-content max-w-[100%] border-none shadow-lg relative flex flex-col pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current px-6"
          >
            <div
              class="modal-header items-center justify-between p-4 border-gray-200 rounded-t-md"
            >
              <div
                class="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                <div class="popup__titile text-center mt-[16px]">
                  <p
                    class="font-bold font-roboto lg: text-[34px] md:text-[28px] sm:text-[24px] mobile:text-[24px]"
                  >
                    Receive the document:
                  </p>
                  <p class="text-[16px] font-roboto">
                    spilot-datasheet-media-2022.pdf
                  </p>
                  <img src="../assets/hr_topic.png" alt="" class="mx-auto" />
                </div>
              </div>
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 absolute top-5 right-5 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-[#5A27ED] hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body relative p-4 mt-5">
              <FormKit 
                type="form"
                :actions="false"
                :form-class="'flex gap-[25px] lg:flex-row md:flex-row sm:flex-col mobile:flex-col'"
                :config="{
                  classes: {
                    outer: '$reset popup__input flex lg:flex-row md:flex-row sm:flex-col mobile:flex-col',
                    messages: '$reset font-roboto text-sm text-[red]',
                  }
                }"
              >
              <!-- input 1 -->
                <div 
                  class="input1 basis-1/2"
                >
                  <FormKit 
                    type="text"
                    label="First Name"
                    name="First Name"
                    validation="required|alpha|length:2,30"
                    style="outline:none"
                    :classes="{
                      label: '$reset font-roboto font-bold',
                      outer: '$reset firstname flex flex-col mb-6',
                      inner: '$reset outline-none',
                      input: 
                      '$reset border-solid border-[1px] border-gray-500 font-roboto'
                      + '$reset focus:border-[1px] focus:border-[#5A27ED] focus:border-solid'
                      + '$reset rounded-lg pl-2 mt-[6px] h-[36px] w-[100%]',
                    }"
                  />
                  <FormKit 
                    type="text"
                    label="Last Name"
                    name="Last Name"
                    validation="required|alpha|length:2,30"
                    style="outline:none"
                    :classes="{
                      label: '$reset font-roboto font-bold',
                      outer: '$reset firstname flex flex-col mb-6',
                      inner: '$reset outline-none',
                      input: 
                      '$reset border-solid border-[1px] border-gray-500 font-roboto'
                      + '$reset focus:border-[1px] focus:border-[#5A27ED] focus:border-solid'
                      + '$reset rounded-lg pl-2 mt-[6px] h-[36px] w-[100%]',
                    }"
                  />
                  <FormKit 
                    type="text"
                    label="Company"
                    name="Company"
                    validation="required|alpha|length:2,30"
                    style="outline:none"
                    :classes="{
                      label: '$reset font-roboto font-bold',
                      outer: '$reset firstname flex flex-col mb-6',
                      inner: '$reset outline-none',
                      input: 
                      '$reset border-solid border-[1px] border-gray-500 font-roboto'
                      + '$reset focus:border-[1px] focus:border-[#5A27ED] focus:border-solid'
                      + '$reset rounded-lg pl-2 mt-[6px] h-[36px] w-[100%]',
                    }"
                  />

                </div>

                <!-- input 2 -->
                <div 
                  class="input1 basis-1/2"
                >
                <div class="country flex flex-col mb-6">
                  <label
                    for="country__input"
                    class="inline-flex text-[16px] font-roboto"
                    >Country
                    <p style="color: red" class="ml-1">*</p></label
                  >
                  <select
                    id="country__input"
                    class="border-solid border-[1px] outline-none focus:border-[1px] focus:border-[#5A27ED] focus:border-solid rounded-lg pl-2 mt-[6px] h-[36px] w-[100%]"
                  >
                    <option selected>Choose your country</option>
                    <option
                      v-for="country in countries"
                      :key="country.flags.png"
                      :style="{
                        'background-image': 'url(' + country.flags.png + ')',
                      }"
                    >
                      {{ country.name.common }}
                    </option>
                  </select>
                </div>
                  <FormKit 
                    type="text"
                    label="Phone"
                    name="Phone"
                    validation="required|number|length:10,11"
                    style="outline:none"
                    :classes="{
                      label: '$reset font-roboto font-bold',
                      outer: '$reset firstname flex flex-col mb-6',
                      inner: '$reset outline-none',
                      input: 
                      '$reset border-solid border-[1px] border-gray-500 font-roboto'
                      + '$reset focus:border-[1px] focus:border-[#5A27ED] focus:border-solid'
                      + '$reset rounded-lg pl-2 mt-[6px] h-[36px] w-[100%]',
                    }"
                  />
                  <FormKit 
                    type="text"
                    label="Email"
                    name="Email"
                    validation="required|email"
                    style="outline:none"
                    :classes="{
                      label: '$reset font-roboto font-bold',
                      outer: '$reset firstname flex flex-col mb-6',
                      inner: '$reset outline-none',
                      input: 
                      '$reset border-solid border-[1px] border-gray-500 font-roboto'
                      + '$reset focus:border-[1px] focus:border-[#5A27ED] focus:border-solid'
                      + '$reset rounded-lg pl-2 mt-[6px] h-[36px] w-[100%]',
                    }"
                  />

                </div>
              </FormKit>
            </div>
            <!-- popup footer -->
            <div
              class="modal-footer items-center p-4 border-gray-200 rounded-b-md"
            >
              <div class="popup__finish">
                <div class="popup__policy">
                  <input
                    type="checkbox"
                    id="policy__check"
                    class="mr-2 scale-150"
                  />
                  <p class="font-roboto text-[16px] inline">
                    By downloading, I agree to sharing my data with Spilot under
                    terms defined in the
                    <span class="text-[#5A27ED] font-roboto text-[16px]"
                      >Privacy Policy</span
                    >
                    <span style="color: red">*</span>
                  </p>
                </div>
                <div class="popup__check my-6 px-auto">
                  <p class="font-roboto text-[16px] ml-[30%]">CAPTCHA</p>
                  <div
                    class="robot flex flex-row items-center border-solid border-[1px] border-gray-500 rounded-sm px-auto h-[60px] w-[40%] mx-auto"
                  >
                    <input
                      type="checkbox"
                      id="policy__check1"
                      class="mr-2 scale-150 ml-2"
                    />
                    <label
                      for="policy__check1"
                      class="font-roboto text-[16px] \ flex flex-row justify-between items-center"
                    >
                      I'm not robot
                      <img
                        src="../assets/captcha.jpg"
                        alt=""
                        class="w-[16%] mr-1"
                      />
                    </label>
                  </div>
                </div>
                <div class="popup__download flex flex-row justify-center">
                  <p
                    class="font-roboto text-[16px] py-1 pl-2 pr-12 bg-gray-400 rounded-2xl"
                  >
                    spilot-datasheet-media-2022.pdf
                  </p>
                  <button
                    data-bs-dismiss="modal"
                    class="font-roboto text-[16px] px-2 py-1 bg-[#5A27ED] rounded-2xl ml-[-25px]"
                  >
                    Download
                    <fa icon="arrow-down" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="home__content rounded-2xl bg-[#fff] mobile:px-2 lg:w-83.3 lg:mx-8.35 md:w-83.3 md:mx-8.35 sm:w-83.3 sm:mx-8.35 lg:-mt-16 md:-mt-12 sm:-mt-12 dark:bg-[#191A23]"
    >
      <div
        class="content__title font-roboto text-center text-[#11152A] dark:text-white leading-[70px] font-bold text-[40px] mb-5 lg:text-[40px] md:text-[32px] sm:text-[24px] mobile:text-[30px]"
      >
        We are Sigma OTT
        <p
          class="font-roboto text-center text-[#11152A] dark:text-white leading-[30px] font-normal text-xl mt-[-10px] lg:text-xl md:text-base sm:text-sm mobile:text-lg"
        >
          The world leading of video streaming solution
        </p>
      </div>
      <div class="content__topic px-1 mt-10">
        <!-- topic1 -->
        <div class="topic1 flex flex-row mb-10 mobile:block">
          <div class="topic1__content basis-1/2 mobile:mb-5">
            <div class="topic1__title">
              <p
                class="font-roboto text-[#11152A] dark:text-white leading-[37.5px] font-bold text-[32px] mb-5 lg:text-[32px] md:text-[26px] sm:text-[20px] mobile:text-[24px]"
              >
                Vận hành đơn giản
                <img src="../assets/hr_topic.png" alt="" />
              </p>
            </div>
            <p
              class="topic1__text font-roboto text-[#11152A] dark:text-white leading-[50px] text-[20px] lg:text-xl md:text-base sm:text-sm mobile:text-lg mobile:leading-7 lg:leading-[50px] md:leading-[35px] sm:leading-[30px]"
            >
              Tăng mức độ phủ sóng theo khu vực / Địa lý / ISP <br />
              Cải thiện hiệu suất tổng thể <br />
              Dự phòng / Chuyển đổi dự phòng <br />
              Giúp hệ thống hoạt đọng tốt, đáp ứng lượng CCU lớn.
            </p>
          </div>
          <div class="topic1__image basis-1/2 flex justify-end">
            <img
              src="../assets/img_topic1.png"
              alt=""
              class="w-[90%] h-[90%] mobile:w-full mobile:h-full"
            />
          </div>
        </div>
        <!-- topic2 -->
        <div class="topic2 flex flex-row-reverse mb-10 mobile:block">
          <div class="topic2__content basis-1/2 mobile:mb-5">
            <div class="topic2__title">
              <p
                class="font-roboto text-[#11152A] dark:text-white leading-[37.5px] font-bold text-[32px] mb-5 lg:text-[32px] md:text-[26px] sm:text-[20px] mobile:text-[24px]"
              >
                Nâng cao chất lượng dịch vụ
                <img src="../assets/hr_topic.png" alt="" />
              </p>
            </div>
            <p
              class="topic2__text font-roboto text-[#11152A] dark:text-white leading-[50px] text-[20px] lg:text-xl md:text-base sm:text-sm mobile:text-lg mobile:leading-7 lg:leading-[50px] md:leading-[35px] sm:leading-[30px]"
            >
              Tăng mức độ phủ sóng theo khu vực / Địa lý / ISP <br />
              Cải thiện hiệu suất tổng thể <br />
              Dự phòng / Chuyển đổi dự phòng <br />
              Giúp hệ thống hoạt đọng tốt, đáp ứng lượng CCU lớn.
            </p>
          </div>
          <div class="topic2__image basis-1/2 flex justify-start">
            <img
              src="../assets/img_topic2.png"
              alt=""
              class="w-[90%] h-[90%] mobile:w-full"
            />
          </div>
        </div>
        <!-- topic3 -->
        <div class="topic1 flex flex-row mb-10 mobile:block">
          <div class="topic1__content basis-1/2 mobile:mb-5">
            <div class="topic1__title">
              <p
                class="font-roboto text-[#11152A] dark:text-white leading-[37.5px] font-bold text-[32px] mb-5 lg:text-[32px] md:text-[26px] sm:text-[20px] mobile:text-[24px]"
              >
                Vận hành đơn giản
                <img src="../assets/hr_topic.png" alt="" />
              </p>
            </div>
            <p
              class="topic1__text font-roboto text-[#11152A] dark:text-white leading-[50px] text-[20px] lg:text-xl md:text-base sm:text-sm mobile:text-lg mobile:leading-7 lg:leading-[50px] md:leading-[35px] sm:leading-[30px]"
            >
              Tăng mức độ phủ sóng theo khu vực / Địa lý / ISP <br />
              Cải thiện hiệu suất tổng thể <br />
              Dự phòng / Chuyển đổi dự phòng <br />
              Giúp hệ thống hoạt đọng tốt, đáp ứng lượng CCU lớn.
            </p>
          </div>
          <div class="topic1__image basis-1/2 flex justify-end">
            <img
              src="../assets/img_topic3.png"
              alt=""
              class="w-[90%] h-[90%] mobile:w-full"
            />
          </div>
        </div>
        <!-- topic4 -->
        <div class="topic2 flex flex-row-reverse mb-10 mobile:block">
          <div class="topic2__content basis-1/2 mobile:mb-5">
            <div class="topic2__title">
              <p
                class="font-roboto text-[#11152A] dark:text-white leading-[37.5px] font-bold text-[32px] mb-5 lg:text-[32px] md:text-[26px] sm:text-[20px] mobile:text-[24px]"
              >
                Vận hành đơn giản
                <img src="../assets/hr_topic.png" alt="" />
              </p>
            </div>
            <p
              class="topic2__text font-roboto text-[#11152A] dark:text-white leading-[50px] text-[20px] lg:text-xl md:text-base sm:text-sm mobile:text-lg mobile:leading-7 lg:leading-[50px] md:leading-[35px] sm:leading-[30px]"
            >
              Tăng mức độ phủ sóng theo khu vực / Địa lý / ISP <br />
              Cải thiện hiệu suất tổng thể <br />
              Dự phòng / Chuyển đổi dự phòng <br />
              Giúp hệ thống hoạt đọng tốt, đáp ứng lượng CCU lớn.
            </p>
          </div>
          <div class="topic2__image basis-1/2 flex justify-start">
            <img
              src="../assets/img_topic4.png"
              alt=""
              class="w-[90%] h-[90%] mobile:w-full"
            />
          </div>
        </div>
        <!-- topic5 -->
        <div class="topic1 flex flex-row mb-10 mobile:block">
          <div class="topic1__content basis-1/2 mobile:mb-5">
            <div class="topic1__title">
              <p
                class="font-roboto text-[#11152A] dark:text-white leading-[37.5px] font-bold text-[32px] mb-5 lg:text-[32px] md:text-[26px] sm:text-[20px] mobile:text-[24px]"
              >
                Vận hành đơn giản
                <img src="../assets/hr_topic.png" alt="" />
              </p>
            </div>
            <p
              class="topic1__text font-roboto text-[#11152A] dark:text-white leading-[50px] text-[20px] lg:text-xl md:text-base sm:text-sm mobile:text-lg mobile:leading-7 lg:leading-[50px] md:leading-[35px] sm:leading-[30px]"
            >
              Tăng mức độ phủ sóng theo khu vực / Địa lý / ISP <br />
              Cải thiện hiệu suất tổng thể <br />
              Dự phòng / Chuyển đổi dự phòng <br />
              Giúp hệ thống hoạt đọng tốt, đáp ứng lượng CCU lớn.
            </p>
          </div>
          <div class="topic1__image basis-1/2 flex justify-end">
            <img
              src="../assets/img_topic5.png"
              alt=""
              class="w-[90%] h-[90%] mobile:w-full"
            />
          </div>
        </div>
      </div>
      <!-- end of content topic -->
      <div class="content__news mt-10 px-1 mobile:mt-10">
        <div class="news__title text-center mb-5">
          <p
            class="font-roboto text-[#11152A] dark:text-white leading-[37.5px] font-bold text-[32px]"
          >
            Latest Updates
          </p>
          <p
            class="font-roboto text-[#11152A] dark:text-white leading-[50px] text-[20px]"
          >
            See what press has to say about us
          </p>
        </div>
        <div
          class="news__box flex flex-row gap-10 mobile:flex-col mobile:gap-5"
        >
          <!-- box1 -->
          <div
            class="box1 bg-[#fafafa] dark:bg-[#31323E] rounded-lg basis-1/3 shadow-md"
          >
            <img
              src="../assets/img_news1.png"
              alt=""
              class="news__img w-full"
            />
            <div class="box1__text pl-5 mt-5">
              <p
                class="font-roboto text-[#11152A] dark:text-white leading-[21px] text-[12px]"
              >
                19/03/2022
              </p>
              <p
                class="font-roboto text-[#11152A] dark:text-white leading-[30px] text-[20px] lg:text-xl md:text-base sm:text-sm"
              >
                Hidden universe revealed in <br />
                stunning first images from <br />
                German telescope
              </p>
              <p
                class="font-roboto text-[#6C55F9] leading-[50px] text-[20px] lg:text-xl md:text-base sm:text-sm mb-2"
              >
                Đọc thêm
              </p>
            </div>
          </div>
          <!-- box2 -->
          <div
            class="box1 bg-[#fafafa] dark:bg-[#31323E] rounded-lg basis-1/3 shadow-md"
          >
            <img
              src="../assets/img_news2.png"
              alt=""
              class="news__img w-full"
            />
            <div class="box1__text pl-5 mt-5">
              <p
                class="font-roboto text-[#11152A] dark:text-white leading-[21px] text-[12px]"
              >
                19/03/2022
              </p>
              <p
                class="font-roboto text-[#11152A] dark:text-white leading-[30px] text-[20px] lg:text-xl md:text-base sm:text-sm"
              >
                Hidden universe revealed in <br />
                stunning first images from <br />
                German telescope
              </p>
              <p
                class="font-roboto text-[#6C55F9] leading-[50px] text-[20px] lg:text-xl md:text-base sm:text-sm mb-2"
              >
                Đọc thêm
              </p>
            </div>
          </div>
          <!-- box3 -->
          <div
            class="box1 bg-[#fafafa] dark:bg-[#31323E] rounded-lg basis-1/3 shadow-md"
          >
            <img
              src="../assets/img_news3.png"
              alt=""
              class="news__img w-full"
            />
            <div class="box1__text pl-5 mt-5">
              <p
                class="font-roboto text-[#11152A] dark:text-white leading-[21px] text-[12px]"
              >
                19/03/2022
              </p>
              <p
                class="font-roboto text-[#11152A] dark:text-white leading-[30px] text-[20px] lg:text-xl md:text-base sm:text-sm"
              >
                Hidden universe revealed in <br />
                stunning first images from <br />
                German telescope
              </p>
              <p
                class="font-roboto text-[#6C55F9] leading-[50px] text-[20px] lg:text-xl md:text-base sm:text-sm mb-2"
              >
                Đọc thêm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
import "tw-elements";
import { count } from "console";
import { url } from "inspector";
import { inputs, label, messages, outer } from "@formkit/inputs";
const store = useStore();
var showMode = computed(() => store.getters["showMode"]);

store.dispatch("getCountries");
var countries = computed(() => store.getters["countries"]);
</script>
<style scoped>
.banner {
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
.banner__button {
  position: absolute;
  z-index: 9;
  left: 50%;
  transform: translate(-50%, 50%);
  background: linear-gradient(270deg, #2cfddc 0%, #a35ff8 108.78%);
}
.banner__button:hover {
  background: linear-gradient(270deg, #a35ff8 0%, #2cfddc 108.78%);
}
.news__img {
  border-radius: 8px 8px 0 0;
}
input[type="checkbox"]#policy__check:checked {
  accent-color: #5a27ed;
}
#policy__check1:checked {
  accent-color: #5a27ed;
}
</style>
