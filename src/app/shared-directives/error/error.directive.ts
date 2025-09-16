import { Directive, inject, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appError]'
})
export class ErrorDirective {
  tpl = inject(TemplateRef)
  constructor() { }

  setError(vcr: ViewContainerRef, value: any) {
    vcr.clear()
    vcr.createEmbeddedView(this.tpl, { $implicit: value, success: value })

  }
}
