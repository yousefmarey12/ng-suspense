import { AfterContentInit, AfterViewInit, Directive, inject, Input, input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Suspense } from '../../../shared-interfaces/suspense.interface';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appFallback]'
})
export class FallbackDirective implements Suspense {
  setup: Promise<any> | Observable<any> = new Promise((resolve, reject) => resolve(true))


  constructor(public tpl: TemplateRef<any>, public vcr: ViewContainerRef) { }


  @Input() set appFallback(prom: Promise<any> | Observable<any>) {
    this.setup = prom
  }



}
