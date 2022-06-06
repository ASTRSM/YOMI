import hidePopup from './hide-popup'
import popupInit from './popup-init'

export const editPopup = {
  render(question, answer) {
    return `
      <section class='popup'>
        <div class='popup-content'>
        <h1 class='popup-title'>Edit Quiz</h1>
          <form class='popup-form'>
            <label for='edit-question'>Edit Question</label>
            <input value='${question}' id='edit-question' class='popup-input' type='text' placeholder='Question'/>
            <label for='edit-answer'>Edit Answer</label>
            <input value='${answer}' id='edit-answer' class='popup-input' type='text' placeholder='Answer'/>
            <button class='popup-button'>Save</button>
          </form>
        </div>
      </section>
    `
  },

  popupRender(question, answer) {
    if (answer) {
      answer = answer.slice(8)
    }
    
    popupInit(this.render(question, answer))

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