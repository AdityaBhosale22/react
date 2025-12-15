import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx';
import Youtube from './Youtube.jsx';

function Myapp(){
  return (
    <div>
      <h1>Hello from my react app</h1>
    </div>
  )
}

const areactElement = React.createElement(
  'a',
  {href: "https://www.youtube.com" , target: "_blank"},
  'Go to Youtube'
)

ReactDOM.createRoot(document.getElementById('root')).render(
 areactElement
);