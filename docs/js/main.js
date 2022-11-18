
 "use strict";

 import { Person } from "./model/person.js";
 import { Employee } from "./model/employee.js";
 
 (function() {
     
     const people = [
         new Person("Ana Smith", new Date(1998, 11, 15)),
         new Person("Bob Jones", new Date(1945, 10, 16)),
         new Person("Carlos Slim Helu", new Date(1976, 8, 24))
     ];
 
     
     for(const person of people) {
         console.log(person.toString());
     }
 

 
     console.log("----------------------For Employee-----------------")
     const emp1 = new Employee("Jim Hanson", null, 245990.00, null);
     emp1.doJob("Software Engineer");
 
     
     
 
 })();