import { Component } from '@angular/core';
import { WikimediaService } from './wikimedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private wiki:WikimediaService){}

  wikiList:any=[]
  
  handleInputP(val:any){
    this.wiki.hanldleCall(val).subscribe((response)=>{
      console.log(response)
      // this.wikiList=response.query.search
      this.wikiList=response;
      // console.log(this.wikiList)
    },(error)=>{
      console.log(error);
    })
  }
}
