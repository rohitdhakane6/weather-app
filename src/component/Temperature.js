import React from "react";

export default function Temperature() {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-10">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-white mt-[-3rem]">
              Today's Forecast for Pune
            </h1>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                <span class="title-font font-medium text-white">
                 Temperature is &#8451;
                </span>
              </div>
            </div> <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                <span class="title-font font-medium text-white">
                  Minimum Temperature is &#8451;
                </span>
              </div>
            </div> <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                <span class="title-font font-medium text-white">
                  Maximum Temperature is &#8451;
                </span>
              </div>
            </div> <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                <span class="title-font font-medium text-white">
                Humidity  &#37;
                </span>
              </div>
            </div> <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                <span class="title-font font-medium text-white">
                Sunrise
                </span>
              </div>
            </div> <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                <span class="title-font font-medium text-white">
                  Sunset
                </span>
              </div>
            </div>
         </div>

          {/* <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button> */}
        </div>
      </section>
    </div>
  );
}
