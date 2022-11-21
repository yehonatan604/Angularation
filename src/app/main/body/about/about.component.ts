import { Component, OnInit } from '@angular/core';
import { LoremIpsumService } from 'src/app/services/lorem-ipsum.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  lorem:string = '';
  constructor(private loremIpsumService: LoremIpsumService) { 
  }

  ngOnInit(): void {
    this.lorem = this.loremIpsumService.lorem;
  }

}
