import { Component, OnInit, ViewChild } from '@angular/core';
import{AccountsService } from '../../services/accounts.service';
import {MatPaginator} from '@angular/material/paginator';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})

export class ViewAccountComponent implements OnInit {


 p: number = 1;
  accounts=[
    {
      id: 0,
      email:'',
      enabled:true,
      firstName: '',
      lastName:'',
      password: '',
      username: ''
    },
    
  ];
  constructor(private account:AccountsService) { }
 
  ngOnInit(): void {
    this.account.accounts().subscribe(
      (data:any)=>{
        this.accounts=data;
        console.log(this.accounts);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    )
  }

}
