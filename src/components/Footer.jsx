// import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import { useState } from 'react'

const Footer = () => {

    const year = new Date().getFullYear();

    const [subscribe,setSubscribe] = useState("");
        const submit = (e) => {
            e.preventDefault()
        };



  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8">
            <div>
                <h6 className="font-bold uppercase pt-2">Solution</h6>

                <ul>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Analystics</li>
                    <li className="py-1">Commerce</li>
                    <li className="py-1">Data</li>
                    <li className="py-1">Cloud</li>
                </ul>
            </div>

            <div>
                <h6 className="font-bold uppercase pt-2">Community</h6>

                <ul>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Analystics</li>
                    <li className="py-1">Commerce</li>
                    <li className="py-1">Data</li>
                    <li className="py-1">Cloud</li>
                </ul>
            </div>

            <div>
                <h6 className="font-bold uppercase pt-2">Support</h6>

                <ul>
                    <li className="py-1">Pricing</li>
                    <li className="py-1">Analystics</li>
                    <li className="py-1">Commerce</li>
                    <li className="py-1">Data</li>
                    <li className="py-1">Cloud</li>
                </ul>
            </div>

            <div>
                <h6 className="font-bold uppercase pt-2">Company</h6>

                <ul>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Analystics</li>
                    <li className="py-1">Commerce</li>
                    <li className="py-1">Data</li>
                    <li className="py-1">Cloud</li>
                </ul>
            </div>

            <div>
                <h6 className="font-bold uppercase pt-2">Legal</h6>

                <ul>
                    <li className="py-1">Claims</li>
                    <li className="py-1">Privacy</li>
                    <li className="py-1">Terms</li>
                    <li className="py-1">Conditions</li>
                    <li className="py-1 ">Policy</li>
                </ul>
            </div>

            <div className="col-span-2 pt-8 mt-8 md:pt-2">
                <p className="font-bold uppercase">subscribe to our news letter</p>
                <p className="py-4">The Latest News, Articles, And Resources, Sent To Your Inbox Weekly</p>

                <form action="" className="flex flex-col sm:flex-row" onClick={submit}>
                    <input type="email"  className="w-full pt-2 mr-4 rounded-md mb-4 text-black font-bold" placeholder="Enter Email..." 
                    value={subscribe} onChange={(e) => setSubscribe(e.target.value)}/>
                    <button className="p-2 mb-4 bg-emerald-600 rounded-2xl py-4" type='submit'>Subscribe</button>
                </form>
            </div>
        </div>

            <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray--900">
                <p className="py-4  text-lime-400 rounded-2xl">{year} Workflow, CLL. All Rights Reserved</p>

                <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
                    <BsLinkedin/>
                    <BsTwitter/>
                    <GrFacebook/>
                    <BsGithub/>
                    <FaTelegramPlane/>


                </div>
            </div>


        
    </div>

  )
}

export default Footer
