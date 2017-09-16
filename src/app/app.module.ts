import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { SegurancaModule } from './seguranca/seguranca.module';
import { AuthService } from './seguranca/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { CategoriaService } from './categorias/categoria.service';
import { ErrorHandlerService } from './error-handler.service';
import { PessoaService } from './pessoas/pessoa.service';
import { HttpModule } from '@angular/http';

import { LancamentoService } from './lancamentos/lancamento.service';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';

import { JwtHelper } from 'angular2-jwt';

import {ToastyModule} from 'ng2-toasty';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConfirmationService } from 'primeng/components/common/api';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    CurrencyMaskModule,
    ConfirmDialogModule,

    ToastyModule.forRoot(),
    HttpModule,

    LancamentosModule,
    PessoasModule,
    SegurancaModule,

    AppRoutingModule
  ],
  providers: [
    LancamentoService,
    PessoaService,
    ConfirmationService,
    CategoriaService,
    { provide: LOCALE_ID, useValue: 'pt-BR'},
    ErrorHandlerService,
    Title,
    AuthService,
    JwtHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
