import React from "react"
import { NavBar } from "./NavBar"
import { Register } from "./Register"
import { CoolPlaces } from "./CoolPlaces"
import { TopCompanies } from "./TopCompanies"
import { InfyAd } from "./Infy_Ad"
import { WhyShine } from "./WhyShine"
import { Premium } from "./Premium"
import { Jobs } from "./Jobs"
import { Resume } from "./Resume"
import { Learning } from "./Learning"
import { Courses } from "./Courses"
import { Recruit } from "./Recruit"
import  {CareerAdvice} from "./CareerAdvice"
import styles from "../../styles/HomePage.module.css"
import { Movies } from "./Movies"
import { Footer } from "./Footer"
import { JobSearch } from "./JobSearch"
export function HomePage({ post,home,login,register,jobList}) {
    const [header, setHeader] = React.useState(false);
    return <React.Fragment>
        <div className={styles.homepage_body}>
            <NavBar home={home} post={post}/>
        <Register jobList={jobList} header={header} setHeader={setHeader} home={home} login={login} register={ register}/>
        <CoolPlaces />
        <TopCompanies />
        <InfyAd />
        <WhyShine />
        <Premium />
        <Jobs />
        <Resume />
        <Learning />
        <Courses />
        <JobSearch />
        <Recruit />
        <CareerAdvice />
        <Movies />
        <Footer />
        </div>
    </React.Fragment>
} 