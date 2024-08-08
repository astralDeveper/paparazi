"use client";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/utils";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { groq, PortableText } from "next-sanity";
import { useEffect, useState } from "react";

export default function CaseStudies2() {
  const [caseData, setCaseData] = useState(null);
  useEffect(() => {
    const fetchCaseData = async () => {
      try {
        const studies = await client.fetch(
          groq`*[_type == 'caseStudies'][0]{...}`
        );
        console.log("Fetched case studies:", studies); // Log the fetched data
        setCaseData(studies);
      } catch (error) {
        console.error("Error fetching case studies:", error); // Log any errors
      }
    };

    fetchCaseData();
  }, []);
  console.log(caseData);

  if (!caseData) return null;

  return (
    <>
   
    <section className="max-w-screen-2xl my-20 max-md:my-6  p-14 max-md:p-6 max-2xl:mx-4 bg-black mx-auto">
      <div className="max-md:w-[96%] max-2xl:w-[90%]">
        <h1 className=" text-5xl  font-semibold text-start max-sm:text-3xl ">
          {" "}
          {caseData.pageHeading2}{" "}
        </h1>
        <p className="text-start mt-4 text-[#D2940A] mb-4  text-2xl italic font-semibold">
          {" "}
          {caseData.subHeading2}{" "}
        </p>
      </div>

      <div className="leading-[1.5rem] max-md:w-[96%] max-2xl:w-[90%]">
      <PortableText value={caseData.caseStudies2} components={portabletextComponents}/>
      </div>

      
      {/* <div className="  max-lg:px-12 py-4 max-sm:px-4 ">
        <p className="   max-w-screen-2xl px-6 mx-auto  text-lg max-sm:text-base">
          {" "}
          {caseData.paragraph}
        </p>
      </div> */}

      {/* <div className="mt-28  max-w-screen-2xl px-6 mx-auto grid grid-cols-2 gap-24 max-lg:gap-12 max-lg:grid-cols-1  max-sm:gap-10 max-sm:mt-10 ">
        {caseData &&
          caseData.paragraphs.map((data, index) => {
            return (
              <div className="" key={index}>
                <h2 className="text-2xl max-sm:text-xl">{data.heading}</h2>
                <div className="bg-[#D2940A] w-52 h-1 mb-5"></div>
                <PortableText
                  value={data.description}
                  className="mt-4 text-base max-sm:text-sm"
                />
   
              </div>
            );
          })}
   
      
      </div> */}


    </section>
        <div className=" flex items-center justify-between max-w-screen-2xl mx-auto mb-8 px-4">
          <a href="/case-studies" className="text-2xl border-2 p-2 px-6 flex items-center gap-2 border-[#D2940A] rounded-xl group transition-all"><RiArrowLeftLine className="group-hover:-translate-x-2 transition-all"/> Back</a>
          <a className="  text-2xl border-2 p-2 px-6 flex items-center gap-2 border-[#d2930a7a] rounded-xl text-gray-600 cursor-auto">Next <RiArrowRightLine className=""/></a>
        </div>
  </>
  );
}

const portabletextComponents = {
  block: { 
    h4: ({children}) => <h2 className="text-xl font-semibold mb-6 inline text-[#D2940A] [&:not(:first-of-type)]:mt-8">{children}</h2>,
    h1: ({children}) => <h1 className="text-4xl font-semibold mb-6  [&:not(:first-of-type)]:mt-8">{children}</h1>,
    normal: ({children}) => <p className="[&:not(:first-of-type)]:mt-4 text-justify">{children}</p>
  } 
}

// function Card(props) {
//   return (
//     <article className='max-w-80 max-xl:max-w-screen-lg w-full h-96 relative'>
//       <img src={urlForImage(props.image).url()} className='opacity-40 grayscale w-full object-cover h-full' alt="card-img" />

//       <div className='bg-white absolute bottom-6 p-4 left-6 right-6'>
//           <h3 className='text-[#FF6636] text-center text-lg'>{props.types}</h3>
//           <h2 className='text-black text-center text-xl mt-2'>{props.head}</h2>
//           <p className='text-neutral-600 text-center mt-2 line-clamp-2'>{props.para}</p>
//       </div>
//     </article>
//   );
// }

// const Top = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(3);
//   const [answerChecked, setAnswerChecked] = useState(false);
//   const [answerCorrect, setAnswerCorrect] = useState(false);
//   const [user, setUser] = useState(null);

//   const handleOptionChange = (option) => {
//     if (!answerChecked) {
//       setSelectedOption(option);
//     }
//   };

//   const [topData, setTopData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const top = await client.fetch(`*[_type == 'top'][0]{...}`);
//         setTopData(top);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();

//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const uid = user.uid;
//         client.fetch(`*[_id == '${uid}'][0]{...}`).then((res) => {
//           console.log('User signed in:', res);
//           setUser({ id: uid, username: res.username, email: res.email });
//         })
//       } else {
//         setUser('');
//       }
//     });
//   }, []);

//   if (!topData) return null;

//   const handleCheckAnswer = () => {
//     if (selectedOption === null) {
//       return; // Do not check if no option is selected
//     }

//     if (selectedOption === topData.quiz[currentQuestionIndex].correctAns) {
//       setScore(score + 1);
//       setAnswerCorrect(true);
//     } else {
//       setAnswerCorrect(false);
//     }
//     setAnswerChecked(true);
//   };

//   const handleNextQuestion = async () => {
//     setSelectedOption(null);
//     setAnswerChecked(false);
//     setAnswerCorrect(false);

