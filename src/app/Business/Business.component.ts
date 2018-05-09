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
import { BusinessService } from './Business.service';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Business',
  templateUrl: './Business.component.html',
  styleUrls: ['./Business.component.css'],
  providers: []
})
export class BusinessComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;



  id = new FormControl("", Validators.required);



  companyName = new FormControl("", Validators.required);



  turnOver = new FormControl("", Validators.required);



  numberOfEmployees = new FormControl("", Validators.required);



  companyRegistrationDate = new FormControl("", Validators.required);



  status = new FormControl("REGISTERED", Validators.required);




  constructor(private serviceBusiness: BusinessService, fb: FormBuilder, private _router: Router) {
    this.myForm = fb.group({


      id: this.id,



      companyName: this.companyName,



      turnOver: this.turnOver,



      numberOfEmployees: this.numberOfEmployees,



      companyRegistrationDate: this.companyRegistrationDate,



      status: this.status


    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceBusiness.getAll()
      .toPromise()
      .then((result) => {
        this.errorMessage = null;
        result.forEach(asset => {
          tempList.push(asset);
        });
        this.allAssets = tempList;
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
   * @param {String} name - the name of the asset field to update
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
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.poc.comp.Business",


      "id": this.id.value,



      "companyName": this.companyName.value,



      "turnOver": this.turnOver.value,



      "numberOfEmployees": this.numberOfEmployees.value,



      "companyRegistrationDate": this.companyRegistrationDate.value,



      "status": this.status.value


    };

    this.myForm.setValue({


      "id": null,



      "companyName": null,



      "turnOver": null,



      "numberOfEmployees": null,



      "companyRegistrationDate": null,



      "status": null


    });

    return this.serviceBusiness.addAsset(this.asset)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
        alert('User and Business Registration Request Submitted');
        this._router.navigate([]);
        this.myForm.setValue({


          "id": null,



          "companyName": null,



          "turnOver": null,



          "numberOfEmployees": null,



          "companyRegistrationDate": null,



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


  updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.poc.comp.Business",







      "companyName": this.companyName.value,





      "turnOver": this.turnOver.value,





      "numberOfEmployees": this.numberOfEmployees.value,





      "companyRegistrationDate": this.companyRegistrationDate.value,





      "status": this.status.value



    };

    return this.serviceBusiness.updateAsset(form.get("id").value, this.asset)
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


  deleteAsset(): Promise<any> {

    return this.serviceBusiness.deleteAsset(this.currentId)
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

    return this.serviceBusiness.getAsset(id)
      .toPromise()
      .then((result) => {
        this.errorMessage = null;
        let formObject = {


          "id": null,



          "companyName": null,



          "turnOver": null,



          "numberOfEmployees": null,



          "companyRegistrationDate": null,



          "status": null


        };




        if (result.id) {

          formObject.id = result.id;

        } else {
          formObject.id = null;
        }

        if (result.companyName) {

          formObject.companyName = result.companyName;

        } else {
          formObject.companyName = null;
        }

        if (result.turnOver) {

          formObject.turnOver = result.turnOver;

        } else {
          formObject.turnOver = null;
        }

        if (result.numberOfEmployees) {

          formObject.numberOfEmployees = result.numberOfEmployees;

        } else {
          formObject.numberOfEmployees = null;
        }

        if (result.companyRegistrationDate) {

          formObject.companyRegistrationDate = result.companyRegistrationDate;

        } else {
          formObject.companyRegistrationDate = null;
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



      "companyName": null,



      "turnOver": null,



      "numberOfEmployees": null,



      "companyRegistrationDate": null,



      "status": null


    });
  }

}
