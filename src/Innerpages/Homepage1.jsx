// import React from 'react'
import world from '../assets/images/world.gif'

function Homepage1() {
  return (
    <div className="w-full h-[100%] pt-[10vh] bg-[#f3f3eb] flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w[1240px] m-auto">
            <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            <p className="text-2xl">Unique Sequencing & Protection</p>
            <h1 className="pt-3 text-4xl md:text-6xl font-bold">Cloud</h1>
            <h1 className="text-4xl font-bold md:text-6xl">Management</h1>
            <p className="pt-3 text-2xl">This is our tech brand</p>
            <button className="py-3 px-6 sm:w-[60%] my-4 bg-black text-white rounded-xl">Get Started</button>
            </div>

            <div>
                <img src={world} alt="gif-image" className="w-[100%]" />
            </div>
        </div>
    </div>
  )
}

export default Homepage1
