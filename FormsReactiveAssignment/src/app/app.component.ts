import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  projectStatusValues = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(
        null,
        [Validators.required, CustomValidators.validateProjectName]
      ),
      'mail': new FormControl(
        null,
        [Validators.required, Validators.email],
        CustomValidators.validateProjectMail
      ),
      'projectStatus': new FormControl('Stable')
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
