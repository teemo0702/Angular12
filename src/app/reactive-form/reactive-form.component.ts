import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  // public formData: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  // });
  public formData = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4), Validators.pattern("^[0-9a-z._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    age: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^[A-Z]+[a-z0-9]{8,}$")]],
  });

  constructor(
    private common: CommonService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // console.log
  }

  get name() { return this.formData.get('name'); }

  get age() { return this.formData.get('age'); }

  public onSubmit(): void {
    // this.common.submitData(this.formData.value);
    console.log(this.formData);

  }
}
