import type { Locale } from './i18n';

type NavigationLink={label:string;href:string;variant?:'service'};
type NavigationItem=NavigationLink|{label:string;children:NavigationLink[]};
export const navigation:Record<Locale,NavigationItem[]>={
  es:[{label:'Inicio',href:'/es/#inicio'},{label:'Servicios',href:'/es/#servicios'},{label:'Sobre mí',href:'/es/#sobre-mi'},{label:'Hablemos',href:'/es/#hablemos'},{label:'Recursos',href:'/es/recursos/'}],
  en:[{label:'Home',href:'/#inicio'},{label:'Services',href:'/#servicios'},{label:'About me',href:'/#sobre-mi'},{label:"Let's talk",href:'/#hablemos'},{label:'Resources',href:'/students/'}],
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
