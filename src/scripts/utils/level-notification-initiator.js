let timer = null
const wrongNotification = (question, answer) => {
  $('#wrong-notif-container').html(`
    <div  id='wrong-notif'>
      <p id='wrong-notif-header'>Your answer was not correct</p>
      <p>The right answer for ${question} is ${answer}</p>
    </div>
  `);
  $('#wrong-notif-container').css('transform', 'translateY(2rem)');
 

  const hide = () => {
    $('#wrong-notif-container').css('transform', 'translateY(-120%)')
  }

  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  timer = setInterval(hide, 8000)
}

export default wrongNotification;