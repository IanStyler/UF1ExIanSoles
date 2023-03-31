import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-examen-ian',
  templateUrl: './examen-ian.component.html',
  styleUrls: ['./examen-ian.component.css']
})
export class ExamenIanComponent {
  constructor(private http: HttpClient) {

    //Crida dels exercicis 1 i 2.
    /*this.http.post('http://localhost:3020/Ex1Ex2',{}).subscribe(response =>{
    });*/

    //Crida del exercici 4.
    this.http.post('http://localhost:3020/Ex4',{}).subscribe(response =>{
    });
  }
}

