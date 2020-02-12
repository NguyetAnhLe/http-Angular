import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {
    this.getDataHttp();
  }

  data:any = [];


  getDataHttp(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url).subscribe(res=>{
      this.data = res;
      console.log(this.data);
    });
  }

  getData() {
    return this.data;
  }
}
