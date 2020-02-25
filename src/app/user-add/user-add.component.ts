import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {UserService} from '../user.service';
import User from '../User';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  public userForm:FormGroup;
  constructor(
    private userS: UserService,
    private formBuilder: FormBuilder,
    ) { }
  
  ngOnInit() {
    
  }

  onSubmit(data){
    let user:User;
    user={
      nombre: this.userForm.get('nombre').value,
      apellidos: this.userForm.get('apellidos').value,
      direccion: this.userForm.get('direccion').value,
      telefono: this.userForm.get('telefono').value
    }
    this.userS.postUser(user);
  }
}
