import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rep: Conta[] = [];
  c2: Conta;
  numero: string = '';
  nome: string = '';
  saldo: number = 0;

  constructor() {
    this.limpa_campos();
    // conta de teste.
    this.c2 = new Conta('10', 'Beatriz Maria Ferreira', 30000);
    this.rep.push(this.c2);
  }

  public consultarConta(): void {
    for (let i: number = 0; i < this.rep.length; i++) {
      let c: Conta = this.rep[i];
      if (c.getNumero() == this.numero) {
        this.nome = c.getNome();
        this.saldo = c.getSaldo();
        return;
      }
    }
    console.log('Conta não localizada');
    alert('Conta não localizada');
  }

  public existeConta(): boolean {
    for (let i: number = 0; i < this.rep.length; i++) {
      let c: Conta = this.rep[i];
      if (c.getNumero() == this.numero) {
        return true;
      }
    }
    return false;
  }

  public inserirConta(): void {

        let c2: Conta = new Conta(this.numero, this.nome, this.saldo);
        if (!this.existeConta()) {
          this.rep.push(c2);
          this.limpa_campos();
          console.log('conta inserida com sucesso.');
          return;
        }
        alert('Conta já existente na base');

  }
  public alterarConta(): void {
     for (let i: number = 0; i < this.rep.length; i++) {
       let c: Conta = this.rep[i];
       if (c.getNumero() == this.numero) {
         this.rep[i].setNome(this.nome);
         this.rep[i].setSaldo(this.saldo);
         alert('Conta alterada');
         this.limpa_campos();
         return;
       }
     }
     console.log('Conta não foi alterada, pois não foi localizada');
     alert('Conta não foi alterada, pois não foi localizada');
  }

  public removerConta(): void {}

  public limpa_campos(): void {
    this.numero = '';
    this.nome = '';
    this.saldo = 0;
  }
}

export default class Conta {
  numero: string;
  nome: string;
  saldo: number;

  constructor(numero: string, nome: string, saldo: number) {
    this.numero = numero;
    this.nome = nome;
    this.saldo = saldo;
  }

  public getNome(): string {
    return this.nome;
  }

  public getNumero(): string {
    return this.numero;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public setNumero(numero: string): void {
    this.numero = numero;
  }

  public setSaldo(saldo: number): void {
    this.saldo = saldo;
  }
}
