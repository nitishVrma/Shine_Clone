import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from '../../styles/jobList.module.css'
import ShowNavBar from '../showJobs/ShowNavBar'
import { data } from '../../data.js'
import { v4 as uuid } from "uuid";


export default function Lists({isAuth,setIsAuth,home, jobList,user,profile,showJob,login}) {


    const title = localStorage.getItem("title");
    const location = localStorage.getItem("location");
    const[data1,setdata] =useState(data)
    const[selected,setSelected] = useState(data1)
    const[status,setStatus] = useState(["Apply Here","white"])
    const[input,setInput] = useState(title)

    const handleChange = function(e){
        setInput(e.target.value)
        //console.log(input)
    }

    const handleSearch = function(){
        let searched = data.filter((e) => {
            return e.searchKey === input.toLowerCase();
        })
        setInput("")
        if(searched.length !== 0){
            setdata(searched)
        }
        else {
            alert(`Sorry we deeply regret that no jobs is available for ${input} , Search other title i.e. java , php `)
        }
    }
    useEffect(() => {
        if (title.length === 0 && location.length === 0) {
            return;
        }
        let searched = data.filter((e) => {
            if (location.length !== 0&&title.length === 0) {
          return e.location.toLowerCase() === location.toLowerCase();  
            }
            if (title.length !== 0&&location.length === 0) {
              return e.searchKey === title.toLowerCase();   
            }
            return e.searchKey === title.toLowerCase()&&e.location.toLowerCase()===location.toLowerCase();
    })
        if(searched.length !== 0){
            setdata(searched)
        } else {
            alert(`Sorry we deeply regret that no jobs is available for this credentials , Search other title i.e. java , php `)
        }
},[title,location])
    useEffect(() => {
        setSelected(data1);
        setStatus(["Apply Here","white","gold"])
      },[data1]);

      useEffect(() => {
        setStatus(["Apply Here","white","gold"])
      },[selected]);

    const handleClick =(e) => {
        let temp =e;
        setSelected(data.filter((el) => {
            return el.id === temp;
        }))
    }
    return (<>
            <ShowNavBar isAuth={isAuth} login={login} setIsAuth={setIsAuth} home={home} jobList={jobList} user={user} profile={profile} showJob={ showJob}/>
        <div className={styles.main}>
            <div  className={styles.filter}>
                <div className={styles.input}>
                   <input value={input} type={styles.text} onChange={handleChange} placeholder="Job skills" />
                   <i className="fas fa-search fa-lg" onClick={handleSearch}></i>
                </div>
                <p>Filter by</p>
                <ul >
                    <li className={styles.active}><span> Location <i className="fas fa-chevron-down"></i></span>
                      <div className={styles.sub_menu_1}>
                          <ul>
                              <li onClick={() => {
                                  setdata(data.filter((e) => {
                                    return e.location === "Delhi"
                                }))
                              }}>
                                  Delhi
                              </li>
                              <li onClick={() => {
                                  setdata(data.filter((e) => {
                                    return e.location === "Mumbai"
                                }))
                              }}>
                                  Mumbai
                              </li>
                              <li onClick={() => {
                                  setdata(data.filter((e) => {
                                    return e.location === "Pune"
                                }))
                              }}>
                                  Pune
                              </li>
                              <li onClick={() => {
                                  setdata(data.filter((e) => {
                                    return e.location === "Bangalore"
                                }))
                              }}>
                                  Bangalore
                              </li>
                              <li onClick={(delhi) => {
                                  setdata(data.filter((e) => {
                                    return e.location === "Hyderabad"
                                }))
                              }}>
                                  Hyderabad
                              </li>
                              <li onClick={(delhi) => {
                                  setdata(data.filter((e) => {
                                    return e.location === "Chennai"
                                }))
                              }}>
                                  Chennai
                              </li>
                              <li onClick={(delhi) => {
                                  setdata(data.filter((e) => {
                                    return e.location === "Noida"
                                }))
                              }}>
                                  Noida
                              </li>
                          </ul>
                      </div>
                    </li>
                    <li><span> Experience <i className="fas fa-chevron-down"></i></span>
                    <div className={styles.sub_menu_1}>
                          <ul>
                              <li onClick={() => {
                                  setdata(data.filter((e) => {
                                    return e.experience <= 1
                                }))
                              }}>
                                  0 to 1 Years
                              </li>
                              <li onClick={() => {
                                  setdata(data.filter((e) => {
                                    return e.experience >= 1 && e.experience <= 3
                                }))
                              }}>
                                  1 to 2 Years
                              </li>
                              <li onClick={() => {
                                  setdata(data.filter((e) => {
                                    return e.experience >= 3 && e.experience <= 5 
                                }))
                              }}>
                                  3 to 5 years
                              </li>
                          </ul>
                      </div>
                    </li>
                    <li> <span>Salary <i className="fas fa-chevron-down"></i></span>
                        <div className={styles.sub_menu_1}>
                          <ul>
                              <li onClick={() => {
                                  setdata(data.filter((e) => {
                                    return e.salary <= 3
                                }))
                              }}>
                                  upto 3 Lakhs
                              </li>
                              <li onClick={() => {
                                  setdata(data.filter((e) => {
                                    return e.salary >= 3 && e.salary <= 5
                                }))
                              }}>
                                  3 to 5 Lakhs
                              </li>
                              <li onClick={() => {
                                  setdata(data.filter((e) => {
                                    return e.salary >= 5 && e.salary <= 10
                                }))
                              }}>
                                  5-10 Lakhs
                              </li>
                          </ul>
                      </div>
                    </li>
                </ul>
            </div>
            <div className={styles.container}>
            <div className={styles.leftList}>
                {data1.map((e) => {
                    return <div key={uuid()} onClick={() => handleClick(e.id)} >
                        
                        <h3><i className="fas fa-gem"></i>. {e.jobTitle}</h3>
                        <h5>{e.aboutCompany[0]}</h5>
                        <ul>
                            <li>min upto {e.experience} Years</li>
                            <li>{e.location}</li>
                        </ul>
                        <p>{e.date}</p>
                    </div>
                })}
            </div>
                <div className={styles.details}>
                <div className={styles.head}>
                    <button><i className="fas fa-gem"></i> Premium</button>
                    <h2>{selected[0].jobTitle}</h2>
                    <h4>{selected[0].aboutCompany[0]}</h4>
                    <i className="fas fa-briefcase"></i><span>-min {selected[0].experience} yrs</span>
                    <i className="fas fa-map-marker-alt"></i><span>-{selected[0].location}</span>
                    <i className="fas fa-money-bill-wave"></i><span>-{selected[0].salary} Lakhs</span>
                    <strong>Posted on: {selected[0].date}</strong>
                    <br />
                        <button id={styles.apply} style={{color:status[1], background:status[2]}} onClick={()=>{
                        setStatus(["Applied","rgb(72, 214, 29)","white"])
                    }}><h3>{status[0]}</h3></button>
                </div>
                    <div className={styles.skills}>
                    <h3>Key Skills</h3>
                    {selected[0].keySkills.map((e) => {
                        return <button key={uuid()}>{e}</button>
                    })}
                    <p><button>Take Assessments to Stand Out to Recruiters. <i className="fas fa-graduation-cap fa-lg"></i></button></p>
                </div>
                    <div className={styles.jobDetails}>
                    <h3>Job Details</h3>
                    <ul>
                    {selected[0].jobdetail.map((e)=>{
                        return <li key={uuid()}>{e}</li>
                    })
                    }
                    </ul>
                    <h3> About Company</h3>
                    <ul>
                    {selected[0].aboutCompany.map((e)=>{
                        return <li key={uuid()}>{e}</li>
                    })}
                    </ul>
                    
                </div>
                    <div className={styles.insights}>
                    <h3>Application Insights</h3>
                    <p>Based on all applications received for this job</p>
                    <div>
                        <h4>Work-Experience</h4>
                        <p>Applications have 0-1 years  </p>
                        <button className={styles.brick1}></button>
                        <h4>93%</h4>
                        <p>Applications have 1-2 years  </p>
                        <button className={styles.brick2}></button>
                        <h4>4%</h4>
                        <p>Applications have 2+ years  </p>
                            <button className={styles.brick3}></button>
                        <h4>3%</h4>
                    </div>
                </div>
            </div>
            </div>
        </div>
 </>   )
}