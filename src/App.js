import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Club from './components/Club/Club';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div>
      <Club></Club>
      <Questions></Questions>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
