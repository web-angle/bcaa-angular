import { Component } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularBCAA';
  ordersList = Array()

  constructor(private url:OrdersService) {
      // get data from API
      this.url.getNewOrders().subscribe(data=>{
      this.ordersList.push(data);
      })
      // console.log(this.url.getAPIData())
  }

}
 