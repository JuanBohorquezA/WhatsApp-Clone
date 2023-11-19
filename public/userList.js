import moment from 'moment';
class user{
    
    
    static  usersList=[
        {
            key: 1,
            username: 'xdssssssssssssss',
            profilePhoto: 'https://i.pravatar.cc/120',
            Chat:[
                {
                    key:1,
                    user:2,
                    message: 'HOLA SAPO PERRO',
                    date:'08:41:00-17-11-2023',
                }
            ],
            lastSeen: moment().format('HH:mm-DD-MM-YYYY'),
        },
        {
            key: 2,
            username: 'Pedriñño',
            profilePhoto: 'https://i.pravatar.cc/200',
            Chat:[
                {
                    key:1,
                    user:2,
                    message: 'HOLA SAPO PERRO',
                    date:'08:41:00-16-11-2021',
                },
                {
                    key:2,
                    user:2,
                    message: 'NEA NECESITO UN FAVOR',
                    date:'08:41:00-10-12-2022',
                }

            ],
            lastSeen: "08:41-16-11-2021",
        },
        {
            key: 3,
            username: 'Alex',
            profilePhoto: 'https://i.pravatar.cc/102',
            Chat:[
                {
                    key:1,
                    user:2,
                    message: 'HOLA SAPO PERRO',
                    date:'08:41:00-16-11-2021',
                },
                {
                    key:2,
                    user:2,
                    message: 'NEA NECESITO UN FAVOR',
                    date:'08:41:00-10-12-2022',
                }

            ],
            lastSeen: "08:41-10-12-2022",
        },
        {
            key: 4,
            username: '💩🤖',
            profilePhoto: 'https://i.pravatar.cc/254',
            Chat:[
                {
                    key:1,
                    user:2,
                    message: 'HOLA SAPO PERRO',
                    date:'08:41:00-16-11-2021',
                },
                {
                    key:2,
                    user:2,
                    message: 'NEA NECESITO UN FAVOR',
                    date:'08:41:00-10-12-2022',
                }

            ],
            lastSeen: "08:41-10-12-2022",
        },
        {
            key: 5,
            username: 'chatbot',
            profilePhoto: 'https://i.pravatar.cc/500',
            Chat:[
                {
                    key:1,
                    user:1,
                    message: 'HOLA SAPO PERRO',
                    date:'08:41:00-16-11-2021',
                },
                {
                    key:2,
                    user:1,
                    message: 'NEA NECESITO UN FAVOR',
                    date:'08:41:00-10-12-2022',
                }

            ],
            lastSeen: "08:41-10-12-2022",
        }
    
    ]
    static onChangeCallbacks = [];

    static subscribeToChanges(callback) {
        this.onChangeCallbacks.push(callback);
    }

    static unsubscribeFromChanges(callback) {
        this.onChangeCallbacks = this.onChangeCallbacks.filter(cb => cb !== callback);
    }

    static notifyChange() {
        this.onChangeCallbacks.forEach(callback => callback());
    }

    static findUser(key){
         return this.usersList.find(user => user.key === key)
    }
    static addMessage(key, message){
        let userFounded = user.findUser(key)
        key = userFounded.Chat.length>0?userFounded.Chat[userFounded.Chat.length-1].key+1:1
        let objet ={
                key:key,
                user:1,
                message: message,
                date:moment().format('HH:mm:ss-DD-MM-YYYY'),          
        }
        this.usersList[userFounded.key -1].Chat.push(objet)
        this.notifyChange()
    }
}
export default user