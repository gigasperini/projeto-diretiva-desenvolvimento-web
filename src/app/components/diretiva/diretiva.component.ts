import { Component } from '@angular/core';
interface Tarefa{
  nome: string;
  numero: number;
  ativo: boolean;
}
@Component({
  selector: 'app-diretiva',
  templateUrl: './diretiva.component.html',
  styleUrl: './diretiva.component.css'
})
export class DiretivaComponent {
  tarefas: Tarefa[] = [
    {nome: 'Tarefas1', numero: 1, ativo: true},
    {nome: 'Tarefas2', numero: 2, ativo: true},
    {nome: 'Tarefas3', numero: 2, ativo: true},
    {nome: 'Tarefas4', numero: 2, ativo: true},
    {nome: 'Tarefas5', numero: 3, ativo: false}
  ]
  ativar(Tarefa:Tarefa){
    Tarefa.ativo = !Tarefa.ativo;

  }

}
