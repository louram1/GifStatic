<!-- hide script from old browsers
$(document).ready(function() {

 //$("body").on("click", function()
 $( "button.SearchBtn" ).on("click", function() 
 {
 	
 		//alert("Received click");
 		GenerateGIPHY(this.innerText);
 		
 });

 $( "button.addGif" ).on("click", function() 
 {
 	
 		//alert("Received click");
 		GenerateAnimal();
 });



function GenerateGIPHY(Elem)
{
	//console.log("calling GenerateRandomWordIndex");
	//InitializeGlobals();
	//var LtrCnt = GenerateRandomWordIndex();
	//console.log("calling DetermineWordLength");
	//DetermineWordLength(LtrCnt);
	//var StrDash = "";
	//console.log("after call");
	var API_Key = "&api_key=JBEG3NAvZzu83uxoj2hwKiFxduOLL5Rg";
	//var x = Elem.innerText;
	var x = Elem;
	console.log(x);
	console.log("Running AJAX");
				<!-- Sample GIPHY pull -->
				<!-- http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=JBEG3NAvZzu83uxoj2hwKiFxduOLL5Rg -->				
				var QryURL = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=JBEG3NAvZzu83uxoj2hwKiFxduOLL5Rg";
				QryURL="http://api.giphy.com/v1/gifs/search?q=funny "+x+API_Key;
				console.log(QryURL);
				$("#GIF_Area").empty();
				$.ajax({url:QryURL,method:'GET'})
					.done(function(Response){
						for(var i = 0; i < 10; i++)
						{	
							//var pRating = $("<p class='figcaption'>").text("Rating: " + Response.data[i].rating);
							var imgId = "img_" + i.toString();
							var gifDIV = $("<div class='unit' data-state='still'>");
							//var gifDIV = $("<div>");
            				var pRating = $("<p>").text("Rating: " + Response.data[i].rating);
            				//var gifImg = $("<img id='" + imgId + " class='col-md-4' onClick=ProcessImgClick()>");
            				var gifImg = $("<img class='col-md-4 gif'>");
            				//var gifImg = $('<img onClick=ProcessImgClick()>');
            				//var gifImg = $('<img>');
							console.log(imgId);
							gifImg.attr("src", Response.data[i].images.fixed_height_still.url);
            				gifImg.attr({'data-animate' : Response.data[i].images.fixed_height.url});
            				gifImg.attr({'data-state' : "still"});
            				gifImg.attr({'data-still' : Response.data[i].images.fixed_height_still.url});
            				gifImg.addClass('gif');
            				gifImg.click(function(){
            					  //alert("received img click");
								  //var ClickID = getElementById(this).innerHTML;
								  //console.log(ClickID);
								  var state = $(this).attr('data-state');
								                  
								                
								    if (state === "still") {
								    	console.log("still state");
								    	//console.log($(this).id);
								    	//alert($(this).attr("id"));
								        $(this).attr("src", $(this).attr("data-animate"));
								        $(this).attr("data-state", "data-animate");
								      } else {
								        $(this).attr("src", $(this).attr("data-still"));
								        $(this).attr("data-state", "still");
								      }
								      
								});

            				gifDIV.append(pRating);
            				gifDIV.append(gifImg);

							//$("#GIF_Area").prepend("<img class='img' src='"+Response.data[i].images.fixed_height_still.url+"''>");
							//$("#GIF_Area").prepend("<img class='img' onClick=ProcessImgClick() src='"+Response.data[i].images.fixed_height_still.url+"''>");
							//$("#GIF_Area").prepend(pRating);
							$("#GIF_Area").prepend(gifDIV);
						}	
					
						console.log(Response);
					});
				console.log("after AJAX");				
	//Elem.innerHTML = "Change";
	//$('body').append("<img src='"+Response.data[0].images.downsized.url+"'>'");
	//console.log(x);			
}





function GenerateAnimal()
{
  //alert("Recived add click");
  var Txt = $("#animal-input").val();
  //alert(Txt);
  //console.log(Txt);	
  //data-search="Parrot" onclick="GenerateGIPHY(this)">Parrot</button>
	//var imAbutton = $("<button onclick=GenerateGIPHY(this)>");
	var imAbutton = $("<button type=button class='SearchBtn'>"); 
	//imAbutton.addClass("SearchBtn");       
    imAbutton.attr("data-search", Txt);
    imAbutton.text(Txt);
    imAbutton.click(function() 
 	{
 	
 		//alert("Received click");
 		GenerateGIPHY(this.innerText);
 		
	});
    //imAbutton.addClass("SearchBtn");
    $("#btnArr").append(imAbutton);    
 	console.log("added button");
 	GenerateGIPHY(Txt);
 	//$( "button.SearchBtn" ).on("click", function() 
}


})



// end hiding script from old browsers -->