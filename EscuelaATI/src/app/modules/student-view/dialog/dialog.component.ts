import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef} from '@angular/material/dialog'
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  clubForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private api: ApiService, private dialogRef:MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.clubForm= this.formBuilder.group({
      clubName:['', Validators.required],
      category:['', Validators.required]
    })
  }

  addClub(){
    if(this.clubForm.valid){
      this.api.postClub(this.clubForm.value).subscribe({
        next:(res)=>{
          alert("Club agregado");
          this.clubForm.reset();
          this.dialogRef.close('Guardado');
        },
        error:()=>{
          alert("Error al agregar el club")
        }
      })
    }
  }

}
