import React from 'react';
import ReactDOM from 'react-dom';

import Pet from './Pet';


const App = () => {

    return (
        <div>
            <h1> Adopt Me! </h1>

            <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Pepper" animal="Bird" breed="Cockateil" />
            <Pet name="Doink" animal="Cat" breed="Mix" />
        </div>
    )

};


ReactDOM.render(React.createElement(App), document.querySelector("#root"));

export default App;