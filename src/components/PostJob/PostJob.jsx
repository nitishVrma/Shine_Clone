import React from "react"
import { NavBar } from "../HomePage/NavBar"
import styles from "../../styles/PostJob.module.css"
import { RegisterFooter } from "../Register/RegisterFooter"
import axios from "axios"
import {v4 as  uuid} from "uuid"

export function PostJob({ home, post }) {
    const payload = {
        name: "",
        mobile: "",
        company: "",
        designation:""
    }
    const [jobs, setJobs] = React.useState([]);
    const [job,setJob] = React.useState({...payload})
    const HandleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    }
    const HandleJobs = () => {
    try {
            axios.get("http://localhost:3004/jobs").then(res => {
                setJobs(res.data);
       })
        } catch (e) {
            console.log(e);
   }
}
    React.useEffect(() => {
        HandleJobs();
},[])
    const HandleContinue = () => {
        if (job.name.length !== 0 && job.company.length !== 0 && String(job.mobile).length === 10 && String(job.designation).length !== 0) {
            HandlePost();
            HandleJobs();
            HandleJobs();
            alert("You have sucessfully posted a job")
            
        } else if (job.name.length === 0) {
            alert("Enter no. of Posts !!!")
        }
            else if (job.designation.length === 0) {
            alert("Enter Designation !!!")
        }
             else if (String(job.mobile).length !== 10) {
            alert("Invalid Mobile No. !!!")
        }
        else if (job.company.length === 0) {
            alert("Enter Company Name !!!")
        }
        else {
            alert("Invalid Credentials !!!")
        }
    }
    const HandlePost = () => {
        try {
            axios.post("http://localhost:3004/jobs", job);
        } catch (e) {
            console.log(e);
        } finally {
            setJob({...payload})
        }
        
    }
    const HandleDelete = (id) => {
        try {
            axios.delete("http://localhost:3004/jobs/"+id);
        } catch (e) {
            console.log(e);
        } finally {
            HandleJobs();
            HandleJobs();
            alert("Removed a job post")
        }
    }
    return (<React.Fragment>
        <NavBar home={home} post={post}/>
        <div className={styles.body}>
           <div className={styles.secnav}>

               <div className={styles.deactive}>
                    <img className={styles.img2} src={process.env.PUBLIC_URL+`/package.png`} alt="packaged"/>
                    <strong className={styles.s1}>Package details</strong>
               </div>

                <div className={styles.personal}>
               <img src={process.env.PUBLIC_URL+`/avatar2.png`} alt="avatar2"/>
                    <strong className={styles.s1}>Personal details</strong>
               </div>

               <div className={styles.payment}>
               <img src={process.env.PUBLIC_URL+`/payment.png`} alt="payment"/>
                   <strong className={styles.s1}>Payment mode</strong>
                   </div>
           </div>

           <div className={styles.forms}>
              <div></div>

              <div>
                    <div className={styles.box1}>
                        <div className={styles.stl}> <strong className={styles.str1}>Complete Your details</strong> </div>
                    
                    <div>
                            <h3 className={ styles.h41}>Total Posts</h3>
                         <h3 className={styles.h42}>Mobile</h3>
                    </div>
                        <div className={styles.inp1}>
                            
                            <input value={job.name} type="Number" name="name" className={styles.text1}
                           placeholder="" required="" onChange={HandleChange}  
                           aria-required="true" aria-invalid="true"/>

                            <span  className={styles.c_code}><input value={job.mobile} id="mobile_placeholder" className={styles.text2}
                                   type="Number" name="mobile" onChange={HandleChange}
                                   placeholder="+91" aria-label="mobile_placeholder"/ ></span>
                    </div>

                    <div>
                            <h3 className={styles.h43}>Company Name</h3>
                         <h3 className={styles.h44}>Designation</h3>
                    </div>
                        <div className={styles.inp1}>
                            <input value={job.company} onChange={HandleChange} type="text" name="company" className={styles.text1}
                           placeholder="" required="" id="id_email_id" 
                           aria-required="true" aria-invalid="true"
                           aria-describedby="id_email_id-error"/>

                            <input
                         value={job.designation}       onChange={HandleChange} type="text" name="designation" className={styles.text2}
                           placeholder="" required="" id="id_email" 
                           aria-required="true" aria-invalid="true"
                           aria-describedby="id_email_id-error"/>
                    </div>
             
                        <ul >
                            <div className={styles.pol1}>
                            <li>
                                    <input name="check_box" type="checkbox" value="" className={styles.checkbox} id="id_check_box" aria-label="terms" placeholder=""/>
                                    <span className="term">I agree to the
                                    <a href="/termsandconditions">Terms &amp; Conditions</a>
                                        <span className={styles.name_exit}></span>
                                    </span>
                            </li>
                            
                            <li className={styles.pol2}>
                                    <input name="check_box_kyc" type="checkbox" value="" className={styles.checkbox} id="id_check_box_kyc" aria-label="kyc" placeholder=""/>
                                    <span className={styles.term}>I agree to share my KYC documents with Shine</span>
                            </li>
                            </div>

                            <li className={styles.mtl}>
                                <button onClick={HandleContinue} className={styles.continue_button} >Continue</button>
                            </li>
                        </ul>
                   </div> 
              </div>

                <div className={styles.jobLists}>
                    <div className={styles.jobLists_title}>
                    <h2>Your Posted Job List</h2>
                    </div>
                    <div className={styles.jobLists_content}>
                        {
                            jobs.map(e => {
                                return <div key={uuid()} className={styles.jobLists_card}>
                            <div className={styles.jobLists_card_top}>
                            <h3>{e.company}</h3>
                                        <h5>Post - {e.designation}</h5>
                            </div>
                            <div className={styles.jobLists_card_bottom}>
                                        <p><strong>Total posts - </strong>{ e.name}</p>
                                        <p><strong>Contact no - </strong>{ e.mobile}</p>
                            </div>
                            <div className={styles.jobLists_card_button}>
                                        <button onClick={() => {
                                            HandleDelete(e.id);
                            }}>Remove</button>
                            </div>
                        </div>
                            })
                        }
                        
                </div>
                </div>
          </div>

          <div className={styles.footer}>
          <p>If you are looking for any information, please feel free to contact us. We will be glad to help.</p>
          <img className={styles.imgf} src={process.env.PUBLIC_URL+`/phone.png`} alt="phone"/> <a href="tel:080-47105555">080-47105555</a>

          <a className={styles.a1} href="mailto:recruiterservices@shine.com">recruiterservices@shine.com</a>
          </div>
        </div>
        <RegisterFooter/>
                           </React.Fragment>
    )
}

