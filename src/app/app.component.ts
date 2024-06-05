import { Component } from '@angular/core';
import { CustomService } from './service/custom.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app2';

  data:Array<any>;

  constructor(private myService:CustomService){
    this.data = new Array<any>
  }

  getDataFromAPI(){
    this.myService.getData().subscribe((data)=>{
      console.log(data)
      this.data = data;
    })
  }
  
}
