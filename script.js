window.onload = init;
   
function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            //Creando los elementos de la lista. (li)
            //Creando botones de eliminar, hecho y deshacer
            let element = document.createElement("li");
            let delet = document.createElement("button");
            let cont1 = document.createTextNode("Delete");
            let done = document.createElement("button");
            let cont2 = document.createTextNode("Done");
            let undone = document.createElement("button");
            let cont3 = document.createTextNode("Undone");

            delet.appendChild(cont1);
            done.appendChild(cont2);
            undone.appendChild(cont3);
            
                     

            element.innerText = task;
            element.appendChild(delet);
            element.appendChild(done);
            element.appendChild(undone);
        


            //Eliminando
            delet.addEventListener("click", () => {
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
            });
            //Hecho
            done.addEventListener("click", () => {
                let parent = element.parentNode;
                if(parent){
                    element.style.textDecoration = "line-through wavy blue";
                }
            });

            undone.addEventListener("click", () => {
                let parent = element.parentNode;
                if(parent){
                    element.style.textDecoration = "none";
                }
            })

            /*
            delet.addEventListener("click", () => {
                console.log(element);
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
            });*/


            if (priority) {
                this.listTask.unshift({//Agregando al inicio
                    element,
                    task
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({//Agregando al final
                    element,
                    task
                });
                this.listHTML.appendChild(element);
            }

            element.style.padding = "0.5em";

            delet.style.borderRadius = "10px";
            done.style.borderRadius = "10px";
            undone.style.borderRadius = "10px";

            delet.style.margin = "10px";
            done.style.margin = "10px";
            undone.style.margin = "10px";
        }
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);

    });
}