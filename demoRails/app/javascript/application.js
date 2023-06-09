// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://official-joke-api.appspot.com/random_joke';
    const jokeContainer = document.querySelector('[data-joke-container]');

    fetch(apiUrl).
      then(response => response.json()).
      then(data => {
        jokeContainer.innerHTML = data.setup + ' ' + data.punchline;
      });
  });
