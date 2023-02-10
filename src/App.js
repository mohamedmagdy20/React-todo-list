import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItems from './components/AddItem/AddItem';
// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

class App extends Component {
  state ={
    items:[
      {id:1,name:'Magdy', age:'21'},
      {id:2,name:'Ali', age:'23'},
      {id:3,name:'Omr', age:'24'},
    ]
  }
  deleteItem = (id) => {
    // console.log(id
    // let items = this.state.items;
    // let i = items.findIndex(item => item.id === id)
    // items.splice(i,1)
    // this.setState({items:items})

     let items = this.state.items.filter(item =>{
      return item.id !== id
    }); 
    this.setState({items:items})


  }

  AddItem = (item)=>{
    // item.id = Math.rendom();
    let items = this.state.items;
    items.push(item);
    this.setState({
      items:items
    })
  }
  render()
  {
      return(
          <div className="App container">
            <h1 className='test-center'>Todo List</h1>
            <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
            <AddItems addItem={this.AddItem} />
          </div>
      )
  }
}

export default App;
