import { Component, OnInit, ViewChild, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiConfigService } from '../services/ui-config.service';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { DynamicButtonComponent } from '../dynamic-button/dynamic-button.component';

const componentMap: any = {
  form: DynamicFormComponent,
  button: DynamicButtonComponent
};

@Component({
  selector: 'app-dynamic-renderer',
  standalone: true,
  imports: [CommonModule, DynamicFormComponent, DynamicButtonComponent],
  template: `<div [ngStyle]="{'background-color': config?.backgroundColor}" class="renderer-container">
               <h1>{{ config?.pageTitle }}</h1>
               <div class="components-wrapper">
                 <app-dynamic-form *ngIf="form" [config]="form"></app-dynamic-form>
                 <ng-container #container></ng-container>
               </div>
             </div>`,
  styles: [`
    .renderer-container {
      min-height: 100vh;
      padding: 20px;
    }
    h1 {
      margin-bottom: 30px;
      color: #333;
    }
    .components-wrapper {
      max-width: 1200px;
      margin: 0 auto;
    }
  `]
})
export class DynamicRendererComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  config: any;
  form: any;

  constructor(private uiConfig: UiConfigService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.config = this.uiConfig.getConfig();
    console.log('Config loaded:', this.config);
    if (this.config && this.config.components) {
      // Find the form component
      this.form = this.config.components.find((c: any) => c.type === 'form');
      this.renderComponents(this.config.components);
    }
  }

  renderComponents(components: any[]) {
    if (!components) return;
    components.forEach(c => {
      const comp = componentMap[c.type];
      if (comp) {
        const componentRef = this.container.createComponent(comp);
        (componentRef.instance as any).config = c;
        componentRef.changeDetectorRef.detectChanges();
      }
    });
    this.cdr.detectChanges();
  }
}