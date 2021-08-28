import * as ReactDOM from 'react-dom'
import {FButton} from '../lib/index';

const root = document.createElement('div')
document.body.append(root)

const App = ()=>{
  return <div>
    <FButton>hi</FButton>
  </div>
}

ReactDOM.render(<App />, root)