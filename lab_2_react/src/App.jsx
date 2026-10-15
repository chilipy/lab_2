import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <Header />
            <hr />
            <main>
                <Education />
                <Experience />
            </main>
            <Footer />
        </div>
    );
}

export default App;