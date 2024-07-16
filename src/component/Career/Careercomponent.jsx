import React from 'react'
import careerbusinesswoman from '../../assets/career (2).png'
const Careercomponent = () => {
  return (
    <div>
      <div>
      <section className="max-w-7xl mx-auto body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-60 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl mb-4 font-medium text-xl md:text-2xl lg:text-3xl xl:text-4xl" >
              Join the most incredible & creative team.
            </h1>
            <p className="mb-8 leading-relaxed text-gray-300 md:text-1xl lg:text-1xl xl:text-1xl">
              Proin gravida enim augue, dapibus ultrices eros feugiat et. Pellentesque bibendum orci felis, sit amet efficitur felis lacinia ac. Mauris gravida justo ac nunc consectetur.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-golden border-0 py-2 px-6 focus:outline-none rounded-lg text-sm md:text-1xl lg:text-1xl xl:text-1xl">
                Listen the podcast
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-white rounded-3xl">
            <img className="object-cover object-center rounded" alt="hero" src={careerbusinesswoman} />
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Careercomponent
