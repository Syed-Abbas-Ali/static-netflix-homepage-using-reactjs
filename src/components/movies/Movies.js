import React from 'react'
import { useState } from 'react'
import "./movies.css"

const Movies = () => {

    const movie=[
        {
            name:"The Avengers",
            url:"./videos/avengers.mp4",
            stars:" Robert Downey , Jr.Chris Evans , Scarlett Johansson",
            descption:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity",
            imgss:"./images/avengers.jpg"
        },
        {
            name:"John Wick 4",
            url:"./videos/johnwick.mp4",
            stars:"Keanu Reeves, Donnie Yen, Bill Skarsgård",
            descption:"John Wick (Keanu Reeves) takes on his most lethal adversaries yet in the upcoming fourth installment of the series. With the price on his head ever increasing, Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld,",
            imgss:"./images/johnwick.jpg"
        },
        {
            name:"baaghi",
            url:"./videos/baaghi2.mp4",
            stars:"Tiger Shroff,Shraddha Kapoor,Sudheer Babu",
            descption:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity",
            imgss:"./images/baaghi3.jpg"
        },
        {
            name:"K.G.F-2",
            url:"./videos/kgf2 (1).mp4",
            // duration:"",
            stars:"YashSanjay, DuttRaveena, Tandon",
            descption:"In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order. Rocky must battle threats from all sides for unchallenged supremacy.",
            imgss:"./images/kgf2.jpg"
        },
        {
            name:"Baahubali",
            url:"./videos/bahubali.mp4",
            stars:"PrabhasRana,DaggubatiAnushka,Shetty",
            descption:"Near the ancient Indian kingdom of Mahishmati, an injured woman named Sivagami exits a cave underneath a mountain waterfall, carrying an infant. She kills two soldiers pursuing her and attempts to cross a raging river, but slips and is washed away in the current.",
            imgss:"./images/bahubali.jpg"
        },
        {
            name:"liger",
            url:"./videos/ligere.mp4",
            stars:"Mike Tyson , Vijay Deverakonda, Ananya Panday",
            descption:"A story about martial arts, dreams and star crossed lovers. Liger is an MMA fighter who trains hard and rises up the ranks with one goal in mind, to fight like his idol, world renowned MMA fighter Mark Anderson and get noticed by him.",
            imgss:"./images/liger.jpg"
        },
        {
            name:"LionKing",
            url:"./videos/lionking.mp4",
            stars:"Donald Glover(voice), Beyoncé(voice), Seth Rogen(voice)",
            descption:"After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
            imgss:"./images/lionking.jpg"
        },
        {
            name:"RRR",
            url:"./videos/rrr.mp4",
            stars:"N.T. Rama Rao Jr ,Ram Charan Teja ,Ajay Devgn",
            descption:"A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920s.",
            imgss:"./images/rrr.jpeg"
        },
        {
            name:"Shamshera",
            url:"./videos/shamshera.mp4",
            stars:"Ranbir Kapoor, Sanjay Dutt, Vaani Kapoor",
            descption:"In the fictitious city of Kaza, a warrior tribe is imprisoned, enslaved and tortured by a ruthless authoritarian Shudh Singh. Shamshera is a legend for his tribe who relentlessly fights for his tribe's freedom and dignity",
            imgss:"./images/shamshera.jpg"
        },
        {
            name:"Super30",
            url:"./videos/stt.mp4",
            stars:"Hrithik Roshan, Mrunal Thakur, Nandish Singh Sandhu",
            descption:"Based on the life of Patna-based mathematician Anand Kumar who runs the famed Super 30 program for IIT aspirants in Patna.",
            imgss:"./images/super30.jpg"
        },
        {
            name:"Vikram",
            url:"./videos/vikram.mp4",
            stars:"Kamal HaasanVijay SethupathiFahadh Faasil",
            descption:"A high-octane action film where a special investigator is assigned a case of serial Killings, he finds the case is not what it seems to be and leading down this path is only going to end in a war between everyone involved.",
            imgss:"./images/vikram.jpg"
        },
        {
            name:"Vikram2",
            url:"./videos/vikram.mp4",
            stars:"Kamal2 HaasanVijay SethupathiFahadh Faasil",
            descption:"A2 high-octane action film where a special investigator is assigned a case of serial Killings, he finds the case is not what it seems to be and leading down this path is only going to end in a war between everyone involved.",
            imgss:"./images/vikram.jpg"
        },
       
    ]

    // let murl;
    // let Desc;

    const [movies,setmovie]= useState("");
    const [desc,setdesc]= useState("");
    // const [nn,un]= useState("./videos/avengers.mp4");
    // const handle=()=>{
    //     return(
    //         setmovie(murl),
    //         setdesc(Desc)
    //         // alert(nn)
    //     )
    // }


  return (
    <div className='movies'>
        <div className='left'>
            {
                movie.map((mvi,i)=>{
                    return(
                        <div className='card' key={i}>
                        <img src={mvi.imgss} alt="pic" className='picture' onClick={()=>{return(
                            // murl=movie[i].url,
                            setmovie(movie[i].url),
                            setdesc(movie[i]. descption)
                            // Desc=movie[i]. descption,
                            // alert(murl),
                            // handle()
                        )}}></img>
                        <div className='layer'  onClick={()=>{return(
                            // murl=movie[i].url,
                            // Desc=movie[i]. descption,
                            setmovie(movie[i].url),
                                    setdesc(movie[i]. descption)
                            // murl=movie[i].url,
                            // Desc=movie[i]. descption,
                            // alert(murl),
                            // handle()
                        )}}>
                            <h2 className='lmn'>{mvi.name}</h2>
                            <div>
                                <h5>{mvi. stars}</h5>
                            </div>

                        </div>
                    </div>
                    )
                })
            }
        </div>
        <div className='right'>
        <video src={movies} type="video/mp4" autoPlay controls className='mov-dis' >
{/* <source src={nn} type="video/mp4" /> */}
your browser notsupport this video
    </video>
    <div className='movie-detail'>
        <div className='desc'>
            <marquee>{desc}</marquee>
        </div>
        {/* <div className='' */}
    </div>
        </div>
    </div>
  )
}

export default Movies