import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.poc.comp{
   export enum Status {
      REGISTERED,
      APPROVED,
      BLACKLISTED,
   }
   export class User extends Participant {
      id: string;
      name: string;
      passportNumber: string;
      age: number;
      nationality: string;
      residentFrom: string;
      status: Status;
   }
   export class Authority extends Participant {
      id: string;
      name: string;
      department: string;
   }
   export class Business extends Asset {
      id: string;
      companyName: string;
      turnOver: string;
      numberOfEmployees: string;
      companyRegistrationDate: string;
      status: Status;
   }
   export class ApproveUser extends Transaction {
      user: User;
   }
   export class BlackListUser extends Transaction {
      user: User;
   }
   export class ApproveBusiness extends Transaction {
      business: Business;
   }
   export class BlackListBusiness extends Transaction {
      business: Business;
   }
// }
