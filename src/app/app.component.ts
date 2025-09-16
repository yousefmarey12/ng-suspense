import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuspenseComponent } from "./components/suspense/suspense.component";
import { ErrorDirective } from "./shared-directives/error/error.directive";
import { SuccessDirective } from './shared-directives/success/success.directive';
import { FallbackDirective } from './shared-directives/fallback/fallback.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SuspenseComponent, ErrorDirective, SuccessDirective, FallbackDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
