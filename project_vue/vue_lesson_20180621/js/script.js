var vm = new Vue({
    el: '#app',
    data: function() {
        return {
            show: true,
            message: 'Скрыть/показать список пользователей',
            userList: [
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
        };
    },
    computed: {
        userListLength: function() {
            return this.userList.length;
        },
        btnText: function() {
            return this.show ? 'Скрыть..' : 'Показать..';
        }
    },
    methods: {
        changeShowStatus: function() {
            this.show = !this.show;
        }
    },
    filters: {
        capitalize: function (value) {
            return value.toUpperCase();
        }
    }
});