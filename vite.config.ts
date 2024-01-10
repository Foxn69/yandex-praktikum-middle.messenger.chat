import { defineConfig, type Plugin } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

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
              avatar: 'avatar',
              name: 'Иван',
              personMessage: 'Привет!',
              userMessage: 'Привет, Иван!'
            },
            {
              avatar: 'avatar',
              name: 'Семен',
              personMessage: 'тут?',
              userMessage: ''
            }
          ]
        }
      }
    }) as unknown as Plugin
  ]
});
