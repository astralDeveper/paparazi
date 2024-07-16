import React from 'react'
import Gallary from "../../assets/career (3).png";


const Careersection3 = () => {
  return (
    <div>
      <div>
        <section className=" bg-white body-font">
          <div className="max-w-7xl container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
            <div className="text-gray-800 lg:flex-grow md:w-1/2 lg:pr-40 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h2 class="tracking-widest text-xs title-font font-medium text-golden mb-1">OUR GALLERY</h2>
              <h1 className="title-font text-xl md:text-2xl lg:text-3xl xl:text-4xl my-4 font-bold ">
                We’ve been here
                <br className="hidden lg:inline-block" />
                almost 17 years
              </h1>
              <p className="sm:mb-8 leading-relaxed text-sm md:text-sm lg:text-base xl:text-lg">
                Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.
              </p>

            </div>
            <div class="lg:w-1/2 w-full sm:mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img alt="feature" class="object-cover object-center h-full w-full" src={Gallary} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Careersection3