import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs';


interface apiGen{
  "query":{
    "search":{
      "title":""
      "pageid":"",
      "snippet":"",
      "wordcount":""
    }[]
  }
}

@Injectable({
  providedIn: 'root'
})


export class WikimediaService {

  
  constructor(private http:HttpClient) { }

  

  hanldleCall(item:string){
   return this.http.get<apiGen>("https://en.wikipedia.org/w/api.php",{
    params:{
      action:"query",
      format:"json",
      list:"search",
      origin:"*",
      srsearch:item,
      utf8:1
    }
   }).pipe(
    pluck("query","search")
   )
  }
}
// ?action=query&format=json&list=search&utf8=1&srsearch=space