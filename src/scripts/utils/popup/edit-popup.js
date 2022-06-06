import { levelAPI } from '../../data/level-list_API'
import { dashboard } from '../../pages/dashboard'
import hidePopup from './hide-popup'
import popupInit from './popup-init'

export const editPopup = {
  render(question, answer, type) {
    let checkbox = []
    if (type === 'Add') {
      checkbox = `
      <div class="wrapper">
        <input type="radio" name="select" id="option-1" class='level3_checkpoint1' checked>
        <input type="radio" name="select" id="option-2" class='level6_checkpoint2'>
        <input type="radio" name="select" id="option-3" class='level9_checkpoint3'>
        <label for="option-1" class="option option-1">
          <span>Checkpoint 1</span>
        </label>
        <label for="option-2" class="option option-2">
          <span>Checkpoint 2</span>
        </label>
        <label for="option-3" class="option option-3">
          <span>Checkpoint 3</span>
        </label>
      </div>
      `
    }
    
    return `
      <section class='popup'>
        <div class='popup-content'>
          <h1 class='popup-title'>${type} Quiz</h1>
            <form class='popup-form'>
              <label for='edit-question'>${type} Question</label>
              <input value='${question}' id='edit-question' class='popup-input' type='text' placeholder='Question'/>
              <label for='edit-answer'>${type} Answer</label>
              <input value='${answer}' id='edit-answer' class='popup-input' type='text' placeholder='Answer'/>
              <button class='popup-button'>Save</button>
            </form>
          ${checkbox}
        </div>
      </section>
    `
  },

  popupRender(question, answer, type, id, index) {
    if (answer) {
      answer = answer.slice(8)
    }

    popupInit(this.render(question, answer, type))

    $('.popup-button').on('click', async (e) => {
      e.preventDefault()
      const question = $('#edit-question').val()
      const answer = $('#edit-answer').val()
      
      if (type === 'Add') {
        id = $('input[type="radio"]:checked').attr('class')
        index = getLength(id)
      } 

      levelAPI.setCheckpoint(id, index, question, answer)
      hidePopup()

      $('.checkpoint-container').empty()
      await dashboard.afterRender()
    })

    setTimeout(() => {
      $('#edit-question').focus()
    }, 600)

    $('.popup').on('click', (e) => {
      const target = $(e.target)
      if (target.is('.popup')) {
        hidePopup()
      }
    })
  }
}

const getLength = (id) => {
  return $(`#${id} .checkpoint-item`).length
}


