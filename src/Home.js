const Home = () => {

  const handleClick = (name) => {
    console.log(`Hello, ${name}`);
  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={()=>handleClick('Waikau')}>Click Me!</button>
    </div>
   );
}
 
export default Home;