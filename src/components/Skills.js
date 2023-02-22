import React from 'react'


const Skills = () => {
  return (
    <div id='skills'>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>


        <h2 className='title'>Skills</h2>
        <div>
        <h3>Languages: </h3>
        <ul className='skill-lists'>
            <li>
                <i class="devicon-javascript-plain"></i>
                <p>JavaScript</p>
            </li>

            <li>
                <i class="devicon-typescript-plain"></i>
                <p>TypeScript</p>
            </li>


            <li>
                <i class="devicon-html5-plain"></i>
                <p>HTML</p>
            </li>

            <li>
                <i class="devicon-css3-plain"></i>
                <p>CSS</p>
            </li>

            <li>
                <i class="devicon-python-plain"></i>
                <p>Python</p>
            </li>

            <li>
                <i class="devicon-swift-plain"></i>
                <p>Swift</p>
            </li>

            <li>
                <i class="devicon-c-plain"></i>
                <p>C</p>
            </li>

            <li>
                <i class="devicon-cplusplus-plain"></i>
                <p>C++</p>
            </li>

            <li>
                <i class="devicon-java-plain"></i>
                <p>Java</p>
            </li>

            <li>
                <i class="devicon-rstudio-plain"></i>
                <p>RStudio</p>
            </li>

        </ul>
        </div>
        <br></br>
        <div>
        <h3>Libraries & Frameworks:</h3>
        <ul className='skill-lists'>
            <li>
                <i class="devicon-react-original"></i>
                <p>React</p>
            </li>

            <li>
                <i class="devicon-django-plain"></i>
                <p>Django</p>
            </li>

            <li>
                <i class="devicon-express-original"></i>
                <p>Express</p>
            </li>

            <li>
                <i class="devicon-angularjs-plain"></i>
                <p>Angular</p>
            </li>

            <li>
                <i class="devicon-vuejs-plain"></i>
                <p>Vue</p>
            </li>

            <li>
                <i class="devicon-jquery-plain"></i>
                <p>JQuery</p>
            </li>

            <li>
                <i class="devicon-sass-original"></i>
                <p>SASS</p>
            </li>

        </ul>
        </div>
        <br></br>

        <div>
        <h3>Databases:</h3>
        <ul className='skill-lists'>
            <li>
                <i class="devicon-postgresql-plain"></i>
                <p>PostgreSQL</p>
            </li>

            <li>
                <i class="devicon-mongodb-plain"></i>
                <p>MongoDB</p>
            </li>
        </ul>
        <br></br>
        </div>
        <div>
        <h3>Other:</h3>
        <ul className='skill-lists'>
            <li>
                <i class="devicon-nodejs-plain"></i>
                <p>Node.js</p>
            </li>

            <li>
                <i class="devicon-git-plain"></i>
                <p>Git</p>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Skills