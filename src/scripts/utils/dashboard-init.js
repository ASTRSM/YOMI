export const dashboardInit = () => {
  $('body').append(`
  <aside id='dashboard-link' class='bottom-right'>
    <a href="#/dashboard">
        <img src="./images/icons/dashboard.svg" height='20px' alt="dashboard logo">
        DASHBOARD
    </a>
  </aside>
  `)
}