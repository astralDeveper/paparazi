import MapPinLine from "../../assets/MapPinLine.png";
import Briefcase from "../../assets/Briefcase.png";
import ClipboardText from "../../assets/ClipboardText.png";
import ArrowRight from "../../assets/ArrowRight.svg";

export default function CareerSection4({ careersData }) {
  return (
    <section className="max-w-7xl mx-auto body-font overflow-hidden">
      <div className="container py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-14">
          <h1 className="sm:text-5xl text-2xl font-medium title-font">
            Our all open positions ({careersData.positionCard.length})
          </h1>
        </div>
        <div className="flex flex-wrap">
          {" "}
          {/* -m-4  */}
          {careersData.positionCard.map((position, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-3 w-full">
              <div style={{ background: "#363636" }}>
                <div className="py-10 w-full">
                  <h1 className="px-6 title-font text-lg font-medium mb-3">
                    {position.name}
                  </h1>
                  <div className="px-6 flex gap-3 md:gap-3 border-b-2 border-gray-300 py-5">
                    <p className="flex items-center">
                      <span className="mr-1">
                        <img src={MapPinLine} alt="location" />
                      </span>
                      <p className="text-sm">{position.location}</p>
                    </p>
                    <p className="flex items-center">
                      <span className="mr-1">
                        <img src={Briefcase} alt="type" />
                      </span>
                      {/* {position.type} */}
                      <p className="text-sm">{position.time}</p>
                    </p>
                    <p className="flex items-center">
                      <span className="mr-1">
                        <img src={ClipboardText} alt="vacancy" />
                      </span>
                      {/* {position.vacancies}  */}
                      <p className="text-sm">{position.vacancy}</p>
                    </p>
                  </div>
                  <div className="px-6 flex justify-between items-center mt-6">
                    <span>
                      <span className="text-red-500">Deadline : </span>
                      {position.deadline}
                    </span>

                    <button className="bg-golden px-3 py-2 text-4xl">
                      {/* &#8594; */}
                      <img src={ArrowRight} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
