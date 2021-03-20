import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service'

@Component({
  selector: 'app-display-order',
  templateUrl: './display-order.component.html',
  styleUrls: ['./display-order.component.css']
})
export class DisplayOrderComponent implements OnInit {

  order_list = Array()
  orderData = {}

  constructor(private _Activatedroute:ActivatedRoute, private url:OrdersService) {
    this.order_list.push(this._Activatedroute.snapshot.paramMap.get("container"));
    this.order_list.push(this._Activatedroute.snapshot.paramMap.get("no"));
    this.order_list.push(this._Activatedroute.snapshot.paramMap.get("date"));
    
    let container = this.order_list[0];
    let no = this.order_list[1];
    let date = this.order_list[2];
    
    this.url.getOrder(container, no, date).subscribe(data=>{
      this.orderData = data;
      console.log(this.orderData);
      })
   }

  ngOnInit(): void {
  }

}
