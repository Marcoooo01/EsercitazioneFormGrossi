import { Component } from '@angular/core';
import {  //Importa FormBuilder e FormGroup
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Esercitazione';
  risultato : Number;
  num_vett: Number[];
  myForm: FormGroup; 
  constructor(fb: FormBuilder) { 
    
    
    this.myForm = fb.group({
      'n1': ['', Validators.required], 'n2': ['', Validators.required]
    });
  }
  
  sum(): boolean {
   this.risultato = Number(this.myForm.controls['n1'].value) + Number(this.myForm.controls['n2'].value);
   this.fillVect();
   return false;
  }

  sot(): boolean {
   this.risultato = Number(this.myForm.controls['n1'].value) - Number(this.myForm.controls['n2'].value);
   this.fillVect();
   return false;
  }

  mol(): boolean {
   this.risultato = Number(this.myForm.controls['n1'].value) * Number(this.myForm.controls['n2'].value);
   this.fillVect();
   return false;
  }
  
  div(): boolean {
   this.risultato = Number(this.myForm.controls['n1'].value) / Number(this.myForm.controls['n2'].value);
   this.fillVect();
   return false;
  }
  
   fillVect()
    {
        if (this.myForm.controls['n1'].value < this.myForm.controls['n2'].value) {
            this.num_vett = new Array<number>();
            for(let i = this.myForm.controls['n1'].value; i <=this.myForm.controls['n2'].value; i++)
            {
                this.num_vett.push(i);
            }
        }
        else
        {
            this.num_vett = new Array<number>();
            for(let i = this.myForm.controls['n2'].value; i <=this.myForm.controls['n1'].value; i++)
            {
                this.num_vett.push(i);
            }
        }
        
    }
}

