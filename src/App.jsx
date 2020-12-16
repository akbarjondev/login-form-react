import { useRef, useState } from 'react';
import { dictionary } from './data/data';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  // references
  const nameRef = useRef(null);
  const passRef = useRef(null);
  const conatinerRef = useRef(null);

  // states
  const [lang, setLang] = useState('uz');

  // checks length of inputs
  const checkLength = () => {
    nameRef.current.classList = 'form-control';
    passRef.current.classList = 'form-control';

    if (passRef.current.value.trim().length < 5) {
      passRef.current.classList.add('border-danger');
    } else {
      passRef.current.classList.add('border-success');
    }

    if (nameRef.current.value.trim().length < 3) {
      nameRef.current.classList.add('border-danger');
    } else {
      nameRef.current.classList.add('border-success');
    }
  }

  // change lang with select
  const changeLang = (e) => {
    setLang(e.target.value);
  }

  // switch day or night
  const switchDay = (e) => {
    document.getElementById('')
    conatinerRef.current.classList.toggle('bg-dark');
    if (Boolean(e.target.checked)) {
      console.log('on');
    } else {
      console.log('off')
    }
  }

  return (
    <div className='container' ref={conatinerRef}>
      <header className='d-flex align-items-center justify-content-between'>
        <h1 className='text-center'>{dictionary[lang].top}</h1>

        <div className="custom-control custom-switch">
          <input type="checkbox" className="custom-control-input" onClick={switchDay} id="customSwitch1" />
          <label className="custom-control-label" htmlFor="customSwitch1">Night/Light</label>
        </div>
      </header>

      <div className="form-group w-25">
        <select className='form-control' defaultValue={lang} onChange={changeLang}>
          <option value="uz">O'zbekcha</option>
          <option value="en">English</option>
        </select>
      </div>
      <div className="form-group">
        <label>
          {dictionary[lang].form_username}
          <input type="text" className="form-control" ref={nameRef} />
        </label>
        <br />
        <label>
          {dictionary[lang].form_password}
          <input type="password" className="form-control" ref={passRef} />
        </label>
      </div>

      <button className='btn btn-success' onClick={checkLength}>{dictionary[lang].button}</button>
      <p className="text-dark mt-5">{dictionary[lang].bottom}</p>
    </div>
  );
}

export default App;
