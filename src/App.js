import './App.css';
import styles from './Nav.module.css';

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.content}
    </header>
  );
}

const Nav = (props) => {
  return (
    <nav>
      <ul className={styles.border}>
        <li><a href="1.html">{props.list1}</a></li>
        <li><a href="2.html">{props.list2}</a></li>
        <li><a href="3.html">{props.list3}</a></li>
      </ul>
    </nav>
  );
};

const MyComponent = (props) => {
  return (
    <div>
      <h1>{props.data1}</h1>
      <h1>{props.data2}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header title='WEB' content='World Wide Web!' />
      <hr></hr>
      <Nav list1='HTML' list2='CSS' list3='JavaScript' />
      <MyComponent data1="Hello" data2="React" />
    </div>
  );
}

export default App;