import React from 'react';
import FornContainer from './FornContainer'

class App extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      FirstName : '',
      LastName : '',
      age : null,
      radio : '',
      destination : '',
      isWarm : false,
      isCold : false,
      isRainy :false

    }
    this.handlechange=this.handlechange.bind(this);
  }
    
    handlechange(event)
    {
      const {name,value,type,checked} = event.target
      type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({ [name] : value })
      
    }
    
    render()
    {
   return(
     <div>
       <FornContainer handlechange={this.handlechange}/>
     </div>
   ) 
  }
}




export default App;
