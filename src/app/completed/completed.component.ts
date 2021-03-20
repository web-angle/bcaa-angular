import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})

export class CompletedComponent implements OnInit {

  ordersList = Array()

  constructor(private url:OrdersService) {
      // get data from API
      this.url.getCompletedOrders().subscribe(data=>{
      this.ordersList.push(data);
     })
    }

  ngOnInit(): void {
  }

}
