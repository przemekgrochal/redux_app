import React, { useState } from 'react';
import uuid from 'react-uuid';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions/counterAction.js';
import { deleteItem, updateItem, addItem } from './redux/actions/todosAction.js';

const Redux = ()  => {
  const [user, setUser] = useState({
    id: null,
    name: '',
  });

  const [updateUser, setUpdateUser] = useState({
    id: null,
    name: '',
  });

  const { counterReducer, todosReducer } = useSelector(state => state);
  const dispatch = useDispatch();
  
  const handleClick = (e) => {
    if((user.name !== '') && (user.name !== ' ')){
      dispatch(addItem(user));
      setUser({id: null, name: ''});
    } 
  }

  return (
    <div className="Redux">

        <div>
          <button onClick={ () => dispatch(increment())}>+</button>
          <div>{counterReducer.counter}</div>
          <button onClick={ () => dispatch(decrement())}>-</button>
        </div>
        
        <div>
          {todosReducer.todos.map((item,index) => {
            return (
              <div key={index} style={{border: '1px solid gray', width: '200px', marginBottom: '20px'}}>
                <div>{item.id}</div>
                <div>{item.username}</div>
                <button onClick={()=>dispatch(deleteItem(item.id))}>DELETE</button>
                <button onClick={()=>{
                  todosReducer.todos.map((item,index) => {
                    if(item.update) {
                      delete item.update;
                    }
                  })
                  item.update = true;
                  dispatch(updateItem(item));
                }}>UPDATE</button>     
                {
                  item.update && 
                  <div>
                    <input type="text" value={updateUser.name ? updateUser.name : item.username} onChange={(e)=>setUpdateUser({id: item.id, name: e.target.value})}/>

                    <button onClick={()=> {
                        delete item.update;   
                        dispatch(updateItem({
                          id: updateUser.id,
                          username: updateUser.name
                        }));
                        setUpdateUser({id: null, name: ''});
                    }}>
                      save
                    </button>
                    
                    <button onClick={ ()=> {
                      delete item.update;
                      dispatch(updateItem(item));
                    }}>
                      cancel
                    </button>
                  </div>
                }
              </div>
            );
          })}
        
        </div>

        <div>
          <input type="text" value={user.name} onChange={(e)=>setUser({id: uuid(), name:e.target.value})}/>
          <button onClick={(e) => handleClick(e)}>DODAJ</button>
        </div>

    </div>
  );
}

export default Redux;
