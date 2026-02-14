import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicButtonComponent } from '../dynamic-button/dynamic-button.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, DynamicButtonComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {
  @Input() config: any;
}