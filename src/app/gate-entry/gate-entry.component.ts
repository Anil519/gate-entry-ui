import { Component } from '@angular/core';
import { FormBuilder, FormControl,  Validators } from '@angular/forms';

@Component({
  selector: 'app-gate-entry',
  templateUrl: './gate-entry.component.html',
  styleUrls: ['./gate-entry.component.css']
})
export class GateEntryComponent {
  constructor(private fb:FormBuilder){}
  

  login=this.fb.group({

    TransitionType:[null,Validators.required],
    Gate:[null,Validators.required],
    b1:[null,Validators.required],
    b2:[null,Validators.required],
    b3:[null,Validators.required],
    b4:[null,Validators.required],
  
  })

  reamount=this.fb.group({
    rev_price:[500]
  })
  
  formvalid=this.login.status
  submit(){
    
    console.log("aaa", this.login)
    console.log(this.login.value)
    console.log(this.login.status)

  }

}
