import React, { useState } from 'react'
import CloseIcon from '../../Icons/Close';

const items = [
  {
    question: 'What is Netflix?',
    answer: ['Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',"You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"]
  },
  {
    question: 'How much does Netflix cost?',
    answer: ['Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from PEN24.90 to PEN44.90 a month. No extra costs, no contracts.']
  },
  {
    question: 'Where can I watch?',
    answer: ['Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',"You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."]
  },
  {
    question: 'How do I cancel?',
    answer: ['Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.']
  },
  {
    question: 'What can I watch on Netflix?',
    answer: ['Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.']
  },
  {
    question: 'Is Netflix good for kids?',
    answer: ['The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.','Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.']
  },
]

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if(selected == i){
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <ul className='my-12 w-3/4 max-w-4xl'>
      {items.map( (item, index) => (
        <li className='w-full mb-2' key={index}>
          <button
            onClick={() => toggle(index)}
            className='px-8 py-5 bg-neutral-700 w-full text-left text-2xl font-medium mb-px flex items-center justify-between'>
            {item.question}
            <CloseIcon className={`h-5 w-5 fill-white duration-200 ${selected != index && 'rotate-45'}`}/>
          </button>
          <div className={`bg-neutral-700 overflow-hidden ${selected == index ? 'max-h-[1200px]':'max-h-0'}`} style={{transition: 'max-height .25s cubic-bezier(.5,0,.1,1)'}}>
            <p className='p-8 text-2xl font-medium inline-block'>
              {item.answer.map((answer, index) =>{ return (<span key={index}>{ index > 0 && <><br/><br/></>} {answer}</span>)})}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Accordion
