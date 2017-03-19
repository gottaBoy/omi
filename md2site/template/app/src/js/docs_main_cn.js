import Omi from 'omi';
import Frame from '../component/frame.js';
import AppStore from './app-store.js'

var store = new AppStore ({lan:'cn'})
Omi.useStore(store,true);

Omi.render(new Frame(),'body',true);