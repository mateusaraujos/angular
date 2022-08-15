// Começando a criar os meus próprios componentes.

import { Course } from './course';
import { Component, OnInit } from "@angular/core";
import { CourseService } from './course.service';

/* 
    Dizer para o Angular que essa classe é de Component: colocar o 
    decorator que descreverá que ela será um componente.
*/
@Component({
    // Características que o componente terá.

    // Uma tag que será chamada no html principal app.
    // selector: "app-course-list", -> AGORA: REFERÊNCIA VIA LINK DE ROTAS.
    // template: "<h2>Course List</h2>"
    templateUrl: "./course-list.component.html"
})

// Criar classe que representa esse componente de course.
export class CourseListComponent implements OnInit {

    filteredCourses: Course[] = [];

    // Variáveis que vão ficar apenas nesse componente
    _courses: Course[] = [];
    _filterBy: string = '';

    // Construtor para trazer a classe de serviço course.service.ts para o componente.
    constructor(private courseService: CourseService) { }

    // Operação quando o componente for inicializado.
    ngOnInit(): void {
        // Agora, está recebendo um Observable
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            // Algumas callback functions

            // Quando a requisição dá certo e ele retorna algo para trabalharmos.
            next: courses => {
                // Retorno do Observable.
                this._courses = courses;
                this.filteredCourses = this._courses;
            },

            // Se der algume erro.
            error: err => console.log("Error", err)
        });
        this.filteredCourses = this._courses;
    }

    // para deletar
    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log("Delete with success");
                this.retrieveAll(); // Atualizar a lista de cursos.
            },
            error: err => console.log("Error", err)
        });
    }

    // Evento: ao digitar, procurar um curso e mostrar.
    set filter(value: string) {
        this._filterBy = value;

        // Sendo filtrado cada curso ao digitar.
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase()
            .indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}