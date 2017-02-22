import * as ismobilejs from 'ismobilejs';
import { ValueProvider } from '@angular/core';

export abstract class isMobile {
  public any: boolean;
};

export const IS_MOBILE_PROVIDER: ValueProvider = {
      provide: isMobile,
      useValue: ismobilejs
    }