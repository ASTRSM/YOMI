import levelListData from "../data/level-list"

const levelList = {
  render () {
    return `
      <section id='level-list_container'>
        <h2>Level List</h2>
        <div id='level-list'>
        </div>
      </section>
    `
  },

  afterRender () {
    Object.keys(levelListData).forEach(level => {
      const levelButton = `<a href='#/level/${level}' id='${level}' class='level-item''>${level}</a>`
      $('#level-list').append(levelButton)
    })
  }
}

export default levelList;