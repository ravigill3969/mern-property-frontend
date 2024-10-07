import { useEffect } from "react";

function Home() {
    useEffect(() => {
      
        document.title = "Home - togthr2sale"; 
      }, []); 
    
  return (
    <div>Home</div>
  )
}

export default Home