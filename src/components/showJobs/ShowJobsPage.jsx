
import styled from "styled-components"


 import {useState} from "react"

 

const Inputdiv=styled.div`
  background-color: #f4f5f5;
  padding-top: 1%;
  padding-bottom: 2.5%;

`;

const InputInsidediv=styled.div`
  display: flex;
  width: 60%;
  margin: auto;

  div:nth-child(1){
     padding: 1%;
     width: 80%;
    border: solid 1px #e7e7e7;;
     background-color: #fff;
     color: gray;
 }
 div:nth-child(2){
   
     width: 5%;
    
     
 }
 div:nth-child(2) > img{
     width: 100%;
     height: 43px;
     
 }

`;

const Choice=styled.div`
 width: 60%;
 margin: auto;

 

`
const Heading=styled.p`
 color: #375076;
 font-size: 15px;
 font-weight: 400;

 

`

 const City=styled.div`
 width: 98%;
 background-color:#f4f5f5;
 padding: 1%;
 border: solid 1px #e7e7e7;
 border-radius: 2px;
 margin-top: 2%;

 >div{
  display: flex;
 justify-content: space-between;
   
 }
 >div  div{
 width: 15%;
 text-align: center;

    
}


>div >div > p{
margin-left: 2.5%;

    
}
>div > div >p{
  color: #5364c4;
    cursor: pointer;
    outline: medium none!important;
    text-decoration: none;
    font-size: 12px;
    
}

`
const ViewMore=styled.div`
  display: flex;
  flex-direction: row-reverse;
  color: #5364c4;
  font-size: 12px;
  width: 100%;

  >div{
   
    
    margin-right: -4%;
    
  }
`

const Company=styled.div`
width: 98%;
background-color:#f4f5f5;
padding: 1%;
border: solid 1px #e7e7e7;
border-radius: 2px;
margin-top: 2%;

>div{
 display: flex;
justify-content: space-between;
  
}
>div  div{
width: 15%;
text-align: center;

   
}`


const Skill=styled.div`
 width: 98%;
 background-color:#f4f5f5;
 padding: 1%;
 border: solid 1px #e7e7e7;
 border-radius: 2px;
 margin-top: 2%;

 >div{
  display: flex;
  flex-wrap: wrap;
 
 
   
 }
 >div  div{
 width: 20%;
 text-align: center;

 margin-left:3% ;
    
}



>div > div >p{
  color: #5364c4;
    cursor: pointer;
    outline: medium none!important;
    text-decoration: none;
    font-size: 12px;
    margin-left: 2.5%;
}
`

const Designation=styled.div`
 width: 98%;
 background-color:#f4f5f5;
 padding: 1%;
 border: solid 1px #e7e7e7;
 border-radius: 2px;
 margin-top: 2%;

 >div{
  display: flex;
  justify-content: space-between;
 
 
   
 }
 >div  div{
 width: 20%;
padding: 2%;


    
}



>div > div > p{
  color: #5364c4;
    cursor: pointer;
    outline: medium none!important;
    text-decoration: none;
    font-size: 12px;
    margin-left: 2.5%;
}

`

const IJ=styled.div`
 width: 98%;
 padding: 1%;
 margin-top: 2%;
display: flex;
justify-content: space-between;

`

const Industry=styled.div`
 width: 45%;

 background-color:#f4f5f5;
 padding: 1%;
 border: solid 1px #e7e7e7;
 border-radius: 2px;

 >div{
  display: flex;
  justify-content: space-between;
 }
  >div  div{
 width: 50%;
padding: 1%;

  }
div > div >p{
  color: #5364c4;
    cursor: pointer;
    outline: medium none!important;
    text-decoration: none;
    font-size: 12px;
    
}
`

const Deparment=styled.div`
 width: 45%;

 background-color:#f4f5f5;
 padding: 1%;
 border: solid 1px #e7e7e7;
 border-radius: 2px;

 >div{
  display: flex;
  justify-content: space-between;
 }
  >div  div{
 width: 50%;
padding: 1%;

  }
div > div >p{
  color: #5364c4;
    cursor: pointer;
    outline: medium none!important;
    text-decoration: none;
    font-size: 12px;
    
}
`

const InputBoxDiv=styled.div`
 position: absolute;
 width: 100%;
 top: 5.8%;
 padding-top:3%;
 background-color: #ffffffff;
 display: flex;
padding-bottom: 1%;
border-bottom: 3px solid #eee;

 input{
   width: 30%;
   height: 50%;
   margin-left:2%;

 }



 `
 const Op=styled.div`
     opacity: ${({showInputDiv})=>{return (showInputDiv)? 0.3: ""}};
 
 
 
 `


