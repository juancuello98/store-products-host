import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'platzi-store';
  items = ['juan','nicolas','julian']
  power = 10;



  addItem(){
    this.items.push('nuevoItem')
  }

  DeleteItem(index: number){
    this.items.splice(index, 1); // splice saca un elemento del array, recibe el indice de donde esta el elemento y cuantos borra apartir de ahi

  }

}
