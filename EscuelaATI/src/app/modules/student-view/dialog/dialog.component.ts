import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  clubForm!: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.clubForm= this.formBuilder.group({
      clubName:['', Validators.required],
      category:['', Validators.required]
    })
  }

  addClub(){
    console.log(this.clubForm.value);
  }

}
