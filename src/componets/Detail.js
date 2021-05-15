import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase'

function Detail() {
    const { id } = useParams()
    const [movie, setMovie] = useState()

    useEffect(() => {
        db.collection("movies").doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setMovie(doc.data())
                } else {

                }
            })
    }, [])

    console.log(movie);
    return (
        <Container>
            {
                movie && (
                    <>
                        <Background>
                            <img src={movie.backgroundImg} />
                        </Background>
                        <ImageTitle>
                            <img src={movie.titleImg} />
                        </ImageTitle>
                        <Controls>
                            <PlayButton>
                                <img src="/images/play-icon-black.png" />
                                <span>PLAY</span>
                            </PlayButton>
                            <TrailerButton>
                                <img src="/images/play-icon-white.png" />
                                <span>TRAILER</span>
                            </TrailerButton>
                            <CircleButtonsContainer>
                                <AddButton>
                                    <span>
                                        +
                                </span>
                                </AddButton>
                                <GrupWatchButton>
                                    <img src="/images/group-icon.png" />
                                </GrupWatchButton>
                            </CircleButtonsContainer>
                        </Controls>
                        <SubTitle>
                            {movie.subTitle}
                        </SubTitle>
                        <Description>
                            {movie.description}
                        </Description>
                    </>
                )
            }
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: rgba(0,0,0,0.7);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-width: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 50px;
    margin-bottom: 20px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

const PlayButton = styled.button`
    height: 56px;
    width: 130px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    display: flex;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    font-size: 15px;
    align-items: center;
    justify-content: center;
    transition-duration: 300ms;

    &:hover{
        background: rgb(198,198,198);
    }
`
const TrailerButton = styled(PlayButton)`
    border: solid 1px rgb(249, 249, 249);
    background: rgba(0,0,0,0.3);
    color: rgb(249, 249, 249);
`

const AddButton = styled.button`
    border-radius: 50%;
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 2px white;
    cursor: pointer;
    background: rgba(0,0,0, 0.6);

    span {
        font-size: 30px;
        color: white;
    }
`
const GrupWatchButton = styled(AddButton)`
    background: rgb(0,0,0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
`

const CircleButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65px;
`