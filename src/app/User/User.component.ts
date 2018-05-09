/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import { UserService } from './User.service';
@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css'],
})
export class UserComponent implements OnInit {

  myForm: FormGroup;

  private allParticipants;
  private participant;
  private currentId;
  private errorMessage;



  id = new FormControl("", Validators.required);



  name = new FormControl("", Validators.required);



  passportNumber = new FormControl("", Validators.required);



  age = new FormControl("", Validators.required);



  nationality = new FormControl("", Validators.required);



  residentFrom = new FormControl("", Validators.required);



  status = new FormControl("REGISTERED", Validators.required);




  constructor(private serviceUser: UserService, fb: FormBuilder, private _router: Router) {
    this.myForm = fb.group({


      id: this.id,



      name: this.name,



      passportNumber: this.passportNumber,



      age: this.age,



      nationality: this.nationality,



      residentFrom: this.residentFrom,



      status: this.status


    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceUser.getAll()
      .toPromise()
      .then((result) => {
        this.errorMessage = null;
        result.forEach(participant => {
          tempList.push(participant);
        });
        this.allParticipants = tempList;
      })
      .catch((error) => {
        if (error == 'Server error') {
          this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if (error == '404 - Not Found') {
          this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else {
          this.errorMessage = error;
        }
      });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the participant field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the participant updateDialog.
   * @param {String} name - the name of the participant field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified participant field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addParticipant(form: any): Promise<any> {
    this.participant = {
      $class: "org.poc.comp.User",


      "id": this.id.value,



      "name": this.name.value,



      "passportNumber": this.passportNumber.value,



      "age": this.age.value,



      "nationality": this.nationality.value,



      "residentFrom": this.residentFrom.value,



      "status": this.status.value


    };

    this.myForm.setValue({


      "id": null,



      "name": null,



      "passportNumber": null,



      "age": null,



      "nationality": null,



      "residentFrom": null,



      "status": null


    });

    return this.serviceUser.addParticipant(this.participant)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
        this._router.navigate(['User', 'company'])
        this.myForm.setValue({


          "id": null,



          "name": null,



          "passportNumber": null,



          "age": null,



          "nationality": null,



          "residentFrom": null,



          "status": null


        });
      })
      .catch((error) => {
        if (error == 'Server error') {
          this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else {
          this.errorMessage = error;
        }
      });
  }


  updateParticipant(form: any): Promise<any> {
    this.participant = {
      $class: "org.poc.comp.User",







      "name": this.name.value,





      "passportNumber": this.passportNumber.value,





      "age": this.age.value,





      "nationality": this.nationality.value,





      "residentFrom": this.residentFrom.value,





      "status": this.status.value



    };

    return this.serviceUser.updateParticipant(form.get("id").value, this.participant)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
      })
      .catch((error) => {
        if (error == 'Server error') {
          this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if (error == '404 - Not Found') {
          this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else {
          this.errorMessage = error;
        }
      });
  }


  deleteParticipant(): Promise<any> {

    return this.serviceUser.deleteParticipant(this.currentId)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
      })
      .catch((error) => {
        if (error == 'Server error') {
          this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if (error == '404 - Not Found') {
          this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else {
          this.errorMessage = error;
        }
      });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceUser.getparticipant(id)
      .toPromise()
      .then((result) => {
        this.errorMessage = null;
        let formObject = {


          "id": null,



          "name": null,



          "passportNumber": null,



          "age": null,



          "nationality": null,



          "residentFrom": null,



          "status": null


        };




        if (result.id) {

          formObject.id = result.id;

        } else {
          formObject.id = null;
        }

        if (result.name) {

          formObject.name = result.name;

        } else {
          formObject.name = null;
        }

        if (result.passportNumber) {

          formObject.passportNumber = result.passportNumber;

        } else {
          formObject.passportNumber = null;
        }

        if (result.age) {

          formObject.age = result.age;

        } else {
          formObject.age = null;
        }

        if (result.nationality) {

          formObject.nationality = result.nationality;

        } else {
          formObject.nationality = null;
        }

        if (result.residentFrom) {

          formObject.residentFrom = result.residentFrom;

        } else {
          formObject.residentFrom = null;
        }

        if (result.status) {

          formObject.status = result.status;

        } else {
          formObject.status = null;
        }


        this.myForm.setValue(formObject);

      })
      .catch((error) => {
        if (error == 'Server error') {
          this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if (error == '404 - Not Found') {
          this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else {
          this.errorMessage = error;
        }
      });

  }

  resetForm(): void {
    this.myForm.setValue({


      "id": null,



      "name": null,



      "passportNumber": null,



      "age": null,



      "nationality": null,



      "residentFrom": null,



      "status": null


    });
  }

}
