import { Injectable } from '@angular/core';
import { ILogWriter } from './iLogger.contract';
@Injectable()
export class APILoggerService implements ILogWriter {
  write(message: string): void {
    console.log('API logger---', message);
  }
}
