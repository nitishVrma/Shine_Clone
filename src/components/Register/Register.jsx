import React from "react"
import { RegisterContainer } from "./RegisterContainer"
import { RegisterDisclamer } from "./RegisterDisclamer"
import { RegisterNav } from "./RegisterNav"
import { RegisterFooter } from "./RegisterFooter"

export function Register({ home,register,login}) {
    return <React.Fragment>
        <RegisterNav login={login} register={register} home={ home}/>
        <RegisterContainer login={login} register={register} home={ home} />
        <RegisterDisclamer />
        <RegisterFooter/>
    </React.Fragment>
}