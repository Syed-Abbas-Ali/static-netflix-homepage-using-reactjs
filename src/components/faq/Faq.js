import React from 'react'
import { useState } from 'react'
import "./faq.css"

const Faq = () => {
    const data=[
        {question:"What is Netflix?",
            ans:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
        },
        {question:"How much does Netflix cost?",
            ans:" Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts",
        },
        {question:"Where can i watch?",
            ans:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
        },
        {question:"What can i watch on Netflix?",
            ans:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        },
        {question:"Is Netflix good for kids?",
            ans:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
        },
    ]

    // const [unrot,setRot]=useState("plus");
    // const [para,setpara]=useState("ans");

    // function Click(){
    //         return(
    //             setRot("uplus"),
    //             setpara("ans-active")
    //         )
    // };

    const [selected,setselected]=useState(null);
    const handle=(i)=>{
        if(selected===i){
            setselected(null)
        }
        else{
            setselected(i)
        }
    }
  return (
    <div className='faq'>
        <h1>Frequently Asked Questions</h1>
        <div className='faq-con'>
          {
            data.map((items,i)=>{
               return(
                <div className='qas' key={i}>
                <div className='question' onClick={()=>{handle(i)}}>
                    <h2>{items.question}</h2>
                    <h3 className={selected===i ? "uplus":"plus"}>+</h3>
                </div>
                <div className={selected===i ? "ans-active":"ans"}>
                    <p >{items.ans}</p>
                </div>
            </div>
               )
            })
          }
        </div>

        <div className='hero-middle-para2'>
                <p>Ready to watch? Enter your email address to create or restart your membership.</p>
            </div>

        <div className='hero-middle-email'>
                <input type="email" placeholder="Enter Your Email"></input>
                <button type="submit">Get Started<span>	
&#5171;</span></button>
            </div>

    </div>
  )
}

export default Faq;