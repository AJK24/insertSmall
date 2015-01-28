//Andrew Klump
//CMP344 - chapter 3 insert small number
////insert a number into a list only if it is the smallest number in the list
//1/28/2015
//





var listArray  = [100, 75, 89]; //basic array to be tested.


//the function designed to find the smallest number in a list
function findSmallest(list){
     var smallnum = list[0];	//initial smallest number is the first number
     for(var i = 0; i < list.length; i++){

		if(smallnum > list[i]){	   //renames smallnum if its smaller
			smallnum = list[i];	
		}
	}

return smallnum;	//returns the smallest number
}

//attempts to add to the list
function addToList(list, num){
	var smallest =	findSmallest(list); //finds the smallest number
	if(smallest > num){	//if smallest num is less than new - add
		list.push(num);
	}

}



console.log(listArray.length); //prnts 3
console.log(findSmallest(listArray)); //prints 100


addToList(listArray, 24);	//attempts to add 24 to array.
console.log(listArray);  //prints 100, 75, 89 24


addToList(listArray, 55);	//attemps to add 55 but cannot
console.log(listArray);	//prints the same as above





