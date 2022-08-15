import { StarComponent } from './star.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        StarComponent,
    ],
    // Vamos querer importar alguma coisa desse módulo para ser utilizado no módulo que está importado.
    exports: [
        StarComponent
    ]
})
export class StarModule {

}