import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  username:string = "";


  constructor(private router:Router, private sharedService: SharedServiceService){

  }


  ngOnInit(): void {
    const userToken = this.sharedService.getSession();
    if(userToken!=null){
      this.username = userToken.username;
    }
  }


  Logout(){
    this.sharedService.removeSession();
    this.router.navigate(['login']);    
  }

}
