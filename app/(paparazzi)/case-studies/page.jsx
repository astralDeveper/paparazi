'use client'

import React, { useEffect, useState } from 'react'
import TopSec1Card from '../../_components/top/TopSec1Card'
import TopSec2Card from '../../_components/top/TopSec2Card'
import TopSec3Card from '../../_components/top/TopSec3Card'
import QuizInput from '../../_components/top/QuizInput'

import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../config/firebaseConfig';
import Link from 'next/link';
import { client } from '@/sanity/lib/client'
import createQuizResult from '@/app/_actions/create-quiz-result'

const Top = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(3);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [user, setUser] = useState(null);

  const handleOptionChange = (option) => {
    if (!answerChecked) {
      setSelectedOption(option);
    }
  };

  const [topData, setTopData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const top = await client.fetch(`*[_type == 'top'][0]{...}`);
        setTopData(top);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        client.fetch(`*[_id == '${uid}'][0]{...}`).then((res) => {
          console.log('User signed in:', res);
          setUser({ id: uid, username: res.username, email: res.email });
        })
      } else {
        setUser('');
      }
    });
  }, []);

  if (!topData) return null;

  const handleCheckAnswer = () => {
    if (selectedOption === null) {
      return; // Do not check if no option is selected
    }

    if (selectedOption === topData.quiz[currentQuestionIndex].correctAns) {
      setScore(score + 1);
      setAnswerCorrect(true);
    } else {
      setAnswerCorrect(false);
    }
    setAnswerChecked(true);
  };

  const handleNextQuestion = async () => {
    setSelectedOption(null);
    setAnswerChecked(false);
    setAnswerCorrect(false);
    
    if ((currentQuestionIndex + 1) === topData.quiz.length ) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      try {
        await createQuizResult(user.id, score, user.username, user.email)
        console.log('Sanity document created:');
      } catch (err) {
        console.error('Error creating Sanity document:', err);
      }
    } else
      setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  return (
    <>
      <div>
        {/* section 1 */}

        <section className='p-20 max-sm:p-10'>
          <h2 className='text-4xl font-semibold text-center'>Case Studies</h2>
          <p className='text-center mt-5'>Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna, imperdiet id leo quis, luctus auctor nisi. </p>

          <div className='grid grid-cols-4 gap-6 mt-10 justify-items-center max-xl:grid-cols-2 max-sm:grid-cols-1'>
            {topData.casestudies.map((item, index) => {
              return <TopSec1Card key={index} types={item.heading} head={item.casestudynumber} para={item.description} image={item.image} />
            })}
          </div>
        </section>

        {/* section 2 */}

        <section className='p-20 max-sm:p-10 bg-[#363636] px-40 max-lg:px-16'>
          <h2 className='text-4xl font-semibold'>Diplomatic Diaries</h2>
          <p className='mt-5'>Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna, imperdiet id leo quis, luctus auctor nisi. </p>

          <div className='mt-12 grid grid-cols-1 gap-10'>
            {topData.diplomaticdiaries.map((item, index) => {
              return <TopSec2Card key={index} image={item.image} diary={item.diarynumber} head={item.header} para={item.description} />
            })}

          </div>
        </section>

        {/* section 3 */}

        <section className='p-40 max-2xl:p-20 max-sm:p-10 '>
          <h2 className='text-4xl font-semibold text-center'>Power Play Blogs</h2>
          <p className='text-center mt-5'>Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna, imperdiet id leo quis, luctus auctor nisi.</p>

          <div className='mt-10 grid grid-cols-4 gap-10 justify-center max-xl:grid-cols-2 max-sm:grid-cols-1'>
            {topData.blogs.map((item, index) => {
              return <TopSec3Card key={index} image={item.image} tag={item.tag} head={item.header} para={item.description} />
            })}

          </div>
        </section>

        {/* quiz section */}
        {
          user ? (<section className='pb-20 p-10'>
            <h2 className='text-4xl font-semibold text-center'>Corporate Power Play Quiz</h2>
            {currentQuestionIndex < topData.quiz.length ? (
              <>
                <h3 className='text-3xl text-center mt-16'>Question {currentQuestionIndex + 1}:</h3>
                <h2 className='text-4xl font-semibold text-center mt-4'>{topData.quiz[currentQuestionIndex].question}</h2>

                <div className='flex flex-col gap-6 justify-center mt-10'>

                  <QuizInput optionNum='Option A:' option={topData.quiz[currentQuestionIndex].option1} selectedOption={selectedOption} onOptionChange={handleOptionChange} disabled={answerChecked} />
                  <QuizInput optionNum='Option B:' option={topData.quiz[currentQuestionIndex].option2} selectedOption={selectedOption} onOptionChange={handleOptionChange} disabled={answerChecked} />
                  <QuizInput optionNum='Option C:' option={topData.quiz[currentQuestionIndex].option3} selectedOption={selectedOption} onOptionChange={handleOptionChange} disabled={answerChecked} />
                  <QuizInput optionNum='Option D:' option={topData.quiz[currentQuestionIndex].option4} selectedOption={selectedOption} onOptionChange={handleOptionChange} disabled={answerChecked} />

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
          </section>): (
            <div className='text-center text-xl font-semibold mb-10 sm:text-2xl'>
              <p> <Link href='/login' className='cursor-pointer text-yellow-500'>Login</Link> to play quiz</p>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Top


// const quiz = [
//   {
//     questionNo: 1,
//     question: 'What is the primary role of a CEO?',
//     options: [
//       'Option A: Oversee company vision and direction',
//       'Option B: Manage daily operations',
//       'Option C: Handle customer service',
//       'Option D: Maintain financial records'
//     ],
//     correctOption: 'Option A: Oversee company vision and direction',

//   },
//   {
//     questionNo: 2,
//     question: 'What does KPI stand for?',
//     options: [
//       'Option A: Key Performance Indicator',
//       'Option B: Key Project Initiative',
//       'Option C: Known Performance Issue',
//       'Option D: Key Process Input'
//     ],
//     correctOption: 'Option A: Key Performance Indicator'
//   },
//   {
//     questionNo: 3,
//     question: 'Which department is responsible for employee training?',
//     options: [
//       'Option A: Marketing',
//       'Option B: Sales',
//       'Option C: Human Resources',
//       'Option D: Finance'
//     ],
//     correctOption: 'Option C: Human Resources'
//   },
//   {
//     questionNo: 4,
//     question: 'What is a common tool used for project management?',
//     options: [
//       'Option A: Photoshop',
//       'Option B: Trello',
//       'Option C: QuickBooks',
//       'Option D: Salesforce'
//     ],
//     correctOption: 'Option B: Trello'
//   },
//   {
//     questionNo: 5,
//     question: 'What is the primary purpose of a balance sheet?',
//     options: [
//       'Option A: To show the company’s financial position',
//       'Option B: To list the company’s expenses',
//       'Option C: To detail the company’s sales',
//       'Option D: To outline the company’s marketing strategy'
//     ],
//     correctOption: 'Option A: To show the company’s financial position'
//   },
//   {
//     questionNo: 6,
//     question: 'What does SWOT stand for in SWOT analysis?',
//     options: [
//       'Option A: Strengths, Weaknesses, Opportunities, Threats',
//       'Option B: Strategies, Weaknesses, Operations, Targets',
//       'Option C: Strengths, Wins, Opportunities, Targets',
//       'Option D: Strategies, Wins, Operations, Threats'
//     ],
//     correctOption: 'Option A: Strengths, Weaknesses, Opportunities, Threats'
//   },
//   {
//     questionNo: 7,
//     question: 'What is an example of a financial KPI?',
//     options: [
//       'Option A: Employee satisfaction',
//       'Option B: Customer retention rate',
//       'Option C: Net profit margin',
//       'Option D: Website traffic'
//     ],
//     correctOption: 'Option C: Net profit margin'
//   },
//   {
//     questionNo: 8,
//     question: 'Who is responsible for setting the overall strategic direction of a company?',
//     options: [
//       'Option A: Chief Financial Officer (CFO)',
//       'Option B: Chief Marketing Officer (CMO)',
//       'Option C: Chief Executive Officer (CEO)',
//       'Option D: Chief Operating Officer (COO)'
//     ],
//     correctOption: 'Option C: Chief Executive Officer (CEO)'
//   },
//   {
//     questionNo: 9,
//     question: 'Which financial statement shows a company’s revenues and expenses?',
//     options: [
//       'Option A: Balance Sheet',
//       'Option B: Income Statement',
//       'Option C: Cash Flow Statement',
//       'Option D: Statement of Retained Earnings'
//     ],
//     correctOption: 'Option B: Income Statement'
//   },
//   {
//     questionNo: 10,
//     question: 'What is the purpose of market research?',
//     options: [
//       'Option A: To determine pricing strategies',
//       'Option B: To understand customer needs and preferences',
//       'Option C: To develop a business plan',
//       'Option D: To hire new employees'
//     ],
//     correctOption: 'Option B: To understand customer needs and preferences'
//   },
// ];
