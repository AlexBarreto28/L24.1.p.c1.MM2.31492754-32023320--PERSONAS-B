export default class Cl_Calcular{

    constructor(){
        this.acumEdadF=0;
        this.contF=0;
        this.mayor=0;
    }

    procesarPersonaB(p){

        if(p.sexo == "F"){
            this.contF++;
            this.acumEdadF+=p.edad;
        }
        if(p.sexo == "F" && p.edad > this.mayor){
            this.mayor = p.edad;
        }
    }

EdadPromedioF(){
    return this.acumEdadF/this.contF;
}
devolverMayor(){
    return this.mayor;}
}