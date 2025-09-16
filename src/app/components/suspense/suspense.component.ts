import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, EventEmitter, inject, Input, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Suspense } from '../../../shared-interfaces/suspense.interface';
import { from, Observable } from 'rxjs';
import { ErrorDirective } from "../../shared-directives/error/error.directive";
import { SuccessDirective } from "../../shared-directives/success/success.directive";
import { FallbackDirective } from '../../shared-directives/fallback/fallback.directive';

@Component({
  selector: 'app-suspense',
  imports: [],
  templateUrl: './suspense.component.html',
  styleUrl: './suspense.component.css'
})
export class SuspenseComponent implements AfterContentChecked, AfterViewInit {
  ngAfterContentChecked(): void {
    if (this.error) {
      this.onError.emit(this.error)
      return
    }
    this.onSuccess.emit(this.success)

  }

  @Output() onSuccess = new EventEmitter<any>()
  @Output() onError = new EventEmitter<any>()
  success: any
  error: any

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    console.log(this.tmp)
    this.vcr.createEmbeddedView(this.tmp)
    this.vcr.createEmbeddedView(this.fallbackDir.tpl)
    this.fetch()
  }


  vcr = inject(ViewContainerRef)
  @ViewChild(TemplateRef) tmp!: TemplateRef<any>
  @ContentChild(ErrorDirective, { read: ErrorDirective }) errDir!: ErrorDirective
  @ContentChild(FallbackDirective, { read: FallbackDirective }) fallbackDir!: FallbackDirective
  @ContentChild(SuccessDirective, { read: SuccessDirective }) successDir!: SuccessDirective

  fetch() {
    console.log("Does Fetch Run?")
    from(this.fallbackDir.setup).subscribe({
      next: (value) => {

        this.success = value
        this.successDir.setSuccess(this.vcr, value)


      },
      error: (err) => {
        this.error = err
        this.errDir.setError(this.vcr, err)
      }
    })
  }
}

