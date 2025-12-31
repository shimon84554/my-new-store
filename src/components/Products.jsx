import { create } from 'zustand';


const useTodoStore = create(set => ({
    toDo: [],
    addToDo: (newAsk) => { set(state => ({ toDo: [...state.toDo, newAsk ] })) },
    tempToDo:'',
    setTempToDo:(newText)=>{set(state =>(

        {tempToDo:newText}
    ))}

}))

function Products() {

const toDoArr = useTodoStore(state => state.toDo);
const addToDo = useTodoStore(state => state.addToDo);
const tempToDo = useTodoStore(state => state.tempToDo);
const setTempToDo = useTodoStore(state => state.setTempToDo);
const handlCange = (e)=>{
setTempToDo(e.target.value);
}

const handlSubmit = (e)=>{
    e.preventDefault();
    if(tempToDo === '')return ;
    addToDo({todo:tempToDo,id:Date.now()});
    setTempToDo('');
}


    return (
        <div >
            <form onSubmit={handlSubmit}>
            <input 
            placeholder='הכנס משימה'
            value={tempToDo}
            onChange={handlCange}
            />
            <button type='submit'>הוסף</button>
            </form>

          <ul>
            {toDoArr.map(toDo =>(<li key={toDo.id}>{toDo.todo}</li>))}
          </ul>
        </div>
    )
}

export default Products;