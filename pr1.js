var arr = [0,0,0,0,0,0,0,0,0,0];
var score=0;
function judge(res)
{
	
    if(res.id=="q1a1")
    {	arr[0]=1;
    	document.getElementById("a").style.visibility="visible";
    	document.getElementById("b").style.visibility="hidden";
    	document.getElementById("c").style.visibility="hidden";
    	document.getElementById("d").style.visibility="hidden";
    }
    else if(res.id=="q1a2"||res.id=="q1a3"||res.id=="q1a4")
    	{
    	arr[0]=0;	
    	  if(res.id=="q1a2")
    	  {
    	  	document.getElementById("a").style.visibility="hidden";
    	    document.getElementById("b").style.visibility="visible";
    	    document.getElementById("c").style.visibility="hidden";
    	    document.getElementById("d").style.visibility="hidden";
    	  }
    	  else if(res.id=="q1a3")
    	  {
    	  	document.getElementById("a").style.visibility="hidden";
    	    document.getElementById("b").style.visibility="hidden";
    	    document.getElementById("c").style.visibility="visible";
    	    document.getElementById("d").style.visibility="hidden";
    	  }
    	  
    	  else if(res.id=="q1a4")
    	  {
    	  	document.getElementById("a").style.visibility="hidden";
    	    document.getElementById("b").style.visibility="hidden";
    	    document.getElementById("c").style.visibility="hidden";
    	    document.getElementById("d").style.visibility="visible";
    	  }
    	}
    else if(res.id=="q2a4")
    	{arr[1]=1;
    		document.getElementById("a2").style.visibility="hidden";
    	    document.getElementById("b2").style.visibility="hidden";
    	    document.getElementById("c2").style.visibility="hidden";
    	    document.getElementById("d2").style.visibility="visible";
    	}
    else if(res.id=="q2a1"||res.id=="q2a2"||res.id=="q2a3")
    	{arr[1]=0;
    		if(res.id=="q2a1")
    		{
             document.getElementById("a2").style.visibility="visible";
    	    document.getElementById("b2").style.visibility="hidden";
    	    document.getElementById("c2").style.visibility="hidden";
    	    document.getElementById("d2").style.visibility="hidden";
    		}
    		else if(res.id=="q2a2")
    		{
    			document.getElementById("a2").style.visibility="hidden";
    	    document.getElementById("b2").style.visibility="visible";
    	    document.getElementById("c2").style.visibility="hidden";
    	    document.getElementById("d2").style.visibility="hidden";
    		}
    		else if(res.id=="q2a3")
    		{
    			document.getElementById("a2").style.visibility="hidden";
    	    document.getElementById("b2").style.visibility="hidden";
    	    document.getElementById("c2").style.visibility="visible";
    	    document.getElementById("d2").style.visibility="hidden";
    		}
    	}
    else if(res.id=="q3a2")
    	{arr[2]=1;
    		document.getElementById("a3").style.visibility="hidden";
    	    document.getElementById("b3").style.visibility="visible";
    	    document.getElementById("c3").style.visibility="hidden";
    	    document.getElementById("d3").style.visibility="hidden";
    	}
    else if(res.id=="q3a1"||res.id=="q3a3"||res.id=="q3a4")
    	{arr[2]=0;
    		if(res.id=="q3a1")
    		{
             document.getElementById("a3").style.visibility="visible";
    	    document.getElementById("b3").style.visibility="hidden";
    	    document.getElementById("c3").style.visibility="hidden";
    	    document.getElementById("d3").style.visibility="hidden";
    		}
    		else if(res.id=="q3a3")
    		{
             document.getElementById("a3").style.visibility="hidden";
    	    document.getElementById("b3").style.visibility="hidden";
    	    document.getElementById("c3").style.visibility="visible";
    	    document.getElementById("d3").style.visibility="hidden";
    		}
    		else if(res.id=="q3a4")
    		{
             document.getElementById("a3").style.visibility="hidden";
    	    document.getElementById("b3").style.visibility="hidden";
    	    document.getElementById("c3").style.visibility="hidden";
    	    document.getElementById("d3").style.visibility="visible";
    		}
    	}
    else if(res.id=="q4a4")
    	{arr[3]=1;
    		document.getElementById("a4").style.visibility="hidden";
    	    document.getElementById("b4").style.visibility="hidden";
    	    document.getElementById("c4").style.visibility="hidden";
    	    document.getElementById("d4").style.visibility="visible";
    	}
    else if(res.id=="q4a1"||res.id=="q4a2"||res.id=="q4a3")
    	{arr[3]=0;
    		if(res.id=="q4a1")
    		{
            document.getElementById("a4").style.visibility="visible";
    	    document.getElementById("b4").style.visibility="hidden";
    	    document.getElementById("c4").style.visibility="hidden";
    	    document.getElementById("d4").style.visibility="hidden";
    		}
    		else if(res.id=="q4a2")
    		{
             document.getElementById("a4").style.visibility="hidden";
    	    document.getElementById("b4").style.visibility="visible";
    	    document.getElementById("c4").style.visibility="hidden";
    	    document.getElementById("d4").style.visibility="hidden";
    		}
    		else if(res.id=="q4a3")
    		{
             document.getElementById("a4").style.visibility="hidden";
    	    document.getElementById("b4").style.visibility="hidden";
    	    document.getElementById("c4").style.visibility="visible";
    	    document.getElementById("d4").style.visibility="hidden";
    		}
    	}
    else if(res.id=="q5a2")
    	{arr[4]=1;
    		document.getElementById("a5").style.visibility="hidden";
    	    document.getElementById("b5").style.visibility="visible";
    	    document.getElementById("c5").style.visibility="hidden";
    	    document.getElementById("d5").style.visibility="hidden";
    	}
    else if(res.id=="q5a1"||res.id=="q5a4"||res.id=="q5a3")
    	{arr[4]=0;
         if(res.id=="q5a1")
         {
           document.getElementById("a5").style.visibility="visible";
    	    document.getElementById("b5").style.visibility="hidden";
    	    document.getElementById("c5").style.visibility="hidden";
    	    document.getElementById("d5").style.visibility="hidden";
         }
         else if(res.id=="q5a4")
         {
           document.getElementById("a5").style.visibility="hidden";
    	    document.getElementById("b5").style.visibility="hidden";
    	    document.getElementById("c5").style.visibility="hidden";
    	    document.getElementById("d5").style.visibility="visible";
         }
         else if(res.id=="q5a3")
         {
           document.getElementById("a5").style.visibility="hidden";
    	    document.getElementById("b5").style.visibility="hidden";
    	    document.getElementById("c5").style.visibility="visible";
    	    document.getElementById("d5").style.visibility="hidden";
         }
    	}
    else if(res.id=="q6a1")
    	{arr[5]=1;
         document.getElementById("a6").style.visibility="visible";
    	    document.getElementById("b6").style.visibility="hidden";
    	    document.getElementById("c6").style.visibility="hidden";
    	    document.getElementById("d6").style.visibility="hidden";
    	}	
    else if(res.id=="q6a2"||res.id=="q6a4"||res.id=="q6a3")
    	{arr[5]=0;
         if(res.id=="q6a2")
         {
         	document.getElementById("a6").style.visibility="hidden";
    	    document.getElementById("b6").style.visibility="visible";
    	    document.getElementById("c6").style.visibility="hidden";
    	    document.getElementById("d6").style.visibility="hidden";
         }  
         else  if(res.id=="q6a4")
         {
         	document.getElementById("a6").style.visibility="hidden";
    	    document.getElementById("b6").style.visibility="hidden";
    	    document.getElementById("c6").style.visibility="hidden";
    	    document.getElementById("d6").style.visibility="visible";
         }   
         else  if(res.id=="q6a3")
         {
         	document.getElementById("a6").style.visibility="hidden";
    	    document.getElementById("b6").style.visibility="hidden";
    	    document.getElementById("c6").style.visibility="visible";
    	    document.getElementById("d6").style.visibility="hidden";
         }           
    	}
    else if(res.id=="q7a1")
    	{arr[6]=1;
    		document.getElementById("a7").style.visibility="visible";
    	    document.getElementById("b7").style.visibility="hidden";
    	    document.getElementById("c7").style.visibility="hidden";
    	    document.getElementById("d7").style.visibility="hidden";
    	}
    else if(res.id=="q7a4"||res.id=="q7a2"||res.id=="q7a3")
    	{arr[6]=0;
    		if(res.id=="q7a4")
    		{
             document.getElementById("a7").style.visibility="hidden";
    	    document.getElementById("b7").style.visibility="hidden";
    	    document.getElementById("c7").style.visibility="hidden";
    	    document.getElementById("d7").style.visibility="visible";
    		}
    		else if(res.id=="q7a2")
    		{
             document.getElementById("a7").style.visibility="hidden";
    	    document.getElementById("b7").style.visibility="visible";
    	    document.getElementById("c7").style.visibility="hidden";
    	    document.getElementById("d7").style.visibility="hidden";
    		}
    		else if(res.id=="q7a3")
    		{
             document.getElementById("a7").style.visibility="hidden";
    	    document.getElementById("b7").style.visibility="hidden";
    	    document.getElementById("c7").style.visibility="visible";
    	    document.getElementById("d7").style.visibility="hidden";
    		}
    	}
    else if(res.id=="q8a2")
    	{arr[7]=1;
    		document.getElementById("a8").style.visibility="hidden";
    	    document.getElementById("b8").style.visibility="visible";
    	    document.getElementById("c8").style.visibility="hidden";
    	    document.getElementById("d8").style.visibility="hidden";
    	}
    else if(res.id=="q8a1"||res.id=="q8a4"||res.id=="q8a3")
    	{arr[7]=0;
           if(res.id=="q8a1")
           {
           	document.getElementById("a8").style.visibility="visible";
    	    document.getElementById("b8").style.visibility="hidden";
    	    document.getElementById("c8").style.visibility="hidden";
    	    document.getElementById("d8").style.visibility="hidden";
           }
           else if(res.id=="q8a4")
           {
           	document.getElementById("a8").style.visibility="hidden";
    	    document.getElementById("b8").style.visibility="hidden";
    	    document.getElementById("c8").style.visibility="hidden";
    	    document.getElementById("d8").style.visibility="visible";
           }
           else if(res.id=="q8a3")
           {
           	document.getElementById("a8").style.visibility="hidden";
    	    document.getElementById("b8").style.visibility="hidden";
    	    document.getElementById("c8").style.visibility="visible";
    	    document.getElementById("d8").style.visibility="hidden";
           }
    	}
    else if(res.id=="q9a3")
    	{arr[8]=1;
    		document.getElementById("a9").style.visibility="hidden";
    	    document.getElementById("b9").style.visibility="hidden";
    	    document.getElementById("c9").style.visibility="visible";
    	    document.getElementById("d9").style.visibility="hidden";
    	}
    else if(res.id=="q9a1"||res.id=="q9a2"||res.id=="q9a4")
    	{arr[8]=0;
    		if(res.id=="q9a1")
    		{
             document.getElementById("a9").style.visibility="visible";
    	    document.getElementById("b9").style.visibility="hidden";
    	    document.getElementById("c9").style.visibility="hidden";
    	    document.getElementById("d9").style.visibility="hidden";
    		}
    		else if(res.id=="q9a2")
    		{
    			document.getElementById("a9").style.visibility="hidden";
    	    document.getElementById("b9").style.visibility="visible";
    	    document.getElementById("c9").style.visibility="hidden";
    	    document.getElementById("d9").style.visibility="hidden";
    		}
    		else if(res.id=="q9a4")
    		{
    			document.getElementById("a9").style.visibility="hidden";
    	    document.getElementById("b9").style.visibility="hidden";
    	    document.getElementById("c9").style.visibility="hidden";
    	    document.getElementById("d9").style.visibility="visible";
    		}
    	}
    else if(res.id=="q10a2")
    	{arr[9]=1;
    		document.getElementById("a10").style.visibility="hidden";
    	    document.getElementById("b10").style.visibility="visible";
    	    document.getElementById("c10").style.visibility="hidden";
    	    document.getElementById("d10").style.visibility="hidden";
    	}
    else if(res.id=="q10a1"||res.id=="q10a3"||res.id=="q10a4")
    	{arr[9]=0;
    		if(res.id=="q10a1")
    		{
             document.getElementById("a10").style.visibility="visible";
    	    document.getElementById("b10").style.visibility="hidden";
    	    document.getElementById("c10").style.visibility="hidden";
    	    document.getElementById("d10").style.visibility="hidden";
    		}
    		else if(res.id=="q10a3")
    		{
             document.getElementById("a10").style.visibility="hidden";
    	    document.getElementById("b10").style.visibility="hidden";
    	    document.getElementById("c10").style.visibility="visible";
    	    document.getElementById("d10").style.visibility="hidden";
    		}
    		else if(res.id=="q10a4")
    		{
             document.getElementById("a10").style.visibility="hidden";
    	    document.getElementById("b10").style.visibility="hidden";
    	    document.getElementById("c10").style.visibility="hidden";
    	    document.getElementById("d10").style.visibility="visible";
    		}
    	}

}

function sc()
{
	var str = "";score=0;
	for(var i=0;i<arr.length ;i++)
	{
		var x=i+1;
		if(arr[i]==1)
		{
			score++;
			str+='Answer '+x+'   '+' <i class="far fa-check-circle ss"></i> Your answer is correct!<br><br>';
		}
		else{
			str+='Answer '+x+'   '+' <i class="far fa-times-circle sj"></i> Not correct!!!<br><br>';
		}
	}
	document.getElementById("result").innerHTML="<h2>Your results</h2><br>"+str;
	if(score>=8)
		document.getElementById("non").innerHTML="<h2 id='tg'>Congratulations! You are a ninja!!</h2><br>You have a score of : "+score;
	else if(score>=5)
		document.getElementById("non").innerHTML="<h2 id='tg'>Well, that was good ! You are a pupil</h2><br>You have a score of : "+score;
	else 
		document.getElementById("non").innerHTML="<h2 id='tg'> You are still a novice and have lot to learn </h2><br>You have a score of : "+score;
}