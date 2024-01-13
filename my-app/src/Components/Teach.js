import React from 'react'
import Slider from "react-slick"



const Teach = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }
  return (

    <div className='w-400  m-auto '>
      <div className='mt-20 ms-5 me-5'>
        <Slider {...settings}>
          {data.map((a) => (
            <div className='bg-info text-black rounded-xl 'style={{height:"450px", width:"400x"}}>
              <div className='rounded-t-xl bg-primary flex justify content-center items '>
                <img src={a.img} alt="resim" className='h-44 w-44 rounded-full' style={{height:"300px", borderRadius:"2em"}}/>
              </div>

              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl' style={{font:"caption"}}>{a.name} </p>
                <p>{a.rewiew}</p>
                <button className='bg-primary text-white text-xl px-6 py-2 rounded-xl text-center mt-2 mb-2'style={{borderRadius:"2em", width:"150px"}}>Başvur</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

const data = [
  {
    name: `Engin Niyazi ERGÜL`,
    img: `../Images/Eng.png`,
    rewiew: ` HTML, CSS, JavaScript, ReactJS, Node.JS,.NET,Phyton`

  },

  {
    name: `Poyraz KARADOĞAN`,
    img: `../Images/instructor1.png`,
    rewiew: `HTML, CSS, JavaScript, ReactJS, Node.JS,.NET,Phyton`

  },

  {
    name: `Serenay SARIKAYA`,
    img: `../Images/instructor1.png`,
    rewiew: `HTML, CSS, JavaScript, ReactJS, Node.JS,.NET,Phyton`

  },

  {
    name: `Çağatay ULUSOY`,
    img: `../Images/instructor1.png`,
    rewiew: `HTML, CSS, JavaScript, ReactJS, Node.JS,.NET,Phyton`

  }
]

export default Teach