//     if ((currentQuestionIndex + 1) === topData.quiz.length ) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       try {
//         await createQuizResult(user.id, score, user.username, user.email)
//         console.log('Sanity document created:');
//       } catch (err) {
//         console.error('Error creating Sanity document:', err);
//       }
//     } else
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };
//   return (
//     <>
//       <div>
//         {/* section 1 */}

//         <section className='p-20 max-sm:p-10'>
//           <h2 className='text-4xl font-semibold text-center'>Case Studies</h2>
//           <p className='text-center mt-5'>Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna, imperdiet id leo quis, luctus auctor nisi. </p>

//           <div className='grid grid-cols-4 gap-6 mt-10 justify-items-center max-xl:grid-cols-2 max-sm:grid-cols-1'>
//             {topData.casestudies.map((item, index) => {
//               return <TopSec1Card key={index} types={item.heading} head={item.casestudynumber} para={item.description} image={item.image} />
//             })}
//           </div>
//         </section>

//         {/* section 2 */}

//         <section className='p-20 max-sm:p-10 bg-[#363636] px-40 max-lg:px-16'>
//           <h2 className='text-4xl font-semibold'>Diplomatic Diaries</h2>
//           <p className='mt-5'>Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna, imperdiet id leo quis, luctus auctor nisi. </p>

//           <div className='mt-12 grid grid-cols-1 gap-10'>
//             {topData.diplomaticdiaries.map((item, index) => {
//               return <TopSec2Card key={index} image={item.image} diary={item.diarynumber} head={item.header} para={item.description} />
//             })}

//           </div>
//         </section>

//         {/* section 3 */}

//         <section className='p-40 max-2xl:p-20 max-sm:p-10 '>
//           <h2 className='text-4xl font-semibold text-center'>Power Play Blogs</h2>
//           <p className='text-center mt-5'>Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna, imperdiet id leo quis, luctus auctor nisi.</p>

//           <div className='mt-10 grid grid-cols-4 gap-10 justify-center max-xl:grid-cols-2 max-sm:grid-cols-1'>
//             {topData.blogs.map((item, index) => {
//               return <TopSec3Card key={index} image={item.image} tag={item.tag} head={item.header} para={item.description} />
//             })}

//           </div>
//         </section>

//         {/* quiz section */}
//         {
//           user ? (<section className='pb-20 p-10'>
//             <h2 className='text-4xl font-semibold text-center'>Corporate Power Play Quiz</h2>
//             {currentQuestionIndex < topData.quiz.length ? (
//               <>
//                 <h3 className='text-3xl text-center mt-16'>Question {currentQuestionIndex + 1}:</h3>
//                 <h2 className='text-4xl font-semibold text-center mt-4'>{topData.quiz[currentQuestionIndex].question}</h2>

//                 <div className='flex flex-col gap-6 justify-center mt-10'>

//                   <QuizInput optionNum='Option A:' option={topData.quiz[currentQuestionIndex].option1} selectedOption={selectedOption} onOptionChange={handleOptionChange} disabled={answerChecked} />
//                   <QuizInput optionNum='Option B:' option={topData.quiz[currentQuestionIndex].option2} selectedOption={selectedOption} onOptionChange={handleOptionChange} disabled={answerChecked} />
//                   <QuizInput optionNum='Option C:' option={topData.quiz[currentQuestionIndex].option3} selectedOption={selectedOption} onOptionChange={handleOptionChange} disabled={answerChecked} />
//                   <QuizInput optionNum='Option D:' option={topData.quiz[currentQuestionIndex].option4} selectedOption={selectedOption} onOptionChange={handleOptionChange} disabled={answerChecked} />

//                 </div>
//                 <div className='flex justify-center mt-10 gap-5'>
//                   <button
//                     className={`bg-[#D2940A] text-black font-semibold px-6 py-2 hover:scale-110 transition-all rounded-lg ${answerChecked || selectedOption === null ? 'cursor-not-allowed opacity-50' : ''}`}
//                     onClick={handleCheckAnswer}
//                     disabled={answerChecked || selectedOption === null}
//                   >
//                     Check
//                   </button>
//                   <button
//                     className={`text-[#D2940A] border-[#D2940A] font-semibold border-2 px-6 py-2 hover:scale-110 transition-all rounded-lg ${!answerChecked ? 'cursor-not-allowed opacity-50' : ''}`}
//                     onClick={handleNextQuestion}
//                     disabled={!answerChecked}
//                   >
//                     Next
//                   </button>
//                 </div>
//                 {answerChecked && (
//                   <div className='flex justify-center mt-10'>
//                     <div className={`bg-[#363636] p-5 rounded-xl ${answerCorrect ? 'border-2 border-green-500' : 'border-2 border-red-500'}`}>
//                       <h6 className='text-center'>Your Answer is <span className='font-semibold'>{selectedOption}</span></h6>
//                       <p className={`text-lg ${answerCorrect ? 'text-green-500' : 'text-red-500'}`}>
//                         {answerCorrect ? 'Correct!' : 'Incorrect!'}
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <h2 className='text-4xl font-semibold text-center mt-16'>Quiz Completed! Your score is: {score}</h2>
//             )}
//           </section>): (
//             <div className='text-center text-xl font-semibold mb-10 sm:text-2xl'>
//               <p> <Link href='/login' className='cursor-pointer text-yellow-500'>Login</Link> to play quiz</p>
//             </div>
//           )
//         }
//       </div>
//     </>
//   )
// }

// export default Top

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
