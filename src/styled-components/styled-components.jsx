import styled from "styled-components";
export const SearchJobs = styled.div`
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

export const  Profile=styled.div`
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

export const  Service=styled.div`
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
export const SignOut=styled.div`
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
export const Inputdiv=styled.div`
  background-color: #f4f5f5;
  padding-top: 1%;
  padding-bottom: 2.5%;

`;

export const InputInsidediv=styled.div`
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

export  const Choice=styled.div`
 width: 60%;
 margin: auto;

 

`
export const Heading=styled.p`
 color: #375076;
 font-size: 15px;
 font-weight: 400;

 

`

export  const City=styled.div`
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
export  const ViewMore=styled.div`
  display: flex;
  flex-direction: row-reverse;
  color: #5364c4;
  font-size: 12px;
  width: 100%;
  >div{
    cursor: pointer;
    margin-right: -4%;
  }
`

export const Company=styled.div`
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


export const Skill=styled.div`
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

export const Designation=styled.div`
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

export const IJ=styled.div`
 width: 98%;
 padding: 1%;
 margin-top: 2%;
display: flex;
justify-content: space-between;

`

export const Industry=styled.div`
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

export const Deparment=styled.div`
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

export const InputBoxDiv=styled.div`
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
export  const Op=styled.div`
     opacity: ${({showInputDiv})=>{return (showInputDiv)? 0.3: ""}};
 `
export const Tabs = styled.div`
cursor: pointer;
padding: 0px 20px;
border-bottom:${props => (props.tab === props.t) ? "4px solid #fbaf18;" : "none"};
font-weight:${props => (props.tab === props.t) ? "700" : "none"};
font-size:${props => (props.tab === props.t) ? "15px" : "14px"};
`