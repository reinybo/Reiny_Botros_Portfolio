import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'


const Nav = () => {
  return (
    <div id='nav'>
        <nav>
            <ScrollIntoView className='topLinks' selector="#home">
                <li>Home</li>
            </ScrollIntoView>
            <ScrollIntoView className='topLinks' selector="#about">
                <li>About</li>
            </ScrollIntoView>
            <ScrollIntoView className='topLinks' selector="#projects">
                <li>Projects</li>
            </ScrollIntoView>
            <ScrollIntoView className='topLinks' selector="#gallery">
                <li>Gallery</li>
            </ScrollIntoView>
            <ScrollIntoView className='topLinks' selector="#contact">
                <li>Contact</li>
            </ScrollIntoView>
            <ScrollIntoView className='topLinks' selector="#reviews">
                <li>Reviews</li>
            </ScrollIntoView>
        </nav>
    </div>
  )
}

export default Nav