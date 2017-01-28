import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosModule } from './contatos/contatos.module';
import { HttpModule } from '@angular/http';

//AULA 47:
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';



@NgModule({   

    imports: [
        AppRoutingModule,
        BrowserModule,
        ContatosModule,
        HttpModule,
        //AULA 47:
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
      
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class Appmodule {}


