const li_valor=document.querySelectorAll('.opc-list .item-list');

function _crearElemnto(id,texto){

    const li = document.createElement('li');

    const input = document.createElement('input');
    input.setAttribute('type','hidden');
    input.setAttribute('name','lis_producto[]');
    input.setAttribute('value',id);
    input.setAttribute('class','input_list');

    const span = document.createElement('span');
    span.setAttribute('class', 'item-list');
    span.setAttribute('data-id',id);
    span.innerHTML=texto;

    const button = document.createElement('button');
    button.setAttribute('class','close fas fa-minus');

    span.appendChild(button);
    li.appendChild(input);
    li.appendChild(span);

    return li;

}

li_valor.forEach(li => {
    
    li.addEventListener('click',(e)=>{

        const id=e.target.getAttribute('data-id');
        const texto=e.target.innerHTML;

        const li_value=e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.val-list ul');

        const lista=_crearElemnto(id,texto);

        li_value.insertBefore(lista, li_value.nextElementSibling); 

        e.target.classList.add('disabled');
        //console.log(texto);

    })

});

document.querySelector('.val-list').addEventListener('click',(e)=>{

    if (e.target.classList.contains('close')) {

        const idList=e.target.parentNode.getAttribute('data-id');

        const ul= e.target.parentNode.parentNode.parentNode;

        ul.removeChild(e.target.parentNode.parentNode);

        li_valor.forEach(opc => {
            
            if(opc.getAttribute('data-id')===idList){
                opc.classList.remove('disabled');
            }

        });
       

    }
})






