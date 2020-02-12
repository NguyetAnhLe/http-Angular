import { Component } from '@angular/core';
import { ConfigService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfigService]
})
export class AppComponent {
  title = 'http-Angular';
  constructor(private _httpService : ConfigService){}
  data;
  cond = false;
  getData(){
    //return this._httpService.getData();
    this.cond = true;
    this.data = this._httpService.getData();
  }
  hideData(){
    this.cond = false;
  }
}
