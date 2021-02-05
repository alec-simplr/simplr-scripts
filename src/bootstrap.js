import ReactDOM from 'react-dom';
import styled from 'styled-components/macro';
import icon from './icon.svg';
// import './index.css';

const Test = styled.h1`
  color: red;
  background: url('public/images/icon.svg');
`;

const obj = {
  a: 'A'
}

const text = obj?.b?.c || 'FALLBACK';
ReactDOM.render(<Test>{text}</Test>, document.querySelector('#root'));
