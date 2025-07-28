import { DetailProvider } from './components/ReactProjectCC2/Context/Context';
import LoginRouting from './components/routers/LoginRouter';
function App() {
  return (
    <div className='App'>
      <DetailProvider>
        <LoginRouting/>
      </DetailProvider>
    </div>
  );
}

export default App;