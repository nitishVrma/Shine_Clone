import React from "react"
import { LoginContainer } from "./LoginContainer"
import { LoginFooter } from "./LoginFooter"
import { LoginNav } from "./LoginNav"


export function Login({ home, register, login, user, setUser, setIsAuth, showJob }) {
    return <React.Fragment>

        <LoginNav home={home} register={ register} login={login} />
        <LoginContainer  showJob={showJob} home={home} register={register} login={login} user={user} setUser={setUser} setIsAuth={ setIsAuth}/>
        <LoginFooter/>

    </React.Fragment>
}