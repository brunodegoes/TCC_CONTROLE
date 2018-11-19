import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  mostrarMenu: boolean;

  constructor(private authService: AuthService) {
    this.mostrarMenu = false;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
