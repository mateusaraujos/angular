import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: "app-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})

// Classe para as estrelas de avaliação.
/*
    Para consumir as informações dos cursos em HTTP, o Angular faz de forma assícrona,
    ou seja, pode ser que não veia a informação que já está carregada do módulo HTTP
    no momento da inicialização desse componente. Usamos OnChanges. HTTP é assícrono.
*/
export class StarComponent implements OnChanges {
    // Faz com que a variável esteja elegível para receber infos de um componente externo.
    @Input()
    rating: number = 0;

    starWidth!: number;

    ngOnChanges(): void {
        this.starWidth = this.starWidth * 95 / 5;
    }
}