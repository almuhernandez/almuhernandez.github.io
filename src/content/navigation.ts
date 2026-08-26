import type { Locale } from './i18n';

type NavigationLink={label:string;href:string;variant?:'service'};
type NavigationItem=NavigationLink|{label:string;children:NavigationLink[]};
export const navigation:Record<Locale,NavigationItem[]>={
  es:[{label:'Inicio',href:'/es/'},{label:'Sobre Mí',href:'/es/sobre-mi/'},{label:'Experiencia & Proyectos',children:[{label:'Experiencia',href:'/es/experiencia/'},{label:'Proyectos',href:'/es/proyectos/'}]},{label:'Docencia',href:'/es/docencia/'},{label:'Contacto',href:'/es/contacto/'},{label:'Servicios',href:'/es/servicios/',variant:'service'}],
  en:[{label:'Home',href:'/'},{label:'About',href:'/about/'},{label:'Experience & Projects',children:[{label:'Experience',href:'/experience/'},{label:'Projects',href:'/projects/'}]},{label:'Teaching',href:'/teaching/'},{label:'Contact',href:'/contact/'},{label:'Services',href:'/services/',variant:'service'}],
};

const pairs:[string,string][]=[['/','/es/'],['/about/','/es/sobre-mi/'],['/experience/','/es/experiencia/'],['/projects/','/es/proyectos/'],['/teaching/','/es/docencia/'],['/contact/','/es/contacto/'],['/services/','/es/servicios/'],['/students/','/es/estudiantes/'],['/cv/','/es/cv/']];
export const alternatePath=(path:string,target:Locale)=>{
  const legacyToCanonical:Record<string,string>={'/sobre-mi/':'/es/sobre-mi/','/experiencia/':'/es/experiencia/','/docencia/':'/es/docencia/','/contacto/':'/es/contacto/','/servicios/':'/es/servicios/','/estudiantes/':'/es/estudiantes/'};
  path=legacyToCanonical[path]??path;
  for(const[en,es]of pairs){
    if(path===en||path===es)return target==='en'?en:es;
    if(en==='/projects/'&&(path.startsWith('/projects/')||path.startsWith('/es/proyectos/'))){const slug=path.split('/').filter(Boolean).at(-1);return `${target==='en'?'/projects/':'/es/proyectos/'}${slug}/`;}
  }
  return target==='en'?'/':'/es/';
};
export const sharedUi={es:{navigationLabel:'Navegación principal',legalLabel:'Información legal',legalNotice:'Aviso legal',privacy:'Privacidad',languageLabel:'Idioma',spanishOnly:'Disponible en español'},en:{navigationLabel:'Primary navigation',legalLabel:'Legal information',legalNotice:'Legal notice',privacy:'Privacy',languageLabel:'Language',spanishOnly:'Available in Spanish'}} as const;
