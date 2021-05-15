import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'

function Movies() {
    const movies = useSelector(selectMovies)

    return (
        <>
            <Container>
                <h4>Recommended for you</h4>
                <Content>
                    {
                        movies &&
                        movies.map((movie) => (
                            <Wrap key={movie.id}>
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg} />
                                </Link>
                            </Wrap>
                        ))
                    }
                </Content>
            </Container>
            <Container>
                <h4>Featured</h4>
                <Content>
                    {
                        movies &&
                        movies.map((movie) => (
                            <Wrap key={movie.id}>
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg} />
                                </Link>
                            </Wrap>
                        ))
                    }
                </Content>
            </Container>
            <Container>
                <h4>Continue watching</h4>
                <Content>
                    {
                        movies &&
                        movies.map((movie) => (
                            <Wrap key={movie.id}>
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg} />
                                </Link>
                            </Wrap>
                        ))
                    }
                </Content>
            </Container>
            <Container>
                <h4>Movies</h4>
                <Content>
                    {
                        movies &&
                        movies.map((movie) => (
                            <Wrap key={movie.id}>
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg} />
                                </Link>
                            </Wrap>
                        ))
                    }
                </Content>
            </Container>
        </>
    )
}

export default Movies

const Container = styled.div`
    h4 {
        margin-left: 10px;
    }
`

const Content = styled.div`
    display: flex;
    overflow-x: auto;
    margin-bottom: 20px;
    padding: 10px;

    &::-webkit-scrollbar {
        display: none;
    }
`
const Wrap = styled.div`
    min-width: 270px;
    height: 150px;
    line-height: 110px;
    cursor: pointer;
    margin: 0px 30px 40px 0px; 
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%; 
        object-fit: cover;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`