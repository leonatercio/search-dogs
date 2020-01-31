import { Component, OnInit } from '@angular/core';
import { DogService } from '../services/index';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
  dogs: any[];

  constructor(
    private router: Router,
    private dogService: DogService) {}

  ngOnInit() {
    this.loadAllDogs();
  }

  loadAllDogs() {
    this.dogService.getAll().subscribe(res => {
      let dog = res.message;
      let filterDogs: any[] = [];
      Object.keys(dog).forEach(function(key) {
        if (dog[key].length > 0) {
          filterDogs.push(key);
          // console.log('Raça: ', key);
        }
      });
      this.dogs = filterDogs;
      console.log(filterDogs);
    });
  }

  selectedBreed(value) {
    console.log(value);
    this.router.navigate(['/detail', value]);
  }
}
