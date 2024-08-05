import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/utils';
import { groq } from 'next-sanity';

export default async function CaseStudiesPage() {
  let data = null;

  try {
    data = await client.fetch(groq`*[_type == 'caseStudies'][0]{...}`, {}, {
      next: { tags: ['caseStudies'] }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  if (!data) return null;

  return (
    <section className='max-w-screen-2xl mx-auto px-4 py-24'>
      {/* <h1 className='text-4xl font-semibold text-center'>{data.pageHeading}</h1>
      
      <p className='text-center mt-4'>{data.paragraph}</p>

      <div className='grid grid-cols-4 gap-6 mt-10 justify-items-center max-xl:grid-cols-2 max-sm:grid-cols-1'>
        {data.studies.map((item, index) => <Card key={index} types={item.heading} head={item.subHeading} para={item.description} image={item.image} />)}
      </div> */}


<h1 className=' text-5xl font-semibold text-start max-sm:text-3xl ' > From Underdog to Industry Leader </h1> 
<p className='text-start mt-4 text-[#D2940A] mb-4  ' > A Case Study on The Entrepreneur's Guide to Power </p>


<div className='bg-white px-32 py-4 max-sm:px-4 '>
<h2 className='text-black text-lg max-sm:text-base'>Achieving life-long success in your chosen industry isn't something that happens overnight. It takes time, effort, and discipline. If you've ever felt like you lack the tools necessary to climb the corporate ladder, don't worry; you're not alone. Many people feel the same way, that's why they come to us. With our proven and tested leadership program, we help our clients unlock the brilliant leader and entrepreneur within by equipping them with skills they can use in the corporate world.
In this case study, we'll show how our clients faced similar challenges, struggling to navigate the complexities of negotiation, marketing, and team leadership. However, through focused development and the right tools, they were able to unlock their full potential and propel their business to remarkable heights. Now, it's your turn to embark on that same transformation journey.</h2>
</div>

<div className='mt-28 grid grid-cols-2 gap-40 max-sm:grid-cols-1 max-sm:gap-10 max-sm:mt-10 ' >
  <div className='' >
    <h2 className='text-2xl max-sm:text-xl' >The Common Struggles</h2>
    <p className='mt-4 text-base max-sm:text-sm'>After working with several clients across various industries, we have narrowed down a few key issues that most clients face. We have constructed a masterclass program that helps our clients overcome these issues so they can become successful leaders and entrepreneurs in their fields.</p>
    <p className='text-base max-sm:text-sm' >The road to corporate success is paved with brilliant ideas and technical expertise, but for many people, the journey can hit a roadblock when it comes to translating those strengths into a thriving career. Negotiation skills, for instance, might be lacking, resulting in lopsided contracts that surrender control or potential profits.</p>
    <p className='text-base max-sm:text-sm' >Often, people lack the communication skills necessary to excel in the corporate world. You may have brilliant ideas and solutions, but lacking effective communication skills can make it harder to share them with others and convince people around you that your way might be better.</p>
    <p className='text-base max-sm:text-sm' >Finally, poor leadership skills can leave your career stagnant. You may never be given that promotion you've worked hard for because your higher-ups don't see you as a reliable leader. Poor leadership often has a direct and immediate impact on productivity and quality of work. </p>
    <p className='text-base max-sm:text-sm' >That said, all of these problems can be overcome; let's discuss how.  </p>
  </div>

{/*  */}

<div>
  <h2 className='text-2xl max-sm:text-xl' > The Transformation </h2>
  <p className='mt-4 text-base max-sm:text-sm' > By implementing these solutions, you can join the ranks of our many successful clients who have achieved truly remarkable results. Picture this: revenue surging exponentially, surpassing even your most ambitious projections. Your innovative products or services could be turning heads within the industry, garnering prestigious awards and featured placements in leading media outlets. But the success wouldn't stop there. By fostering a positive and collaborative work environment, you'll become a magnet for top talent, attracting the brightest minds in your field to join your growing enterprise. This isn't just a dream – it's the culmination of the strategies we can help you implement. </p>
</div>


</div>




{/* second div 2 */}




<div className='mt-28 grid grid-cols-2 gap-40 max-sm:grid-cols-1 max-sm:gap-10 max-sm:mt-10'>
  <div className=''>
    <h2 className='text-2xl max-sm:text-xl' >Our Solutions</h2>
    <p className='mt-4 text-base max-sm:text-sm'>Our program equips entrepreneurs with the tools to overcome these hurdles:</p>
<h3 className='font-bold mt-2'>Mastering Negotiation: </h3>We train you in techniques like BATNA (Best Alternative to a Negotiated Agreement) and develop your assertive communication skills. Through mock negotiations, you'll gain confidence in securing win-win deals with investors and partners.
<h3 className='font-bold mt-2'>Delegation Strategies:</h3> We help you identify tasks that can be effectively delegated based on your team's strengths. You'll learn to set clear expectations, provide guidance, and monitor progress, empowering your team and freeing yourself to focus on strategic initiatives.
<h3 className='font-bold mt-2'>Motivational Leadership: </h3> We train you to foster a positive and collaborative work environment. You'll learn to recognize achievements, provide opportunities for growth, and inspire your team to achieve their full potential.
  </div>

{/*  */}

<div>
  <h2 className='text-2xl max-sm:text-xl' >Policy and Advocacy</h2>
  <p className='mt-4 text-base max-sm:text-sm' > This journey isn't just about the destination; it's about the transformative power of personal and professional growth for entrepreneurs like you. Sure, your technical skills are the foundation, the spark of innovation. But to translate those brilliant ideas into a flourishing business, you need a well-rounded skillset. That's where business acumen comes in – understanding marketing, finance, and negotiation becomes the bridge between your vision and a sustainable enterprise. It's about developing your voice, honing your assertiveness and communication skills to command respect, negotiate effectively, and inspire your team.
 Remember, investing in yours0elf – through mentorship, courses, and continuous learning – is the fuel that propels success. Don't let a lack of leadership skills hold you back from achieving your entrepreneurial dreams. Our program equips you with the tools to navigate the complexities of business dynamics, build a high-performing team, and, ultimately, transform your innovations into a thriving enterprise. This isn't just about who you are now; it's about unlocking the powerhouse entrepreneur you have the potential to become. Let us guide you on that journey.</p>
</div>


</div>



    </section>
  )
}

function Card(props) {
  return (
    <article className='max-w-80 max-xl:max-w-screen-lg w-full h-96 relative'>
      <img src={urlForImage(props.image).url()} className='opacity-40 grayscale w-full object-cover h-full' alt="card-img" />

      <div className='bg-white absolute bottom-6 p-4 left-6 right-6'>
          <h3 className='text-[#FF6636] text-center text-lg'>{props.types}</h3>
          <h2 className='text-black text-center text-xl mt-2'>{props.head}</h2>
          <p className='text-neutral-600 text-center mt-2 line-clamp-2'>{props.para}</p>
      </div>
    </article>
  );
}


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
