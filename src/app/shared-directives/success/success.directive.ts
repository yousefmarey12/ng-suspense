import { Directive, EventEmitter, inject, Input, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { Suspense } from '../../../shared-interfaces/suspense.interface';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appSuccess]'
})
export class SuccessDirective {
  tpl = inject(TemplateRef)


  setSuccess(vcr: ViewContainerRef, value: any) {
    vcr.clear()
    vcr.createEmbeddedView(this.tpl, { $implicit: value, success: value })
  }


}
