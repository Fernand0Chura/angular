import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  public form = {
    email: null
  };


  constructor(
    private Jarvis: JarwisService
  ) { }

  ngOnInit() {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }


  onSubmit() {
//    this.Notfiy.info('Wait...' ,{timeout:5000})
    this.Jarvis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
//    error => this.notify.error(error.error.error)
    );
  }

  handleResponse(res : any) {
//    this.Notfiy.success(res.data,{timeout:0});
    this.form.email = null;
  }

}
