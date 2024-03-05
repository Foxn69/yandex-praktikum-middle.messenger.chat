import { defineConfig, type Plugin } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import { getPicturePath } from './lib/utils/get-pictures-path';

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve('src/components'),
      context: {
        login: {
          inputs: [
            {
              type: 'text',
              placeholder: 'Логин',
              name: 'login'
            },
            {
              type: 'password',
              placeholder: 'Пароль',
              name: 'password'
            }
          ]
        },
        signup: {
          inputs: [
            {
              type: 'text',
              placeholder: 'Имя',
              name: 'first_name'
            },
            {
              type: 'text',
              placeholder: 'Фамилия',
              name: 'second_name'
            },
            {
              type: 'text',
              placeholder: 'Логин',
              name: 'login'
            },
            {
              type: 'email',
              placeholder: 'E-mail',
              name: 'email'
            },
            {
              type: 'password',
              placeholder: 'Номер телефона',
              name: 'phone'
            }
          ]
        },
        chatList: {
          chatItems: [
            {
              avatar: getPicturePath('mock-person-avatar-1.png'),
              name: 'Иван',
              userMessage: 'Привет, Иван!',
              lastMessageTime: '10:00'
            },
            {
              avatar: getPicturePath('mock-person-avatar-2.png'),
              name: 'Семен',
              personMessage: 'тут?',
              lastMessageTime: '9:45',
              unreadCount: 2
            }
          ]
        },
        chosenChat: {
          avatar: getPicturePath('mock-person-avatar-1.png'),
          personName: 'Иван',
          personMessages: ['Привет!', 'Как дела?', 'Отлично'],
          userMessages: ['Привет, Иван!', 'Хороооооооооооошо', 'А у тебя?']
        },
        user: {
          avatar: getPicturePath('mock-user-avatar.png'),
          email: 'nik@mail.com',
          login: 'Nik777',
          name: 'Никита',
          surname: 'Белый',
          nickname: 'Nik',
          phone: '+7 (999) 999-99-99'
        }
      }
    }) as unknown as Plugin
  ],
  server: {
    open: '/src/pages/login/login.html'
  },
  build: {
    rollupOptions: {
        input: './src/index.html'
    }
}
});
