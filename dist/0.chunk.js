webpackJsonp([0,7],{

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_manage_user_manage_component__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_module__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__business_manage_business_manage_component__ = __webpack_require__(792);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorityModule", function() { return AuthorityModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthorityModule = (function () {
    function AuthorityModule() {
    }
    return AuthorityModule;
}());
AuthorityModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__user_manage_user_manage_component__["a" /* UserManageComponent */] },
                { path: 'business', component: __WEBPACK_IMPORTED_MODULE_5__business_manage_business_manage_component__["a" /* BusinessManageComponent */] },
            ])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__user_manage_user_manage_component__["a" /* UserManageComponent */], __WEBPACK_IMPORTED_MODULE_5__business_manage_business_manage_component__["a" /* BusinessManageComponent */]]
    })
], AuthorityModule);

//# sourceMappingURL=authority.module.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Business_Business_service__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessManageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BusinessManageComponent = (function () {
    function BusinessManageComponent(serviceBusiness, fb, router) {
        this.serviceBusiness = serviceBusiness;
        this.router = router;
        this.history = [];
        this.id = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.companyName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.turnOver = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.numberOfEmployees = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.companyRegistrationDate = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
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
    BusinessManageComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    BusinessManageComponent.prototype.manageUsers = function () {
        this.router.navigate(['Authority']);
    };
    BusinessManageComponent.prototype.loadAll = function () {
        var _this = this;
        var tempList = [];
        this.serviceBusiness
            .getAllHistory()
            .subscribe(function (data) {
            _this.history = data;
        });
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
    BusinessManageComponent.prototype.changeArrayValue = function (name, value) {
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
    BusinessManageComponent.prototype.hasArrayValue = function (name, value) {
        return this[name].value.indexOf(value) !== -1;
    };
    BusinessManageComponent.prototype.addAsset = function (form) {
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
    BusinessManageComponent.prototype.updateAsset = function (form) {
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
    BusinessManageComponent.prototype.deleteAsset = function () {
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
    BusinessManageComponent.prototype.setId = function (id) {
        this.currentId = id;
    };
    BusinessManageComponent.prototype.getForm = function (id) {
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
    BusinessManageComponent.prototype.resetForm = function () {
        this.myForm.setValue({
            "id": null,
            "companyName": null,
            "turnOver": null,
            "numberOfEmployees": null,
            "companyRegistrationDate": null,
            "status": null
        });
    };
    return BusinessManageComponent;
}());
BusinessManageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-business-manage',
        template: __webpack_require__(800),
        styles: [__webpack_require__(796)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__Business_Business_service__["a" /* BusinessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Business_Business_service__["a" /* BusinessService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BusinessManageComponent);

var _a, _b, _c;
//# sourceMappingURL=business-manage.component.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__User_User_service__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserManageComponent = (function () {
    function UserManageComponent(serviceUser, fb, router) {
        this.serviceUser = serviceUser;
        this.router = router;
        this.id = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.passportNumber = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.age = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.nationality = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.residentFrom = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required);
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
    UserManageComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    UserManageComponent.prototype.manageBusiness = function () {
        this.router.navigate(['Authority', 'business']);
    };
    UserManageComponent.prototype.loadAll = function () {
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
    UserManageComponent.prototype.changeArrayValue = function (name, value) {
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
    UserManageComponent.prototype.hasArrayValue = function (name, value) {
        return this[name].value.indexOf(value) !== -1;
    };
    UserManageComponent.prototype.addParticipant = function (form) {
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
    UserManageComponent.prototype.updateParticipant = function (form) {
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
    UserManageComponent.prototype.deleteParticipant = function () {
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
    UserManageComponent.prototype.setId = function (id) {
        this.currentId = id;
    };
    UserManageComponent.prototype.getForm = function (id) {
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
    UserManageComponent.prototype.resetForm = function () {
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
    return UserManageComponent;
}());
UserManageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-user-manage',
        template: __webpack_require__(801),
        styles: [__webpack_require__(797)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__User_User_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__User_User_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserManageComponent);

var _a, _b, _c;
//# sourceMappingURL=user-manage.component.js.map

/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

module.exports = "<!--\n Licensed under the Apache License, Version 2.0 (the \"License\");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n-->\n<div class=\"modal fade\" id=\"addAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h4 class=\"modal-title\" id=\"addAssetModalLabel\">Create asset</h4>\n        <p class=\"modal-intro\">Enter the required values below.</p>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n\n\n\n          <div class=\"form-group text-left\">\n            <label for=\"id\">id</label>\n\n            <input formControlName=\"id\" type=\"text\" class=\"form-control\">\n\n          </div>\n\n\n\n\n          <div class=\"form-group text-left\">\n            <label for=\"companyName\">companyName</label>\n\n            <input formControlName=\"companyName\" type=\"text\" class=\"form-control\">\n\n          </div>\n\n\n\n\n          <div class=\"form-group text-left\">\n            <label for=\"turnOver\">turnOver</label>\n\n            <input formControlName=\"turnOver\" type=\"text\" class=\"form-control\">\n\n          </div>\n\n\n\n\n          <div class=\"form-group text-left\">\n            <label for=\"numberOfEmployees\">numberOfEmployees</label>\n\n            <input formControlName=\"numberOfEmployees\" type=\"text\" class=\"form-control\">\n\n          </div>\n\n\n\n\n          <div class=\"form-group text-left\">\n            <label for=\"companyRegistrationDate\">companyRegistrationDate</label>\n\n            <input formControlName=\"companyRegistrationDate\" type=\"text\" class=\"form-control\">\n\n          </div>\n\n\n\n\n          <label for=\"status\">status</label>\n          <div class=\"checkbox\">\n\n            <label>\n              <input formControlName=\"status\" name=\"status\" value=\"REGISTERED\" type=\"radio\" /> REGISTERED\n            </label>\n\n            <label>\n              <input formControlName=\"status\" name=\"status\" value=\"APPROVED\" type=\"radio\" /> APPROVED\n            </label>\n\n            <label>\n              <input formControlName=\"status\" name=\"status\" value=\"BLACKLISTED\" type=\"radio\" /> BLACKLISTED\n            </label>\n\n          </div>\n\n\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n          <button (click)=\"addAsset(myForm);\" type=\"submit\" class=\"btn btn-success\" value=\"Refresh Page\" onClick=\"setTimeout(window.location.reload.bind(window.location), 2000);\"\n            data-dismiss=\"modal\">Confirm</button>\n\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"modal fade\" id=\"updateAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h4 class=\"modal-title\" id=\"updateAssetModalLabel\">Update Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n\n          <div class=\"form-group text-left\">\n            <label for=\"id\">id</label>\n\n\n            <input [ngModel]=\"id\" formControlName=\"id\" class=\"form-control\" disabled=\"disabled\">\n\n\n          </div>\n\n          <div class=\"form-group text-left\">\n            <label for=\"companyName\">companyName</label>\n\n\n            <input [ngModel]=\"companyName\" formControlName=\"companyName\" type=\"text\" class=\"form-control\">\n\n\n          </div>\n\n          <div class=\"form-group text-left\">\n            <label for=\"turnOver\">turnOver</label>\n\n\n            <input [ngModel]=\"turnOver\" formControlName=\"turnOver\" type=\"text\" class=\"form-control\">\n\n\n          </div>\n\n          <div class=\"form-group text-left\">\n            <label for=\"numberOfEmployees\">numberOfEmployees</label>\n\n\n            <input [ngModel]=\"numberOfEmployees\" formControlName=\"numberOfEmployees\" type=\"text\" class=\"form-control\">\n\n\n          </div>\n\n          <div class=\"form-group text-left\">\n            <label for=\"companyRegistrationDate\">companyRegistrationDate</label>\n\n\n            <input [ngModel]=\"companyRegistrationDate\" formControlName=\"companyRegistrationDate\" type=\"text\" class=\"form-control\">\n\n\n          </div>\n\n          <div class=\"form-group text-left\">\n            <label for=\"status\">status</label>\n\n\n\n            <div class=\"row\">\n              <div class=\"col-xs-12 checkbox\">\n\n                <label>\n                  <input formControlName=\"status\" [ngModel]=\"status\" name=\"status\" value=\"REGISTERED\" type=\"radio\" /> REGISTERED\n                </label>\n\n                <label>\n                  <input formControlName=\"status\" [ngModel]=\"status\" name=\"status\" value=\"APPROVED\" type=\"radio\" /> APPROVED\n                </label>\n\n                <label>\n                  <input formControlName=\"status\" [ngModel]=\"status\" name=\"status\" value=\"BLACKLISTED\" type=\"radio\" /> BLACKLISTED\n                </label>\n\n              </div>\n            </div>\n\n\n\n          </div>\n\n\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          <button (click)=\"updateAsset(myForm)\" type=\"submit\" class=\"btn btn-success\" value=\"Refresh Page\" onClick=\"setTimeout(window.location.reload.bind(window.location), 2000);\"\n            data-dismiss=\"modal\">Submit</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"deleteAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h4 class=\"modal-title\" id=\"deleteAssetModalLabel\">Delete Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"deleteAsset()\">\n        <div class=\"modal-body\">\n          Are you sure you want to delete this asset?\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n          <button (click)=\"deleteAsset()\" type=\"submit\" class=\"btn btn-danger\" value=\"Refresh Page\" onClick=\"setTimeout(window.location.reload.bind(window.location), 2000);\"\n            data-dismiss=\"modal\">Yes</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"container\">\n  <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\n    <strong>Error:</strong> {{errorMessage}}\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-9\">\n      <h1 class=\"asset-title\" id='assetName'>Business</h1>\n    </div>\n    <div class=\"col-md-3\">\n      <button (click)=\"manageUsers()\" type=\"button\" class=\"btn btn-primary\">\n        Manage Users\n      </button>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-responsive\">\n        <thead class=\"thead\">\n          <tr class=\"thead-cols\">\n\n            <th class=\"info\">id</th>\n\n            <th class=\"info\">companyName</th>\n\n            <th class=\"info\">turnOver</th>\n\n            <th class=\"info\">numberOfEmployees</th>\n\n            <th class=\"info\">companyRegistrationDate</th>\n\n            <th class=\"info\">status</th>\n\n            <th class=\"info-actions\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let asset of allAssets\">\n\n\n            <td class=\"asset-properties\">{{asset.id}}</td>\n\n            <td class=\"asset-properties\">{{asset.companyName}}</td>\n\n            <td class=\"asset-properties\">{{asset.turnOver}}</td>\n\n            <td class=\"asset-properties\">{{asset.numberOfEmployees}}</td>\n\n            <td class=\"asset-properties\">{{asset.companyRegistrationDate}}</td>\n\n            <td class=\"asset-properties\">{{asset.status}}</td>\n\n            <td>\n              <button (click)=\"getForm(asset.id);\" type=\"button\" class=\"btn btn-update\" data-toggle=\"modal\" data-target=\"#updateAssetModal\">\n                <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                  width=\"12.8px\" height=\"12.8px\" viewBox=\"0 0 30.7 30.7\" style=\"enable-background:new 0 0 30.7 30.7;\" xml:space=\"preserve\">\n                  <g>\n                    <path d=\"M1.5,30.7c0.1,0,0.2,0,0.4,0l5.9-1.5c0.8-0.2,1.3-1,1.1-1.8c-0.2-0.8-1-1.3-1.8-1.1l-3.6,0.9l0.8-3.8\n                   c0.2-0.8-0.4-1.6-1.2-1.8c-0.8-0.2-1.6,0.4-1.8,1.2L0,28.9c-0.1,0.5,0.1,1,0.4,1.4C0.7,30.6,1.1,30.7,1.5,30.7z\"\n                    />\n                    <path d=\"M10.4,25.2c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.4L30.3,7.5c0.6-0.6,0.6-1.5,0-2.1l-4.9-4.9\n                   C25.1,0.2,24.7,0,24.3,0c-0.4,0-0.8,0.2-1.1,0.4L5.5,18.2c-0.3,0.3-0.4,0.7-0.4,1.1s0.2,0.8,0.4,1.1L10.4,25.2z M24.3,3.6l2.8,2.8\n                   L11.5,22l-2.8-2.8L24.3,3.6z\" />\n                  </g>\n                </svg>\n              </button>\n\n              <button (click)=\"setId(asset.id);\" type=\"button\" class=\"btn btn-delete\" data-toggle=\"modal\" data-target=\"#deleteAssetModal\">\n                <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                  width=\"13.8px\" height=\"16px\" viewBox=\"0 0 65.9 76.2\" style=\"enable-background:new 0 0 65.9 76.2;\" xml:space=\"preserve\">\n                  <path d=\"M42.8,60.2V22.6c0-1.7-1.3-3-3-3s-3,1.3-3,3v37.6c0,1.7,1.3,3,3,3S42.8,61.9,42.8,60.2z M29.1,60.2V22.6c0-1.7-1.3-3-3-3\n                 s-3,1.3-3,3v37.6c0,1.7,1.3,3,3,3S29.1,61.9,29.1,60.2z M56.2,19.6c-1.7,0-3,1.3-3,3V68c0,1.2-1,2.2-2.2,2.2H14.9\n                 c-1.2,0-2.2-1-2.2-2.2V22.6c0-1.7-1.3-3-3-3s-3,1.3-3,3V68c0,4.5,3.7,8.2,8.2,8.2H51c4.5,0,8.2-3.7,8.2-8.2V22.6\n                 C59.2,21,57.9,19.6,56.2,19.6z M62.9,10.3H49.3V3c0-1.7-1.3-3-3-3H19.6c-1.7,0-3,1.3-3,3v7.3H3c-1.7,0-3,1.3-3,3s1.3,3,3,3h59.9\n                 c1.7,0,3-1.3,3-3S64.5,10.3,62.9,10.3z M43.3,10.3H22.6V6h20.7L43.3,10.3L43.3,10.3z\" />\n                </svg>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<div class=\"jumbotron  container\">\n  <h4>Transaction Ledger</h4>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let item of history\" class=\"list-group-item d-flex justify-content-between align-items-center\">\n      <div>\n        <b> Transaction ID:</b>\n        <i> {{ item?.transactionId }}</i>\n        <br>\n        <b> Transaction Invoked:</b>\n        <i> {{ item?.transactionInvoked }}</i>\n        <br>\n        <b> Invoked By:</b>\n        <i> {{ item?.participantInvoking }}</i>\n        <br>\n        <b> Transaction Time:</b>\n        <i> {{ item?.transactionTimestamp }}</i>\n        <br>\n      </div>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

module.exports = "<!--\n Licensed under the Apache License, Version 2.0 (the \"License\");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n-->\n<div class=\"modal fade\" id=\"addParticipantModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addParticipantModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"addParticipantModalLabel\">Create participant</h4>\n          <p class=\"modal-intro\">Enter the required values below.</p>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"id\">id</label>\n                \n                  <input formControlName=\"id\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"name\">name</label>\n                \n                  <input formControlName=\"name\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"passportNumber\">passportNumber</label>\n                \n                  <input formControlName=\"passportNumber\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"age\">age</label>\n                \n                  <input formControlName=\"age\" type=\"number\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"nationality\">nationality</label>\n                \n                  <input formControlName=\"nationality\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"residentFrom\">residentFrom</label>\n                \n                  <input formControlName=\"residentFrom\" type=\"text\" class=\"form-control\">\n                \n              </div>\n            \n          \n\n            \n              <label for=\"status\">status</label>\n              <div class=\"checkbox\">\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"status\"\n                      \n                      name=\"status\"\n                      value=\"REGISTERED\"\n                      type=\"radio\"\n                      \n                    />\n                    REGISTERED\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"status\"\n                      \n                      name=\"status\"\n                      value=\"APPROVED\"\n                      type=\"radio\"\n                      \n                    />\n                    APPROVED\n                  </label>\n                \n                  <label>\n                    <input\n                      \n                        formControlName=\"status\"\n                      \n                      name=\"status\"\n                      value=\"BLACKLISTED\"\n                      type=\"radio\"\n                      \n                    />\n                    BLACKLISTED\n                  </label>\n                \n              </div>\n            \n          \n\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n          <button (click)=\"addParticipant(myForm);\" type=\"submit\" class=\"btn btn-success\" value=\"Refresh Page\" onClick=\"setTimeout(window.location.reload.bind(window.location), 2000);\" data-dismiss=\"modal\">Confirm</button>\n\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"modal fade\" id=\"updateParticipantModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateParticipantModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"updateParticipantModalLabel\">Update Participant</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n          \n            <div class=\"form-group text-left\">\n              <label for=\"id\">id</label>\n\n              \n                <input [ngModel]=\"id\" formControlName=\"id\" class=\"form-control\" disabled=\"disabled\">  \n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"name\">name</label>\n\n              \n                <input [ngModel]=\"name\"formControlName=\"name\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"passportNumber\">passportNumber</label>\n\n              \n                <input [ngModel]=\"passportNumber\"formControlName=\"passportNumber\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"age\">age</label>\n\n              \n                <input [ngModel]=\"age\" formControlName=\"age\" type=\"number\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"nationality\">nationality</label>\n\n              \n                <input [ngModel]=\"nationality\"formControlName=\"nationality\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"residentFrom\">residentFrom</label>\n\n              \n                <input [ngModel]=\"residentFrom\"formControlName=\"residentFrom\" type=\"text\" class=\"form-control\">\n              \n\n            </div>\n          \n            <div class=\"form-group text-left\">\n              <label for=\"status\">status</label>\n\n              \n                \n                  <div class=\"row\">\n                    <div class=\"col-xs-12 checkbox\">\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"status\"\n                            [ngModel]=\"status\"\n                          \n                          name=\"status\"\n                          value=\"REGISTERED\"\n                          type=\"radio\"\n                          \n                        />\n                        REGISTERED\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"status\"\n                            [ngModel]=\"status\"\n                          \n                          name=\"status\"\n                          value=\"APPROVED\"\n                          type=\"radio\"\n                          \n                        />\n                        APPROVED\n                      </label>\n                    \n                      <label>\n                        <input\n                          \n                            formControlName=\"status\"\n                            [ngModel]=\"status\"\n                          \n                          name=\"status\"\n                          value=\"BLACKLISTED\"\n                          type=\"radio\"\n                          \n                        />\n                        BLACKLISTED\n                      </label>\n                    \n                    </div>\n                  </div>\n                \n              \n\n            </div>\n          \n\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          <button (click)=\"updateParticipant(myForm)\" type=\"submit\" class=\"btn btn-success\" value=\"Refresh Page\" onClick=\"setTimeout(window.location.reload.bind(window.location), 2000);\" data-dismiss=\"modal\">Submit</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"deleteParticipantModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteParticipantModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"deleteParticipantModalLabel\">Delete Participant</h4>\n      </div>\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"deleteParticipant()\">\n        <div class=\"modal-body\">\n          Are you sure you want to delete this participant?\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n          <button (click)=\"deleteParticipant()\" type=\"submit\" class=\"btn btn-danger\" value=\"Refresh Page\" onClick=\"setTimeout(window.location.reload.bind(window.location), 2000);\" data-dismiss=\"modal\">Yes</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"container\">\n    <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\n        <strong>Error:</strong> {{errorMessage}}\n    </div>\n  \n  <div class=\"row\">\n    <div class=\"col-md-9\">\n        <h1 class=\"participant-title\" id='participantName'>User</h1>\n    </div>\n    <div class=\"col-md-3\">\n      <button (click)=\"manageBusiness()\" type=\"button\" class=\"btn btn-primary\" >\n        Manage Business\n      </button>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-responsive\">\n        <thead class=\"thead\">\n          <tr class=\"thead-cols\">\n            \n                <th class=\"info\">id</th>\n            \n                <th class=\"info\">name</th>\n            \n                <th class=\"info\">passportNumber</th>\n            \n                <th class=\"info\">age</th>\n            \n                <th class=\"info\">nationality</th>\n            \n                <th class=\"info\">residentFrom</th>\n            \n                <th class=\"info\">status</th>\n            \n              <th class=\"info-actions\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let participant of allParticipants\">\n\n            \n                <td class=\"participant-properties\">{{participant.id}}</td>\n            \n                <td class=\"participant-properties\">{{participant.name}}</td>\n            \n                <td class=\"participant-properties\">{{participant.passportNumber}}</td>\n            \n                <td class=\"participant-properties\">{{participant.age}}</td>\n            \n                <td class=\"participant-properties\">{{participant.nationality}}</td>\n            \n                <td class=\"participant-properties\">{{participant.residentFrom}}</td>\n            \n                <td class=\"participant-properties\">{{participant.status}}</td>\n            \n            <td>\n              <button (click)=\"getForm(participant.id);\" type=\"button\" class=\"btn btn-update\" data-toggle=\"modal\" data-target=\"#updateParticipantModal\">\n                  <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                  width=\"12.8px\" height=\"12.8px\" viewBox=\"0 0 30.7 30.7\" style=\"enable-background:new 0 0 30.7 30.7;\" xml:space=\"preserve\">\n               <g>\n                 <path d=\"M1.5,30.7c0.1,0,0.2,0,0.4,0l5.9-1.5c0.8-0.2,1.3-1,1.1-1.8c-0.2-0.8-1-1.3-1.8-1.1l-3.6,0.9l0.8-3.8\n                   c0.2-0.8-0.4-1.6-1.2-1.8c-0.8-0.2-1.6,0.4-1.8,1.2L0,28.9c-0.1,0.5,0.1,1,0.4,1.4C0.7,30.6,1.1,30.7,1.5,30.7z\"/>\n                 <path d=\"M10.4,25.2c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.4L30.3,7.5c0.6-0.6,0.6-1.5,0-2.1l-4.9-4.9\n                   C25.1,0.2,24.7,0,24.3,0c-0.4,0-0.8,0.2-1.1,0.4L5.5,18.2c-0.3,0.3-0.4,0.7-0.4,1.1s0.2,0.8,0.4,1.1L10.4,25.2z M24.3,3.6l2.8,2.8\n                   L11.5,22l-2.8-2.8L24.3,3.6z\"/>\n               </g>\n               </svg>\n              </button>\n\n              <button (click)=\"setId(participant.id);\" type=\"button\" class=\"btn btn-delete\" data-toggle=\"modal\" data-target=\"#deleteParticipantModal\">\n                  <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                  width=\"13.8px\" height=\"16px\" viewBox=\"0 0 65.9 76.2\" style=\"enable-background:new 0 0 65.9 76.2;\" xml:space=\"preserve\">\n               <path d=\"M42.8,60.2V22.6c0-1.7-1.3-3-3-3s-3,1.3-3,3v37.6c0,1.7,1.3,3,3,3S42.8,61.9,42.8,60.2z M29.1,60.2V22.6c0-1.7-1.3-3-3-3\n                 s-3,1.3-3,3v37.6c0,1.7,1.3,3,3,3S29.1,61.9,29.1,60.2z M56.2,19.6c-1.7,0-3,1.3-3,3V68c0,1.2-1,2.2-2.2,2.2H14.9\n                 c-1.2,0-2.2-1-2.2-2.2V22.6c0-1.7-1.3-3-3-3s-3,1.3-3,3V68c0,4.5,3.7,8.2,8.2,8.2H51c4.5,0,8.2-3.7,8.2-8.2V22.6\n                 C59.2,21,57.9,19.6,56.2,19.6z M62.9,10.3H49.3V3c0-1.7-1.3-3-3-3H19.6c-1.7,0-3,1.3-3,3v7.3H3c-1.7,0-3,1.3-3,3s1.3,3,3,3h59.9\n                 c1.7,0,3-1.3,3-3S64.5,10.3,62.9,10.3z M43.3,10.3H22.6V6h20.7L43.3,10.3L43.3,10.3z\"/>\n               </svg>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map