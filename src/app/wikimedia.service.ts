import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikimediaService {

  constructor(private http:HttpClient) { }


  hanldleCall(item:string){
   return this.http.get("https://en.wikipedia.org/w/api.php",{
    params:{
      action:"query",
      format:"json",
      list:"search",
      origin:"*",
      srsearch:item,
      utf8:1
    }
   })
  }
}
// ?action=query&format=json&list=search&utf8=1&srsearch=space