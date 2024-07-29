'use client'

import { useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { auth } from "@/app/config/firebaseConfig";
import { createQuizResult, updateQuizResult } from "@/app/_actions/create-quiz-result";
import stars from "@/app/_assets/quiz/stars.svg"

export default function QuizPage() {
  const [user, setUser] = useState(null);
  const [quizData, setQuizData] = useState(null);
  const [quizResultData, setQuizResultData] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState('');

  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [corporateQuizScore, setCorporateQuizScore] = useState(0);
  const [culturalQuizScore, setCulturalQuizScore] = useState(0);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);

  const [submitResult, setSubmitResult] = useState(false);

  useEffect(() => {
    if (!submitResult) return;

    const submit = async () => {
      const data = {
        userId: user.id,
        username: user.username,
        email: user.email,
      }

      if (quizResultData) {
        if (quizResultData.hasTakenCorporateQuiz) {
          data.hasTakenCorporateQuiz = quizResultData.hasTakenCorporateQuiz;
          data.corporateQuizScore = quizResultData.corporateQuizScore;
          data.hasTakenCulturalQuiz = true;
          data.culturalQuizScore = culturalQuizScore;
        } else if (quizResultData.hasTakenCulturalQuiz) {
          data.hasTakenCorporateQuiz = true;
          data.corporateQuizScore = corporateQuizScore;
          data.hasTakenCulturalQuiz = quizResultData.hasTakenCulturalQuiz;
          data.culturalQuizScore = quizResultData.culturalQuizScore;
        }

        try {
          await updateQuizResult(quizResultData._id, data);
          console.log('Sanity document updated:');
        } catch (error) {
          console.error(error)
        }
      } else {
        if (selectedQuiz === 'corporateQuiz') {
          data.hasTakenCorporateQuiz = true;
          data.corporateQuizScore = corporateQuizScore;
          data.hasTakenCulturalQuiz = false;
          data.culturalQuizScore = 0;
        } else if (selectedQuiz === 'culturalQuiz') {
          data.hasTakenCorporateQuiz = false;
          data.corporateQuizScore = 0;
          data.hasTakenCulturalQuiz = true;
          data.culturalQuizScore = culturalQuizScore;
        }
  
        try {
          await createQuizResult(data);
          console.log('Sanity document created:');
        } catch (error) {
          console.error(error)
        }
      }
    
    }
    setSubmitResult(false)

    submit()
  }, [submitResult, user, selectedQuiz, corporateQuizScore, culturalQuizScore, quizResultData])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        client.fetch(`*[_id == '${uid}'][0]{...}`).then((res) => {
          setUser({ id: uid, username: res.username, email: res.email });
        })
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      try {
        const quiz = await client.fetch(`*[_type == 'quiz'][0]{...}`);
        setQuizData(quiz);
        
        const quizResult = await client.fetch(`*[_type == 'quizResult' && userId == '${user.id}'][0]{...}`, {}, {
          useCdn: false,
          cache: 'no-store',
        });
        
        if (quizResult) {
          setQuizResultData(quizResult);
          setCorporateQuizScore(quizResult.corporateQuizScore ?? 0);
          setCulturalQuizScore(quizResult.culturalQuizScore ?? 0);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user])

  const handleOptionChange = (option) => {
    if (!answerChecked) {
      setSelectedOption(option);
    }
  };

  const nextTimeoutRef = useRef();

  const handleCheckAnswer = () => {
    if (selectedOption === null) return; // Do not check if no option is selected

    if (selectedOption === quizData[selectedQuiz][currentQuestionIndex].answer) {
      selectedQuiz === 'corporateQuiz' && setCorporateQuizScore(corporateQuizScore + 1);
      selectedQuiz === 'culturalQuiz' && setCulturalQuizScore(culturalQuizScore + 1);
      setAnswerCorrect(true);
    } else {
      setAnswerCorrect(false);
    }
    setAnswerChecked(true);

    nextTimeoutRef.current = setTimeout(handleNextQuestion, 3500);
  };

  const handleNextQuestion = async () => {
    clearTimeout(nextTimeoutRef.current)
    setSelectedOption(null);
    setAnswerChecked(false);
    setAnswerCorrect(false);

    if ((currentQuestionIndex + 1) === quizData[selectedQuiz].length) setSubmitResult(true);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (!user) return <RedirectToLogin />

  if (!quizData) return null;

  if (!selectedQuiz) return <QuizSelect quizData={quizData} setSelectedQuiz={setSelectedQuiz} />;

  if (!quizData[selectedQuiz]) {
    return (
      <section className='py-24'>
        <h1 className='text-3xl max-sm:text-2xl max-sm:font-medium font-semibold text-center uppercase'>
          {selectedQuiz === 'corporateQuiz' ? 'Corporate Powerplay Quiz' : 'Cultural Sensitivity Quiz'}
        </h1>

        <p className="text-center mt-4">
          No questions added!
        </p>
      </section>
    )
  }

  if (currentQuestionIndex >= quizData[selectedQuiz]?.length 
      || (quizResultData && selectedQuiz === 'corporateQuiz' && quizResultData.hasTakenCorporateQuiz)
      || (quizResultData && selectedQuiz === 'culturalQuiz' && quizResultData.hasTakenCulturalQuiz)
    ) {
    return (
      <section className='py-24'>
        <h1 className='text-3xl max-sm:text-2xl max-sm:font-medium font-semibold text-center uppercase'>
          {selectedQuiz === 'corporateQuiz' ? 'Corporate Powerplay Quiz' : 'Cultural Sensitivity Quiz'}
        </h1>

        <Image src={stars} alt="stars" width={256} height={256} className="h-64 mx-auto" />

        <p className="text-center mt-4 text-3xl font-semibold">
          Your score:
          {' '}
          <span className="text-[#D2940A] font-semibold">{selectedQuiz === 'corporateQuiz' ? corporateQuizScore : culturalQuizScore}</span>
          {' '}
          /
          {' '}
          {quizData[selectedQuiz]?.length}
        </p>

        <div className="flex gap-6 justify-center items-center mt-4">
          <p>
            Correct Answer:
            {' '}
            <span className="text-green-600">
              {selectedQuiz === 'corporateQuiz' ? corporateQuizScore : culturalQuizScore}
            </span>
          </p>
          <p>
            Wrong Answer:
            {' '}
            <span className="text-red-600">
              {quizData[selectedQuiz]?.length - Number(selectedQuiz === 'corporateQuiz' ? corporateQuizScore : culturalQuizScore)}
            </span>
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className='py-24 px-6'>
      <h1 className='text-3xl max-sm:text-2xl max-sm:font-medium font-semibold text-center uppercase'>
        {selectedQuiz === 'corporateQuiz' ? 'Corporate Powerplay Quiz' : 'Cultural Sensitivity Quiz'}
      </h1>

      <div className="py-12 px-6 max-sm:py-8 max-sm:px-4 max-sm:rounded-tl-[50px] max-sm:rounded-br-[50px] border-4 border-yellow-500 max-w-screen-md mx-auto mt-12 rounded-tl-[100px] rounded-br-[100px] max-sm:border-2">
        <h3 className='text-3xl max-md:text-xl max-sm:text-lg text-center font-light'>Question {currentQuestionIndex + 1} / {quizData[selectedQuiz].length}:</h3>
        <h2 className='text-4xl max-md:text-2xl max-sm:text-xl font-semibold text-center mt-4'>{quizData[selectedQuiz][currentQuestionIndex].question}</h2>
      </div>

      <div className='grid grid-cols-2 gap-16 mt-12 max-w-screen-lg mx-auto max-md:gap-12 max-sm:gap-6 max-sm:grid-cols-1'>
        <QuizInput label='A:' option={quizData[selectedQuiz][currentQuestionIndex].option1} selectedOption={selectedOption} onOptionChange={handleOptionChange} answerChecked={answerChecked} answerCorrect={answerCorrect} answer={quizData[selectedQuiz][currentQuestionIndex].answer} />
        <QuizInput label='B:' option={quizData[selectedQuiz][currentQuestionIndex].option2} selectedOption={selectedOption} onOptionChange={handleOptionChange} answerChecked={answerChecked} answerCorrect={answerCorrect} answer={quizData[selectedQuiz][currentQuestionIndex].answer} />
        <QuizInput label='C:' option={quizData[selectedQuiz][currentQuestionIndex].option3} selectedOption={selectedOption} onOptionChange={handleOptionChange} answerChecked={answerChecked} answerCorrect={answerCorrect} answer={quizData[selectedQuiz][currentQuestionIndex].answer} />
        <QuizInput label='D:' option={quizData[selectedQuiz][currentQuestionIndex].option4} selectedOption={selectedOption} onOptionChange={handleOptionChange} answerChecked={answerChecked} answerCorrect={answerCorrect} answer={quizData[selectedQuiz][currentQuestionIndex].answer} />
      </div>

      <div className="flex flex-col gap-4 items-center mt-12 justify-center max-w-screen-sm mx-auto">
        <div className="w-full h-4 bg-white rounded-full dark:bg-white">
          <div 
            className="h-4 bg-[#D2940A] rounded-lg dark:bg-[#D2940A] transition-all" 
            style={{ width: `${((currentQuestionIndex + 1) / quizData[selectedQuiz].length) * 100}%` }}
          ></div>
        </div>
        <span className="text-[#757575] w-14">{currentQuestionIndex + 1} / {quizData[selectedQuiz].length}</span>
      </div>

      <div className='flex justify-center mt-8 gap-4 items-center'>
        <button
          className={`bg-[#D2940A] text-black font-semibold px-6 py-2 transition-all rounded-lg ${answerChecked || selectedOption === null ? 'cursor-not-allowed opacity-50' : ''}`}
          onClick={handleCheckAnswer}
          disabled={answerChecked || selectedOption === null}
        >
          Check
        </button>
        <button
          className={`text-[#D2940A] border-[#D2940A] font-semibold border-2 px-6 py-2 transition-all rounded-lg ${!answerChecked ? 'cursor-not-allowed opacity-50' : ''}`}
          onClick={handleNextQuestion}
          disabled={!answerChecked}
        >
          Next
        </button>
      </div>
      
      {answerChecked && (
        <div className={`max-w-lg mx-auto w-full mt-12 bg-[#363636] p-4 rounded-lg border-2 text-center ${answerCorrect ? 'border-green-600' : 'border-red-600'}`}>
          <p>Your Answer is <span className='font-semibold'>{selectedOption}</span></p>
          <p className={`text-lg ${answerCorrect ? 'text-green-600' : 'text-red-600'}`}>{answerCorrect ? 'Correct!' : 'Incorrect!'}</p>
          {/* {!answerCorrect && <p>Correct answer is: {quizData[selectedQuiz][currentQuestionIndex].answer}</p>} */}
          <p>
            Your score: <span>{selectedQuiz === 'corporateQuiz' ? corporateQuizScore : culturalQuizScore}</span> / {quizData[selectedQuiz]?.length}
          </p>
        </div>
      )}
    </section>
  )
}


function QuizInput({ option, selectedOption, onOptionChange, label, answerChecked, answerCorrect, answer }) {
  const isChecked = selectedOption === option;
  const answerText = option

  const handleChange = () => {
    onOptionChange(option);
  };
  let styles = '';
  if (isChecked) {
    styles = 'bg-yellow-500 text-black';
    if (answerChecked && answerCorrect) styles = 'text-green-500'
    else if (answerChecked && !answerCorrect) styles = 'text-red-500'
  }

  if (answerChecked && !answerCorrect && option === answer) styles = 'text-green-500';

  return (
    <div className='flex justify-center w-full text-lg'>
      <label htmlFor={option} className={`flex items-center justify-center max-sm:justify-start cursor-pointer border-4 max-md:p-6 max-sm:p-4 max-sm:rounded-br-[30px] max-sm:border-2 max-sm:rounded-tl-[30px] max-md:rounded-tl-[40px] max-md:rounded-br-[40px] border-yellow-500 rounded-tl-[60px] rounded-br-[60px] p-12 w-full sm:text-center ${styles} transition-colors`}>
        <div className='max-sm:text-sm'>
          {label} {answerText}
        </div>
        <input
          className='appearance-none sr-only'
          type="radio"
          id={option}
          name=""
          value={option}
          checked={isChecked}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

function QuizSelect({ quizData, setSelectedQuiz}) {
  return (
    <section className='text-center px-4 py-24 min-h-screen'>
      <h2 className="text-xl max-sm:text-lg font-medium uppercase">
        {quizData.subHeading}
      </h2>

      <h1 className="text-5xl max-sm:text-3xl max-sm:font-medium font-semibold mt-2">
        {quizData.heading}
      </h1>

      <div className="max-w-md mx-auto w-full h-[1px] bg-white my-6 relative before:absolute before:size-2 before:rounded-full before:bg-white before:left-0 before:top-1/2 before:-translate-y-1/2 after:absolute after:size-2 after:rounded-full after:bg-white after:right-0 after:top-1/2 after:-translate-y-1/2" />

      <p className="mt-8 text-sm max-w-lg mx-auto">
        {quizData.paragraph}
      </p>

      <div className="flex gap-4 justify-center items-center mt-12 max-sm:text-sm font-semibold max-sm:font-normal max-sm:flex-col">
        <button onClick={() => setSelectedQuiz('corporateQuiz')} className="text-center hover:bg-yellow-500 p-4 ring-1 ring-yellow-500 ring-inset rounded-lg transition-colors text-yellow-500 hover:text-black">
          Corporate Power Play Quiz
        </button>

        <button onClick={() => setSelectedQuiz('culturalQuiz')} className="text-center hover:bg-yellow-500 p-4 ring-1 ring-yellow-500 ring-inset rounded-lg transition-colors text-yellow-500 hover:text-black" >
          Cultural Sensitivity Quiz
        </button>
      </div>
    </section>
  )
}

function RedirectToLogin() {
  return (
    <section className='text-center text-xl font-semibold px-4 py-24 sm:text-2xl flex items-center justify-center min-h-screen'>
      <p>
        <Link href='/login' className='cursor-pointer text-yellow-500 hover:text-yellow-600 transition-colors'>Login</Link> to play quiz.
      </p>
    </section>
  )
}
