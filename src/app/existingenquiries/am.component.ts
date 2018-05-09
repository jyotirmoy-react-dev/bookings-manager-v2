import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-exs-am',
    template: `
    <a routerLink="/managehotel/{{id}}">{{title}}</a>
    `
})

export class AmComponent{
    @Input() id = '';
    @Input() title = '';
}