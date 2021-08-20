import React from "react"
import ShowNavBar from "../showJobs/ShowNavBar"
import { ProfileContainer } from "./ProfileContainer"
import { LoginFooter } from "../Login/LoginFooter"
export function ProfilePage({setIsAuth,home, jobList,user,profile,showJob,login,isAuth}) {
    return <React.Fragment>
        <ShowNavBar isAuth={isAuth} login={login} setIsAuth={setIsAuth} home={home} jobList={jobList} user={user} showJob={showJob} profile={ profile}/>
        <ProfileContainer user={user} />
        <LoginFooter/>
    </React.Fragment>
}