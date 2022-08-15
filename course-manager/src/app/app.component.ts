import { Component } from '@angular/core';

// Decorator: propriedades que dão mais informações ao component.
@Component({
  // selector: Cria uma tag. Damos um nome para ela. tag -> index.html.
  selector: 'app-root',
  // HTML que será usado para representar a parte visual do component.
  templateUrl: './app.component.html',
  // Dizendo ao Angular que o style do componente está em app.comp....css.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-manager';

  // Novo atributo
  name: string = "Mateus";
}
