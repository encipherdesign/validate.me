/*
	VALIDATE ME

	IS IT		::	any		::	returns item || false when null, undefined, or empty
		IsIt( CheckVariable );
	
	IS IT IN	:: 	bool	::	index of
		IsItIn( CheckFor, CheckIn );
	
	IS A		::	type	::	returns ? typeof
		IsA( CheckVariable, IsType );

	Brent Pruitt
	Concept Not Code, 2017
 * 
 */

/*
	IsIt
	//	is it a Thing?
	//	does the thing exist? * is the boolean? * is the boolean?

	//	ex. :: IsIt( variable );
	//			if ( IsIt( thing ) ) { … magic … }
	//			if ( IsIt( thing ) == obj ) { … magic … }
	//			if ( IsIt( thing ) == 'string' ) { … magic … }
*/
function IsIt( thing ) {
	if ( thing === null ) {
		//it's not
		return false;
	}
	switch ( typeof thing ) {
		case 'undefined':
			//it's definitely not
			return false;
		case 'string':
			//it might not
			if ( thing.length > 0 ){
				return thing;	
			}
			return false;
		default:
			//it still might not
			return thing;
	}
	//return thing;
}

/*
	IsItIn
	//	is ThatThing in ThisThing?
	//	
	//	ex. :: IsItIn( LookForThis, InVariable );
	//			if ( IsItIn( thisthing, thatthing ) ) { … magic … }
	//			if ( IsItIn( 'thisthing', thatthing ) ) { … magic … }
*/
function IsItIn( ThatThing, ThisThing ) {
	//if undefined || null || ''
	if ( ! IsIt( ThatThing ) || ! IsIt( ThisThing ) ) return false;//console.log( '! || !' );//
	//in object?
	if ( IsObject( ThatThing ) ){
		//console.log( 'IsObject = T' );
		if ( Object.is( ThatThing, ThisThing ) ) return true;//console.log( 'ThatThing = ThisThing' );//
		//is property name?
		for (var TheThing in ThatThing) {
		  if ( ThatThing.hasOwnProperty( TheThing ) ) return true;
		}
		//in values?
		var ValThing = Object.values( ThatThing );
		for ( var val in ThatThing ){
			//console.log( 'val = ' + ValThing[val] );
			if ( ValThing[val] == ThisThing ) return true;//console.log( 'VAL = ' + ThisThing );//
		}
		//in keys?
		var KeyThing = Object.keys( ThatThing );
		for ( var key in KeyThing ){
			//console.log( 'key = ' + KeyThing[key] );
			if ( KeyThing[key] == ThisThing ) return true;//console.log( 'KEY = ' + ThisThing );//
		}
		return false;
	}
	//in string?
	return IsStringInElement( ThisThing, ThatThing );
}

/*
	IsStringInElement
	//	indexOf
	
	//	ex. :: IsStringInElement( LookForThis, InVariable );
	//			if ( IsStringInElement( thisthing, thatthing ) ) { … magic … }
	//			if ( IsStringInElement( 'thisthing', thatthing ) ) { … magic … }
*/
function IsStringInElement( string, element ) {
	return string.indexOf( element ) >= 0;
}

/*
	Just Yes Or No Is Fine
	//	IsIt as 'yes' or 'no' string
	
	//	ex. :: jyonif( variable );
	
*/
function jyonif( really ){
	return IsIt( really ) ? 'yes' : 'no';
}

/*
	YesNo
	//	jyonif alias
	
	//	ex. :: YesNo( variable );

*/
function YesNo( really ){
	return jyonif( really );
}

/*
	IsString
	//	IsIt typeof string
	
	//	ex. :: IsString( variable );
	
*/
function IsString( PossibleString ) {
	return typeof PossibleString === 'string';//= typeof ( String )
}

/*
	IsNumber
	//	IsIt typeof number
	
	//	ex. :: IsNumber( variable );
	
*/
function IsNumber( PossibleNumber ) {
	return typeof PossibleNumber === 'number';
}

/*
	IsBoolean
	//	IsIt typeof boolean
	
	//	ex. :: IsBoolean( variable );
	
*/
function IsBoolean( PossibleBoolean ) {
	return typeof PossibleBoolean === 'boolean';
}

/*
	IsFunction
	//	IsIt typeof function
	
	//	ex. :: IsFunction( variable );
	
*/
function IsFunction( PossibleFunction ) {
	return typeof PossibleFunction === 'function';
}

/*
	IsObject
	//	IsIt typeof object
	
	//	ex. :: IsObject( variable );
	
*/
function IsObject( PossibleObject ) {
	return typeof PossibleObject === 'object';
}

/*
	GetArray
	//	IsIt typeof string && contain delimeter && return array 
	
	//	ex. :: GetArray( variable );
	//			return GetArray( window.location.href );
	
*/
function GetArray( string, delimeter ){
	delimeter = typeof delimeter !== 'undefined' ? delimeter : '/';
	if ( IsString( string ) && IsStringInElement( string, delimeter ) ){
		return string.split( delimeter );
	} else {
		return [ string ];
	}
}

/*
	IsA
	//	IsIt typeof
	
	//	ex. :: IsA( variable );
	//			if ( IsA( variable, 'null' ) ) { … magic … }
	//			if ( IsA( variable, 'object' ) ) { … magic … }
	//			if ( IsA( variable, 'number' ) ) { … magic … }
	//			if ( IsA( variable, 'string' ) ) { … magic … }
	//			if ( IsA( variable, 'boolean' ) ) { … magic … }
	//			if ( IsA( variable, 'undefined' ) ) { … magic … }
	
*/
function IsA( thing, type ) {
	return GetType( thing ) == type ? true : false;
}

/*
	GetType
	//	return typeof
	
	//	ex. :: GetType( variable );
	
*/
function GetType( thing ) {
	if ( thing === null ) {
		return 'null';
	}
	switch ( typeof thing ) {
		case 'undefined':
			return 'undefined';
		case 'boolean':
			return 'boolean';
		case 'number':
			return 'number';
		case 'string':
			return 'string';
		default:
			return 'object';
	}
}

/*
 	LogObject
 	//	console log the obj
	//	for debugging the things
	
 	//	ex.	::	LogObject( object );
 	//	ex.	::	LogObject( object, 1 );
 */
function LogObject( object, level ) {
	var output = '';
	level = typeof level !== 'undefined' ? level : 0;
	if( IsObject( object ) ) {
		for ( var property in object ) {
			if( IsObject( object[property] ) && level > 1  ) {
				for ( var item in object[property] ) {
					output += item + ' [ '+ GetType( item ) + ' ]: '  + console.dir( object[property][item] ) + '; ';
				}
			} else {
				output += object[property];
			}
			output += property  + ' [ '+ GetType( property ) + ' ]: '  +  console.dir( object[property] ) + '; ';
		}
	} else {
		output += object;
	}
	return output;
}