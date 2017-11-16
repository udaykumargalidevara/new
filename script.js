$(document).ready(function() 
{    
    //connecting to the database
    var rootref = firebase.database().ref("products");
    //ret data from db and display on the web page
    rootref.on("child_added",snap=>{
        console.log("added:", snap.key);
        var newPostKey = snap.key;
        var product=snap.child('Product-Name').val();
		var model=snap.child('Model').val();
		var ram=snap.child('Ram Size').val();
		var hd = snap.child('HardDisk').val();
		var os = snap.child('OS').val();
		var processor = snap.child('Processor').val();
		var BuiltOn = snap.child('Built-On').val();
		var DisplaySize = snap.child('Display-Size').val();
		var Make = snap.child('Make').val();
        $('#tablebody').append("<tr ><td>"+product+"</td><td>"+model+"</td><td>"+ram+"</td><td>"+hd+"</td><td>"+os+"</td><td>"+processor+"</td><td>"+BuiltOn+"</td><td>"+DisplaySize+"</td><td>"+Make+"</td><td><button type='button' id='delete' data-id="+newPostKey+" class='btn btn-danger btn-sm'><span class='glyphicon glyphicon-trash'></span></button> <button type='button' id='edit' data-id="+newPostKey+" class='btn btn-info btn-sm' data-toggle='modal' data-target='#myedit'><span class='glyphicon glyphicon-edit'></span></button></td></tr>");
	});
    //adding a new product
	$(document).on('submit','#myform',function(){
    var product = $('#pn').val();
    var model  = $('#model').val();
    var ram = $('#ram').val();
    var hd = $('#hd').val();
    var os = $('#os').val();
    var processor = $('#processor').val();
    var builtOn = $('#bo').val();
    var size = $('#displaysize').val();
    var make = $('#make').val();

    var newRef  = rootref.push();
    newRef.set({
         	'Product-Name':product,
         	'Model':model,
         	'Ram Size':ram,
         	'HardDisk':hd,
         	'OS':os,
         	'Processor':processor,
         	'Built-On':builtOn,
         	'Display-Size':size,
         	'Make':make
              });
	});
    //deleting the product
  $(document).on('click','#delete',function(){
      console.log(this.dataset.id+"delete");
      var rem =this.dataset.id;
      rootref.child(rem).remove();
      location.reload();
     
   });  

});