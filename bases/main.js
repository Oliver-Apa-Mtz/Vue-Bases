var title = new Vue({
    el: '#title',
    data: {
        title: 'Hola mundo desde Vue Js'
    }
});

var subtitle = new Vue({
    el: '#subtitle',
    data: {
        message: 'La carga de esta pagina fue el ' + new Date().toLocaleString()
    }
});

var main = new Vue({
    el: 'main',
    data: {
        calificacion: 5,
        celulares: ['Iphone', 'HTC', 'Sony', 'Samsung', 'Motorola'],
        celularNuevo: '',
        celularEliminar: ''
    },
    methods: {
        addCelular(){
            this.celulares.push(this.celularNuevo);
            this.celularNuevo = '';
        },
        deleteCelular(){
            this.celulares.pop(this.celularEliminar);
        }
    }
});