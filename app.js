var interval = '';
var entry = `Hello World, and welcome X
            off the grid they call me Vlad X
            and I look something like this X`;
var img = '';
var bioHeader = `About Me : X`;
var bio = `I am a Front-End developer and an active contributor on several Blockchain projects. X
          Experienced with most Front-End stacks out there, framework wise I prefer VueJS. X
          I've been trading the financial markets for over 3 years now and have developed my own trading strategy. X
          Passionate about technology, philosophy & self improvement . . . X`;
var contactHeader = `Contact Details : X`;
var contact = 'X Feel free to contact me.';

var iterations = 0;

document.addEventListener("DOMContentLoaded", function() {
  img = $('pre').text();
  hideHelpers();
  animate();
});

async function animate() {
  interval = 80;
  await print(0, entry, '.entry');

  interval = 0;
  await print(0, img, '.img');

  interval = 100;
  await print(0, bioHeader, '.bio-header');
  interval = 65;
  await print(0, bio, '.bio');

  interval = 100;
  await print(0, contactHeader, '.contact-header');

  appendLinks();

  await print(0, contact, '.contact');
}

async function print(index, element, target) {
  if (index != element.length) {
    if (element[index] == 'X') {
      $(target).append('</br>');
    } else if (element.length == 2771) {
      var iterations = 0;
      while (iterations < 277) {
        for (var i = 0; i < 10; i++) {
          if (element[index] == 'X') {
            $(target).append('</br>');
          } else {
            $(target).append(element[index]);
          }
          index++;
        }
        await delayer();
        iterations++;
      }
    } else {
      $(target).append(element[index]);
    }
    index++;
    await delayer();
    return print(index, element, target);
  }
}

function delayer() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, interval);
  });
}

// Hides the setter elements in index.html
function hideHelpers() {
  // $('.entry').css('display', 'none');
  $('.entry').html('');
  $('pre').html('');
  $('.bio-header').html('');
  $('.bio').html('');
  $('.projects-header').html('');
  $('.contact-header').html('');
  $('.contact').html('');
  // $('body').css('color', '#81ec72');
}

async function appendLinks() {
  $('.contact').append(`<ul class="contact-list"></ul>`);
  await delayer();
  $('.contact-list').append(`<li><a href="https://www.linkedin.com/in/vladislav-proskurov-55182816b/">LinkedIn</a></li>`);
  await delayer();
  $('.contact-list').append(`<li><a href="https://github.com/0x566c6164">GitHub</a></li>`);
  await delayer();
  $('.contact-list').append(`<li><a href="mailto:vlad.ghost@gmail.com">Email</a>`);
  await delayer();
  $('.contact-list').append(`<li>Discord: <small>Frogger#2847<small></li>`);
}
