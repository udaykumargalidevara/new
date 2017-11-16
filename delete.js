 $(document).ready(function(){
    
   //edit code
   $(document).on('click','#edit',function(event){
   	var ex = this.dataset.id;
   
   	var rootref = firebase.database().ref("products");
    rootref.on("child_added",snap=>{
    	if(snap.key===this.dataset.id){
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
		console.log(product,model,ram);
	
   	
   	  $('#editform').replaceWith("<form class='form-horizontal' data-eid="+ex+" id='editform'>"+
      "<div class='form-group'><label class='control-label col-sm-2' for='product'>ProductName:</label><div class='col-sm-10'><input type='text' class='form-control' id='pn' value="+product+" placeholder='Enter Product Name'></div></div>"+
      "<div class='form-group'><label class='control-label col-sm-2' for='model'>Model:</label><div class='col-sm-10'><input type='text' class='form-control' id='model' value="+model+" placeholder='Enter Model'></div></div>"+
      "<div class='form-group'><label class='control-label col-sm-2' for='ram'>Ram-Size:</label><div class='col-sm-10'><input type='text' class='form-control' id='ram' value="+ram+" placeholder='Enter Ram Size'></div></div>"+
      "<div class='form-group'><label class='control-label col-sm-2' for='hd'>HardDisk:</label><div class='col-sm-10'><input type='text' class='form-control' id='hd' value="+hd+" placeholder='Enter HardDisk'></div></div>"+
      "<div class='form-group'><label class='control-label col-sm-2' for='os'>Operating System:</label><div class='col-sm-10'><input type='text' class='form-control' id='os' value="+os+" placeholder='Enter Operating System'></div></div>"+
      "<div class='form-group'><label class='control-label col-sm-2' for='Processor'>Processor:</label><div class='col-sm-10'><input type='text' class='form-control' id='processor' value="+processor+" placeholder='Enter Processor'></div></div>"+
      "<div class='form-group'><label class='control-label col-sm-2' for='bo'>Built-on:</label><div class='col-sm-10'><input type='date' class='form-control' id='bo' value="+BuiltOn+" placeholder='Enter Built-On Date'></div></div>"+
      "<div class='form-group'><label class='control-label col-sm-2' for='display'>Display-Size:</label><div class='col-sm-10'><input type='text' class='form-control' value="+DisplaySize+" id='displaysize' placeholder='Enter Display-Size'></div></div>"+
      "<div class='form-group'><label class='control-label col-sm-2' for='make'>Make:</label><div class='col-sm-10'><input type='text' class='form-control' id='make' value="+Make+" placeholder='Enter Make'></div></div>"+
      "<div class='form-group'><div class='col-sm-offset-2 col-sm-10'><button id='submit'  class='btn btn-default'>Save</button></div></div></form>");
}
   });
});
   


   //edited form updating
   $(document).on('submit','#editform',function(){

    var product = $('#pn').val();
    var model  = $('#model').val();
    var ram = $('#ram').val();
    var hd = $('#hd').val();
    var os = $('#os').val();
    var processor = $('#processor').val();
    var builtOn = $('#bo').val();
    var size = $('#displaysize').val();
    var make = $('#make').val();
    var newRef  = firebase.database().ref("products/"+this.dataset.eid)
    newRef.update({
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

    
   })



 
});

