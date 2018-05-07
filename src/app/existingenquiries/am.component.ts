import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-exs-am',
    template: `
    <span>Provided By: <br/> {{providedby}}</span>
    `
})

export class AmComponent{
    @Input() providedby = '';
}