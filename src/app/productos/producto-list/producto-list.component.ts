import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})

export class ProductoListComponent {

  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImg: boolean = true;
  listfliter: string= ' ';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:IProductos[]=[
    {
    "Modelo":"Centra",
    "Descripcion":"4 puertas familiar",
    "Year":"Febrero 2 2022",
    "Precio": 120000,
    "Marca":"Nissan",
    "Color": "Azul",
    "ImagenUrl":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_0c7166c16ff74073b65851f7f0b360ed.jpg"
  },
  {
    "Modelo":"Ford",
    "Descripcion":"2 puertas individual",
    "Year":"Abril 27 2020",
    "Precio": 140000,
    "Marca":"Aveo",
    "Color": "Rojo",
    "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivfKXetMqtkAGv-kFus48miZbhJ82QQGsWOvqJfh_dLTFYw9JFNQys_hAh6ng_7OGL9w&usqp=CAU.jpg"
  },
  {
    "Modelo":"Chevrolet",
    "Descripcion":"6 puertas familiar",
    "Year":"Octubre 14, 2023",
    "Precio": 280000,
    "Marca":"Force",
    "Color": "Naranja",
    "ImagenUrl":"https://www.elcarrocolombiano.com/wp-content/uploads/2020/10/20201011-CHEVROLET-GROOVE-FOTOS-Y-DATOS-OFICIALES-EN-CHILE-02.jpg"
  },
]
}
