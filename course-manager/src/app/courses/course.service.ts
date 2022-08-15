import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Course } from "./course";

// Uma classe de serviço
/*
    Dizer para o Angular que a classe é elegível para injeção de dependência.
*/
@Injectable({
    // Fazer com que seja carregado na root da aplicação.
    // Quando o módulo root app.module.ts carregar, também carregará essa classe de serviço.
    providedIn: "root"
}) // Só métodos simples ou variáveis estáticas.
export class CourseService {

    private coursesUrl: string = "http://localhost:3100/api/courses";

    // Construtor para fazer requisições HTTP que veio do app.module
    constructor(private httpClient: HttpClient){ } // Métodos HTTP.

    // Criando um método para retornar o array com todos os cursos.
    retrieveAll(): Observable<Course[]> {
        // return COURSES;
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }

    // Filtrar o curso para trabalhar com ele no formulário de course-info
    retrieveById(id: number): Observable<Course> {
        // find faz uma iteração no array: filtrar por id.
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
    }

    save(course: Course): Observable<Course> {
        if (course.id) {
            // REturn um course <Course>
            return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course);
        } else {
            return this.httpClient.post<Course>(`${this.coursesUrl}`, course);
        }
    }

    // Deletar curso
    deleteById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
    }
}

const COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'November 4, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'November 8, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'November 25, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];