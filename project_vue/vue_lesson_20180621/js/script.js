var vm = new Vue({
    el: '#app',
    data: function() {
        return {
            show: true,
            message: 'Скрыть/показать список пользователей',
            userList: [
                {
                    name: 'Name1',
                    surname: 'Surname1',
                    lastname: 'Lastname1',
                    img: 'img/avatar.png'
                },
                {
                    name: 'Name2',
                    surname: 'Surname2',
                    lastname: 'Lastname2',
                    img: 'img/avatar.png'
                },
                {
                    name: 'Name3',
                    surname: 'Surname3',
                    lastname: 'Lastname3',
                    img: 'img/avatar.png'
                },
                {
                    name: 'Name4',
                    surname: 'Surname4',
                    lastname: 'Lastname4'
                },
                {
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
            if(this.show) {
              return 'Скрыть..';
            }
            return 'Показать..';
          }
    },
    filters: {
      capitalize: function (value) {
        return value.toUpperCase();
      }
    }
});