import { ILogWriter } from './iLogger.contract';

export class ConsoleLoggerService implements ILogWriter {
  write(message: string): void {
    console.log('Console logger', message);
  }
}
