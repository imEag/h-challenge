import ReactDOM from "react-dom/client";
import App from './components/App';
import './styles/styles.sass';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <h1>hello from React index</h1>
        <App></App>
    </>
);
