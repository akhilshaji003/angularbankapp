import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="";
  password="";
   accountDetails:any = {

    userone: { acno: 1000, balance: 1000, username:"userone", password:"testuser" },

    usertwo: { acno: 1001, balance: 12000, username: "usertwo", password: "testuser1" },
    userthree: { acno: 1002, balance: 13000, username: "usethree", password: "testuser2" },
}

  constructor() { }

  ngOnInit(): void {
  }


onUsernameChange(event:any) {

  this.username=event.target.value;

}

onPasswordChange(event:any) {
  this.password=event.target.value;
}

login(){
  
  
  let user=this.authenticateUser(this.username,this.password)
  if(user==1){
      alert("sucessfull login")
      window.location.href = "userhome.html"
  }
  else if(user==0){
      alert("invalid password")
  }
 else if(user==-1){
        alert("No username found matching")
      }
  
   
}

authenticateUser=(uname:string, pwd:string)=>{
  let datset = this.accountDetails;
  if (uname in datset) {
      if (datset[uname].password === pwd) {
          return 1;
      }
      else {
          return 0;
          // 0 for invalid password
      }

  }
  else {
      return -1;
      //-1 invalid username
  }
}
}