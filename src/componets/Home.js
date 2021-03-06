import React, {useEffect} from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import Viewer from './Viewer'
import db from '../firebase'
import {useDispatch} from 'react-redux'
import {setMovies} from '../features/movie/movieSlice'

function Home() {
    const dispatch = useDispatch();

    useEffect(()=>{
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc)=>{
                return{id: doc.id, ...doc.data()}
            })

            dispatch(setMovies(tempMovies))
        })
    }, [])

    return (
        <Container>
            <ImgSlider/>
            <Viewer/>
            <Movies/>
        </Container>
    )
}

export default Home


const Container = styled.main`
    min-height: calc(100vh - 70px);
    position: relative;
    overflow-x: hidden;

    &:before {
        content: "";
        background: url("./images/home-background.png") center center / cover no-repeat fixed;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -10;
    }
`