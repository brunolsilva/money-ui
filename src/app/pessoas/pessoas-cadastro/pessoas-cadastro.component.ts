import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html',
  styleUrls: ['./pessoas-cadastro.component.css']
})
export class PessoasCadastroComponent implements OnInit {

  ufs = [
    { label: 'SP', value: 'SP' },
    { label: 'TO', value: 'TO' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
