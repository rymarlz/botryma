import { Component, OnInit } from '@angular/core';
import { TradingService } from './trading.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  ema50!:any;
  ema21!:any;
  ema8!:any;
  precioBTCUSDT!:any

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
        let p =data["ema 21 :"]
        _self.ema21=parseFloat(p).toFixed(4)
        
      
      })
      }
    
    getEma8(){
      let _self = this
      this.tradingService.getEma8().subscribe(data =>{
        let p = data['la ema 8 es un:']
        _self.ema8=parseFloat(p).toFixed(4)
        
     
      })
      }
    
    getEma50(){
      let _self = this
      this.tradingService.getEma50().subscribe(data =>{
        let p = data['ema50']
        _self.ema50=parseFloat(p).toFixed(4)
   
       
      })
     
    }
    getPrecioBTCUSDT(){
      let _self = this
      this.tradingService.getPrecioBTCUSDT().subscribe(data =>{
         let p=data['precioBTCUSDT']
     _self.precioBTCUSDT=parseFloat(p).toFixed(4) 
      }) 
    }

   
  entradaema21_8Long(){
    const precioJson = {"precioEntrada":this.precioEntradaLong,"precioVenta": this.precioVentaLong}
    if(this.ema21>this.ema8){
        if(this.entradaActiva==false){
          console.log('entro al false')
          this.precioEntradaLong=this.precioBTCUSDT
          this.entradaActiva=true
        } console.log('compra activa')
    }
    if(this.ema21<this.ema8){
        if(this.entradaActiva==true){
          this.precioVentaLong=this.precioBTCUSDT
          this.entradaActiva=false
          this.setPrecioEntrada(precioJson)
          console.log('entrada cerrada')
        }
      
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



