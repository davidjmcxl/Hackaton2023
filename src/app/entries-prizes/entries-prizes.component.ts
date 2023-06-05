import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entries-prizes',
  templateUrl: './entries-prizes.component.html',
  styleUrls: ['./entries-prizes.component.scss'],
})
export class EntriesPrizesComponent implements OnInit {
  public formInscription!: FormGroup;
  constructor(private fb: FormBuilder, private service:ServiceService) {}
  public premios: any[] = [
    {
      id: 1,
      img: 'assets/1er.png',
      nombre: ' 1er Puesto',
      premioMonetario: 4000000,
      premioFisico: 'Televisor 4k',
      premioDescuento: '30% de descuento en viajes durante 6 meses',
    },

    {
      id: 2,
      img: 'assets/2do.png',
      nombre: '2do Puesto',
      premioMonetario: 2000000,
      premioFisico: 'Celular de alta gama',
      premioDescuento: '20% de descuento en viajes durante 3 meses',
    },
    {
      id: 3,
      img: 'assets/3er.png',
      nombre: ' 3er Puesto',
      premioMonetario: 1000000,
      premioFisico: 'Bono de 200000 en compras',
      premioDescuento: '10% de descuento en viajes durante 2 mes',
    },
  ];
  ngOnInit(): void {
    this.formInscription = this.fb.group({
      nombre: ['',Validators.required],
      correo: ['',[Validators.required,Validators.email]],
      identificacion: ['',Validators.required]
    });
  }
  sendInscription(){

this.service.sendIncription(this.formInscription.value).subscribe((resp:any)=>{
  Swal.fire(
    'Success!',
    `${resp.msg}`,
    'success'
  )
  this.formInscription.reset();
},(error)=>{
  Swal.fire(
    'Error!',
    `${error.error.msg}`,
    'error'
  )
})
  }
}
