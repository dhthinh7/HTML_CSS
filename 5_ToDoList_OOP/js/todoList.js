export class ToDoList{
  constructor(){
    this.tdList = [];
  }

  addToDo(todo){
    this.tdList.push(todo);
  }

  renderToDo(){
    let content = "";
    content = this.tdList.reduceRight((tdContent, item, index) => {
      tdContent += `
      <li>
        <span>${item.textToDo}</span>
        <div class="buttons">
          <button class="remove" data-index="${index}" data-status="${item.status}" onclick="deleteToDo(event)">
            <i class="fa fa-trash-alt"></i>
          </button>
          <button class="complete" data-index="${index}" data-status="${item.status}" onclick="completeToDo(event)">
            <i class="fa fa-check-circle"></i>
          </button>
        </div>
      </li>
      `;
      return tdContent;
    },'');

    return content;
  }

  removeToDo(index){
    this.tdList.splice(index,1);
  }

  sortToDoList(isDES){
    /* Sắp xếp tăng dần */
    this.tdList.sort((todo, nextToDo)=>{
      const textA = todo.textToDo.toLowerCase();
      const textB = nextToDo.textToDo.toLowerCase();
      /* Sắp xếp tăng dần. */
      /* localCompare cho phép compare có dấu */
      return textB.localeCompare(textA);
    });

    /* Đảo mảng vừa mới sắp xếp ở trên */
    if(isDES){
      this.tdList.reverse();
    }
  }
}
