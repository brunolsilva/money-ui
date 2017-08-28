import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {
  pessoas = [
    {'nome': 'Jose das Couves', 'cidade': 'São Paulo', 'uf': 'SP', 'status': true},
    {'nome': 'Fulano de Tal', 'cidade': 'Santos', 'uf': 'SP', 'status': false}
  ];
}
