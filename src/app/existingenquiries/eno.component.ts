import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-exs-eno',
    template: `
    <span>Eno: {{eno}} <br/> &pound; {{estimate_value}} <br/>Section: {{section}}</span>
    `
})

export class EnoComponent {
@Input() eno = '';
    @Input() estimate_value = '';
    @Input() section = '';
}