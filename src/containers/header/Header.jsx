import React from 'react'
import './Header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='Home'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 Open AI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className='gpt3__header-content__input'>
                    <input type='email' placeholder='Your email address'></input>
                    <button type='button'>Get Started</button>
                </div>  
                <div className='gpt3__header-content__people'>
                    <img src={people} alt='people'/>
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div> 
            </div>
            <div className='gpt3__header-image'>
                <img src={ai} alt='ai' />
            </div>
        </div>
    )
}

export default Header
