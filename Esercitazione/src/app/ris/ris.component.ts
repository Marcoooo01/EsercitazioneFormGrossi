import { Component, OnInit, Input } from '@angular/core';
import {
 FormBuilder,
 FormGroup,
 Validators,
} from '@angular/forms';

@Component({
  selector: 'app-ris',
  templateUrl: './ris.component.html',
  styleUrls: ['./ris.component.css']
})
export class RisComponent implements OnInit {
  @Input() risultato: Number;
  @Input() n_vet : Number[];
  b : boolean = false;
  myForm2: FormGroup;
  
  constructor(fb2: FormBuilder) {
    this.myForm2 = fb2.group({
      'email': ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  
  onSubmit(value: string): void {
    console.log('La tua mail è: ', value);
  }
  
  hide(){
    if (this.b == false){
      this.b = true;
    }
    else{
      this.b = false;
    }
  }
  
  }


