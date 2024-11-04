import ButtonAppBar from "./navbar";
import newComponant from "./classComponant";
import './style/home.css'

export default function Home(props){
    return(
        <>
        <ButtonAppBar/>
        <div>
            <h1 className="title">welcome to home page{props.name}</h1>
        </div>
        </>
    )
}