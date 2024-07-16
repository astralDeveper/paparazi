import React, { useState } from 'react'
import TopSec1Card from '../component/top/TopSec1Card'
import branch from '../assets/top/section1/Branches.png'
import branch2 from '../assets/top/section1/Branches2.png'
import branch3 from '../assets/top/section1/Branches3.png'
import branch4 from '../assets/top/section1/Branches4.png'

import TopSec2Card from '../component/top/TopSec2Card'
import image1 from '../assets/top/section2/1.jpeg'
import image2 from '../assets/top/section2/2.jpeg'
import image3 from '../assets/top/section2/3.jpeg'
import image4 from '../assets/top/section2/4.jpeg'
import image5 from '../assets/top/section2/5.jpeg'


import TopSec3Card from '../component/top/TopSec3Card'
import sec3img1 from '../assets/top/section3/1.png'
import sec3img2 from '../assets/top/section3/2.png'
import sec3img3 from '../assets/top/section3/3.png'
import sec3img4 from '../assets/top/section3/4.png'
import sec3img5 from '../assets/top/section3/5.png'
import sec3img6 from '../assets/top/section3/6.png'
import sec3img7 from '../assets/top/section3/7.png'
import sec3img8 from '../assets/top/section3/8.png'
import QuizInput from '../component/top/QuizInput'

