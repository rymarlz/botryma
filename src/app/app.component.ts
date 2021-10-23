import { Component, OnInit } from '@angular/core';
import { Ema } from './trading/ema';
import { TradingService } from './trading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trading';
  emas!: Ema[];


    constructor(private tradingService:TradingService){}

    ngOnInit(){
      this.getEma21();
    }

    getEma21(){
      console.log('entro')
      this.tradingService.getEma21().subscribe(data =>{
        console.log(data);
      })
    }



}


