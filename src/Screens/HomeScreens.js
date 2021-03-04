import Typed from "react-typed";
import Animation from "../components/Animation";


const HomeScreens = () => {
    return (
        <>
        <Animation/>
        <div className="header-wraper">
            
            <div className="main-info">
                <h1>Welcome To My website </h1>
                <Typed
                className="typed-txt"
                strings={["Hello!!" , "My name is ","Zakariae Nasri","and im a Programmer"]} 
                typeSpeed={100}
                backSpeed={120}
                loop
                />
                <a href="#ab" className="btn-main-offer"> About Me</a>
            </div>
            
        </div>
        
        </>
    )
}

export default HomeScreens
