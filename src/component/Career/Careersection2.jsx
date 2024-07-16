import React from 'react'
import Union from "../../assets/career (1).png";

const Careersection2 = () => {
  return (
    <div>
      <section className="body-font" style={{ backgroundColor: "#363636" }}>
        <div className="max-w-7xl container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={Union} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:ml-20 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font mb-4 font-medium text-2xl md:text-2xl lg:text-3xl xl:text-4xl">Why you will join our team
              {/* <br className="hidden lg:inline-block" />readymade gluten */}
            </h1>
            <p className="mb-8 leading-relaxed text-gray-200  md:text-1xl lg:text-1xl xl:text-1xl">Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. estibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio suscipit sed arcu sit amet, iaculis feugiat felis. </p>
            <div className="flex relative py-7 px-3 bg-white text-left">

              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-600 inline-flex items-center justify-center text-white relative z-10">
                &#x2713;
              </div>

              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-2lg text-gray-900 mb-1">Ut justo ligula, vehicula sed egestas vel.</h2>
                <p className="leading-relaxed text-gray-700 ">Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio. </p>
              </div>
            </div>
            <div className="flex relative py-7 px-3 bg-white mt-4 text-left">

              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-600 inline-flex items-center justify-center text-white relative z-10">
                &#x2713;
              </div>

              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-2lg text-gray-900 mb-1">Aenean vitae leo leo praesent ullamcorper ac.</h2>
                <p className="leading-relaxed text-gray-700">Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Careersection2