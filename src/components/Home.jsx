import LogoMain from '../assets/LogoMain.png'

function Home(){
    return(
        <div>
            <h1>welcome !</h1>
            <img src={LogoMain} alt="main logo" id='imageLogo'/>
        </div>
    )
}



export default Home;