export default function ShowJobsPage(){
  const [showInputDiv,setShowInputDiv]=useState(false)

  const handleInput=()=>{
    setShowInputDiv(true) 
  }

 
 return <> 
        <Inputdiv>
            <InputInsidediv onClick={handleInput}>
                 <div>Enter keyword</div>
                 <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJTKFOoTxtlto9d9feKHO5wimZcLiIY-h3A&usqp=CAU" alt=""/></div>
                 </InputInsidediv>
        </Inputdiv>
        <Op showInputDiv={showInputDiv}>
        <Choice>
           
           <City>
           <Heading>Browse Jobs in Top Cities</Heading>
           <div style={{marginTop:"10px"}}>
             <div>
               <img src={process.env.PUBLIC_URL + "/deli.png"} alt="Logo" />
               <p>Jobs in Delhi</p>
             </div>
             <div>
               <img src={process.env.PUBLIC_URL + "/Mumbai.png"} alt="Logo" />
               <p>Jobs in Mumbai</p>
             </div>
             <div>
               <img src={process.env.PUBLIC_URL + "/heydrabad.png"} alt="Logo" />
               <p>Jobs in Hyderabad</p>
             </div>
             <div>
               <img src={process.env.PUBLIC_URL + "/banglore.png"} alt="Logo" />
               <p>Jobs in Bangalore</p>
             </div>
             <div>
               <img src={process.env.PUBLIC_URL + "/chennai.png"} alt="Logo" />
               <p>Jobs in Chennai</p>
             </div>
             <div>
               <img src={process.env.PUBLIC_URL + "/deli.png"} alt="Logo" />
               <p>Jobs in Pune</p>
             </div>
             </div>
             <ViewMore>
               <div>View more..</div>
             </ViewMore>
           </City>
          <Company>
          <Heading>Browse Jobs in Top Companies</Heading>
           <div style={{marginTop:"10px"}}>
             <div>
               <img style={{width:"95%"}} src={process.env.PUBLIC_URL + "/angle.png"} alt="Logo" />
              
             </div>
             <div>
               <img style={{width:"95%"}} src={process.env.PUBLIC_URL + "/hew.png"} alt="Logo" />
               
             </div>
             <div>
               <img style={{width:"95%"}} src={process.env.PUBLIC_URL + "/iifl.png"} alt="Logo" />
            
             </div>
             <div>
               <img style={{width:"95%"}} src={process.env.PUBLIC_URL + "/reliance.png"} alt="Logo" />
           
             </div>
             <div>
               <img style={{width:"95%"}} src={process.env.PUBLIC_URL + "/yes.png"} alt="Logo" />
              
             </div>
            
             
             </div>
             <ViewMore>
               <div>View more..</div>
             </ViewMore>
             </Company>
            <Skill>
            <Heading>Browse Jobs by Skill</Heading>
           <div style={{marginTop:"10px"}}>
             <div>
               <img src={process.env.PUBLIC_URL + "/java.png"} alt="Logo" />
               <p>JAVA jobs</p>
             </div>
             <div>
               <img src={process.env.PUBLIC_URL + "/php.png"} alt="Logo" />
               <p>PHP jobs</p>
             </div>
             <div>
               <img src={process.env.PUBLIC_URL + "/marketing.png"} alt="Logo" />
               <p>Marketing jobs</p>
             </div>
             <div>
               <img src={process.env.PUBLIC_URL + "/design.png"} alt="Logo" />
               <p>Design jobs</p>
             </div>
             <div>
               <img src={process.env.PUBLIC_URL + "/construction.png"} alt="Logo" />
               <p>Construction jobs</p>
             </div>
             <div>
               <img src={process.env.PUBLIC_URL + "/dataentry.png"} alt="Logo" />
               <p>Data Entry jobs</p>
             </div>
             <div>
               <img src={process.env.PUBLIC_URL + "/hr.png"} alt="Logo" />
               <p>HR jobs</p>
             </div>
             <div>
               <img src={process.env.PUBLIC_URL + "/account.png"} alt="Logo" />
               <p>Accounts jobs</p>
             </div>
             </div>
             <ViewMore>
               <div>View more..</div>
             </ViewMore>
        </Skill>
        <Designation>
            <Heading>Browse Jobs by Designation</Heading>
           <div>
             <div>
                <p>Trainee Jobs</p>
                <p>Manager Jobs</p>
                <p>Analyst Jobs</p>
                <p>News Reporter Jobs</p>
                <p>Doctors Jobs</p>
                <p>Project Manager Jobs</p>
            </div>

            <div>
                <p>Executive Jobs</p>
                <p>Sr Manager Jobs</p>
                <p>Architect Jobs</p>
                <p>Deputy Manager Jobs</p>
                <p>Secretary Jobs</p>
                <p>CTO Jobs</p>
            </div>

            <div>
                <p>Sr Executive Jobs</p>
                <p>Team Leader Jobs</p>
                <p>Assistant Manager Jobs</p>
                <p>Product Head Jobs</p>
                <p>Professor Jobs</p>
                <p>CMO Jobs</p>
            </div>
            
            
             </div>
             <ViewMore>
               <div>View more..</div>
             </ViewMore>
        </Designation>
         
         <IJ>
         <Industry>
         <Heading>Browse Jobs by Industry</Heading>
         <div>
              <div>
                <p>IT Jobs</p>
                <p>Banking Jobs</p>
                <p>Management Jobs</p>
                <p>Hotel Jobs</p>
                <p>Medical Jobs</p>
                <p>Aviation Jobs</p>
                <p>Electrical Jobs</p>
                <p>Electronics Jobs</p>
                <p>NGO Jobs</p>

              </div>


              <div>
                <p>BPO Jobs</p>
                <p>Engineering Jobs</p>
                <p>Pharma Jobs</p>
                <p>Education Jobs</p>
                <p>Media Jobs</p>
                <p>Textile Jobs</p>
                <p>Retail Jobs</p>
                <p>Government Jobs</p>
                <p>Agriculture Jobs</p>

              </div>
         </div>

         <ViewMore>
               <div>View more..</div>
             </ViewMore>
         </Industry>



         <Deparment>
         <Heading>Browse Jobs by Department</Heading>
         <div>
              <div>
                <p>Marketing Jobs</p>
                <p>TGT Jobs</p>
                <p>Management Jobs</p>
                <p>Hotel Jobs</p>
                <p>Medical Jobs</p>
                <p>Aviation Jobs</p>
                <p>Back Office Jobs</p>
                <p>Telecom Jobs</p>
                <p>insurance Jobs</p>

              </div>


              <div>
                <p>Sales Jobs</p>
                <p>PGT Jobs</p>
                <p>DBA Jobs</p>
                <p>Education Jobs</p>
                <p>Media Jobs</p>
                <p>Ecommerce Jobs</p>
                <p>Retail Jobs</p>
                <p>Administrative Jobs</p>
                <p>Maintenance Jobs</p>

              </div>
         </div>

         <ViewMore>
               <div>View more..</div>
             </ViewMore>
         </Deparment>



         </IJ>
         <Designation>
            <Heading>Browse Jobs by Education</Heading>
           <div>
             <div>
                <p>Hindi Jobs</p>
                <p>Chemistry Jobs</p>
                <p>Zoology Jobs</p>
                <p>Lecturer Jobs</p>
                <p>Jobs in Colleges</p>
                <p>Jobs in Management Colleges</p>
                <p>TGT Maths Jobs</p>
                <p>PGT Biology Jobs</p>
            </div>

            <div>
                <p>English Jobs</p>
                <p>Mathematics Jobs</p>
                <p>Botany Jobs</p>
                <p>Professor Jobs</p>
                <p>Jobs in Universities</p>
                <p>TGT Jobs</p>
                <p>TGT Physics Jobs</p>
                <p>PGT Chemistry Jobs</p>
            </div>

            <div>
                <p>Physics Jobs</p>
                <p>Biology Jobs </p>
                <p>Faculty jobs </p>
                <p>Jobs In Schools </p>
                <p>Jobs in Engineering Colleges </p>
                <p>PGT Jobs </p>
                <p>TGT Science Jobs</p>
                <p>PGT Maths Jobs</p>
            </div>
            
            
             </div>
             <ViewMore>
               <div>View more..</div>
             </ViewMore>
        </Designation>
        <Designation>
            <Heading>Browse Jobs by Courses</Heading>
           <div>
             <div>
                <p>BTech Jobs</p>
                <p>MCA Jobs</p>
                <p>BCom Jobs</p>
                <p>MSC Jobs</p>
                <p>BEd Jobs</p>
                <p>MBBS Jobs</p>
                
            </div>

            <div>
                <p>MTech Jobs</p>
                <p>BBA Jobs</p>
                <p>MCom Jobs</p>
                <p>BA Jobs</p>
                <p>PHd Jobs</p>
                <p>BAMS Jobs</p>
               
            </div>

            <div>
                <p>BCA Jobs</p>
                <p>MBA Jobs</p>
                <p>BSC Jobs </p>
                <p>MA Jobs</p>
                <p>PGDM Jobs</p>
                <p>BPT Jobs</p>
               
            </div>
            
            
             </div>
             <ViewMore>
               <div>View more..</div>
             </ViewMore>
        </Designation>
        
        </Choice>
        </Op>
        {(showInputDiv)?<InputBoxDiv s={showInputDiv}>
             <div style={{width:"80%",marginLeft:"5%"}}>
                 <input type="text"  placeholder="Job title" />
                 <input type="text"  placeholder="location"/>
                 <input type="number" placeholder="Experience in years "/>
             </div>
             <div style={{marginLeft:"3%"}}>
                 <div style={{padding:"5%" , backgroundColor:"#fbaf18" ,color:"#fff",textAlign:"center"}}>Search</div>
                 <div style={{textAlign:"center",fontSize:"13px", color:"#5364c4"}}>Advance Search</div>
             </div>
             <div style={{cursor:"pointer",marginLeft:"3%"}} onClick={()=>{setShowInputDiv(false)}}>x</div>
        
        </InputBoxDiv>: ""
}
        
 
   
 
 
 </>






}