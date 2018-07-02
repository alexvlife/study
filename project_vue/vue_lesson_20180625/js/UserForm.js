var UserForm = {
    template: '#user-form',
    props: {
        user: { //Имя входного параметра
            type: Object, //Тип, который мы ждем
            required: true // Означает, что этот входной параметр должен передаваться всегда
        },
        show: { //Имя входного параметра
            type: Boolean, //Тип, который мы ждем
            required: true // Означает, что этот входной параметр должен передаваться всегда
        }
    },
    data: function() {
        return {
            userListTest: '123',
            readonly: true,
            //След.данные для определения двойного клика левой кнопки мыши.
            result: [],
            delay: 700,
            clicks: 0,
            timer: null
        }
    },
    filters: {
        capitalize: function (value) {
            return value.toUpperCase();
        }
    },
    mounted() {
        console.log('Примонтировался компонент UserList')
    },
    methods: {
        oneTwoClick: function(event) { //Для определения двойного клика левой кнопки мыши.
            this.clicks++
            if (this.clicks === 1) {
                var self = this
                this.timer = setTimeout(function() {
                self.result.push(event.type);
                self.clicks = 0
                }, this.delay);
            } else {
                console.log('doubleClick');
                clearTimeout(this.timer);
                this.changeReadonly();
                this.result.push('dblclick');
                this.clicks = 0;
            }
        },
        changeReadonly: function() {
            this.readonly=!this.readonly;
        },
    }
}

window.app = new Vue({
    el: '#app',
    components: {
        'user-form': UserForm
    },
    data: function() {
        return {
            show: false,
            message: 'Скрыть/показать список пользователей',
            user: {
                        id: 1,
                        name: 'Name1',
                        surname: 'Surname1',
                        lastname: 'Lastname1',
                        img: 'img/avatar.png'
            }
        }
    },
    computed: {
        btnText: function() {
            return this.show ? 'Скрыть пользователя..' : 'Показать пользователя..';
            console.log(this.user);
        }
    },
    methods: {
        changeShowStatus: function() {
            this.show = !this.show;
        }
    }
});