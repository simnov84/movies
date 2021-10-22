// import logo from './logo.svg';
import './App.css';

function App() {
  
  const users = [
    {
      pic:"https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/Harry-Potter-Movies-in-Order.jpg",
      name:"Harry Potter",
      cast:"Daniel Radcliffe",
      dir:"Chris Columbus",
      desc:"Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledore's authority at Hogwarts and discredit Harry.", 
    },
    {
      pic:"https://i.ytimg.com/vi/5E1CHC3IWjQ/maxresdefault.jpg",
      name:"Tinker Bell",
      cast:"Mae Whitman",
      dir:"Bradley Raymond",
      desc:"When Tinker Bell learns that to visit the mainland she needs to have nature-talent, she sets out to acquire it with the help of her friends.", 
    },
    {
      name:"Jurassic World: Fallen Kingdom",
      pic:"https://cdn.vox-cdn.com/thumbor/lOTSFbg8VgcLNBuH8bubYYOdY2E=/0x0:3600x1508/1200x800/filters:focal(1909x517:2485x1093)/cdn.vox-cdn.com/uploads/chorus_image/image/59976727/2482_TP_00001R.0.jpeg",
      cast:"Chris Pratt and Bryce Dallas Howard",
      dir:"J.A.Bayona",
      desc:"After a volcano eruption proves to be a threat for the dinosaurs, Owen and Claire reach the defunct Jurassic World, a theme park, to save the animals from extinction.", 
    },
    {
      name:"Ballerina",
      pic:"https://m.media-amazon.com/images/M/MV5BMjMyODY0MDQ2M15BMl5BanBnXkFtZTgwMjQ5MjMyMDI@._V1_.jpg",
      cast:"Elle Fanning ",
      dir:"Eric Summer",
      desc:"In 19th century France, Felicie, an aspiring ballerina, escapes from the orphanage along with her best friend Victor, a young inventor. She soon becomes a pupil of a prestigious opera house.", 
    },
    {
      name:"The Lion King",
      pic:"https://images.hdqwalls.com/wallpapers/the-lion-king-4k-o1.jpg",
      cast:"Matthew Broderick",
      dir:"Rob Minkoff and Roger Allers",
      desc:"As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar. Years later, he returns as a young lion to reclaim his throne.", 
    },
  ];
  return (
    <div className="App">
      <span>MOVIES LIST</span>
      {
        users.map((user)=>(
          <Movie 
          name={user.name}
          pic={user.pic}
          cast={user.cast}
          dir={user.dir}
          desc={user.desc}/>
        ))
      }
    </div>
  );
}

function Movie({name,pic,cast,dir,desc}){
  
  return(
    <div>
      <img height="200" src={pic} alt={name}/>
      <h1 className="name">Movie Name: {name}</h1>
      <h3 className="cast">Cast: {cast}</h3>
      <h3 className="dir">Directed By: {dir}</h3>
      <p className="desc">{desc}</p><br></br>
      <hr></hr>
    </div>
  );
}
export default App;
