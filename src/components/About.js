import React from 'react'
import aboutimg from '../assets/about.jpg'
import '../style/About.css'

export default function About() {
  return (
    <div className='about clearfix'>
        <div className='content flex'>
            <div>
                <h1>Welcome</h1>
                <p>Dry, flaky skin is very frustrating, uncomfortable and painful for multiple reasons like hot summers, cold weather,Dry, flaky skin is very frustrating, uncomfortable and painful for multiple reasons like hot summers, cold weather,Dry, flaky skin is very frustrating, uncomfortable and painful for multiple reasons like hot summers, cold weather,Dry, flaky skin is very frustrating, uncomfortable and painful for multiple reasons like hot summers, cold weather,</p>
                <p>Dry, flaky skin is very frustrating, uncomfortable and painful for multiple reasons like hot summers, cold weather,Dry, flaky skin is very frustrating, uncomfortable and painful for multiple reasons like hot summers, cold weather,</p>
            </div>
        </div>
        <div className='img flex'>
            <img src={aboutimg} width={100} alt='about img' />
        </div>
    </div>
  )
}
