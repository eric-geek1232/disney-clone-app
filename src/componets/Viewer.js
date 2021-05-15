import React, {useState} from 'react'
import styled from 'styled-components'

function Viewer() {
    const [video, setVideo] = useState(0)
    
    return (
        <Container>
            <Wrap onMouseOver={() => setVideo(1)}
                onMouseOut={() => setVideo(0)}>
                <img src="./images/viewers-disney.png" />
                {(video==1) &&
                    <video
                        loop
                        autoPlay
                        muted
                        src="./videos/1564674844-disney.mp4" >
                    </video>
                }
            </Wrap>
            <Wrap onMouseOver={() => setVideo(2)}
                onMouseOut={() => setVideo(0)}>
                <img src="./images/viewers-pixar.png" />
                {(video==2) &&
                    <video
                        loop
                        autoPlay
                        muted
                        src="./videos/1564676714-pixar.mp4" >
                    </video>
                }
            </Wrap>
            <Wrap onMouseOver={() => setVideo(3)}
                onMouseOut={() => setVideo(0)}>
                <img src="./images/viewers-marvel.png" />
                {(video==3) &&
                    <video
                        loop
                        autoPlay
                        muted
                        src="./videos/1564676115-marvel.mp4" >
                    </video>
                }
            </Wrap>
            <Wrap onMouseOver={() => setVideo(4)}
                onMouseOut={() => setVideo(0)}>
                <img src="./images/viewers-starwars.png" />
                {(video==4) &&
                    <video
                        loop
                        autoPlay
                        muted
                        src="./videos/1608229455-star-wars.mp4" >
                    </video>
                }
            </Wrap>
            <Wrap onMouseOver={() => setVideo(5)}
                onMouseOut={() => setVideo(0)}>
                <img src="./images/viewers-national.png" />
                {(video==5) &&
                    <video
                        loop
                        autoPlay
                        muted
                        src="./videos/1564676296-national-geographic.mp4" >
                    </video>
                } 
            </Wrap>
        </Container>
    )
}

export default Viewer

const Container = styled.div`
    margin: 25px calc(3.5vw + 5px);
    display: grid;
    padding: 30px 0 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
    display: flex;
    position: relative;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%; 
        object-fit: cover;
    }

    video {
        position: absolute;
        width: 100%;
        border-radius: 7px;
        height: 100%;
        right: 0; 
        top: 0;
        bottom: 0;
        left: 0; 
        object-fit: cover;
        z-index: -5;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`