import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Je m'appelle David Baehler, développeur web Full Stack autodidacte avec une grande passion pour la création de solutions numériques. Bien que je n'aie pas encore d'expérience professionnelle, j'ai passé de nombreuses heures à apprendre, coder, et perfectionner mes compétences à travers des projets personnels et des défis en ligne. Ma curiosité et ma soif d'apprendre m'ont permis de développer des compétences solides en développement frontend et backend, et je suis constamment à la recherche de nouvelles technologies et meilleures pratiques pour améliorer mes projets.

Ma mission est de transformer des idées en applications web fonctionnelles et esthétiques, avec une attention particulière portée à l'expérience utilisateur. Je suis motivé par les défis et prêt à mettre mes compétences au service de projets stimulants pour continuer à progresser et à m'affirmer en tant que développeur.`;

export const ABOUT_TEXT = `Je suis un développeur web Full Stack passionné, spécialisé dans React et Laravel. Ma curiosité et mon envie constante d'apprendre m'ont permis de maîtriser ces technologies et de développer des projets qui allient performance et design. Autodidacte et toujours à la recherche de nouveaux défis, je passe la plupart de mon temps à coder, expérimenter de nouvelles fonctionnalités et améliorer mes compétences. Je crois que chaque ligne de code est une opportunité de résoudre des problèmes réels et d'apporter des idées innovantes à la vie. Mon objectif est de continuer à évoluer dans ce domaine et de contribuer à des projets inspirants.`;

export const FORMATIONS = [
  {
    year: "2017 - 2021",
    school: "École Supérieure d'Informatique de Gestion",
    description: `Diplôme d'informaticien de Gestion.`,
    technologies: ["Javascript", "HTML","CSS", "JavaSE", 
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
    technologies: ["HTML", "TailwindCss", "ReactJs", "Node.js", "Laravel","Axios","MySql","EmailJs","Stripe"],
    lien:"https://shop-e-com.com"
  },
  
];

export const CONTACT = {
  address: "Promenade Jean-Treina 1, Genève, 1203 ",
  phoneNo: "+41 76 570 78 98 ",
  email: "david.baehler03@gmail.com",
};