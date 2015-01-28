//Andrew Klump
//CMP344 - chapter 3 insert small number
////insert a number into a list only if it is the smallest number in the list
//1/28/2015
//





var listArray  = [100, 75, 89];
var smallestNumber = 0;


var print = function(args) {
    console.log(args);
}

function findSmallest(list){
     var smallnum = list[0];
     for(var i = 0; i < list.length; i++){
		if(smallnum < list[i]){
			smallnum = list[i];	
		}
	}

return smallnum;
}

print(listArray.length); //prnts 3
print(findSmallest(listArray)); //prints 100


