import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ConsultaCreditoRequest } from '../../models/request/consulta-credito-request';
import { ConsultaCreditoResponse } from '../../models/response/consulta-credito-response';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cuotas: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  formUsuario: FormGroup = new FormGroup({})

  valorCouta: number = 0;

  consultaCreditoResponse: ConsultaCreditoResponse | null = null

  constructor(private builder: FormBuilder,
    private _usuarioService: UsuarioService,
    private router: Router) {
    this.formInit()
  }

  ngOnInit(): void {
  }

  enviar() {
    console.log("form", this.formUsuario)

    let request = new ConsultaCreditoRequest(
      this.formUsuario.controls['rutCliente'].value, 
      this.formUsuario.controls['montoCredito'].value,
      this.formUsuario.controls['numeroCuotas'].value);
    this._usuarioService.consultarCredito(request).subscribe(
      (response:any) => {
        console.log("response", response)
        if (response) {
          this.consultaCreditoResponse = response
        }
      }
    )
  }


  formInit() {
    this.formUsuario = this.builder.group({
      rutCliente: [null, Validators.required],
      montoCredito: [null, Validators.required],
      numeroCuotas: [null, Validators.required]
    })
  }


  get NumeroCoutas() {
    return this.formUsuario.controls['numeroCuotas'].value
  }


}
