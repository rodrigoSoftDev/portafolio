import phone from "./Assets/phone.png";
import calendar from "./Assets/calendar.png";
import linkedIn from "./Assets/linkedIn.png";
import ubication from "./Assets/ubication.png";
import mail from "./Assets/mail.png";
import down from "./Assets/down.png";
import english from "./Assets/english.png";
import javaScript from "./Assets/javaScript.png";
import css from "./Assets/css.png";
import html from "./Assets/HTML.png";
import cmm from "./Assets/c++.png";
import kotlin from "./Assets/kotlin.png";
import nodeJs from "./Assets/nodeJs.png";
import reactJs from "./Assets/reactJS.png";
import python from "./Assets/python.png";
import sql from "./Assets/sql.png";
import java from "./Assets/java.png";
import myPdf from "./Assets/curriculum.jpg";

export const englishData = {
    social: {
        facebook: "https://www.facebook.com/Joooonnnyy",
        instagram: "https://www.instagram.com/nambersei/",
        linkedIn: "https://www.linkedin.com/in/rodrigo-garcia-aa0377210/",
        twitter: "https://twitter.com/home"
    },
    personalData: {
        name: "Rodrigo García",
        position: "Full Stack Developer"
    },
    cards: [
        {
            type: "text",
            toRender: "aboutMe",
            title: "About Me",
            pic: down
        },
        {
            type: "list",
            toRender: "contact",
            title: "Contact",
            pic: down
        },
        {
            type: "chronology",
            toRender: "experience",
            title: "Experience",
            pic: down
        },
        {
            type: "chronology",
            toRender: "education",
            title: "Education",
            pic: down
        },
        {
            type: "chronology",
            toRender: "course",
            title: "Curses",
            pic: down
        },
        {
            type: "list",
            toRender: "skills",
            title: "Skills",
            pic: down
        },
        {
            type: "list",
            toRender: "languaje",
            title: "Languajes",
            pic: down
        },
        {
            type: "image",
            toRender: "curriculum",
            title: "Curriculum",
            pic: down
        },
    ],
    contact: [
        {
            info: "+54 1169978090",
            pic: phone
        },
        {
            info: "rodrigosoftdev@gmail.com",
            pic: mail
        },
        {
            info: "Quilmes. Bs. As.",
            pic: ubication
        },
        {
            info: "rodrigo-garcia-aa0377210",
            pic: linkedIn
        },
        {
            info: "16/12/1994",
            pic: calendar
        }
    ],
    education: [
        {
            title: "Instituto La Providencia",
            year: "2007- 2012",
            name: "Economics and management of organizations's Bachelor."
        },
        {
            title: "Universidad nacional de Quilmes.",
            year: "2016 - ACTUALIDAD",
            name: "Computer programming's technichan."
        },
    ],
    experience: [
        {
            title: "Carrefour",
            year: "2013- 2014",
            name: "Cashier."
        },
        {
            title: "Sistemmas",
            year: "2016 - 2017",
            name: "Lab manager and remote support."
        },
        {
            title: "Cubiq Digital",
            year: "2020 - ACTUALIDAD",
            name: "Front-End developer"
        },
    ],
    course: [
        {
            title: "Universidad tecnológica nacional",
            year: "2011",
            name: "Excel advanced."
        },
        {
            title: "Universidad nacional de Quilmes.",
            year: "2016",
            name: "Computer repair's technichan."
        },
    ],
    aboutMe: {
        text: "I am a programming student, always predisposed to learning new technologies and methodologies in order to continue growing as a professional.",
    },
    languaje: [
        { 
            info: "English: Intermediate", 
            pic: english
        },
    ],
    skills: [
        { 
            info: "JavaScript", 
            pic: javaScript
        },
        { 
            info: "React JS", 
            pic: reactJs
        },
        { 
            info: "Node JS", 
            pic: nodeJs
        },
        { 
            info: "HTML",
            pic: html
        },
        { 
            info: "Css", 
            pic: css
        },
        { 
            info: "Java",
            pic: java 
        },
        { 
            info: "Kotlin", 
            pic: kotlin 
        },
        {
            info: "Python",
            pic: python
        },
        {
            info: "SQL",
            pic: sql
        },
        {
            info: "C++",
            pic: cmm
        },
    ],
    curriculum: { 
        pic: myPdf,
    },
};

export const spanishData = {
    personalData: {
        name: "Rodrigo García",
        position: "Full Stack Developer"
    },
    cards: [
        {
            type: "text",
            toRender: "aboutMe",
            title: "Sobre mí",
            pic: down
        },
        {
            type: "list",
            toRender: "contact",
            title: "Contacto",
            pic: down
        },
        {
            type: "chronology",
            toRender: "experience",
            title: "Experiencia",
            pic: down
        },
        {
            type: "chronology",
            toRender: "education",
            title: "Educación",
            pic: down
        },
        {
            type: "chronology",
            toRender: "course",
            title: "Cursos",
            pic: down
        },
        {
            type: "list",
            toRender: "skills",
            title: "Habilidades",
            pic: down
        },
        {
            type: "list",
            toRender: "languaje",
            title: "Idiomas",
            pic: down
        },
        {
            type: "image",
            toRender: "curriculum",
            title: "Curriculum",
            pic: down
        },
    ],
    contact: [
        {
            info: "+54 1169978090",
            pic: phone
        },
        {
            info: "rodrigosoftdev@gmail.com",
            pic: mail
        },
        {
            info: "Quilmes. Bs. As.",
            pic: ubication
        },
        {
            info: "rodrigo-garcia-aa0377210",
            pic: linkedIn
        },
        {
            info: "16/12/1994",
            pic: calendar
        }
    ],
    education: [
        {
            title: "Instituto La Providencia",
            year: "2007- 2012",
            name: "Bachillerato en economía y gestión de las organizaciones."
        },
        {
            title: "Universidad nacional de Quilmes.",
            year: "2016 - ACTUALIDAD",
            name: "Tecnicatura en programación informática."
        },
    ],
    experience: [
        {
            title: "Carrefour",
            year: "2013- 2014",
            name: "Puesto de caja."
        },
        {
            title: "Sistemmas",
            year: "2016 - 2017",
            name: "Encargado de laboratorio y soporte remoto."
        },
        {
            title: "Cubiq Digital",
            year: "2020 - ACTUALIDAD",
            name: "Desarrollador front-end."
        },
    ],
    course: [
        {
            title: "Universidad tecnológica nacional",
            year: "2011",
            name: "Excel avanzado."
        },
        {
            title: "Universidad nacional de Quilmes.",
            year: "2016",
            name: "Técnico en reparación de computadoras."
        },
    ],
    aboutMe: {
        text: "Soy estudiante de programación, siempre predispuesto al aprendizaje de nuevas tecnologías y metodologías para poder seguir creciendo como profesional.",
    },
    languaje: [
        { 
            info: "Inglés: Intermedio", 
            pic: english
        },
    ],
    skills: [
        { 
            info: "JavaScript", 
            pic: javaScript
        },
        { 
            info: "React JS", 
            pic: reactJs
        },
        { 
            info: "Node JS", 
            pic: nodeJs
        },
        { 
            info: "HTML",
            pic: html
        },
        { 
            info: "Css", 
            pic: css
        },
        { 
            info: "Java",
            pic: java 
        },
        { 
            info: "Kotlin", 
            pic: kotlin 
        },
        {
            info: "Python",
            pic: python
        },
        {
            info: "SQL",
            pic: sql
        },
        {
            info: "C++",
            pic: cmm
        },
    ],
    curriculum: { 
        pic: myPdf,
    },
};