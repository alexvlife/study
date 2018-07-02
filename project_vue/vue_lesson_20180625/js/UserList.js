var UserList = {
    template: '#user-list',
    props: {
        list: { //Имя входного параметра
            type: Array, //Тип, который мы ждем
            required: true // Означает, что этот входной параметр должен передаваться всегда
        },
        show: { //Имя входного параметра
            type: Boolean, //Тип, который мы ждем
            required: true // Означает, что этот входной параметр должен передаваться всегда
        }
    },
    data: function() {
        return {
            userListTest: '123'
        }
    },
    filters: {
        capitalize: function (value) {
            return value.toUpperCase();
        }
    },
    mounted() {
        console.log('Примонтировался компонент UserList')
    }
}

window.app = new Vue({
    el: '#app',
    components: {
        'user-list': UserList
    },
    data: function() {
        return {
            show: true,
            message: 'Скрыть/показать список пользователей',
            list: [
                {
                    id: 1,
                    name: 'Name1',
                    surname: 'Surname1',
                    lastname: 'Lastname1',
                    img: 'img/avatar.png'
                },
                {
                    id: 2,
                    name: 'Name2',
                    surname: 'Surname2',
                    lastname: 'Lastname2',
                    img: 'img/avatar.png'
                },
                {
                    id: 3,
                    name: 'Name3',
                    surname: 'Surname3',
                    lastname: 'Lastname3',
                    img: 'img/avatar.png'
                },
                {
                    id: 4,
                    name: 'Name4',
                    surname: 'Surname4',
                    lastname: 'Lastname4'
                },
                {
                    id: 5,
                    name: 'Name5',
                    surname: 'Surname5',
                    lastname: 'Lastname5'
                }
            ]
        }
    },
    computed: {
        userListLength: function() {
            return this.list.length;
        },
        btnText: function() {
            return this.show ? 'Скрыть..' : 'Показать..';
        }
    },
    methods: {
        changeShowStatus: function() {
            this.show = !this.show;
        }
    }
});