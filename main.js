let views = {
    'about-link': `<section id="about">
                <img src="./images/Senerchia.JPG" alt="Senerchia"  id="senerchia-view"/>
                <h2>About</h2>
                <div id="about-me">
                    <p>My name is Peter Zecca and I am 26 years old. I am from Westfield, NJ and graduated from the David B. Falk College at Syracuse University with a major in sports management and minor in sports analytics. I have a wealth of experience and knowledge in both the sports and finacial world through my prior work experiences. My career goals include working with analytical software in either area, but sports have always been my main passion. In addition, my skillset is very well rounded since I have utilized SQL Server, Excel, Tableau, Placer.ai, and Microsoft BI in the past.
                    <br>
                    <br>
                    In my free time I love to play golf, collect sports/trading cards, watch anime, and intensly follow professional sports. I also recently bought a new PC with an rtx 4090 so I have been gaming a lot with it. Finally, I enjoy traveling around the world trying new foods, visitng historical landmarks, and soaking in incredible sporting events.</p>
                </div>
            </section>`,
    'skills-link': `
    <h2>Skills</h2>
    <section id="skills">
                <div class="skills-box" id="javascript">
                </div>
                <div class="skills-box" id="css">
                </div>
                <div class="skills-box" id="html">
                </div>
                <div class="skills-box" id="sql">
                </div>
                <div class="skills-box" id="excel">
                </div>
                <div class="skills-box" id="powerpoint">
                </div>
                <div class="skills-box" id="placer-ai">
                </div>
                <div class="skills-box" id="Bloomberg">
                </div>
            </section>`,
    'projects-link': `
    <h2>Projects</h2>
    <section id="projects">
                <div class="project-box" id="hf-capstone">
                <img src="./images/hf-logo.png" alt="HF logo"  id="hf-logo"/>
                <p class="project-description">created a golf tracking website for my golf club in order to keep track of my club selections and monitor progress from round to round.</p>
                <p class="technologies">Technologies used: JavaScript, CSS, HTML, Axios, Express, Cors</p>
                <a href="https://secure.vidyard.com/organizations/3300157/players/bJJJ2Y6xXdZEp8CPpEuXME?edit=true" class="demo-video">Demo Video</a>
                <a href="https://github.com/Pzecca7/capstone" class="github-code">Github</a>
                </div>

            </section>`,
    'contact-link': `<section id="contact">
                <h2>Contact</h2>
            </section>`
}

const links = document.querySelectorAll('a')
const main = document.querySelector('main')

const changeView = evt => {
    main.innerHTML = ''
    let section = evt.target.id
    main.innerHTML = views[section]
}

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', changeView)
}

const pageLoad = () => {
    main.innerHTML = views['about-link']
}

pageLoad()