import { Component, OnInit } from '@angular/core';
import { AppserviceService } from "src/app/service/appservice.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  parkingData = [];
  lat;
  lang;

  constructor(private appService: AppserviceService) { }

  ngOnInit() {
    this.appService.getCityDetails().subscribe((res) => {
      console.log(res);
      this.parkingData = res;
      // this.lat = res.features.geometry.coordinates[0];
      // this.lang = res.features.geometry.coordinates[1];
      }); 
  }
}
