export const Pricings = [
  {
    category: "Pricing",
    id: "pricing__1", // id is mandatory
    label: "<b>pricing</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
        <div class="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
            <div class="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
                <h2 class="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                    Simple, Transparent Pricing
                </h2>
                <p class="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl">
                    Pricing to fit the needs of any companie size.
                </p>
            </div>
            <div class="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
                <!-- Price 1 -->
                <div class="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                    <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                        Starter
                    </h3>
                    <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                        <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">
                            $5
                        </p>
                        <p class="box-border m-0 border-solid" style="border-image: initial;">
                            / month
                        </p>
                    </div>
                    <p class="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                        Ideal for Startups and Small Companies
                    </p>
                    <ul class="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Automated Reporting
                        </li>
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Faster Processing
                        </li>
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Customizations
                        </li>
                    </ul>
                    <button class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                        Select Plan
                    </button>
                </div>
                <!-- Price 2 -->
                <div class="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-blue-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
                    <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                        Basic
                    </h3>
                    <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                        <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">
                            $15
                        </p>
                        <p class="box-border m-0 border-solid" style="border-image: initial;">
                            / month
                        </p>
                    </div>
                    <p class="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                        Ideal for medium-size businesses to larger businesses
                    </p>
                    <ul class="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Everything in Starter
                        </li>
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            100 Builds
                        </li>
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Progress Reports
                        </li>
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Premium Support
                        </li>
                    </ul>
                    <button class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                        Select Plan
                    </button>
                </div>
                <!-- Price 3 -->
                <div class="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                    <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                        Plus
                    </h3>
                    <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                        <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">
                            $25
                        </p>
                        <p class="box-border m-0 border-solid" style="border-image: initial;">
                            / month
                        </p>
                    </div>
                    <p class="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                        Ideal for larger and enterprise companies
                    </p>
                    <ul class="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Everything in Basic
                        </li>
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Unlimited Builds
                        </li>
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Advanced Analytics
                        </li>
                        <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Company Evaluations
                        </li>
                    </ul>
                    <button class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                        Select Plan
                    </button>
                </div>
            </div>
        </div>
    </section>
    `,
  },
  {
    category: "Pricing",
    id: "pricing__2", // id is mandatory
    label: "<b>pricing</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
    <!-- Section 1 -->
    <section class="box-border py-8 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24">
        <div class="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
            <div class="flex flex-col items-center leading-7 text-center text-gray-900">
                <h2 class="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                    Pricing Options
                </h2>
                <p class="box-border mt-4 text-2xl leading-normal text-gray-900 border-solid">
                    We've got a plan for companies of any size
                </p>
            </div>
            <div class="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4 border-gray-300 border-blue-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
                <div class="box-border px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                    <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                        Basic
                    </h3>
                    <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">
                        The basic plan is a good fit for smaller teams and startups
                    </p>
                    <div class="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                        <p class="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                            $19
                        </p>
                        <p class="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                            per user <span class="block">per month</span>
                        </p>
                    </div>
    
                    <button class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded-md cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg">
                        Select Plan
                    </button>
                </div>
                <div class="box-border px-4 py-8 mb-6 text-center bg-gray-100 border border-gray-300 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                    <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                        Plus
                    </h3>
                    <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">
                        The plus plan is a good fit for medium-size to larger companies
                    </p>
                    <div class="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                        <p class="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                            $39
                        </p>
                        <p class="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                            per user <span class="block">per month</span>
                        </p>
                    </div>
                    <button class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border-b-4 border-blue-700 rounded cursor-pointer hover:text-white sm:text-base sm:mt-8 md:text-lg">
                        Select Plan
                    </button>
                </div>
                <div class="box-border px-4 py-8 text-center bg-white border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                    <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                        Pro
                    </h3>
                    <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">
                        The pro plan is a good fit for larger and enterprise companies.
                    </p>
                    <div class="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                        <p class="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                            $59
                        </p>
                        <p class="box-border my-0 ml-4 mr-0 text-xs text-center border-0 border-gray-200">
                            per user <span class="block">per month</span>
                        </p>
                    </div>
                    <button class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg">
                        Select Plan
                    </button>
                </div>
            </div>
        </div>
    </section>
    `,
  },
];
