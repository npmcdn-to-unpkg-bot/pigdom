new Vue({
  el: '#checklist',
  data: {
    todos: [
      {title: "Carta de Responsabilidad- líder INEEL", link: "convocatorias/fish/anexo1.doc", completed: false, type: "edit"},
      {title: "Cartas de intención- líder INEEL", link: "convocatorias/fish/anexo2.doc", completed: false, type: "edit"},
//      {title: "Cartas de intención- líder IMP", link: "convocatorias/fish/anexo3.doc", completed: false, type: "edit"},
//      {title: "Cartas de intención en Inglés", link: "convocatorias/fish/anexo4.doc", completed: false, type: "edit"},
      {title: "Plan Estratégico de Fortalecimiento Institucional", link: "convocatorias/fish/anexo5.docx", completed: false, type: "view"},
      {title: "Plan General del Proyecto", link: "convocatorias/fish/anexo6.docx", completed: false, type: "view"},
    ]
  },
  methods: {
    todoCompleted(todo) {
    	todo.completed = !todo.completed
    }
  }
});