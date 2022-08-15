import { ReplacePipe } from './replace.pipe';
import { NgModule } from "@angular/core";

// Módulo que contempla todos os pipes da pasta shared.
@NgModule({
    declarations: [
        ReplacePipe
    ],
    exports: [
        ReplacePipe
    ]
})
export class AppPipeModule {

}