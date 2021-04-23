import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { farmacovigilancia } from '../../../shared/interfaces/farmacovigilancia.interface';
import { farmacovigilanciaService } from '../../../shared/services/farmacovigilancia.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
 
  @ViewChild('nameinput', {static: true}) nameinput: ElementRef | undefined;
  @ViewChild('descripcioninput', {static: true}) descripcioninput: ElementRef | undefined;
  @ViewChild('responsableinput', {static: true}) responsableinput: ElementRef | undefined;
  @ViewChild('telefonoinput', {static: true}) telefonoinput: ElementRef | undefined;
  
  registerForm=new FormGroup({
    nameinput: new FormControl('', [Validators.required]),
    descripcioninput: new FormControl('', [Validators.required, Validators.email]),
    responsableinput: new FormControl('', [Validators.required]),
    telefonoinput: new FormControl('',[Validators.required])
  })
  

  constructor(private farmacovigilanciaService: farmacovigilanciaService, private FormBuilder: FormBuilder) {}

   
  
  ngOnInit(): void {
    this.registerForm = this.FormBuilder.group({
      nameinput: new FormControl('', [Validators.required, Validators.minLength(5), this.noSpaces]),
      descripcioninput: new FormControl('', [Validators.required, Validators.minLength(5), this.noSpaces]),
      responsableinput: new FormControl('', Validators.required),
      telefonoinput: new FormControl('', [Validators.required, Validators.minLength(9), this.noSpaces])
    })
  }

  registerOnClick() : void {
    if (this.registerForm.valid){
      // GRAB THE FIELDS
      const uname = this.nameinput?.nativeElement.value;
      const descripcion = this.descripcioninput?.nativeElement.value;
      const responsable = this.responsableinput?.nativeElement.value;
      const telefono = this.telefonoinput?.nativeElement.value;


      // empty check
      if(uname.includes(' ') || descripcion.includes(' ') || responsable.includes(' ') || telefono.includes(' ')){
        alert('NO FIELD MUST BE LEFT BLANK');
        return;
      }

    
      // all successful, send the farmacovigilancia to the API
      // generate farmacovigilancia
      const farmacovigilancia = {
        "uname": uname,
        "descripcion": descripcion,
        "responsable": responsable,
        "telefono": telefono
      } as farmacovigilancia;

      this.farmacovigilanciaService.registerfarmacovigilancia(farmacovigilancia).subscribe(
        (response) =>{
          alert(`Farmacovigilancia registered: ${response.uname}`);
        },
        (error) =>{
          alert(`Farmacovigilancia was not registered`);
        }
      );
    }
    else {
      console.log("Error"); 
    }
  }

  public noSpaces(control: FormControl){
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}
