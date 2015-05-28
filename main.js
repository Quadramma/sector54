
//PACKAGE OVERRIDE
//github:muut/riotjs -o "{main:'lib/riot+compiler'}"


//CSS

import './jspm_packages/npm/purecss@0.6.1-test-2/build/pure.css!';
import './jspm_packages/npm/purecss@0.6.1-test-2/build/grids-responsive.css!';
import './lib/css/helpers.css!';

//import {bootstrap} from './lib/bootstrap';
//bootstrap();

import {app} from './lib/app.js?123';
app();