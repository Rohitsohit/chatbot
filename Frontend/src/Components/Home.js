import React from 'react'

export default function Home() {
  return (
    <body class="bg-gradient-to-br from-gray-900 to-black">
    <div class="text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
        

        <div class="h-32 md:h-40"></div>

        <p class="font-sans text-4xl font-bold text-gray-200 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
            CustomGPT and QuizGPT 
        </p>
        <div class="h-10"></div>
        <p class="max-w-2xl font-serif text-xl text-gray-400 md:text-2xl">
            Upload your custom data to create a personalized chat experience. Ask questions specific to your uploaded content for deeper insights.Quiz GPT help to prepare for the Exam by generating Quiz on the uploaded Data. Model use is Cohere
        </p>

        <div class="h-32 md:h-30">
        <a  href='/customgpt'class="max-w-2xl font-serif text-xl text-gray-400 md:text-2xl">
            Click here to explore.
        </a> 
        </div>

     


        

     

        <div class="grid gap-1 md:grid-cols-3">
            <div class="flex flex-col justify-center md:col-span-2">
                <div class="grid gap-6 pt-8 border-t border-gray-800 lg:grid-cols-3">
                    <div>
                        <p class="font-semibold text-gray-400">Quiz GPT</p>
                        <div class="h-4"></div>
                        <p class="font-serif text-gray-400">
                            Upload your data and let the Cohere model generate quizzes to help you prepare better for exams.
                        </p>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-400">CustomGPT</p>
                        <div class="h-4"></div>
                        <p class="font-serif text-gray-400">
                            Upload the data and create personalized chat.
                        </p>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-400">Cohere Model</p>
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
