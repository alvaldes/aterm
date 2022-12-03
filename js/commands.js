let twitter = 'http://www.twitter.com/alvaldes_';
let linkedin = 'https://www.linkedin.com/in/alvaldes/';
let github = 'https://github.com/alvaldes/';
let email = 'mailto:angelluis2605@gmail.com';
let website = 'https://www.alvaldes.vercel.app/';
let repo = 'https://github.com/alvaldes/aterm';
let existCommands = [
  'about',
  'banner',
  'clear',
  'cls',
  'date',
  'email',
  'github',
  'gui',
  'help',
  'history',
  'linkedin',
  'projects',
  'repo',
  'social',
  'theme',
  'theme ls',
  'theme set',
  'twitter',
  'weather',
];

about = ["Hello, I'm Angel Valdés👋"];

social = [
  'twitter           <a href="' +
    twitter +
    '" target="_blank">twitter/alvaldes_</a>',
  'linkedin          <a href="' +
    linkedin +
    '" target="_blank">linkedin/alvaldes</a>',
  'github            <a href="' +
    github +
    '" target="_blank">github/alvaldes</a>',
];

projects = ['On Progress ......'];

themes = ['dark', 'light'];

theme = [
  'Usage: theme [arg]',
  'Args:',
  '  - ls: list all available themes',
  '  - set: set a theme',
  '  - random: set a tandom theme',
  '<br>',
  'Example:',
  '  theme ls # to list all available themes',
  '  theme set light # to set a theme',
];

help = [
  '<span class="command">about</span>              Who is alvaldes?',
  '<span class="command">banner</span>             Display the header',
  '<span class="command">clear | cls</span>        Clear the teminal',
  '<span class="command">date</span>               Display the actual date',
  '<span class="command">email</span>              Send me an email',
  '<span class="command">gui</span>                Open the Portfolio Website',
  '<span class="command">help</span>               Check available commands',
  '<span class="command">history</span>            View command history',
  '<span class="command">projects</span>           View coding projects',
  '<span class="command">repo</span>               Open the source code',
  '<span class="command">social</span>             Display social networks',
  '<span class="command">theme</span>              Theme configurations',
  '<span class="command">weather</span>            Display the weather of a [city]',
  '<br>',
  '[TAB]              Trigger completion',
  '[Ctrl+l]           Clear terminal',
  '[Ctrl+p]           Go back to previous command',
];

banner = [
  '<span class="index">All up to date | aterm v1.0. </span>',
  '              .          .              ,                ,    ,          .                 .',
  '.        &bsol;          .                  __       .           *            ,',
  '   .      &bsol;   ,                       /&bsol; &bsol;__',
  '.          o     .            .__     &bsol; &bsol; ,_&bsol;     __    _ __    ___ ___.            .',
  '  .         &bsol;            ,   /&#39;__`&bsol;    &bsol; &bsol; &bsol;/   /&#39;__`&bsol; /&bsol;`&#39;__&bsol;/&#39; __` _` &bsol;       .',
  '            #&bsol;##&bsol;#    .     /&bsol; &bsol;L&bsol;.&bsol;_   &bsol; &bsol; &bsol;_ /&bsol;  __/ &bsol; &bsol; &bsol;/ /&bsol; &bsol;/&bsol; &bsol;/&bsol; &bsol;    .        .',
  '          #  #O##&bsol;###     . &bsol; &bsol;__/.&bsol;_&bsol;   &bsol; &bsol;__&bsol;&bsol; &bsol;____&bsol; &bsol; &bsol;_&bsol; &bsol; &bsol;_&bsol; &bsol;_&bsol; &bsol;_&bsol;            .',
  '.        #*#  #&bsol;##&bsol;###       &bsol;/__/&bsol;/_/    &bsol;/__/ &bsol;/____/  &bsol;/_/  &bsol;/_/&bsol;/_/&bsol;/_/     .       ,',
  '     .   ##*#  #&bsol;##&bsol;##               .                     .          ,                   .        ,',
  '   .      ##*#  #o##&bsol;#         .                             ,       .       ,               .   ',
  '       .     *#  #&bsol;#     .                    .             .          ,                .    ',
  '                   &bsol;          .                         .           .             ,       .',
  '____^/___^--____/___O______________//---/___________---__/____O______//---/________',
  "/^   ^  ^    ^                  ^^ ^  ' ^          ^       --^    ^                  ^^ ^  ' ^ -",
  '--  __      --  -      -  ---  --  ____--  ^  ^  -  --  __    ___--  ^___@alvaldes --  __',
  '<span class="color2">Welcome to my interactive web terminal.</span>',
  '<span class="color2">For a list of available commands, type</span> <span class="command">\'help\'</span><span class="color2">.</span>',
];
