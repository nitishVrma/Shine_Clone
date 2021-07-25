import React from "react"
import styled from "styled-components"
import styles from "./ShowNavBar.module.css"
import {useState} from "react"
const SearchJobs=styled.div`
width: 8%;
background-color: #ffffff;
color: #707070;
 position: absolute;
 top: 5.8%;
 left: 7%;
padding: 1%;
box-shadow:  5px 5px 3px #eeee,
             -5px -5px 3px #ffff;

`;

const  Profile=styled.div`
width: 8%;
background-color: #ffffff;
color: #707070;
 position: absolute;
 top: 5.8%;
 left: 26%;
padding: 1%;
box-shadow:  5px 5px 3px #eeee,
             -5px -5px 3px #ffff;

`;

const  Service=styled.div`
width: 18%;
background-color: #ffffff;
color: #707070;
 position: absolute;
 top: 5.8%;
 left: 32%;
padding: 1%;
box-shadow:  5px 5px 3px #eeee,
             -5px -5px 3px #ffff;

 >div{
     display: flex;
     justify-content: space-between;
 } 
 >div div{
   width: 48%;
 }             

`;
const SignOut=styled.div`
width: 8%;
background-color: #ffffff;
color: #707070;
 position: absolute;
 top: 5.8%;
 left: 88%;
 cursor: pointer;
padding: 0.5%;
box-shadow:  5px 5px 3px #eeee,
             -5px -5px 3px #ffff;

`;


export default function ShowNavBar({setIsAuth,home,user,jobList,profile,showJob}) {
const [searchJobContent,setSearchJobContent]=useState(false);
const [profileContent,setProfileContent]=useState(false);
const [serviceContent,setServiceContent]=useState(false);
const [singnOut,setSignout]=useState(false)
    const handleSearchJob=()=>{
        setSearchJobContent(!searchJobContent)
        setProfileContent(false)
        setServiceContent(false)
      setSignout(false)
      showJob()
  }
   const handleProfile=()=>{
    setSearchJobContent(false)
    setProfileContent(!profileContent)
    setServiceContent(false)
    setSignout(false)
   }

 const handleServices=()=>{
    setServiceContent(!serviceContent)
    setSearchJobContent(false)
    setProfileContent(false)
    setSignout(false)
 }

 const handleSignprofile=()=>{
    setSignout(!singnOut)
    setSearchJobContent(false)
    setProfileContent(false)
    setServiceContent(false)


 }

    return  <nav className={styles.nav}>
            <div className={styles.nav_left}>
            <img src={process.env.PUBLIC_URL + "/NavBar_Logo.png"} alt="Logo" className={styles.logo}/>
                <li className={styles.nav_tab} onClick={handleSearchJob}>Search Jobs</li>
                <li className={styles.nav_tab} onClick={()=>{jobList()}} >Jobs For You</li>
                <li className={styles.nav_tab}>Mailbox</li>
                <li className={styles.nav_tab} onClick={handleProfile}>My Profile</li>
                <li className={styles.nav_tab} onClick={handleServices}>Services</li>
            <li className={styles.career_guidance}><img src={process.env.PUBLIC_URL + "./Career_bulb.PNG"  } alt="career"/>Career Guidance</li>
            </div>
            <div className={styles.nav_profile} onClick={handleSignprofile}>{"hi, "+user.name}</div>
          {(searchJobContent)?<SearchJobs>
                  <p>Jobs by City</p>
                  <p>Jobs by Skills</p>
                  <p>Jobs by Course</p>
                  <p>Jobs by Education</p>
                  <p>Jobs by company</p>
                  <p>Jobs by Designation</p>
          </SearchJobs> : ""}

          {(profileContent)?<Profile>
        <p style={{ cursor:"pointer",marginTop:"5px"}} onClick={() => { profile() } }>Profile</p>
                  <p style={{ cursor:"pointer",marginTop:"5px"}}>Recrutier Action</p>
                  
          </Profile> : ""}
          {(serviceContent)?<Service>
                   <div>
                       <div style={{borderRight:"1px solid grey"}}>
                           <h4>E-Learning</h4>
                           <p>Digital Marketing</p>
                           <p>Data Science</p>
                           <p>Cloud Computing</p>
                           <p>GST</p>
                           <p>Project management</p>
                       </div>
                       <div>
                       <h4>Resume Service</h4>
                       <p>Resume Writing</p>
                           <p>International Resume</p>
                           <p>Linkedin Profile Writing</p>
                           <p>Jobs on the Move</p>
                           <p>Resume Format</p>

                       </div>
                   </div>
                  
          </Service> : ""}

          {(singnOut)?<SignOut>
              <p style={{ cursor:"pointer",margin:"5px"}}>Account setting</p>
        <p onClick={() => {
          alert("You Have Successfully logged out");
          localStorage.setItem("isAuth", false);
          localStorage.setItem("user", JSON.stringify([{}]));
          setIsAuth(false);
          setTimeout(() => {
            home();
}, 100);
        }} style={{ cursor:"pointer",margin:"5px"}}>Sign Out</p>


          </SignOut>: ""

          }
            
            
    </nav>
    
}