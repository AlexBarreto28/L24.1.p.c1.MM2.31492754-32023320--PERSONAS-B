import Cl_Persona from "./Cl_PersonaB.js";
import Cl_Calcular from "./Cl_Calcular.js";

let Persona1=new Cl_Persona("Luis",15,"M");
let Persona2=new Cl_Persona("Ana",19,"F");
let Persona3=new Cl_Persona("Jose",21,"M");
let Persona4=new Cl_Persona("Carmen",17,"F");
let Persona5=new Cl_Persona("Rosa",18,"F");
let Persona6=new Cl_Persona("Jose",22,"M");
let Persona7=new Cl_Persona("Maria",17,"F");
let Persona8=new Cl_Persona("Luz",19,"F");
let Persona9=new Cl_Persona("Rafael",23,"M");
let Persona10=new Cl_Persona("Liz",15,"F");
let Persona11=new Cl_Persona("Marcos",20,"M");
let Persona12=new Cl_Persona("Leo",16,"M");

let Calcular=new Cl_Calcular();

Calcular.procesarPersonaB(Persona1);
Calcular.procesarPersonaB(Persona2);
Calcular.procesarPersonaB(Persona3);
Calcular.procesarPersonaB(Persona4);
Calcular.procesarPersonaB(Persona5);
Calcular.procesarPersonaB(Persona6);
Calcular.procesarPersonaB(Persona7);
Calcular.procesarPersonaB(Persona8);
Calcular.procesarPersonaB(Persona9);
Calcular.procesarPersonaB(Persona10);
Calcular.procesarPersonaB(Persona11);
Calcular.procesarPersonaB(Persona12);

let salida = document.getElementById("salida");
salida.innerHTML+= "<br>Edad promedio: " + Calcular.EdadPromedioF().toFixed(2) ;
salida.innerHTML+= "<br>Edad mayor entre las mujeres: "+ Calcular.devolverMayor();