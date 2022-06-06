import { levelAPI } from '../data/level-list_API'
import { editPopup } from '../utils/popup/edit-popup'

export const dashboard = {
  render() {
    $('#dashboard-link').remove()
    return `
    <section id='dashboard-container'>
      <div id='dashboard-header'>
        <h1>DASHBOARD</h1>
        <input id='dashboard-search' type='text' placeholder='Search'/>
      </div>
      <div class='checkpoint-container'>
      </div>
      <button id='add-button' class='bottom-right'>&#65291;</button>
    </section>
    `
  },

  async afterRender() {
    const levelListData = await levelAPI.getLevelList()
    const checkpoint = getCheckpoint(levelListData)

    checkpoint.forEach((checkpoint) => {
      $('.checkpoint-container').append(`
        <div class='checkpoint-header'>
          <h2>CHECKPOINT ${checkpoint.slice(-1)}</h2>
        </div>
        <div class='checkpoint-list ${checkpoint}'></div>
      `)

      levelListData[checkpoint].forEach((level) => {
        $(`.${checkpoint}`).append(`
          <div class='checkpoint-item'>
            <h3>Quiz Question</h3>
            <h2>${level.question}</h2>
            <h4>Answer: ${level.answer}</h4>
            <div class='checkpoint-item-buttons'>
              <button class='checkpoint-item-button edit-button'>Edit</button>
              <button class='checkpoint-item-button delete-button'>Delete</button>
            </div>
          </div>
          `)
      })
    })

    $('#dashboard-search').on('input', (e) => {
      const search = e.target.value.toLowerCase()
      $('.checkpoint-item').each((index, item) => {
        const question = $(item).find('h2').text().toLowerCase()
        console.log(item);
        if (question.includes(search)) {
          $(item).show()
        } else {
          $(item).hide()
        }
      })
    })

    $('.edit-button').on('click', (e) => {
      const question = $(e.target).parent().parent().find('h2').text()
      const answer = $(e.target).parent().parent().find('h4').text()
      editPopup.popupRender(question, answer)
    })

    $('.delete-button').on('click', (e) => {})

    $('#add-button').on('click', () => {
      editPopup.popupRender('', '')
    })
  }
}

const getCheckpoint = (levelListData) => {
  return Object.keys(levelListData).filter((key) => {
    return key.includes('checkpoint')
  })
}
