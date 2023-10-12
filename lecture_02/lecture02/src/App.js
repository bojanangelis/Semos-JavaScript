import './App.css';
import Avatar from './Components/Avatar';
import Car from './Components/Car';
import Card from './Components/Card';
import ChildComponent from './Components/ChildComponent';
import StudentProfile from './Components/StudentProfile';
import ToDoList from './Components/ToDoList';

function App() {
  return (
    <div>
      <StudentProfile name={'Bojan Angjeleski'} program="finki" grade={4} />
      {/* <Car isOfRoad model={'Audi q3'} />
      <Car model={'Audi a3'} />
      <Car isOfRoad model={'Land Rover Discovery'}  type={'jeep'}/>
      <Car model={'Audi a3'} type={'car'} />
      <Car model={'BMW m3'} /> */}

      {/* <ToDoList cekirano todo={'create react app'} />
      isto kako na 13ta linija 
      <ToDoList cekirano={true} todo={'da igram dota posle'} />
      <ToDoList todo={'create react app'} /> */}

      {/* <ToDoList daliECekirano={false} imeNaProdukt='da kupam jajca' />
      <ToDoList daliECekirano={true} imeNaProdukt='da kupam mleko' /> */}
    
      {/* <Card>
        <Avatar
          person={{
          name: 'Lin Laying',
          hoby: 'I like to eat',
          image: 'https://i.imgur.com/1bX5QH6.jpg'}}     
          size={100} 
          />
        </Card>
        <Card>
        <Avatar 
          color='yellow'
          person={{
            name: 'Facebook',
            hoby: 'I am facebook',
            image: 'https://www.facebook.com/images/fb_icon_325x325.png'}} 
            size={80} 
          />
        </Card> */}
    </div>
  );
}
export default App;
