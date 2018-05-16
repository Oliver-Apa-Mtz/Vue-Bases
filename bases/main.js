//filtro global
Vue.filter('mayusculas2',(value) => value.toUpperCase());

//instancias
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

new Vue({
    el: 'main',
    data: {
        calificacion: 5,
        celulares: ['Iphone', 'HTC', 'Sony', 'Samsung', 'Motorola'],
        celularNuevo: '',
        name: 'Juan Alberto Ramos'
    },
    methods: {
        addCelular(){
            this.celulares.push(this.celularNuevo);
            this.celularNuevo = '';
        },
        deleteCelular(index){
            this.celulares.splice(index,1);
        }
    },
    computed: {
        nameReverse: function(){
            let name = this.name.split(' ');
            return `${name[1]} ${name[2]} ${name[0]}`;
        }
    },
    //filtros en local
    filters: {
        mayusculas: (value) => value.toUpperCase()
    }
});