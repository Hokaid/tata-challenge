import { Component } from '@angular/core';

interface Tarea {
  descripcion: string;
  completada: boolean;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  usuarioAutenticado: boolean = false;
  usuario: string = '';
  nuevaTarea: string = '';
  tareas: Tarea[] = [];

  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
      this.tareas.push({
        descripcion: this.nuevaTarea,
        completada: false,
      });
      this.nuevaTarea = '';
    }
  }

  ocultarEliminar(tarea: Tarea) {
    tarea.completada = !tarea.completada;
  }

  eliminarTarea(tarea: Tarea) {
    const index = this.tareas.indexOf(tarea);
    this.tareas.splice(index, 1);
  }
}
