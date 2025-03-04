import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedText from '../components/AniatedText'
import {HiSparkles} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='page home bg-yellow-600'>
     <div className="content w-[90vw] h-[100vh] bg-red-500">

        <section className="first">
          
          <div className="text-container">
            <h1 style={{marginBottom: "15px"}}>
             Online quiz App
            </h1>
            <AnimatedText />
          </div>
          {/* <div className='h-100px w-200px'>
            <img src="https://cdn.vectorstock.com/i/500p/15/71/concept-online-education-book-pages-vector-38591571.avif"></img>
          </div> */}
         
        </section>
        <div className="cta">
          <Link to={'/quizzes'} className='goto'>
            <p>
           Gives the quiz
            </p>
            <HiSparkles />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home