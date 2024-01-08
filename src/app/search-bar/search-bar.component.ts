import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() datainput=new EventEmitter<String>();

  inputVal:string="";

  constructor() { }

  ngOnInit(): void {
  }

  handleInput(event:any){
    this.inputVal=event.target.value;
  }

  handleSubmit(event:any){
    event.preventDefault();
    this.datainput.emit(this.inputVal);
  }

}
