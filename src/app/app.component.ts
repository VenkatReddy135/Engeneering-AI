import { Component } from '@angular/core';
import { CubeService } from './cube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public dataList:any;
  public rawJsonData:any;
  public dataFilter:any={title:''}

  constructor(private cu:CubeService){}

  ngOnInit(){
    this.getData()
    setInterval(()=>this.getData(),10000)
  }

  getData(){
    this.cu.data().subscribe(res=>{
      console.log(res)
      this.dataList=res['hits']
    })   
  }

  modal(z){
    this.rawJsonData=z;
  }

}
