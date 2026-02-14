import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicRendererComponent } from './dynamic-renderer/dynamic-renderer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicRendererComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'backoffice-engine';
}
