import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Je suis un développeur Full Stack junior autodidacte et ayant un cfc d'Informaticien de Gestion`;

export const ABOUT_TEXT = `Je suis un passionné de code web en react et laravel principalement.`;

export const FORMATIONS = [
  {
    year: "2017 - 2021",
    school: "École Supérieure d'Informatique de Gestion",
    description: `Diplôme d'informaticien de Gestion.`,
    technologies: ["Javascript", "HTML et CSS", "Java SE", 
      "MySql","Plsql","Django","AJAX","GANT"],
  },
  {
    year: "2011 - 2016",
    company: "École de commerce Nicolas-Bouvier",
    description: `CFCi de commerce.`,
    technologies: ["Word", "Excel", "PowerPoint", "Crésus"],
  },
  
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "Un site E-Commerce permettant d'acheter des produits, de créer un compte et d'avoir ses commandes passées.",
    technologies: ["HTML", "TailwindCss", "React Js", "Node.js", "Laravel","Axios","MySql","EmailJs","Stripe"],
  },
  
];

export const CONTACT = {
  address: "Promenade Jean-Treina 1, Genève, 1203 ",
  phoneNo: "+41 76 570 78 98 ",
  email: "david.baehler03@gmail.com",
};