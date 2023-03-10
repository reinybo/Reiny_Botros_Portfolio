import React, {useEffect} from 'react'
import ReactDOM from 'react-dom';
import ScrollIntoView  from 'react-scroll-into-view'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'


const project_data = [
    {
        project_name: "Diary",
        image_address:"https://i.ibb.co/x79x7r0/portfolio-project-image-Diary.png",
        project_description: "Diary is your modern-day virtual diary. Users are able to create their own secure accounts to keep all of their information private. Users can create, edit and delete diary entries which include text, date, and even photos.",
        tech_used:['Python','Django','Heroku', 'AWS S3', 'Boto3', 'Django-Environ', 'psycopg2', 'Bit.io'],
        github_link: 'https://github.com/reinybo/diary.git',
        deploy_link: 'https://reiny-diary.herokuapp.com/'
    }, 
    {
        project_name: "Wish",
        image_address:"https://i.ibb.co/TgmmJRH/Screen-Shot-2023-01-04-at-9-30-44-PM.png",
        project_description: "Wishlist makes it easy to keep track of everything you are thinking about purchasing from ANY website. Unfortunately most wishlist features that one finds on most shopping websites only allow the user to add items from that particular website. Not only can users collect items from multiple websites, but they can organize the items into particular wishlists (ex. birthday, apartment-decor etc.). The user can confidently exit the browser and return at a different time to find their items still on the page due to Wishlist's helpful register/log-in feature.",
        tech_used:['Java','HTML','CSS', 'Nodemon', 'MongoDB', 'Mongoose', 'Dotenv', 'Bcrypt'],
        github_link: 'https://github.com/reinybo/Wish.git',
        deploy_link: 'https://reinys-wish.herokuapp.com/'
    }, 
    {
        project_name: "Mercantile",
        image_address:"https://i.ibb.co/ZNw318b/portfolio-project-image-Mercantile.png",
        project_description: "Mercantile helps you exchange items and services with others in your area! With an emphasis on reciprocity and mutual benefit, Mercantile is not an application for buying or selling items using currency. Instead, users are encouraged to barter whatever they would like to give for whatever they would like to get. With Mercantile, you can...List an item for trade, view items on offer, view a 'Wanted' board, make a trade offer, and accept a trade offer",
        tech_used:['Node','Express','MongoDB', 'Mongoose', 'Google Firebase', 'React', 'Heroku', 'Netlifly', 'JavaScript', 'HTML', 'CSS', 'RapidAPI'],
        github_link: 'https://github.com/sailor-june/mercantile-frontend.git',
        deploy_link: 'https://m3rcantile.netlify.app/'
    }, 
    {
        project_name: "Ferrer's Diagrams",
        image_address:"https://i.ibb.co/zxX4HD3/portfolio-project-image-ferrer.png",
        project_description: "Manim implementation of Ferrer's/Young diagrams, a tool for visualizing partitions and partition bijections.",
        tech_used:['Python'],
        github_link: 'https://github.com/reinybo/Ferrers-Diagram.git',
        deploy_link: 'https://github.com/reinybo/Ferrers-Diagram.git'
    }, 
    {
        project_name: "Adogtable",
        image_address:"https://i.ibb.co/zQ67qrK/Screen-Shot-2022-12-07-at-10-02-47-PM.png",
        project_description: "Adogtable is a website that makes finding adoptable dogs in your area easy! The user simply inputs their zip code and a preferred radius, and Adogtable returns the available dogs within the specified area! After, the user can add filters to the results such as breed or sex. The user can also select the 'Learn more' button on a specific dog to learn more of the dog's attributes and view a link to the adoption page.",
        tech_used:['Java', 'HTML', 'CSS', 'RescueGroups API'],
        github_link: 'https://github.com/reinybo/Adogtable.git',
        deploy_link: 'https://adogtable.vercel.app/'
    }, 
]




const Projects = () => {
  return (
    <div id='projects'>
        <br></br>
        <br></br>
        <br></br>
        <h2 className='title'>Latest Projects</h2>
        <div id='scrolling-projects' className='scrolling-projects'>
        {
        project_data.map ((content, index) => (
            <> 
            { index !== 0? 
                <ScrollIntoView scrollOptions={{inline:'center', block:'nearest'}} className='topLinks' selector={('#'.concat('index',(index-1)))} >
                    <FontAwesomeIcon className='projectArrows projectArrowsLeft' size="s" icon={faArrowLeft} />
                </ScrollIntoView>
                : '' }
            <div className='projectItem'  id={('index'.concat((index)))}>
                <div className={content.project_name} id={content.project_name}>
                <h3 className='project-titles'>{content.project_name}</h3>
                <img className="project-images" src={content.image_address} alt='project_image' />
                <p className='project-descriptions'>{content.project_description}</p>
                <div class='project-links'>
                    <a href={content.deploy_link}>Deployed App</a>      
                    <a href={content.github_link}>Github Repo</a>
                </div>
                <div className='project-tech_used'>
                    {content.tech_used.map((tech) => (
                        <ul>
                            <li>{tech}</li>
                        </ul>
                    ))}
                </div>
                </div>
            </div>

            {/* <button type="button" onclick={(document.getElementById(('index'.concat((index+1))))).scrollIntoViewIfNeeded(true)}>Click Me!</button> */}
            {/* <button type="button" onClick={(document.getElementById(('index'.concat((index+1))))).scrollIntoViewIfNeeded(true)}>Click Me!</button> */}


            { index !== project_data.length-1? 
            // <>
            //     <button type="button" onClick={(document.getElementById(('index'.concat((index+1))))).scrollIntoView()}>Click Me!</button>
            //     </>
            
            // <FontAwesomeIcon  class='projectArrows projectArrowsRight' onClick={(document.getElementById(('index'.concat((index+1))))).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})} icon={faArrowRight} /> 
                <ScrollIntoView scrollOptions={{inline:'center', block:'nearest'}} className='topLinks scrollintoproject' block="center" inline="center" selector={('#'.concat('index',(index+1)))} >
                    <FontAwesomeIcon  className='projectArrows projectArrowsRight' size="s" icon={faArrowRight} /> 
                </ScrollIntoView>
                 : '' }
            </>
        ))
        }
        </div>
        <br></br>
        <br></br>
        <br></br>
    </div>
  )
}

export default Projects