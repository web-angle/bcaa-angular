import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service'

@Component({
  selector: 'app-updated',
  templateUrl: './updated.component.html',
  styleUrls: ['./updated.component.css']
})
export class UpdatedComponent implements OnInit {

  ordersList = Array()
  hasOrders:boolean = true

  constructor(private url:OrdersService) {
    // get data from API
    this.url.getUpdatedOrders().subscribe(data=>{
    this.ordersList.push(data);
    console.log(this.ordersList[0]);
    if (this.ordersList[0].length == 0){
      this.hasOrders = false
    };

    // console.log(data);
    })
}

  ngOnInit(): void {
  }

}
