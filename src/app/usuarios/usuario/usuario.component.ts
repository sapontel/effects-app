import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {cargarUsuario} from '../../store/actions';
import {Usuario} from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario | null = null;
  loading = false;
  error: any;

  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('usuario')
      .subscribe( user => {
        this.usuario = user.user;
        this.loading = user.loading;
        this.error = user.error;
      });
    this.router.params.subscribe(
      ({ id }) => {
        this.store.dispatch( cargarUsuario({ id } ));
      }
    );
  }

}
