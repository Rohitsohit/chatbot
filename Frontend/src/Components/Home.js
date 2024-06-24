import React from 'react'

export default function Home() {
  return (
    <body class="bg-gradient-to-br from-gray-900 to-black">
    <div class="text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
        

        <div class="h-32 md:h-40"></div>

        <p class="font-sans text-4xl font-bold text-gray-200 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
            CustomGPT 
        </p>
        <div class="h-10"></div>
        <p class="max-w-2xl font-serif text-xl text-gray-400 md:text-2xl">
            Upload your custom data to create a personalized chat experience. Ask questions specific to your uploaded content for deeper insights.
        </p>

        <div class="h-32 md:h-30">
        <a  href='/customgpt'class="max-w-2xl font-serif text-xl text-gray-400 md:text-2xl">
            Click here to explore.
        </a> 
        </div>

        <div class="grid gap-8 md:grid-cols-2">
            <div class="flex flex-col justify-center">
                <p
                    class="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
                    Simple and easy
                </p>
                <h2 class="text-4xl font-bold">Designed for Developers and Designers</h2>
                <div class="h-6"></div>
                <p class="font-serif text-xl text-gray-400 md:pr-10">
                    Experience the convenience of customizing your chat with our easy-to-use platform. Perfect for professionals seeking tailored solutions.
                </p>
                <div class="h-8"></div>
                <div class="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
                    <div>
                        <p class="font-semibold text-gray-400">Built with Care</p>
                        <div class="h-4"></div>
                        <p class="font-serif text-gray-400">
                            Our platform is crafted to ensure a seamless and enjoyable experience for all users.
                        </p>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-400">Easy to Implement</p>
                        <div class="h-4"></div>
                        <p class="font-serif text-gray-400">
                            Get started quickly with our intuitive setup process, designed to be hassle-free.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div class="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96"></div>
            </div>
        </div>

        <div class="h-32 md:h-40"></div>

        <p class="font-serif text-4xl">
            <span class="text-gray-400">When we collaborate</span>

            <span class="text-gray-600">
          we can achieve great things. Join us and be part of the innovation.
            </span>
        </p>

        <div class="h-32 md:h-40"></div>

        <div class="grid gap-4 md:grid-cols-3">
            <div class="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-br from-gray-900 to-black">
                <p
                    class="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14">
                    1
                </p>
                <div class="h-6"></div>
                <p class="font-serif text-3xl">We build products with UX in mind</p>
            </div>
            <div class="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-b from-gray-900 to-black">
                <p
                    class="flex items-center justify-center text-4xl font-semibold text-indigo-400 bg-indigo-800 rounded-full shadow-lg w-14 h-14">
                    2
                </p>
                <div class="h-6"></div>
                <p class="font-serif text-3xl">
                    You can trust us to deliver super fast
                </p>
            </div>
            <div class="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-bl from-gray-900 to-black">
                <p
                    class="flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14">
                    3
                </p>
                <div class="h-6"></div>
                <p class="font-serif text-3xl">We made it simple and easy to do</p>
            </div>
        </div>

        <div class="h-40"></div>

        <div class="grid gap-8 md:grid-cols-3">
            <div class="flex flex-col justify-center md:col-span-2">
                <p
                    class="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-600">
                    We are humans
                </p>
                <h2 class="text-4xl font-bold">We could work together</h2>
                <div class="h-6"></div>
                <p class="font-serif text-xl text-gray-400 md:pr-10">
                    Together, we can create amazing solutions tailored to your needs. Let's work together to bring your ideas to life.
                </p>
                <div class="h-8"></div>
                <div class="grid gap-6 pt-8 border-t border-gray-800 lg:grid-cols-3">
                    <div>
                        <p class="font-semibold text-gray-400">Built with Care</p>
                        <div class="h-4"></div>
                        <p class="font-serif text-gray-400">
                            Upload your data and let the Cohere model generate quizzes to help you prepare better for exams.
                        </p>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-400">Ease of Use</p>
                        <div class="h-4"></div>
                        <p class="font-serif text-gray-400">
                            Our platform is designed for simplicity and efficiency.
                        </p>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-400">Tailored Learning</p>
                        <div class="h-4"></div>
                        <p class="font-serif text-gray-400">
                            Customize your chat and quiz experiences based on your uploaded data for personalized learning.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div class="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96"></div>
            </div>
        </div>
    </div>
</body>
  )
}
