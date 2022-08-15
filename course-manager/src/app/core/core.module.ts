import { RouterModule } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NgModule } from "@angular/core";
import { Error404Component } from './component/error-404/error-404.component';

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component
    ],
    imports: [
        RouterModule.forChild([
            {
                // path: "**" quando não existir uma rota (URL)
                path: "**", component: Error404Component
            }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule {

}