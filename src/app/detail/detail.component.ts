import { Component, OnInit } from '@angular/core';
import { DogService } from '../services/index';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss']
})

export class DetailComponent implements OnInit {
  dog: any;
  images: any;
  defaultImage = 'https://thumbs.gfycat.com/DigitalHomelyAuk-max-1mb.gif';

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService) {}

  ngOnInit() {
    this.dog = this.route.snapshot.paramMap.get('name');
    this.loadDogImages();
  }

  loadDogImages() {
    this.dogService.getByBreed(this.dog).subscribe(res => {
      this.images = res.message;
    });
  }
}
