import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RuleEngineService {
  executeAction(action: string, payload?: any) {
    switch (action) {
      case 'submitForm':
        console.log('Form submitted:', payload);
        // Ici tu pourrais appeler une API
        break;
      default:
        console.warn('Action inconnue:', action);
    }
  }
}