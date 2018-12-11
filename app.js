var interval = '';
var entry = `Hello World, you're here to see my portfolio, right? X
            Well, first a bit about me, my name's Vlad X
            and I look something like this X`;
var img = '';
var bioHeader = `About Me : X`;
var bio = `I am a Front-End developer and an active contributor on several Blockchain projects. X
          Experienced with most Front-End stacks out there, framework wise I like Vuejs & Reactjs X
          I've been trading the financial markets for over 3 years now and have developed my own trading strategy. X
          Passionate about technology, philosophy & self improvement . . . X`;
var contactHeader = `Contact Details : X`;
var contact = 'X Feel free to contact me.';

var workHeader = `Work Experience: `;
var blockchainCategory = `Blockchain X `;
var otherCategory = `Other / Random X `;

var iterations = 0;

window.onload = function() {
  img = $('pre').text();
  hideHelpers();
  animate();
};

async function animate() {
  interval = 80; // 80
  await print(0, entry, '.entry');

  interval = 0;
  await print(0, img, '.img');

  interval = 80; // 80
  await print(0, bioHeader, '.bio-header');
  interval = 50;
  await print(0, bio, '.bio');

  interval = 80; // 80
  await print(0, contactHeader, '.contact-header');

  interval = 250; // 250
  await appendLinks('contact');

  interval = 50; // 50
  await print(0, contact, '.contact');

  interval = 80; // 80
  await print(0, workHeader, '.work-header');

  await print(0, blockchainCategory, '.blockchain-category');
  $('.blockchain-category').css('border-bottom', '1px solid green');
  await print(0, otherCategory, '.other-category');
  $('.other-category').css('border-bottom', '1px solid green');

  interval = 250; // 250
  await appendLinks('work');
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

async function appendLinks(trigger) {
  if(trigger == 'contact') {
    $('.contact').append(`<ul class="contact-list"></ul>`);
    await delayer();
    $('.contact-list').append(`<li><a href="https://www.linkedin.com/in/vladislav-proskurov-55182816b/" target="_blank">LinkedIn</a></li>`);
    await delayer();
    $('.contact-list').append(`<li><a href="https://github.com/0x566c6164" target="_blank">GitHub</a></li>`);
    await delayer();
    $('.contact-list').append(`<li><a href="mailto:vlad.ghost@gmail.com" target="_blank">Email</a>`);
    await delayer();
    $('.contact-list').append(`<li>Discord: <small>Frogger#2847<small></li>`);
    await delayer();
  } else if (trigger == 'work') {
    $('.box-1').append(`<ul class="blockchain-list"></ul>`);
    await delayer();
    $('.blockchain-list').append(`<li><p>0xBitcoin.org - Front-End community contributor <a href="https://github.com/GeoffedUP/0xbitcoin-web/commits/revamp" target="_blank">[Reference]</a></p></li>`);
    await delayer();
    $('.blockchain-list').append(`<li><p>Dexstreet.io ​-​ Front-End & Web3 Developer <a href="https://github.com/0x566c6164/Genr8-Web" target="_blank">[Reference]</a></p></li>`);
    await delayer();
    $('.blockchain-list').append(`<li><p>RabbitHub.io ​-​ Lead Developer <a href="https://github.com/0x566c6164/Smart-Contracts/tree/master/RabbitHub" target="_blank">[Reference]</a></p></li>`);
    await delayer();
    $('.box-2').append(`<ul class="other-list"></ul>`);
    await delayer();
    $('.other-list').append(`<li><p>Udacity Portfolio - Arcade game, Memory game, Test-Driven-Development with Jasmine, API's & Maps Responsive Design Accessibility & Semantics ServiceWorkers caching assets
    <a href="https://github.com/0x566c6164/Udacity-Projects" target="_blank">[Reference]</a></p></li>`);
    await delayer();
  }

}
