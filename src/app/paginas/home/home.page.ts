import { Categorias } from './../../interfaces/comidas';
import { Component, OnInit } from '@angular/core';
import {ServicioComidaService} from '../../services/servicio-Servicio-Comida.Service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{


  Categorias:Categorias[]=[]
  constructor(private servicioComida:servicioComidaService
    ){}

    ngOnInit(): void {
        console.log("hola");
        this.servicioComida.getCategorias().subscribe(datos=>{
          console.log(datos);
        })
    }
}
