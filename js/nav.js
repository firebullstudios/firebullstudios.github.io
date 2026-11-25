function loadNavbar()
{
  fetch('navbar.html')
      .then(response => 
        {
        if (!response.ok) throw new Error('Component not found');
        return response.text();
      })
      .then(html => {
        document.getElementById('navbar-container').innerHTML = html;
      })
      .catch(error => console.error('Error loading component:', error));
}

loadNavbar();