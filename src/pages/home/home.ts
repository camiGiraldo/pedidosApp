import { Component } from '@angular/core';
import { IonicPage, Tabs } from 'ionic-angular';
import { PedidosPage } from './../pedidos/pedidos';
import { CrearPage } from './../crear/crear';
import { PerfilPage } from './../perfil/perfil';



@IonicPage({ priority: 'high', segment: 'tabs' })
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  perfilPage: PerfilPage;
  crearPage: CrearPage;
  pedidosPage: PedidosPage;

  constructor() {

  }

}
