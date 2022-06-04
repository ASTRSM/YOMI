const wrongNotification = (question, answer) => {
  $('#wrong-notif-container').html(`
    <div  id='wrong-notif'>
      <p id='wrong-notif-header'>Your answer was not correct</p>
      <p>The right answer for ${question} is ${answer}</p>
    </div>
  `);
}

export default wrongNotification;