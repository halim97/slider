import React,{useState} from 'react';
import './App.css';
import people from './data'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';


function App() {

  const[index,setIndex]=useState(0);
  const left=()=>{
    
    if(index===0){
      setIndex(people.length-1)
    }else{
      setIndex(index-1);
    }
  }
  const right=()=>{
    if(index===people.length-1){
      setIndex(0)
    }else{
      setIndex(index+1);
    }
  }

  return (
    
    <div className='App'>
       { people.map(
          (person,indexMap)=>{
              const {id,image,name,title,quote}=person;
              let position='next';
              if (indexMap===index){
                position='actuel';
              }
              if(indexMap===(index-1)||index===0&&indexMap===people.length-1){
                  position='prev';
              }

            return(
              
              <article className={position} key={indexMap}>
              
              <img className='image' src={image} alt={name}/>
              <h3 className='name a'>{name}</h3>
              <h4 className='title a'>{title}</h4>
              <p className='quote a'>{quote}</p>
              <button className='button left' onClick={left}>{<FiChevronLeft/>}</button>
              <button className='button right' onClick={right}>{<FiChevronRight/>}</button>
            
            </article>
            
            );
          }

            )}</div>
      
    
    
  );
}

export default App;
