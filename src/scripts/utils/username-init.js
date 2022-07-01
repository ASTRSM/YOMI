import tippy, {sticky} from 'tippy.js';
import { signOutInit } from './google-auth';

export const usernameInit = () => {
  if (!sessionStorage.getItem('user')) {
    $('#dashboard-link').remove()
    return undefined
  }

  const user = JSON.parse(sessionStorage.getItem('user'))
  $('body').append(`
    <div class='username-container'>
      <div class='username-content'>
        <img src='${user.photoURL}' alt='user profile' class='username-image' referrerpolicy="no-referrer"/>
        <h1 class='username-title'>${user.displayName}</h1>
      </div>
    </div>
  `)

  tippy('.username-container', {
    interactive: true,
    content: '<button id="logout-button">LOGOUT</button>',
    theme: 'custom',
    allowHTML: true,
    interactiveDebounce: 75,
    sticky: true,
    plugins: [sticky],
    onShown(instance) {
      $('.tippy-content').on('click', () => {
        signOutInit()
      }
      )
    },
  });

}