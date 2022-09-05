import ReactDOM from "react-dom/client";
import App from './components/App';

import { PageProvider } from "./components/context/PageContext";
import { UserDataProvider } from "./components/context/UserDataContext";

import 'normalize.css';
import './scss/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <PageProvider>
        <UserDataProvider>
            <App></App>
        </UserDataProvider>
    </PageProvider>
);
