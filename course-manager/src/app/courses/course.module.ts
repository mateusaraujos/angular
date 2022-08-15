import { AppPipeModule } from './../shared/pipe/app-pipe.module';
import { StarModule } from './../shared/component/stars/star.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info.component';
import { NgModule } from "@angular/core";
import { CourseListComponent } from "./course-list.component";
import { CommonModule } from '@angular/common';

// Segregar a aplicação em módulos.
@NgModule({
    // Informar os pipes, componentes...
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ],
    // Imformar os outros módulos que esse módulo precisa.
    imports: [
        // Recursos básicos do Angular
        CommonModule,
        // FormsModule para usar [ngModel] no input.
        FormsModule,
        StarModule,
        AppPipeModule,
        // rotas que o nosso módulo de curso tem. não é o módulo pai
        RouterModule.forChild([
            {
                // Vou linkar um componente a rota courses
                path: "courses", component: CourseListComponent
            },
            {
                // Rota para os botões de edit, o path recebe um parâmetro de URL
                path: "courses/info/:id", component: CourseInfoComponent
            },
        ])
    ]
})
export class CourseModule {

}