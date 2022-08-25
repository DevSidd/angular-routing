import { SafeCall } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class UserCanDeactivate implements CanDeactivate<SafeCall> {
  canDeactivate() {
    return window.confirm('Do you want to continue?');
  }
}
