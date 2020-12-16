import { useState } from 'react';
import { dictionary } from '../data/data';

export default function Header() {
  // states
  const [lang, setLang] = useState('uz');

  // change lang with select
  const changeLang = (e) => {
    setLang(e.target.value);
  }

  // switch day or night
  const switchDay = () => {
    document.getElementById('body').classList.toggle('bg-dark');
  }

  return (
    <header className='d-flex align-items-center justify-content-between'>
      <h1 className='text-center my-4'>{dictionary[lang].top}</h1>

      <div className="custom-control custom-switch">
        <input type="checkbox" className="custom-control-input" onClick={switchDay} id="customSwitch1" />
        <label className="custom-control-label" htmlFor="customSwitch1">{dictionary[lang].switcher}</label>
      </div>
      <div className="form-group">
        <select className='form-control' defaultValue={lang} onChange={changeLang}>
          <option value="uz">UZB</option>
          <option value="en">ENG</option>
        </select>
      </div>
    </header>
  );
}