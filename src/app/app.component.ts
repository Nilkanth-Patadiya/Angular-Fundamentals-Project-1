import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  empno: number = 1234;
  empname: string = "Nilkanth";
  empage: number = 21;
  empsal: number = 12345;
  alignment: string = 'center';

  num1: number;
  num2: number;
  resl: number;

  isPrime: boolean = true;

  marks = [12, 13, 14, 88, 99];

  dayn: number;
  applymydivcls: boolean = true;
  mycol: string = 'darkorchid';


  isprs: boolean = true;
  mybg: string;
  siz: number = 19;

  Employee = [
  { "empno": 1231, "empname": "Thangaraj S", "age": 44, "salary": 34567.7734 },
  { "empno": 1232, "empname": "Rahul Ghali", "age": 55, "salary": 12345.6698 },
  { "empno": 1233, "empname": "Sindhu Nambiar", "age": 66, "salary": 34343.9967 },
  { "empno": 1234, "empname": "Yadavi N Swamy", "age": 77, "salary": 23232.4456 },
  { "empno": 1235, "empname": "Varun Raghav", "age": 33, "salary": 25356.8832 },
  { "empno": 1236, "empname": "Virat Kohli", "age": 22, "salary": 23311.5455 },
  { "empno": 1237, "empname": "Bhagya", "age": 66, "salary": 34343.9967 },
  { "empno": 1238, "empname": "Snigdha", "age": 77, "salary": 23232.4456 },
  { "empno": 1239, "empname": "Karthik", "age": 33, "salary": 25356.8832 },
  { "empno": 1240, "empname": "Venkat", "age": 22, "salary": 23311.5455 }]
  
  convtou() {
    this.empname = this.empname.toUpperCase();
  }

  
  hidesal() {
    this.isprs = !(this.isprs);
  }
  inc() {
    this.siz += 5;
  }
  dec() {
    this.siz -= 5;
  }

  
  add() {
    this.resl = this.num1 + this.num2;
  }
  sub() {
    this.resl = this.num1 - this.num2;
  }
  mult() {
    this.resl = this.num1 * this.num2;
  }
  divd() {
    this.resl = this.num1 / this.num2;
  }
}
