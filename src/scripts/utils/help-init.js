import tippy, {sticky} from 'tippy.js';
import wrongNotification from './level-notification-initiator';

const config = {
  trigger: 'manual',
  hideOnClick: true,
  theme: 'custom',
  allowHTML: true,
  interactive: true,
  interactiveDebounce: 75,
  sticky: true,
  plugins: [sticky],
  onHide(instance) {
    $(instance.reference).css('outline', 'none')
  },
  onShow(instance) {
    $(instance.reference).css('outline', '1px dashed #e39774')
  }
}

const helpButton = `<button id='help1' class='help-next'>NEXT</button>`

export const helpJourneyInit = () => {
  $('#help').on('click', () => {
    help1[0].show()
  })

  const help1 = tippy('#question', {
    triggerTarget: [...$('#help')],
    content: `
    <div>
    <p>This is the Hiragana that you must memorize and answer</p>
    ${helpButton}
    </div>`,
    onShown(instance) {
      $('#help1').on('click', () => {
        help2[0].show()
        instance.hide()
      })
    },
    ...config,
  });

  const help2 = tippy('#answer-buttons', {
    content: `
    <div>
    <p>These are the answer and only one of these are the right one.</p>
    ${helpButton}
    </div>`,
    onShown(instance) {
      $('#help1').on('click', () => {
        help3[0].show()
        instance.hide()
      })
    },
    ...config,
  });

  const help3 = tippy('#hamburger', {
    content: `
    <div>
    <p>Click this button if you want to go to the level list page</p>
    ${helpButton}
    </div>`,
    onShown(instance) {
      $('#help1').on('click', () => {
        help4[0].show()
        instance.hide()
      })
    },
    ...config,
  });

  const help4 = tippy('#stats', {
    content: `
    <div>
    <p>This will progress as you choose the right answer</p>
    ${helpButton}
    </div>`,
    onShown(instance) {
      $('#help1').on('click', () => {
        wrongNotification('example', 'example')
        help5[0].show()
        instance.hide()
      })
    },
    ...config,
  });

  const help5 = tippy('#wrong-notif-container', {
    content: `
    <div>
    <p>This will appear if you choose the wrong answer</p>
    ${helpButton}
    </div>`,
    onShown(instance) {
      $('#help1').on('click', () => {
        $('#next-level').show()
        help6[0].show()
        instance.hide()
        $(instance.reference).empty()
      })
    },
    ...config,
    onHide(instance) {
      $(instance.reference).empty()
      $(instance.reference).css('outline', 'none')
    }
  });

  const help6 = tippy('#next-level', {
    content: `
    <div>
    <p>This will appear if your progress has exceeded 80%</p>
    <button id='help1' class='help-next'>FINISH</button>
    </div>`,
    onShown(instance) {
      $('#help1').on('click', () => {
        instance.hide()
        $(instance.reference).empty()
      })
    },
    ...config,
    onHide(instance) {
      $(instance.reference).hide()
      $(instance.reference).css('outline', 'none')
    }
  });
}



