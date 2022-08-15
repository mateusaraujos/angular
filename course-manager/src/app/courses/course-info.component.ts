import { CourseService } from './course.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";

@Component({
    templateUrl: "./course-info.component.html"
})
export class CourseInfoComponent implements OnInit { // Na inicialização do componente OnInit

    course!: Course;

    // Para enxergar a rota que está ativa e o serviço de pegar por id.
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

    // Na inicialização, vai carregar a informação do id do curso
    ngOnInit(): void {
        // + transforma para number
        this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get("id")!).subscribe({
            next: course => this.course = course,
            error: err => console.log("Error", err)
        });
    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => console.log("Save with success", course),
            error: err => console.log("Error", err)
        });
    }
}