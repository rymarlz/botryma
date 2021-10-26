import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ema } from './trading/ema';

@Injectable({
  providedIn: 'root'
})
export class TradingService {

 
  apiURL ='https://apitrading.herokuapp.com/'
  constructor(private http: HttpClient) { }
  
  public getPrecioBTCUSDT():Observable<any>{
    return this.http.get(this.apiURL+'precioBTCUSDT');
  }
  public getEma21():Observable<any>{
    return this.http.get(this.apiURL+'ema21');
  }
  public getEma8():Observable<any>{
    return this.http.get(this.apiURL+'ema8');
  }
  public getEma50():Observable<any>{
    return this.http.get(this.apiURL+'ema50');
  }
  public setPrecioEntrada(body:any):Observable<any>{
    return this.http.post(this.apiURL+'entrada',body);
  }

}
