import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  'en-US': {
    translation: {
      app_title: 'Nexti React Challenge',
      loginPage: 'Login page',
      email: 'Email',
      password: 'Password',
      rememberMe: 'Remember me',
      signIn: 'Sign In',
      help: 'Help',
      settings: 'Settings',
      myProfile: 'My profile',
      menus: 'Menus',
      exit: 'Exit',
      search: 'Search',
      toAssign: 'To assign',
      toFile: 'To file',
      toSchedule: 'To Schedule',
      confirm: 'Confirm',
      cancel: 'Cancel',
      new: 'New',
      switchTheme: 'Switch theme',
      changeLanguage: 'Change language',
      language: 'Language',
      'pt-BR': 'Brazilian Portuguese',
      'en-US': 'English',
      'es-ES': 'Spanish',

      requiredEmail: 'Required email!',
      requiredPassword: 'Required password!',
      invalidEmail: 'Invalid email!',
      noItemsFound: 'No items found!',
      selectSubtaskMenuBeside: 'Select a subtask from the menu beside.',
    },
  },
  'pt-BR': {
    translation: {
      app_title: 'Desafio da Nexti com React',
      primeiroAspecto: 'First Aspect',
      loginPage: 'Login',
      email: 'Email',
      password: 'Senha',
      keepData: 'Manter dados',
      signIn: 'Entrar',
      help: 'Ajuda',
      settings: 'Configurações',
      myProfile: 'Meu perfil',
      menus: 'Menus',
      exit: 'Sair',
      search: 'Pesquisar',
      toAssign: 'Atribuir',
      toFile: 'Arquivar',
      toSchedule: 'Agendar',
      confirm: 'Confirmar',
      cancel: 'Cancelar',
      new: 'Novo',
      switchTheme: 'Alternar tema',
      changeLanguage: 'Alterar linguagem',
      language: 'Linguagem',
      'pt-BR': 'Português do Brasil',
      'en-US': 'Inglês',
      'es-ES': 'Espanhol',

      requiredEmail: 'Email é obrigatório!',
      requiredPassword: 'Senha é obrigatória!',
      invalidEmail: 'Email inválido.',
      noItemsFound: 'Nenhum item foi encontrado!',
      selectSubtaskMenuBeside: 'Selecione uma SubTask no Menu ao lado.',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt-BR',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
