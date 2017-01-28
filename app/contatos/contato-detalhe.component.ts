import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ContatoService } from './contato.service';
import { Contato } from './contato.model';


@Component ({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'
    
})


export class  ContatoDetalheComponent implements OnInit {


    contato: Contato;
    private isNew: boolean = true;



    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ){}


    ngOnInit(): void {
        this.contato = new Contato(0, '', '', '');
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];
            
        if (id) {

            this.isNew = false;
             this.contatoService.getContato(id)
            .then((contato: Contato) => {
                this.contato = contato;


            });
}

            console.log(id);

            
        });

    }

    getFormGroupClass(isvalid: boolean, isPristine: boolean): {} {
        return {
            'form-group': true,
            'has-danger': !isvalid && !isPristine, 
            'has-success': isvalid && !isPristine
        };
    
        }
        getFormControlClass(isvalid: boolean, isPristine: boolean): {} {
        return {
            'form-control': true,
            'form-control-danger': !isvalid && !isPristine, 
            'form-control-success': isvalid && !isPristine
        };
     }

        
            onSubmit(): void {
                if (this.isNew) {
                console.log('cadastrar contato ');
            } else {
                console.log('alterar contato');
            }

 }

        


   
    }


