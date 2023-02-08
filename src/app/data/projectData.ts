import { Projects } from "../Projects"

export const ProjectData: Projects[] = [
    {
        id: 1,
        img: "./assets/workout.png",
        name: "Workout Buddy",
        description: "A fullstack application built in the <span>MERN</span> stack for you to log in your workouts. You can create an account just for yourself or use the <span>Demo</span> login information to test out the application. <br/><br/>*Be advised that once you log in, give it a couple of seconds for the server to start up.",
        tools: ["MongoDB", "Express JS", "React", "Node JS"],
        code: "https://github.com/ARoman87/workout-MERN",
        live: "https://workout-log.onrender.com/"
    },
    {
        id: 2,
        img: "./assets/portfolio.png",
        name: "Personal Portfolio",
        description: "Decided to take my old personal Software Engineer Portfolio, that was outdated, just using HTML/CSS and a bit of JavaScript and convert it all in <span>React.</span><br /><br/> I have a full understanding of how to integrate all the components, <span>Hooks,</span> and gathering data from another file as objects, and pass it to a component.",
        tools: ["React", "JavaScript", "HTML/CSS"],
        code: "https://github.com/ARoman87/React-Portfilio/",
        live: "https://code-dependant.com/"
    },
    {
        id: 3,
        img: "./assets/anime.png",
        name: "Anime Trivia",
        description: "This is a trivia game with questions from Manga or Anime that access random questions from the <a href='https://opentdb.com/' target='_blank'><span>Open Trivia Database API.</span></a> There are 5 multiple choice questions and the player is scored based on their answers.<br/><br/> This is a final solo project from <a href='https://scrimba.com/learn/learnreact' target='_blank'><span>Scrimba Learn React course.</span></a> This project will be updated to give the user the ability to choose the category of the questions and the difficulty of the questions. ",
        tools: ["React", "JavaScript", "HTML/CSS"],
        code: "https://github.com/ARoman87/anime_trivia",
        live: "https://aroman87.github.io/anime_trivia/"
    }, 

    {
        id: 4,
        img: "./assets/speedType.png",
        name: "Speed Typing Test",
        description: "A short typing speed test to test how fast you can type given the number of seconds. This is a project that is part of <a href='https://scrimba.com/learn/learnreact' target='_blank'><span>Scrimba Learn React course.</span></a><br/><br/> I would like to implement the next feature of the user having to follow a specific paragraph where the program will know and not count any mispelled words. ",
        tools: ["React", "JavaScript", "HTML/CSS"],
        code: "https://github.com/ARoman87/speedType",
        live: "https://aroman87.github.io/speedType/"
    }, 
    {
        id: 5,
        img: "./assets/cto.png",
        name: "TailWind CSS Project",
        description: "Improved a business's front-end web page using React and Tailwind CSS to fix design issues and create a more consistent, visually pleasing experience. <br/><br/> Original webpage: <a href='https://www.compliancetrainingonline.com/' target='_blank'><span>Compliance Training Online</span></a> ",
        tools: ["React", "TailWind CSS"],
        code: "https://github.com/ARoman87/ct-online",
        live: "https://aroman87.github.io/ct-online/"
    }, 
]