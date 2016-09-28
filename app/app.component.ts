    /**
     * Created by moham_000 on 28/09/2016.
     */
    import { Component } from '@angular/core';
    @Component({
        selector: 'my-app',
        /*template: `
                <h1>Salut à tous</h1>
                <p>ioj,jo,ni</p>
                `*/
        templateUrl: 'app/app.html'
    })
    export class AppComponent {
    private title: string;
    private text: string;
        private number: number;
        private collection: [any]

        constructor(){
            this.title = "Salut !";
            this.text = "Wech bien ou bien ?";
            this.number = 0;
            this.collection=[
                {reference : '1234', nom: 'mohamed',state:0},
                {reference: '2367', nom : 'sam',state:1},
                {reference: '9000', nom :'guigui',state:2}
            ]
        }
    }