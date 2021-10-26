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
  ema50!:any[];
  ema21!:any[];
  ema8!:any[];
  precioBTCUSDT!:any[]

  precioEntradaLong!:any

  entradaEma8Ema21Long:boolean=false
  entradaActiva:boolean=false


    constructor(private tradingService:TradingService){}

    ngOnInit(){
      
      const intervalIdema50 = setInterval(this.getEma50.bind(this), 1000);
      const intervalIdEma8 = setInterval(this.getEma8.bind(this), 1000);
      const intervalIdEma21 = setInterval(this.getEma21.bind(this), 1000);
      const intervalIdPrecioBTCUSDT = setInterval(this.getPrecioBTCUSDT.bind(this), 1000);
      const intervalIdEntradaLong = setInterval( this.entradaEma21Ema8.bind(this),1000);
     
 
    }
    getEma21(){
      let _self = this
      this.tradingService.getEma21().subscribe(data =>{
        _self.ema21=data["ema 21 :"]
      
      })
      }
    
    getEma8(){
      let _self = this
      this.tradingService.getEma8().subscribe(data =>{
        _self.ema8=data['la ema 8 es un:']
     
      })
      }
    
    getEma50(){
      let _self = this
      this.tradingService.getEma50().subscribe(data =>{
        _self.ema50=data['ema50']
       
      })
     
    }
    getPrecioBTCUSDT(){
      let _self = this
      this.tradingService.getPrecioBTCUSDT().subscribe(data =>{
        _self.precioBTCUSDT=data['precioBTCUSDT']
      })
    }

    entradaEma21Ema8(){
      console.log('entro al entrada')
      console.log(this.entradaActiva)
      if(this.ema21>this.ema8 && this.entradaActiva!){
        console.log('entro al if de entrada falsa')
        this.entradaEma8Ema21Long=true;
        this.setPrecioEntrada(this.getPrecioBTCUSDT());
      }if (this.ema21>this.ema8 && this.entradaActiva){
        return console.log('entrada activa')
      }if(this.ema21<this.ema8 && this.entradaActiva){
          this.entradaActiva=false
          console.log('cierre de entrada')
      }
    }
    entradaResapuesta(entrada:boolean){
      if(!entrada)return 'Sin entradas por ahora'
      else return 'Entrada activa en Long'
    }
setPrecioEntrada(entrada:any){
  this.tradingService.setPrecioEntrada(entrada).subscribe(data=>{
    this.entradaActiva=true;
    console.log('entro a la wuea final')
  })
}


}



