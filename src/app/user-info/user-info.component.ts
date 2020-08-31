import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface UserDialogData {
  fname: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  model: any ={};
  fname: string;
  phone: string;
  email: string;
  errorMsg = "Please review errors";
  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    // alert(JSON.stringify(this.model));
    console.log(this.model.firstName);
    const dialogRef = this.dialog.open(UserInfoDialogComponent, {
      width: '550px',
      data: {fname:this.model.firstName, phone:this.model.phone, email:this.model.email}
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
      this.router.navigate(['/', 'thanks']);
    })
  }
  
}

@Component({
  selector: 'user-info-dialog',
  templateUrl: 'user-info-dialog.html',
})
export class UserInfoDialogComponent {

  constructor(public dialogRef: MatDialogRef<UserInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserDialogData
   ) {}

        

}