const Top = () => {

  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);

  const handleOptionChange = (option) => {
    if (!answerChecked) {
      setSelectedOption(option);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) {
      return; // Do not check if no option is selected
    }

    if (selectedOption === quiz[currentQuestionIndex].correctOption) {
      setScore(score + 1);
      setAnswerCorrect(true);
    } else {
      setAnswerCorrect(false);
    }
    setAnswerChecked(true);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setAnswerChecked(false);
    setAnswerCorrect(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };


  const obj = [
    {
      head: "Case Study 1",
      para: "Lorem ipsum dolor sit amet, consectetur incididunt",
      image: branch
    },
    {
      head: "Case Study 2",
      para: "Lorem ipsum dolor sit amet, consectetur incididunt",
      image: branch2
    },
    {
      head: "Case Study 3",
      para: "Lorem ipsum dolor sit amet, consectetur incididunt",
      image: branch3
    },
    {
      head: "Case Study 4",
      para: "Lorem ipsum dolor sit amet, consectetur incididunt",
      image: branch4
    },
  ]

  const obj2 = [
    {
      image: image1,
      diary: "Diary Number 01",
      head: "A Day in the Life of an Ambassador",
      para: "Today, I attended a series of meetings with foreign diplomats to discuss international trade agreements. The discussions were intense but productive, and we made significant progress on key issues."
    },
    {
      image: image2,
      diary: "Diary Number 02",
      head: "Cultural Exchange in Japan",
      para: "Visited a local school in Tokyo to promote cultural exchange. The students were enthusiastic and eager to learn about different cultures. It was a heartwarming experience that highlighted the importance of global education."
    },
    {
      image: image3,
      diary: "Diary Number 03",
      head: "Negotiating Peace",
      para: "Participated in a high-stakes negotiation aimed at resolving a longstanding conflict between two nations. The atmosphere was tense, but by the end of the day, we had laid the groundwork for a potential peace treaty."
    },
    {
      image: image4,
      diary: "Diary Number 04",
      head: "Humanitarian Efforts in Africa",
      para: "Visited several humanitarian projects in Kenya. Met with local leaders and volunteers who are making a significant impact in their communities. The resilience and dedication of these individuals are truly inspiring."
    },
    {
      image: image5,
      diary: "Diary Number 05",
      head: "Economic Summit in Berlin",
      para: "Attended the annual economic summit in Berlin, where global leaders discussed strategies for economic growth and sustainability. The sessions were enlightening, and several innovative ideas were proposed."
    },
  ]

  const obj3 = [
    {
      image: sec3img1,
      tag: "Developments",
      head: "Strategies for Effective Leadership",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam"
    },
    {
      image: sec3img2,
      tag: "Developments",
      head: "Strategies for Effective Leadership",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam"
    },
    {
      image: sec3img3,
      tag: "Developments",
      head: "Strategies for Effective Leadership",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam"
    },
    {
      image: sec3img4,
      tag: "Developments",
      head: "Strategies for Effective Leadership",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam"
    },
    {
      image: sec3img5,
      tag: "Developments",
      head: "Strategies for Effective Leadership",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam"
    },
    {
      image: sec3img6,
      tag: "Developments",
      head: "Strategies for Effective Leadership",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam"
    },
    {
      image: sec3img7,
      tag: "Developments",
      head: "Strategies for Effective Leadership",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam"
    },
    {
      image: sec3img8,
      tag: "Developments",
      head: "Strategies for Effective Leadership",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam"
    },
  ]

  // const quiz = [
  //   {
  //     options: 'Option A: ',
  //     optionFull: "Oversee company vision and direction"
  //   },
  //   {
  //     options: 'Option B: ',
  //     optionFull: "Manage daily operations"
  //   },
  //   {
  //     options: 'Option C: ',
  //     optionFull: "Handle customer service"
  //   },
  //   {
  //     options: 'Option D: ',
  //     optionFull: "Maintain financial records"
  //   },
  // ]

  const quiz = [
    {
      questionNo: 1,
      question: 'What is the primary role of a CEO?',
      options: [
        'Option A: Oversee company vision and direction',
        'Option B: Manage daily operations',
        'Option C: Handle customer service',
        'Option D: Maintain financial records'
      ],
      correctOption: 'Option A: Oversee company vision and direction',
      
    },
    {
      questionNo: 2,
      question: 'What does KPI stand for?',
      options: [
        'Option A: Key Performance Indicator',
        'Option B: Key Project Initiative',
        'Option C: Known Performance Issue',
        'Option D: Key Process Input'
      ],
      correctOption: 'Option A: Key Performance Indicator'
    },
    {
      questionNo: 3,
      question: 'Which department is responsible for employee training?',
      options: [
        'Option A: Marketing',
        'Option B: Sales',
        'Option C: Human Resources',
        'Option D: Finance'
      ],
      correctOption: 'Option C: Human Resources'
    },
    {
      questionNo: 4,
      question: 'What is a common tool used for project management?',
      options: [
        'Option A: Photoshop',
        'Option B: Trello',
        'Option C: QuickBooks',
        'Option D: Salesforce'
      ],
      correctOption: 'Option B: Trello'
    },
    {
      questionNo: 5,
      question: 'What is the primary purpose of a balance sheet?',
      options: [
        'Option A: To show the company’s financial position',
        'Option B: To list the company’s expenses',
        'Option C: To detail the company’s sales',
        'Option D: To outline the company’s marketing strategy'
      ],
      correctOption: 'Option A: To show the company’s financial position'
    },
    {
      questionNo: 6,
      question: 'What does SWOT stand for in SWOT analysis?',
      options: [
        'Option A: Strengths, Weaknesses, Opportunities, Threats',
        'Option B: Strategies, Weaknesses, Operations, Targets',
        'Option C: Strengths, Wins, Opportunities, Targets',
        'Option D: Strategies, Wins, Operations, Threats'
      ],
      correctOption: 'Option A: Strengths, Weaknesses, Opportunities, Threats'
    },
    {
      questionNo: 7,
      question: 'What is an example of a financial KPI?',
      options: [
        'Option A: Employee satisfaction',
        'Option B: Customer retention rate',
        'Option C: Net profit margin',
        'Option D: Website traffic'
      ],
      correctOption: 'Option C: Net profit margin'
    },
    {
      questionNo: 8,
      question: 'Who is responsible for setting the overall strategic direction of a company?',
      options: [
        'Option A: Chief Financial Officer (CFO)',
        'Option B: Chief Marketing Officer (CMO)',
        'Option C: Chief Executive Officer (CEO)',
        'Option D: Chief Operating Officer (COO)'
      ],
      correctOption: 'Option C: Chief Executive Officer (CEO)'
    },
    {
      questionNo: 9,
      question: 'Which financial statement shows a company’s revenues and expenses?',
      options: [
        'Option A: Balance Sheet',
        'Option B: Income Statement',
        'Option C: Cash Flow Statement',
        'Option D: Statement of Retained Earnings'
      ],
      correctOption: 'Option B: Income Statement'
    },
    {
      questionNo: 10,
      question: 'What is the purpose of market research?',
      options: [
        'Option A: To determine pricing strategies',
        'Option B: To understand customer needs and preferences',
        'Option C: To develop a business plan',
        'Option D: To hire new employees'
      ],
      correctOption: 'Option B: To understand customer needs and preferences'
    },
  ];


  
  return (
    <>
      <div>
        {/* section 1 */}

        <section className='p-20 max-sm:p-10'>
              <h2 className='text-4xl font-semibold text-center'>Case Studies</h2>
              <p className='text-center mt-5'>Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna, imperdiet id leo quis, luctus auctor nisi. </p>

              <div className='grid grid-cols-4 gap-6 mt-10 justify-items-center max-xl:grid-cols-2 max-sm:grid-cols-1'>
                {obj.map((item)=>{
                  return <TopSec1Card head={item.head} para={item.para} image={item.image}/>
                })}
              </div>
        </section>

        {/* section 1 end */}

        {/* section 2 */}

        <section className='p-20 max-sm:p-10 bg-[#363636] px-40 max-lg:px-16'>
            <h2 className='text-4xl font-semibold'>Diplomatic Diaries</h2>
            <p className='mt-5'>Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna, imperdiet id leo quis, luctus auctor nisi. </p>
            
            <div className='mt-12 grid grid-cols-1 gap-10'>
              {obj2.map((item)=>{
                return <TopSec2Card image={item.image} diary={item.diary} head={item.head} para={item.para}/>
              })}

            </div>
        </section>

        {/* section 2 end  */}

        {/* section 3 */}
        
        <section className='p-40 max-2xl:p-20 max-sm:p-10 '>
          <h2 className='text-4xl font-semibold text-center'>Power Play Blogs</h2>
          <p className='text-center mt-5'>Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna, imperdiet id leo quis, luctus auctor nisi.</p>

          <div className='mt-10 grid grid-cols-4 gap-10 justify-center max-xl:grid-cols-2 max-sm:grid-cols-1'>
            {obj3.map((item)=>{
              return <TopSec3Card image={item.image} tag={item.tag} head={item.head} para={item.para}/>
            })}

          </div>
        </section>

        {/* section 3 end */}

        {/* quiz section */}

        <section className='pb-20 p-10'>
          <h2 className='text-4xl font-semibold text-center'>Corporate Power Play Quiz</h2>
          {currentQuestionIndex < quiz.length ? (
            <>
              <h3 className='text-3xl text-center mt-16'>Question {quiz[currentQuestionIndex].questionNo}:</h3>
              <h2 className='text-4xl font-semibold text-center mt-4'>{quiz[currentQuestionIndex].question}</h2>

              <div className='flex flex-col gap-6 justify-center mt-10'>
                {quiz[currentQuestionIndex].options.map((option, index) => (
                  <QuizInput
                    key={index}
                    option={option}
                    selectedOption={selectedOption}
                    onOptionChange={handleOptionChange}
                    disabled={answerChecked}
                  />
                ))}
              </div>
              <div className='flex justify-center mt-10 gap-5'>
                <button
                  className={`bg-[#D2940A] text-black font-semibold px-6 py-2 hover:scale-110 transition-all rounded-lg ${answerChecked || selectedOption === null ? 'cursor-not-allowed opacity-50' : ''}`}
                  onClick={handleCheckAnswer}
                  disabled={answerChecked || selectedOption === null}
                >
                  Check
                </button>
                <button
                  className={`text-[#D2940A] border-[#D2940A] font-semibold border-2 px-6 py-2 hover:scale-110 transition-all rounded-lg ${!answerChecked ? 'cursor-not-allowed opacity-50' : ''}`}
                  onClick={handleNextQuestion}
                  disabled={!answerChecked}
                >
                  Next
                </button>
              </div>
              {answerChecked && (
                <div className='flex justify-center mt-10'>
                  <div className={`bg-[#363636] p-5 rounded-xl ${answerCorrect ? 'border-2 border-green-500' : 'border-2 border-red-500'}`}>
                    <h6 className='text-center'>Your Answer is <span className='font-semibold'>{selectedOption}</span></h6>
                    <p className={`text-lg ${answerCorrect ? 'text-green-500' : 'text-red-500'}`}>
                      {answerCorrect ? 'Correct!' : 'Incorrect!'}
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <h2 className='text-4xl font-semibold text-center mt-16'>Quiz Completed! Your score is: {score}</h2>
          )}
        </section>



      </div>
    </>
  )
}

export default Top