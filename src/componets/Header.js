import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut
} from "../features/User/UserSlice"
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login'
import { auth, provider } from '../firebase'

function Header() {
    const dispatch = useDispatch()
    const history = useHistory()
    const userPhoto = useSelector(selectUserPhoto)
    const userName = useSelector(selectUserName)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push("/")
            }
        })
    })

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                let user = result.user
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push("/")
            })
    }

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(setSignOut())
                history.push("/login")
            })
    }

    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            {
                !userName ? (
                    <LoginContainer>
                        <LoginButton onClick={signIn}>Login</LoginButton>
                    </LoginContainer>) :
                    <>
                        <NavMenu>
                            <a>
                                <img src="/images/home-icon.svg" />
                                <span>HOME</span>
                            </a>
                            <a>
                                <img src="/images/search-icon.svg" />
                                <span>SEARCH</span>
                            </a>
                            <a>
                                <img src="/images/watchlist-icon.svg" />
                                <span>WATCHLIST</span>
                            </a>
                            <a>
                                <img src="/images/original-icon.svg" />
                                <span>ORIGINALS</span>
                            </a>
                            <a>
                                <img src="/images/movie-icon.svg" />
                                <span>MOVIES</span>
                            </a>
                            <a>
                                <img src="/images/series-icon.svg" />
                                <span>SERIES</span>
                            </a>
                        </NavMenu>
                        <SignOutContainer>
                            <UserImg src={userPhoto} />
                            <DropDown>
                                <DropDownItem>
                                    Profile
                                </DropDownItem>
                                <DropDownItem onClick={signOut}>
                                    SignOut
                                </DropDownItem>
                            </DropDown>
                        </SignOutContainer>
                    </>
            }
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;


        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                left: 0;
                right: 0;
                bottom: -6px;
                position: absolute;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        
        &:hover{
            span:after {
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }

    @media (max-width: 805px) {
        display: none;
    }
`

const SignOutContainer = styled.div`
    display: inline-block;
    position: relative;
    &:hover div{
        display: block;
    }

    @media (max-width: 805px) {
        width: 100%;
        text-align: right;
    }
`

const UserImg = styled.img`
    width: 35px;
    height: 35px;
    padding: 1px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 250ms ease 0s;

    &:hover {
        border: solid 2px #f9f9f9;
    }
`

const DropDown = styled.div`
    position: absolute;
    display: none;
    background-color: #f9f9f9;
    border-radius: 5px;
    right: 0;
    z-index: 5;

    &:after{
        content: "";
        position: absolute;
        top: -5px;
        right: 11px;
        display: block;
        border-bottom: solid 7px white;
        border-right: solid 7px transparent;
        border-left: solid 7px transparent;
    }
`

const DropDownItem = styled.span`
    display: block;
    color: black;
    padding: 5px 20px;
    cursor: pointer;
    transition: all 250ms;
    margin: 15px 0;

    &:hover{
        background-color: rgba(0,0,0,0.1);
    }
`

const LoginButton = styled.div`
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0,0,0, 0.6);
    transition: all 250ms ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
    }
`

const LoginContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`