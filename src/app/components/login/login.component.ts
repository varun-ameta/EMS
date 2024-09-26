import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    "EmailId": "",
    "Password": ""
  }
  http = inject(HttpClient);
  router = inject(Router)
  onLogin() {
    debugger;
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginObj).subscribe((resp: any) => {
      if (resp.result) {
        alert("Login Success");
        localStorage.setItem('authToken',resp.data.token);
        this.router.navigateByUrl('master');
      }else{
        alert(resp.message);
      }
    })
  }
}
