import { Announcement } from "./anouncement"
import { Gallery } from "./gallery"

const Herosection = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 my-20 sm:my-40">
      <div className="max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <Gallery/>
          </div>
          <div className="order-1 lg:order-2 mr-auto place-self-center mt-16 lg:mt-0">
          <div className="w-full max-w-md mx-auto sm:mx-0 sm:flex sm:justify-start mb-2 sm:mb-0">
    <Announcement />
  </div>
            <h1 className="max-w-2xl mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Innovating beyond boundaries
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Integrating Science Technology Engineering and Mathematics
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Herosection }