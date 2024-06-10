import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  PoButtonModule,
  PoMenuItem,
  PoMenuModule,
  PoPageAction,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    HttpClientModule,
    PoButtonModule,
    PoTemplatesModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly title: string = 'Crud Protheus com PO-UI';


  readonly appName: string = 'Nome da Aplicação';

  readonly pageActions: PoPageAction[] = [
    {
      label: 'Incluir',
      icon: 'po-icon-plus',
      type: 'danger'
    },
    {
      label: 'Alterar',
      icon: 'po-icon-edit',
      type: 'default'
    },
    {
      label: 'Visualizar'
    },
    {
      label: 'Excluir',
      type: 'danger'
    },
    {
      label: 'Imprimir'
    }
  ];

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Home',
      action: this.onClick.bind(this),
      icon: 'po-icon-home',
      shortLabel: 'Home'
    },
  ];

  private onClick() {
    alert('Clicked in menu item');
  }

  onButtonClick() {
    alert('cliquei no botão');
  }
}

