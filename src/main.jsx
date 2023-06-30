import React from 'react';
import ReactDOM from 'react-dom/client';
//import { Padre } from './Padre';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { MemoHook } from './06-memos/MemoHook';
//import { Memorize } from './06-memos/Memorize';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FormWithCustomHook } from './01-useEffect/FormWithCustomHook';
//import { SimpleForm } from './01-useEffect/SimpleForm';
//import { CounterApp } from './02-useState/CounterApp';
import { CounterWithCustomHook } from './02-useState/CounterWithCustomHook';
//import { HooksApp } from './HooksApp';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <CounterWithCustomHook />
  //</React.StrictMode>,
)
