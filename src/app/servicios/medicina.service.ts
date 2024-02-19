import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicinaService {

  constructor( private http:HttpClient) { }

  getTipoPersona(){
    return this.http.get('http://localhost:3000/api/tipo')
  }

  postPersona(nombre:any, apellido:any, cedula:any, correo:any, telefono:any, especialidad:any, tipoPersona_id:any){
    return this.http.post('http://localhost:3000/api/persona', {
      nombre:nombre,
      apellido:apellido,
      cedula:cedula,
      correo:correo,
      telefono:telefono,
      especialidad:especialidad,
      tipoPersona_id:tipoPersona_id
    })
  }

  postCita(){
    
  }


}
