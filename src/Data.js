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


export const data = {
    cards: [
        {
            type: "text",
            toRender: "aboutMe",
            title: "Sobre mi",
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
            title: "Cajero",
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
};