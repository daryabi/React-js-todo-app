import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
// import 'bootstrap/dist/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUser } from "@fortawesome/free-solid-svg-icons";



class  App extends Component {
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  }
  handleChange =  (e) =>{
    this.setState({
      item:e.target.value
    });
  }
  handleSubmit =(e) =>{
e.preventDefault();

const newItem ={
  id:this.state.id,
  title:this.state.item
}

console.log(newItem);
// keep the old item and new item  
const updatedItems=[...this.state.items,newItem];

this.setState({
  items:updatedItems,
  item:'',
  id:uuid(),
  editItem:false
});
  };
  clearList = () =>{
    this.setState({
    items:[]
    })
  }
  handleDelete= (id) =>{
    const filteredItems=this.state.items.filter(item =>item.id !==id)
    this.setState({
      items:filteredItems
    });
  };

  handleEdit = id =>{
// console.log(id);
const filteredItems=this.state.items.filter(item =>item.id !==id)

// to find  the item and and id should be equal 
const selectedItem  = this.state.items.find(item=> item.id ===id);
console.log(selectedItem);
this.setState({
  items:filteredItems,
  item: selectedItem.title,
  editItem:true,
  id: id

});

  };
  render(){
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">
            To Do Input</h3>
        <TodoInput
         item={this.state.item}
         handleChange={this.handleChange}
         handleSubmit={this.handleSubmit}
         editItem={this.state.editItem}
         />
      <TodoList 
      items={this.state.items}
       clearList={this.clearList}
       handleDelete={this.handleDelete}
       handleEdit={this.handleEdit}
    
      />
        </div>
      </div>
    </div>

  );
}
}
export default App;
