import { CoreModule } from './core/core.module';
import { CourseModule } from './courses/course.module';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Transformar para REAL BRASILEIRO
import ptBr from "@angular/common/locales/pt";
import { registerLocaleData } from '@angular/common';
registerLocaleData(ptBr);
// Pronto.

// Decorator: configuração de metadados.
@NgModule({
  // Declarar todos os componentes que criarmos.
  declarations: [
    // Os componentes que estarão dentro desse módulo
    AppComponent,
  ], // Importar um módulo.
  imports: [
    BrowserModule,
    // Para fazer requisições HTTP.
    HttpClientModule,
    CourseModule,
    CoreModule,
    // Módulo de rotas do Angular. As rotas serão carregadas na root
    RouterModule.forRoot([
      // Array com uma série de objetos, que são as rotas que vão ter ao longo da aplicação.
      {
        // URL da rota. path: "" root
        path: "", redirectTo: "courses", pathMatch: "full"
      },
    ])
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt" },
    // Indicando a moeda padrão para o CurrencyPipe. Sem ser mais necessário declarar o BRL.
    { provide: DEFAULT_CURRENCY_CODE, useValue: "BRL" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
