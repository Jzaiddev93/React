export class Contacto {
    nombre = '';
    apellido = '';
    coreo = '';
    conectado = false;

    constructor(nombre, apellido, correo, conectado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.conectado = conectado;
    }
}