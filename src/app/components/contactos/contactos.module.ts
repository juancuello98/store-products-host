import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule} from '../../shared/shared.module';
import { ContactosRoutingModule } from './contacto-routing.module';
import { ContactosComponent} from './components/contactos.component';

@NgModule({
  declarations:[
    ContactosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactosRoutingModule
  ]
})
export class ContactosModule{

}
