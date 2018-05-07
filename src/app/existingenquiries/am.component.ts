import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-exs-am',
    template: `
    <a routerLink="/managehotel/{{id}}">{{id}}</a>
    `
})

export class AmComponent{
    @Input() id = '';
}