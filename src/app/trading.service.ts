import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ema } from './trading/ema';

@Injectable({
  providedIn: 'root'
})
export class TradingService {

   apiEMA21 ='tradingryma.herokuapp.com/ema21'

  constructor(private http: HttpClient) { }


  public getEma21():Observable<any>{
    return this.http.get('https://tradingryma.herokuapp.com/ema21');
  }

}
