import React from "react";
import { Link } from "react-router-dom";

const Join = () => {
   return (
      <div className=" lg:flex lg:w-full lg:h-[40vw] lg:items-center lg:justify-center lg:bg-yellow lg:-my-10">
         <section className="pt-10 my-10 ">
            <div className="mx-auto max-w-7xl">
               <div className="max-w-2xl mx-auto text-center">
                  <div className="flex justify-center -space-x-2 isolate">
                     <img
                        className="relative z-30 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg"
                        alt="Dan_Abromov"
                     />
                     <img
                        className="relative z-20 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src="https://images.pexels.com/photos/806835/pexels-photo-806835.jpeg"
                        alt="Guillermo_Rauch"
                     />
                     <img
                        className="relative z-10 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src="https://images.pexels.com/photos/3184608/pexels-photo-3184608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Lee_Robinson"
                     />
                     <img
                        className="relative z-0 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
                        alt="Delba"
                     />
                  </div>

                  <h2 className="mt-8 text-2xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
                     Join <span className="border-b-8 border-white">1,482</span>{" "}
                     other Fooders
                  </h2>
                  <p className="max-w-xl mx-auto mt-6 text-base text-gray-600 md:mt-10 lg:text-xl">
                     Indulge in a world of flavors. Join us at Food{" "}
                     <span className="text-white">dev</span> and savor the
                     beauty of delicious moments. Culinary joy awaits – sign up
                     today!
                  </p>
                  <button>
                     <Link
                        to={"/signIn"}
                        type="button"
                        className="px-3 py-2 mt-8 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:text-black hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        Join Now
                     </Link>
                  </button>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Join;