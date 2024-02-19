import { Component, OnInit } from '@angular/core';
import { MedicinaService } from '../servicios/medicina.service';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css',
})
export class PersonaComponent implements OnInit {
  datosC: any;
  error: any;

  ngOnInit(): void {
    this.tipoPersona();
  }

  constructor(private hospitalS: MedicinaService) {}

  tipoPersona() {
    this.hospitalS.getTipoPersona().subscribe({
      next: (datos: any) => {
        this.datosC = datos.tipo;
      },
      error: (err) => {
        console.log('error:' + err);
      },
    });
  }

  guardarD(
    nombre: any,
    apellido: any,
    cedula: any,
    correo: any,
    telefono: any,
    especialidad: any,
    tipoPersona_id: any
  ) {
    this.hospitalS
      .postPersona(
        nombre.value,
        apellido.value,
        cedula.value,
        correo.value,
        telefono.value,
        especialidad.value,
        tipoPersona_id.value
      )
      .subscribe({
        next: (datos: any) => {
          this.error = datos.error;
          console.log(datos.error);
        },
        error: (err) => {
          console.log('error' + err);
        },
      });
  }
}
