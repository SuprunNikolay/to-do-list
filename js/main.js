$('#save-button-click').click(function () {
    var value=$('#new-task').val(),
        property = $('#priority-task-form').val(),
        tmpl = $('#template-task li').clone();


    if (value === ''){
        $('#new-task').addClass('new-task-error');
    }else{
        $('#new-task').addClass('new-task-form');
        tmpl.appendTo('#list').removeClass('template');
        tmpl.append(value);
        tmpl.children('.badge').append(property);
    }
    $('#new-task').val('');
});








// document.getElementById('save-button-click').addEventListener('click', function() {
// 	var li = document.createElement('li');
// 	var newTask=document.getElementById('new-task');
// 	var value = newTask.value;
// 	li.innerHTML = value;
// 	if(value===''){
//         newTask.style.borderColor = 'red';
// 	}else{
//         newTask.style.borderColor = '#0da4f3';
// 		list.appendChild(li);
// 	}
// 	document.getElementById('new-task').value = '';
// 	li.className="list-group-item";
//
// 	var input = document.createElement('input');
// 	input.setAttribute('type', 'checkbox');
// 	input.className = "checkbox";
// 	li.appendChild(input);
//
// 	input.addEventListener('change', function () {
//         var ifCheck = document.getElementsByClassName('checkbox');
//         for (var i=0; i<ifCheck.length; i++){
//         	var LiIfCheckStyle = ifCheck[i].parentNode.style;
//             if (ifCheck[i].checked === true){
//             	LiIfCheckStyle.backgroundColor = '#cee6d2';
//                 LiIfCheckStyle.color = '#aeb5b9';
//                 LiIfCheckStyle.fontWeight = '600';
//                 LiIfCheckStyle.transition = 'background-color 1s ease-out';
//                 span.style.backgroundColor = '#aeb5b9';
//                 span.style.color = '#cee6d2';
//                 span.style.transition = 'background-color 2s ease-out';
//
//             }else{
//                 LiIfCheckStyle.backgroundColor = 'inherit';
//                 LiIfCheckStyle.fontWeight = 'inherit';
//                 LiIfCheckStyle.color = 'inherit';
//                 span.style.backgroundColor = '#527486';
//                 span.style.color = 'white';
// 			};
//         }
//      });
//
// 	var property = document.getElementById("priority-task-form").value;
// 	var span = document.createElement('span');
// 	span.className = "badge";
// 	span.innerHTML = property;
// 	li.appendChild(span);
// 	if (value!=='') {
//         localStorage.setItem(value, property);
//     };
//
// 	var deleteButton = document.createElement('button');
// 	deleteButton.innerHTML = '<i class="fa fa-window-close" aria-hidden="true"></i>';
//     deleteButton.className = 'deleteButton';
//     li.appendChild(deleteButton);
//
//     deleteButton.addEventListener('click', function () {
//     	var liDeleteStyle = deleteButton.parentNode.style
//         liDeleteStyle.textDecoration = 'line-through';
//         liDeleteStyle.backgroundColor = '#ed3c00';
//         liDeleteStyle.transition = 'background-color 1s ease-out';
//         liDeleteStyle.color = 'white';
//         deleteButton.style.color = 'white';
//         span.style.backgroundColor = 'white';
//         span.style.color = '#ed3c00';
//         span.style.transition = 'background-color 1s ease-out';
//         span.style.transition = 'color 1s ease-out';
//         setTimeout(function () {
//             deleteButton.parentNode.remove()
//         }, 2500);
//         localStorage.removeItem(value);
//     })
// });
