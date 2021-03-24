import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
import Multi, {BoaNoite} from './componentes/Multiplos'


const elemento = <h1>React 2</h1>
//ReactDOM.render(<Primeiro/>, document.getElementById('root'))
//ReactDOM.render(<BomDia nome = "Diego"/>, document.getElementById('root'))
ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana"/>
        <BoaNoite nome="Bia"/>
    </div>
, document.getElementById('root'))
