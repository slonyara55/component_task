import './App.css';
import Card from '../src/component/Card'
import Cat from '../src/images/cat.jpeg'



const currentDate = new Date();
console.log(currentDate);



function App() {
  return (
    <div className="App">
      <Card title={'Картинка кошки текст в одну строку'} src={Cat}  text={'Текст в несколько строкТекст в несколько строкТекст в несколько строкТекст в несколько строкТекст в несколько строкТекст в несколько строкТекст в несколько строк'}/>
      <Card title={'Картинка кошки текст в одну строку'} src={Cat}  text={'Текст в несколько строк'}/>


    </div>
  );
}

export default App;
