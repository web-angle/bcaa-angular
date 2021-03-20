import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  ordersList = Array()
  // totalRecords:Number 
  page:string = "1";

  handlePageChange(event:any) {
    this.page = event.toString();
  }
  constructor(private url:OrdersService) {
      // get data from API
      this.url.getNewOrders().subscribe(data=>{
      this.ordersList.push(data);
      // console.log(this.ordersList[0]);
      // this.totalRecords = this.ordersList[0].length;
      // console.log(this.totalRecords);
      })

  }

  ngOnInit(): void {
  }

  displayNext(){
    console.log(this);
  }
}
