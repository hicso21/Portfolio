import Header from "./components/Header";
import Main from "./components/Main";
import ProjectModal from "./components/ProjectModal";
import { PageProvider } from "./lib/reducer/PageContext";
import "./styles/App.css";

function App() {
    return (
        <PageProvider>
            <main>
                <ProjectModal />
                <Header />
                <Main />
            </main>
        </PageProvider>
    );
}

export default App;
