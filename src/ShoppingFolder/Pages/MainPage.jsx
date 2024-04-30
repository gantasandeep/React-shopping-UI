import React ,{useState}from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Collections from '../Components/Collections';
import Footer from '../Components/Footer';
import { Gents } from '../data';
import { Ladies } from '../data';
import WomenCollections from '../Components/WomenCollections';
const MainPage=()=>
{
    const[gents,setGents]=useState(Gents);
    const[ladies,setLadies]=useState(Ladies);
    return (
        <div>
            <Header/>
            <Banner/>
            <Collections gents={gents} />
            <WomenCollections ladies={ladies}/>
            <Footer/>

        </div>
    )
}
export default MainPage;