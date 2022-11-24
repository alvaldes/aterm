let before = document.getElementById('before');
let liner = document.getElementById('liner');
let command = document.getElementById('typer');
let textarea = document.getElementById('texter');
let terminal = document.getElementById('terminal');

let commands = [];
let git = 0;

setTimeout(function () {
  loopLines(banner, '', 80);
  textarea.focus();
}, 100);

window.addEventListener('keyup', enterKey);
window.addEventListener('keydown', keyDown);

textarea.value = '';
command.innerHTML = textarea.value;

function keyDown(e) {
  if (e.ctrlKey && e.key == 'l') {
    e.preventDefault();
    cls();
  }
  if (e.key === 'Tab') {
    e.preventDefault();
    autoComplete();
  }
}

function enterKey(e) {
  if (e.keyCode == 13) {
    commands.push(command.innerHTML);
    git = commands.length;
    addLine('guest@aterm.com:~$ ' + command.innerHTML, 'no-animation', 0);
    commander(command.innerHTML.toLowerCase());
    command.innerHTML = '';
    textarea.value = '';
  }
  if (e.keyCode == 38 && git != 0) {
    git -= 1;
    textarea.value = commands[git];
    command.innerHTML = textarea.value;
  }
  if (e.keyCode == 40 && git != commands.length) {
    git += 1;
    if (commands[git] === undefined) {
      textarea.value = '';
    } else {
      textarea.value = commands[git];
    }
    command.innerHTML = textarea.value;
  }
}

function commander(cmd) {
  switch (cmd) {
    case 'about':
      loopLines(about, 'color margin', 80);
      break;
    case 'banner':
      loopLines(banner, '', 80);
      break;
    case 'clear':
      cls();
      break;
    case 'cls':
      cls();
      break;
    case 'email':
      addLine(
        'Opening mailto:<a href="mailto:angelluis2605@gmail.com">angelluis2605@gmail.com</a>...',
        'color2',
        80
      );
      newTab(email);
      break;
    case 'gui':
      addLine('Opening GUI version...', 'color2', 80);
      newTab(website);
      break;
    case 'help':
      loopLines(help, 'color margin', 80);
      break;
    case 'history':
      addLine('<br>', '', 0);
      loopLines(commands, 'color2', 80);
      addLine('<br>', 'command', 80 * commands.length + 50);
      break;
    case 'projects':
      loopLines(projects, 'color margin', 80);
      break;
    case 'repo':
      addLine('Opening the source code...', 'color2', 80);
      newTab(repo);
      break;
    case 'social':
      loopLines(social, 'color margin', 80);
      break;
    case 'twitter':
      addLine('Opening Twitter...', 'color2', 0);
      newTab(twitter);
      break;
    case 'linkedin':
      addLine('Opening LinkedIn...', 'color2', 0);
      newTab(linkedin);
      break;
    case 'github':
      addLine('Opening GitHub...', 'color2', 0);
      newTab(github);
      break;
    case 'theme':
      loopLines(help, 'color margin', 80);
      break;
    case 'weather':
      loopLines(help, 'color margin', 80);
      break;
    default:
      addLine(
        '<span class="inherit">Command not found. For a list of commands, type <span class="command">\'help\'</span>.</span>',
        'error',
        100
      );
      break;
  }
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, '_blank');
  }, 500);
}

function addLine(text, style, time) {
  let t = '';
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == ' ' && text.charAt(i + 1) == ' ') {
      t += '&nbsp;&nbsp;';
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    let next = document.createElement('p');
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, timeout) {
  name.forEach((item, index) => {
    addLine(item, style, index * timeout);
  });
}

function cls() {
  setTimeout(function () {
    terminal.innerHTML = '<a id="before"></a>';
    before = document.getElementById('before');
  }, 1);
}

function autoComplete() {
  let arr = existCommands.filter((item) => item.startsWith(command.innerHTML));
  if (arr.length === 1) {
    textarea.value = arr[0];
    command.innerHTML = arr[0];
  }
}
