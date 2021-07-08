'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * identity: Designed to return a value unchanged.
 * 
 * @param {any datatype} value: the value to return unchanged
 */


function identity(value) {
    return value;
}
module.exports.identity = identity;



/**
 * typeOf: Designed to determine what type of value was passed in the Function.
 * 
 * @ param {any datatype} value: the datetype to identify the type of
 */
 
function typeOf(value) {
     if((Array.isArray(value))) {
        return 'array';
    } else if(value === null) {
        return 'null';
    } else if(value instanceof Date) {
        return 'date';
    } else if(typeof value === 'string') {
        return 'string';
    } else if(typeof value === 'undefined') {
        return 'undefined';
    } else if(typeof value === 'number') {
        return 'number';
    } else if(typeof value === 'boolean') {
        return 'boolean';
    } else if(typeof value === 'function') {
        return 'function';
    } else if(typeof value === 'object') {
        return 'object';
    } else {
        return 'not found';
    }
};

module.exports.typeOf = typeOf;



/**
 * first: Designed to take an array and and a number, and return the first element 
 * of the array if no number is given  or it is NAN, or the amount of elements 
 * equal to the number passed to the Function.
 * 
 * @param {Array} array: the array of which to check the elements to return
 * @param {Number} number: the nuumber of elements to return from the array