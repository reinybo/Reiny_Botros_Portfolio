import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'


const Contact = () => {
  return (
    <div id ='contact'>
        <h2 className='title'>Get in touch</h2>

        <div className="email">
            <a href="mailto: rgbotros00@gmail.com" target="_blank" rel="noopener noreferrer">rgbotros00@gmail.com</a>
        </div>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
        <i class="devicon-linkedin-plain"></i>
        <i class="devicon-github-original"></i>


        <ScrollIntoView className='top-scroll' selector="#home">
                <a>↑ TOP</a>
        </ScrollIntoView>
    </div>
  )
}

export default Contact