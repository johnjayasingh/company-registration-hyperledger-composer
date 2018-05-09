webpackJsonp([1,7],{

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__User_User_component__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Business_Business_component__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_module__ = __webpack_require__(464);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_3__User_User_component__["a" /* UserComponent */] },
                { path: 'company', component: __WEBPACK_IMPORTED_MODULE_4__Business_Business_component__["a" /* BusinessComponent */] },
            ])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__User_User_component__["a" /* UserComponent */], __WEBPACK_IMPORTED_MODULE_4__Business_Business_component__["a" /* BusinessComponent */]
        ]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Business_service__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessComponent; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BusinessComponent = (function () {
    function BusinessComponent(serviceBusiness, fb, _router) {
        this.serviceBusiness = serviceBusiness;
        this._router = _router;
        this.id = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.companyName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.turnOver = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.numberOfEmployees = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.companyRegistrationDate = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("REGISTERED", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.myForm = fb.group({
            id: this.id,
            companyName: this.companyName,
            turnOver: this.turnOver,
            numberOfEmployees: this.numberOfEmployees,
            companyRegistrationDate: this.companyRegistrationDate,
            status: this.status
        });
    }
    ;
    BusinessComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    BusinessComponent.prototype.loadAll = function () {
        var _this = this;
        var tempList = [];
        return this.serviceBusiness.getAll()
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            result.forEach(function (asset) {
                tempList.push(asset);
            });
            _this.allAssets = tempList;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    /**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
    BusinessComponent.prototype.changeArrayValue = function (name, value) {
        var index = this[name].value.indexOf(value);
        if (index === -1) {
            this[name].value.push(value);
        }
        else {
            this[name].value.splice(index, 1);
        }
    };
    /**
     * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
    BusinessComponent.prototype.hasArrayValue = function (name, value) {
        return this[name].value.indexOf(value) !== -1;
    };
    BusinessComponent.prototype.addAsset = function (form) {
        var _this = this;
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
            .then(function () {
            _this.errorMessage = null;
            alert('User and Business Registration Request Submitted');
            _this._router.navigate([]);
            _this.myForm.setValue({
                "id": null,
                "companyName": null,
                "turnOver": null,
                "numberOfEmployees": null,
                "companyRegistrationDate": null,
                "status": null
            });
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    BusinessComponent.prototype.updateAsset = function (form) {
        var _this = this;
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
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    BusinessComponent.prototype.deleteAsset = function () {
        var _this = this;
        return this.serviceBusiness.deleteAsset(this.currentId)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    BusinessComponent.prototype.setId = function (id) {
        this.currentId = id;
    };
    BusinessComponent.prototype.getForm = function (id) {
        var _this = this;
        return this.serviceBusiness.getAsset(id)
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            var formObject = {
                "id": null,
                "companyName": null,
                "turnOver": null,
                "numberOfEmployees": null,
                "companyRegistrationDate": null,
                "status": null
            };
            if (result.id) {
                formObject.id = result.id;
            }
            else {
                formObject.id = null;
            }
            if (result.companyName) {
                formObject.companyName = result.companyName;
            }
            else {
                formObject.companyName = null;
            }
            if (result.turnOver) {
                formObject.turnOver = result.turnOver;
            }
            else {
                formObject.turnOver = null;
            }
            if (result.numberOfEmployees) {
                formObject.numberOfEmployees = result.numberOfEmployees;
            }
            else {
                formObject.numberOfEmployees = null;
            }
            if (result.companyRegistrationDate) {
                formObject.companyRegistrationDate = result.companyRegistrationDate;
            }
            else {
                formObject.companyRegistrationDate = null;
            }
            if (result.status) {
                formObject.status = result.status;
            }
            else {
                formObject.status = null;
            }
            _this.myForm.setValue(formObject);
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    BusinessComponent.prototype.resetForm = function () {
        this.myForm.setValue({
            "id": null,
            "companyName": null,
            "turnOver": null,
            "numberOfEmployees": null,
            "companyRegistrationDate": null,
            "status": null
        });
    };
    return BusinessComponent;
}());
BusinessComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-Business',
        template: __webpack_require__(798),
        styles: [__webpack_require__(794)],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Business_service__["a" /* BusinessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Business_service__["a" /* BusinessService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BusinessComponent);

var _a, _b, _c;
//# sourceMappingURL=Business.component.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__User_service__ = __webpack_require__(463);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = (function () {
    function UserComponent(serviceUser, fb, _router) {
        this.serviceUser = serviceUser;
        this._router = _router;
        this.id = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.passportNumber = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.age = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.nationality = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.residentFrom = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("REGISTERED", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.myForm = fb.group({
            id: this.id,
            name: this.name,
            passportNumber: this.passportNumber,
            age: this.age,
            nationality: this.nationality,
            residentFrom: this.residentFrom,
            status: this.status
        });
    }
    ;
    UserComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    UserComponent.prototype.loadAll = function () {
        var _this = this;
        var tempList = [];
        return this.serviceUser.getAll()
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            result.forEach(function (participant) {
                tempList.push(participant);
            });
            _this.allParticipants = tempList;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    /**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the participant field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
    UserComponent.prototype.changeArrayValue = function (name, value) {
        var index = this[name].value.indexOf(value);
        if (index === -1) {
            this[name].value.push(value);
        }
        else {
            this[name].value.splice(index, 1);
        }
    };
    /**
     * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the participant updateDialog.
   * @param {String} name - the name of the participant field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified participant field contains the provided value
   */
    UserComponent.prototype.hasArrayValue = function (name, value) {
        return this[name].value.indexOf(value) !== -1;
    };
    UserComponent.prototype.addParticipant = function (form) {
        var _this = this;
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
            .then(function () {
            _this.errorMessage = null;
            _this._router.navigate(['User', 'company']);
            _this.myForm.setValue({
                "id": null,
                "name": null,
                "passportNumber": null,
                "age": null,
                "nationality": null,
                "residentFrom": null,
                "status": null
            });
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    UserComponent.prototype.updateParticipant = function (form) {
        var _this = this;
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
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    UserComponent.prototype.deleteParticipant = function () {
        var _this = this;
        return this.serviceUser.deleteParticipant(this.currentId)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    UserComponent.prototype.setId = function (id) {
        this.currentId = id;
    };
    UserComponent.prototype.getForm = function (id) {
        var _this = this;
        return this.serviceUser.getparticipant(id)
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            var formObject = {
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
            }
            else {
                formObject.id = null;
            }
            if (result.name) {
                formObject.name = result.name;
            }
            else {
                formObject.name = null;
            }
            if (result.passportNumber) {
                formObject.passportNumber = result.passportNumber;
            }
            else {
                formObject.passportNumber = null;
            }
            if (result.age) {
                formObject.age = result.age;
            }
            else {
                formObject.age = null;
            }
            if (result.nationality) {
                formObject.nationality = result.nationality;
            }
            else {
                formObject.nationality = null;
            }
            if (result.residentFrom) {
                formObject.residentFrom = result.residentFrom;
            }
            else {
                formObject.residentFrom = null;
            }
            if (result.status) {
                formObject.status = result.status;
            }
            else {
                formObject.status = null;
            }
            _this.myForm.setValue(formObject);
        })
            .catch(function (error) {
            if (error == 'Server error') {
                _this.errorMessage = "Could not connect to REST server. Please check your configuration details";
            }
            else if (error == '404 - Not Found') {
                _this.errorMessage = "404 - Could not find API route. Please check your available APIs.";
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    UserComponent.prototype.resetForm = function () {
        this.myForm.setValue({
            "id": null,
            "name": null,
            "passportNumber": null,
            "age": null,
            "nationality": null,
            "residentFrom": null,
            "status": null
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-User',
        template: __webpack_require__(799),
        styles: [__webpack_require__(795)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__User_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__User_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=User.component.js.map

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "/*\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n * \n * http://www.apache.org/licenses/LICENSE-2.0\n * \n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n.container {\n    width: 100%;\n    padding-left: 72px;\n    padding-right: 72px;\n}\n\n.btn-primary {\n    background: #844AE4;\n    border-radius: 4px;\n    border: 0px;\n    font-size: 14px;\n    color: #FFFFFF;\n    letter-spacing: 0;\n    line-height: 10px;\n    height: 40px;\n    width: 153px;\n    float: right;\n    margin-top: 5%;\n}\n\n.table > thead > tr > th {\n    border-bottom: 1px solid #EAEAEA;\n}\n\n.table > thead > tr > th.info {\n    background: #FFF;\n}\n.modal-title {\n    font-family: inherit;\n    font-size: 24px;\n    color: #4E4E4E;\n    letter-spacing: 0.28px;\n    line-height: 28px;\n    padding-top: 15px;\n}\n.modal-intro {\n    font-family: inherit;\n    font-size: 14px;\n    color: #545454;\n    line-height: 20px;\n    padding-top: 15px;\n\n}\n.modal-header{\n    background: #F4F4F4;\n    border-radius: 5px;\n    border-bottom: 1px solid #F4F4F4;\n}\n.modal-body{\n    background: #F4F4F4;\n    border-radius: 5px;\n}\n.modal-footer{\n    background: #F4F4F4;\n    border-radius: 5px;\n    border-top: 1px solid #f4f4f4\n}\n.form-control{\n    color: #393939;\n    height: 42px;\n    border: 1px solid #ffffff;\n    box-shadow: inset 0 0px 0px rgba(0,0,0,.075); \n    border-radius: 4px;\n    resize: none;\n\n}\nlabel {\n    color: #545454;\n}\n.modal-content{\n    margin-top: 15%;\n    margin-bottom: 15%;\n    box-shadow: 0 0px 0px;\n    border: 0px;\n\n}\n.btn-default {\n    color: #844EF4;\n    background-color: #ffffff;\n    border-color: #844EF4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-danger{\n    color: #ffffff;\n    background-color: #844AE4;\n    border-color: #844AE4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-danger:focus{\n    background-color: #4D21A8;\n    border-color: #4D21A8;\n}\n.btn-success {\n    color: #ffffff;\n    background-color: #844AE4;\n    border-color: #844AE4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-success:focus{\n    background-color: #4D21A8;\n    border-color: #4D21A8;\n}\n.btn-default:focus{\n    background-color: #fff;\n    border-color: #4d21a8;  \n    color: #4d21a8;      \n}\n.asset-title{\n    font-family: inherit;\n    font-size: 24px;\n    color: #4E4E4E;\n    letter-spacing: 0.28px;\n    line-height: 28px;\n}\n.info{\n    font-family: inherit;\n    font-size: 14px;\n    color: #343C41;\n    letter-spacing: 0.2px;\n    line-height: 24px;\n}\n.info-actions{\n    font-family: inherit;\n    font-size: 14px;\n    color: #343C41;\n    letter-spacing: 0.2px;\n    line-height: 24px;\n    padding-left: 24px;\n}\n.asset-properties{\n    font-family: inherit;\n    font-size: 14px;\n    color: #848484;\n    line-height: 42px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 250px;\n}\n.plus-svg{\n    color: #fff;\n    fill: currentColor;\n}\n\n/***.asset-properties:hover, .asset-properties:hover span{  \noverflow: visible;\nposition: relative;\n make readable design \nbackground-color: #FFFFFF;\nborder: 1px solid #FFFFFF;\nborder-radius: 4px;\npadding: 3px;\n/* compensate padding and border size to avoid jerking \nmargin-left: -4px;\n}\n***/\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "/*\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n * \n * http://www.apache.org/licenses/LICENSE-2.0\n * \n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n.container {\n    width: 100%;\n    padding-left: 72px;\n    padding-right: 72px;\n}\n\n.btn-primary {\n    background: #844AE4;\n    border-radius: 4px;\n    border: 0px;\n    font-size: 14px;\n    color: #FFFFFF;\n    letter-spacing: 0;\n    line-height: 10px;\n    height: 40px;\n    width: 163px;\n    float: right;\n    margin-top: 5%;\n}\n\n.table > thead > tr > th {\n    border-bottom: 1px solid #EAEAEA;\n}\n\n.table > thead > tr > th.info {\n    background: #FFF;\n}\n.modal-title {\n    font-family: inherit;\n    font-size: 24px;\n    color: #4E4E4E;\n    letter-spacing: 0.28px;\n    line-height: 28px;\n    padding-top: 15px;\n}\n.modal-intro {\n    font-family: inherit;\n    font-size: 14px;\n    color: #545454;\n    line-height: 20px;\n    padding-top: 15px;\n\n}\n.modal-header{\n    background: #F4F4F4;\n    border-radius: 5px;\n    border-bottom: 1px solid #F4F4F4;\n}\n.modal-body{\n    background: #F4F4F4;\n    border-radius: 5px;\n}\n.modal-footer{\n    background: #F4F4F4;\n    border-radius: 5px;\n    border-top: 1px solid #f4f4f4\n}\n.form-control{\n    color: #393939;\n    height: 42px;\n    border: 1px solid #ffffff;\n    box-shadow: inset 0 0px 0px rgba(0,0,0,.075); \n    border-radius: 4px;\n    resize: none;\n\n}\nlabel {\n    color: #545454;\n}\n.modal-content{\n    margin-top: 15%;\n    margin-bottom: 15%;\n    box-shadow: 0 0px 0px;\n    border: 0px;\n\n}\n.btn-default {\n    color: #844EF4;\n    background-color: #ffffff;\n    border-color: #844EF4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-danger{\n    color: #ffffff;\n    background-color: #844AE4;\n    border-color: #844AE4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-danger:focus{\n    background-color: #4D21A8;\n    border-color: #4D21A8;\n}\n.btn-success {\n    color: #ffffff;\n    background-color: #844AE4;\n    border-color: #844AE4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-success:focus{\n    background-color: #4D21A8;\n    border-color: #4D21A8;\n}\n.btn-default:focus{\n    background-color: #fff;\n    border-color: #4d21a8;  \n    color: #4d21a8;      \n}\n.participant-title{\n    font-family: inherit;\n    font-size: 24px;\n    color: #4E4E4E;\n    letter-spacing: 0.28px;\n    line-height: 28px;\n}\n.info{\n    font-family: inherit;\n    font-size: 14px;\n    color: #343C41;\n    letter-spacing: 0.2px;\n    line-height: 24px;\n}\n.info-actions{\n    font-family: inherit;\n    font-size: 14px;\n    color: #343C41;\n    letter-spacing: 0.2px;\n    line-height: 24px;\n    padding-left: 24px;\n}\n.participant-properties{\n    font-family: inherit;\n    font-size: 14px;\n    color: #848484;\n    line-height: 42px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 250px;\n}\n.plus-svg{\n    color: #fff;\n    fill: currentColor;\n}\n\n/***.participant-properties:hover, .participant-properties:hover span{  \noverflow: visible;\nposition: relative;\n make readable design \nbackground-color: #FFFFFF;\nborder: 1px solid #FFFFFF;\nborder-radius: 4px;\npadding: 3px;\n/* compensate padding and border size to avoid jerking \nmargin-left: -4px;\n}\n***/\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = "<h3>Business Registration</h3>\n<form [formGroup]=\"myForm\">\n  <div class=\"modal-body\">\n    <div class=\"form-group text-left\">\n      <label for=\"id\">Comapny ID</label>\n      <input formControlName=\"id\" type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"form-group text-left\">\n      <label for=\"companyName\">Company Name</label>\n      <input formControlName=\"companyName\" type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"form-group text-left\">\n      <label for=\"turnOver\">Turn Over</label>\n      <input formControlName=\"turnOver\" type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"form-group text-left\">\n      <label for=\"numberOfEmployees\">Number Of Employees</label>\n      <input formControlName=\"numberOfEmployees\" type=\"number\" class=\"form-control\">\n    </div>\n    <div class=\"form-group text-left\">\n      <label for=\"companyRegistrationDate\">Company Registration Date</label>\n      <input formControlName=\"companyRegistrationDate\" type=\"date\" class=\"form-control\">\n    </div>\n    \n\n\n\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n    <button (click)=\"addAsset(myForm);\" type=\"button\" class=\"btn btn-success\" value=\"Refresh Page\" \n      data-dismiss=\"modal\">Confirm</button>\n\n  </div>\n</form>"

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

module.exports = "<h3>User Registration</h3>\n<form [formGroup]=\"myForm\">\n  <div class=\"modal-body\">\n    <div class=\"form-group text-left\">\n      <label for=\"id\">User Identity Number</label>\n      <input formControlName=\"id\" type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"form-group text-left\">\n      <label for=\"name\">Full Name</label>\n      <input formControlName=\"name\" type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"form-group text-left\">\n      <label for=\"passportNumber\">Passport Number</label>\n      <input formControlName=\"passportNumber\" type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"form-group text-left\">\n      <label for=\"age\">Age</label>\n      <input formControlName=\"age\" type=\"number\" class=\"form-control\">\n    </div>\n    <div class=\"form-group text-left\">\n      <label for=\"nationality\">Nationality</label>\n      <input formControlName=\"nationality\" type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"form-group text-left\">\n      <label for=\"residentFrom\">Resident From</label>\n      <input formControlName=\"residentFrom\" type=\"date\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n    <button (click)=\"addParticipant(myForm);\" type=\"button\" class=\"btn btn-success\" value=\"Refresh Page\"\n      data-dismiss=\"modal\">Create</button>\n  </div>\n</form>"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map