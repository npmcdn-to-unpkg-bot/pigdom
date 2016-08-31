new Vue({
  el: '#checklist',
  data: {
    todos: [
      {title: "Carta de Responsabilidad- líder INEEL", link: "convocatorias/fish/anexo1.doc", completed: false},
      {title: "Cartas de intención- líder INEEL", link: "convocatorias/fish/anexo2.doc", completed: false},
      {title: "Cartas de intención- líder IMP", link: "convocatorias/fish/anexo3.doc", completed: false},
      {title: "Cartas de intención en Inglés - líder IMP ", link: "convocatorias/fish/anexo4.doc", completed: false},
      {title: "Plan Estratégico de Fortalecimiento Institucional", link: "convocatorias/fish/anexo5.doc", completed: false},
      {title: "Plan General del Proyecto", link: "convocatorias/fish/anexo6.doc", completed: false},
    ]
  },
  methods: {
    todoCompleted(todo) {
    	todo.completed = !todo.completed
    }
  }
});