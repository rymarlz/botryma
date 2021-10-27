import { Component, OnInit } from '@angular/core';
import { TradingService } from './trading.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  ema50!:number;
  ema21!:number;
  ema8!:number;
  precioBTCUSDT!:number

  emaNUm21!:number;


  precioVentaLong!:number;
  precioEntradaLong!:number;

  entradaEma8Ema21Long:boolean=false
  entradaActiva:boolean=false


    constructor(private tradingService:TradingService){}

    ngOnInit(){
      
      const intervalIdema50 = setInterval(this.getEma50.bind(this), 1000);
      const intervalIdEma8 = setInterval(this.getEma8.bind(this), 1000);
      const intervalIdEma21 = setInterval(this.getEma21.bind(this), 1000);
      const intervalIdPrecioBTCUSDT = setInterval(this.getPrecioBTCUSDT.bind(this), 1000);
     // const intervalIdEntradaLong = setInterval( this.entradaEma21Ema8.bind(this),1000);
      const entradaema21_8Long = setInterval(this.entradaema21_8Long.bind(this),1000)
 
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

   
  entradaema21_8Long(){
   
    const precioJson = {"precioEntrada":this.precioEntradaLong,"precioVenta": this.precioVentaLong}

    if(this.ema21>this.ema8){
        if(this.entradaActiva!){
          this.precioEntradaLong=this.precioBTCUSDT
          this.entradaActiva=true
           return 
        } else {
          if(this.ema21<this.ema8){
            this.precioVentaLong=this.precioBTCUSDT
            this.entradaActiva=false
            this.setPrecioEntrada(precioJson)
          }
        }
    }else  console.log('no tiene entrada')
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



