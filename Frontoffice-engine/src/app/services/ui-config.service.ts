import { Injectable } from '@angular/core';
import config from '../../assets/ui.config.json';

@Injectable({ providedIn: 'root' })
export class UiConfigService {
  getConfig() {
    return config;
  }
}