import { Component, OnInit } from '@angular/core';
import { info, img } from '../../db/constantes';
import * as _ from 'lodash';

interface campeones {
  id: number;
  nombre: string;
  apodo: string;
  foto: any;
  descripcion: string;
  spla: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  cargar: boolean = true;
  sppiner: boolean = false;
  sppinerCard: boolean = false;
  valor: any;
  championSearch = Object.values(info.data);
  selectedValue: string;
  champions: Array<campeones>;
  pasivaActiva: boolean = true;
  busquedas: string;
  //para el buscador
  busquedaPorRecorrido = '';
  campeonesFiltados: Array<string> = [];
  filterpost = '';

  public searchFilter: any = '';

  all: boolean = false;
  constructor() {
    this.valor = info.data;
    this.selectedValue = '';
    this.busquedas = '';
    this.champions = [];
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.cargar = false;
    }, 1500);
  }

  comprobacion() {
    this.selectedValue != ''
      ? this.agregar(this.selectedValue)
      : console.log('no hay datos');
  }

  agregar(x: string) {
    try {
      this.champions.push({
        id: this.valor[x].key,
        nombre: this.valor[x].id,
        apodo: this.valor[x].title,
        foto: img(this.selectedValue).cuadro,
        descripcion: this.valor[x].blurb,
        spla: img(this.selectedValue).splash,
      });
      setTimeout(() => {
        this.selectedValue = '';
        this.sppiner = true;
      }, 500);
      setTimeout(() => {
        this.sppiner = false;
        this.sppinerCard = true;
      }, 1500);
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  }
  pasivas(x: boolean) {
    console.log(x);
    this.pasivaActiva = x;
  }
  bsCm(x: string) {
    this.champions.push({
      id: this.valor[x].key,
      nombre: this.valor[x].id,
      apodo: this.valor[x].title,
      foto: img(x).cuadro,
      descripcion: this.valor[x].blurb,
      spla: img(x).splash,
    });
    this.busquedas = '';
    this.sppinerCard = true;
  }

  onKeyUp(event: any) {
    this.busquedaPorRecorrido += event.target.value;
    var arreglo = [];
    arreglo.push(this.busquedaPorRecorrido);
    this.busquedaPorRecorrido = '';
    for (const key in this.championSearch) {
      if (Object.prototype.hasOwnProperty.call(this.championSearch, key)) {
        const element = this.championSearch[key];
        if (element.name.includes(arreglo[0])) {
          for (let index = 0; index < element.name.length; index++) {
            element.name[index].length == arreglo[0].length
              ? this.campeonesFiltados.push(element.name)
              : console.log('no encontrado');
            this.campeonesFiltados
              ? (this.campeonesFiltados = _.uniq(this.campeonesFiltados))
              : console.log('vacio');
            console.log(this.busquedas)
          }
        }
      }
    }
  }

  value(x:string){
    this.bsCm(x)
    this.busquedas=""
  }
  onload(){
    location.reload();
  }
  
}
