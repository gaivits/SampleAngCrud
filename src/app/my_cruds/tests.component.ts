import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FullName } from './models/full-name';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  resp : any
  id =1
  Thong : string =""
  body : any
  show = true;
  new_dat : any = []
  constructor(private http:HttpClient) {}

  ngOnInit(): void {
      this.resp=this.http.get("http://localhost:3000/names").subscribe(res => this.resp=res)
  }


  onSubmits(f:NgForm)
  {
    this.id = this.resp.length++
    this.http.post("http://localhost:3000/names",{"id":this.id++,"Firstname":f.value.Firstname,"Lastname":f.value.Lastname}).subscribe(res =>res=201)
    alert("Inserted OK")
    window.location.href="http://localhost:4200/tests"
  }

  onDeletes(i:number)
  {
    this.id=i
    if(confirm("Are you sure") )
    {
      this.http.delete("http://localhost:3000/names/"+this.id).subscribe(res =>res=203)
    }
    window.location.href="http://localhost:4200/tests"
  }
  onGetById(i:number)
  {
    this.id=i
    this.http.get("http://localhost:3000/names/"+this.id).subscribe(res => this.resp=res)
    this.new_dat[0]=prompt("Enter a New-Firstname",`${this.resp[i].Firstname}`)
    this.new_dat[1]=prompt("Enter a New-Lastname",`${this.resp[i].Lastname}`)
    //toJson
    this.body = {"Firstname":this.new_dat[0]===null?this.resp[i].Firstname:this.new_dat[0],"Lastname":this.new_dat[1]===null?this.resp[i].Lastname:this.new_dat[1] }
    //endTojson
    this.http.put("http://localhost:3000/names/"+this.id,this.body).subscribe(res => 200)
    window.location.href="http://localhost:4200/tests"
  }

}
