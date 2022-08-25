import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { RestService } from '../_services/rest.service';
var count = 1;
@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})




export class RestComponent implements OnInit {

  
  users: User[] = [];
  name: any;
  p: number = 1;

  constructor(private restService: RestService ) { }

  ngOnInit(): void {
    this.restService.getData().subscribe((res) => {
      this.users = res;
      console.log(res);
      
    })
    
  }


  Search() {
    if(this.name == '') {
      this.ngOnInit()
    } else {
      this.users = this.users.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      })
    }
  }
  key : string = 'id';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  
}

