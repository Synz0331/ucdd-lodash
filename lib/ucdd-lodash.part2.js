/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`.
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0);
 * // => []
 */
function range(start, end) 
{//Check the condition if the parameter passed in is only 0
	if (start == 0 && end == null)
	{//then we return an empty array
		var newArray = []
		return newArray
	}
	//Check the condition if only the size of the array is passed in
	else if (end == null)
	{
		var newArray = []
		//create a for loop that default starts at 0, and ends at start-1
		for (var i = 0; i < start; i++) 
		{
			newArray.push(i)
		};
		return newArray
	}
	//Final condition is when passed a start and end
	else
	{
		var newArray = []
		//push all the numbers starting at start and ending at end-1
		for (var i = start; i < end; i++)
		{
			newArray.push(i)
		};
		return newArray
	}
   //return "not yet implemented"
}


/**
 * Creates an object composed of the picked `object` properties. Property
 * names may be specified as individual arguments or as arrays of property
 * names.
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.pick(object, 'user');
 * // => { 'user': 'fred' }
 *
 */
function pick(object, propertyNames) 
{//Need to create a new collection object
	var newObj = {}
	//we check to see if we are passed a propertyNames to look for
	if (propertyNames == null)
	{	//If not, we return an empty dictionary
		return newObj
	}
	else
	{	//Otherwise we need to loop over the size of the propertyNames list
		for (var i = 0; i < propertyNames.length; i++)
		{//Now we need to loop over the keys in the object
			for (name in object)
			{//And compare it to the list propertyNames
				if (name == propertyNames[i])
					//then we add the elements to the empty newObj and return it
					newObj[name] = object[name]
			};
		}
	}
    return newObj
    //return "not yet implemented"
}


/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * The function returns as soon as it finds a passing value and does not iterate
 * over the entire collection. The predicate is invoked with (value)
 */
function some(collection, predicate) 
{
	for (var i = 0; i < collection.length; i++)
	{//We iterate over the collection, it that element is true inside after
		//passing through the predicate, we return true
		if (predicate(collection[i]))
			return true
	}
    return false
    //return "not yet implemented"
}

/**
 * Checks if the given callback returns truthy value for **all** elements of a collection.
 */
function every(collection, predicate) 
{
	for (var i = 0; i < collection.length; i++)
	{//Same as above, except that now we are looking for if it is false at all
		if (!predicate(collection[i]))
			return false
	}
    return true
    //return "not yet implemented"
}

/**
 * Iterates over elements of `collection`, returning the first element
 * that have the properties of the given
 * object, else `false`.
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 *
 * _.find(users, { 'age': 1 })
 * // => { 'user': 'pebbles', 'age': 1,  'active': false }
 *
 */
function find(collection, object) 
{
	var newObj = {}
	var counter = 0
	for (var i = 0; i < collection.length; i++)
	{	
		var ObjCount = 0
		for (key in object)
		{
			ObjCount++
			for (key2 in collection[i])
			{
				if (key == key2)
				{
					if (object[key] == collection[i][key2])
					{
						counter++
					}
				}
			}
		}
		if (counter == ObjCount)
			newObj = collection[i]
		else
			counter = 0
	}
	return newObj
    //return "not yet implemented"
}

// Export functions
var lib = {}
lib.range = range
lib.pick = pick
lib.some = some
lib.every = every
lib.find = find

module.exports = lib