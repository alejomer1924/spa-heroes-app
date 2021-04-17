import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  hArra:Heroe[] = []; 
  encontro:boolean;

  constructor(private _heroeServices: HeroesService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
       this.hArra = this._heroeServices.buscarHeroes(params['name']);
       if(this.hArra.length === 0){
         this.encontro = false; 
       }else{
         this.encontro = true; 
       }
    })
  }



}
