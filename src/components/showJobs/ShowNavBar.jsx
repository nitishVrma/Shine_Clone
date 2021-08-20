import React from "react"
import styles from "../../styles/ShowNavBar.module.css"
import { useState } from "react"
import { SearchJobs, Profile,Service,SignOut} from "../../styled-components/styled-components";

export default function ShowNavBar({isAuth,setIsAuth,login,home,user,jobList,profile,showJob}) {
const [searchJobContent,setSearchJobContent]=useState(false);
const [profileContent,setProfileContent]=useState(false);
const [serviceContent,setServiceContent]=useState(false);
  const [singnOut, setSignout] = useState(false);
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
  React.useEffect(() => {
    if (user.name === undefined) {
      user.name = "User";
    }
  }, [user]);
    return  <nav className={styles.nav}>
            <div className={styles.nav_left}>
            <img onClick={home} src={process.env.PUBLIC_URL + "/NavBar_Logo.png"} alt="Logo" className={styles.logo}/>
                <li className={styles.nav_tab} onClick={handleSearchJob}>Search Jobs</li>
                <li className={styles.nav_tab} onClick={()=>{jobList()}} >Jobs For You</li>
                <li className={styles.nav_tab}>Mailbox</li>
        <li className={styles.nav_tab} onClick={() => {
          handleProfile()
        }}>My Profile</li>
                <li className={styles.nav_tab} onClick={handleServices}>Services</li>
            <li className={styles.career_guidance}><img src={process.env.PUBLIC_URL + "/Career_bulb.png"  } alt="career"/>Career Guidance</li>
            </div>
            <div className={styles.nav_profile} onClick={handleSignprofile}>{isAuth===true?"hi, "+user.name:"hi, User"}</div>
          {(searchJobContent)?<SearchJobs>
                  <p>Jobs by City</p>
                  <p>Jobs by Skills</p>
                  <p>Jobs by Course</p>
                  <p>Jobs by Education</p>
                  <p>Jobs by company</p>
                  <p>Jobs by Designation</p>
          </SearchJobs> : ""}

          {(profileContent)?<Profile>
        <p className={styles.nav_para} onClick={() => { profile() } }>Profile</p>
                  <p className={styles.nav_para}>Recrutier Action</p>
                  
          </Profile> : ""}
          {(serviceContent)?<Service>
                   <div>
                       <div className={styles.div_nav}>
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
        {isAuth===true?<> <p className={styles.nav_para}>Account setting</p>
        <p onClick={() => {
          alert("You Have Successfully logged out");
          localStorage.setItem("isAuth", false);
          localStorage.setItem("user", JSON.stringify([{}]));
          setIsAuth(false);
          setTimeout(() => {
            home();
}, 100);
        }} className={styles.nav_para}>Sign Out</p>
</>:<></>
        }
          </SignOut>: ""

          }
            
            
    </nav>
    
}