import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  usuarios: any;

  constructor(private httpCielnt: HttpClient) {

    this.usuarios = this.httpCielnt.get('https://raw.githubusercontent.com/DiegoJSan/Actividad_1.11/master/MOCK_DATA.json?token=ASPGUK3DLVRHL66T2DYLFSLBQFAZ6').pipe(map(res => res['results']))


  }

}
