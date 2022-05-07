import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'kit';
  dt: string | undefined;
  constructor(private appService: AppService){
    this.appService.getCours().subscribe(data => this.dt = JSON.stringify(data));

    
  }
}