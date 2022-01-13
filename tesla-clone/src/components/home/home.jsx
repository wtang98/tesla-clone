import React,{useState, useEffect} from 'react'
import './home.scss'
import DownArrow from '../../assets/icons/down-arrow.svg';
import Section from './sections/section';
import modelYBackGround from "../../assets/images/model-3.jpg"


const totalScreenHeight = window.innerHeight;

const Home = ({menuState}) => {
    const [showModel3, setShowModel3] = useState(false);
    const [showModelY, setShowModelY] = useState(true);
    const [showModelS, setShowModelS] = useState(true);
    const [showModelX, setShowModelX] = useState(true);
    const [solar, setSolar] = useState(true)
    const [acc, setAcc] = useState(true)
    
    window.onbeforeunload = function(){
        window.scrollTo(0, 0);
    }

    // console.log(totalScreenHeight, document.documentElement.scrollTop)
    // const controller = () => {
    //     if(document.documentElement.scrollTop>totalScreenHeight*0.01){
    //         setShowModel3(true)
    //     }else if(document.documentElement.scrollTop>totalScreenHeight*0.14){
    //         setShowModel3(true)
    //         setShowModelY(false)
    //     }else if(document.documentElement.scrollTop>totalScreenHeight*0.3){
    //         setShowModel3(true)
    //         setShowModelY(true)
    //         setShowModelS(false)
    //     }else if(document.documentElement.scrollTop>totalScreenHeight*0.43){
    //         setShowModel3(true)
    //         setShowModelY(true)
    //         setShowModelS(true)
    //         setShowModelX(false)
    //     }else if(document.documentElement.scrollTop>totalScreenHeight*0.64){
    //         setShowModel3(true)
    //         setShowModelY(true)
    //         setShowModelS(true)
    //         setShowModelX(true)
    //         setSolar(false)
    //     }else if(document.documentElement.scrollTop>totalScreenHeight*0.81){
    //         setShowModel3(true)
    //         setShowModelY(true)
    //         setShowModelS(true)
    //         setShowModelX(true)
    //         setSolar(true)
    //         setAcc(false)
    //     }
    // }
    // useEffect(() => {
    //     window.addEventListener("scroll",
    //     controller)
    //     return () => {
    //         window.removeEventListener('scroll',
    //         controller)
    //     }
    // }, [])

    const controlModel3 = () => {
        if(document.documentElement.scrollTop> totalScreenHeight*0){
            setShowModel3(true)
        }else{
            setShowModel3(false)
        }
    }
    const controlModelY = () => {
        if(document.documentElement.scrollTop>totalScreenHeight*0.9){
            setShowModel3(true)
            setShowModelY(false)
        }else{
            setShowModelY(true)
        }
    } 
    const controlModelS = () => {
        if(document.documentElement.scrollTop>totalScreenHeight*1.9){
            setShowModelY(true)
            setShowModelS(false)
        }else{
            setShowModelS(true)
        }
    }
    const controlModelX = () => {
        if(document.documentElement.scrollTop>totalScreenHeight*2.9){
            setShowModelS(true)
            setShowModelX(false)
        }else{
            setShowModelX(true)
        }
    }
    const controlSolar = () => {
        if(document.documentElement.scrollTop>totalScreenHeight*3.9){
            setShowModel3(true)
            setShowModelY(true)
            setShowModelS(true)
            setShowModelX(true)
            setSolar(false)
        }else{
            setSolar(true)
        }
    }
    const controlAcc = () => {
        if(document.documentElement.scrollTop>totalScreenHeight*4.9){
            setShowModel3(true)
            setShowModelY(true)
            setShowModelS(true)
            setShowModelX(true)
            setSolar(true)
            setAcc(false)
        }else{
            setAcc(true)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", 
        controlModel3)
        return () => {
            window.removeEventListener('scroll',
            controlModel3)
        }
    }, [])
    useEffect(() => {
        window.addEventListener("scroll",
        controlModelY)
        return () => {
            window.removeEventListener('scroll',
            controlModelY)
        }
    }, [])
    useEffect(() => {
        window.addEventListener("scroll",
        controlModelS)
        return () => {
            window.removeEventListener('scroll',
            controlModelS)
        }
    }, [])
    useEffect(() => {
        window.addEventListener("scroll",
        controlModelX)
        return () => {
            window.removeEventListener('scroll',
            controlModelX)
        }
    }, [])
    useEffect(() => {
        window.addEventListener("scroll",
        controlSolar)
        return () => {
            window.removeEventListener('scroll',
            controlSolar)
        }
    }, [])
    useEffect(() => {
        window.addEventListener("scroll",
        controlAcc)
        return () => {
            window.removeEventListener('scroll',
            controlAcc)
        }
    }, [])

    return (
        <>
        <div className='home'  style={{filter: menuState && 'blur(8px)'}} >
            <div className='home__textOverlay'>
                <div className={`home__textOverlay-model3 ${showModel3 && `gonZo`}`}>
                    <div className='home__textOverlay-model3-top'>
                        <h1>Model 3</h1>
                        <h2>1% Company Car Tax. Learn More</h2>
                    </div>
                    <div className='home__textOverlay-model3-buttons'>
                        <div className='modelButtons'>
                            <button className='greyButton'>CUSTOM ORDER</button>
                            <div className='space'></div>
                            <button className='whiteButton'>AVAILABLE INVENTORY</button>
                        </div>
                        <div className='testDrive'>Schedule a Touchless Test Drive</div>
                        <img src={DownArrow} alt="" />
                    </div>
                </div>
            </div>
            <section className='home__model3'></section>
            <Section model={'modelY'} 
                showModel={showModelY} 
                title="Model Y"
                buttonText={"CUSTOM ORDER"}
                hasWhiteButton={true}
                />
            <Section model={"modelS"} 
                showModel={showModelS} 
                title="Model S"
                buttonText={"CUSTOM ORDER"}
                hasWhiteButton={true}
                />
            <Section model={"modelX"} 
                showModel={showModelX} 
                title="Model X"
                buttonText={"CUSTOM ORDER"}
                hasWhiteButton={true} 
                />
            <Section model={"solar"} 
                showModel={solar} 
                title="Solar and Powerwall"
                buttonText={"LEARN MORE"}
                hasWhiteButton={false}
                />
            <Section model={"acc"} 
                showModel={acc} 
                title="Accessories"
                buttonText={"SHOP NOW"}
                hasWhiteButton={false} 
                />
                
        </div>
        </>
    )
}

export default Home