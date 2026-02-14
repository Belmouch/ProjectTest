import { Component, Input } from '@angular/core';
import { RuleEngineService } from '../services/rule-engine.service';

@Component({
  selector: 'app-dynamic-button',
  standalone: true,
  template: `<button [style.background]="config.color" (click)="execute()">
               {{ config.label }}
             </button>`,
  styleUrl: './dynamic-button.component.css'
})
export class DynamicButtonComponent {
  @Input() config: any;
  constructor(private rules: RuleEngineService) {}
  execute() {
    this.rules.executeAction(this.config.action);
  }
}