import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { NgModule } from '@angular/core';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'lancamentos', pathMatch: 'full'},
    { path: 'pessoas', component: PessoasPesquisaComponent },
    { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
    { path: 'nao-autorizado', component: NaoAutorizadoComponent},
    { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
