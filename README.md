# validate.me
Debugging &amp; quick variable validation

Several examples and use cases are provided in the is-it.pretty.test.js


# IsIt()

Is it a Thing? 
This function checks whether the variable is null, undefined or an empty string, then returns false in those cases, or returns the variable passed to the function.

Returns	:: variable || false when null, undefined, or empty

	Ex. ::	IsIt( VariableToCheck )

	is it a thing?
		if ( IsIt( thing ) ) { … do magic … }

	is it not a thing?
		if ( ! IsIt( thing ) ) { … do magic … }

	is it equal to a defined object?
		var obj = { key: 'value' };
		if ( IsIt( thing ) == obj ) { … do magic … }
		
	is it equal to a string?
		if ( IsIt( thing ) == 'string' ) { … do magic … }
		
		
		
# IsItIn()

is ThatThing in ThisThing?
This function searches for a variable in an object, array or string. The first variable is the item you are looking for 'it' & the second variable is the item you are looking in. This function utilizes IsIt() to determine whether the variables are defined. This function returns a boolean value based on the presence of the first variable as a parameter, key or value of an simple object, or contained within a string. 

Returns	::	boolean :: searches for a value in an object or string

	Ex. IsItIn( LookForThis, InVariable )
	
	is it in that thing? 

	*it* is the first variable passed, this thing i'm looking for *in* the second variable of that thing.
		
		if ( IsItIn( ThisThing, ThatThing ) ) { … magic … }

	if either variable is null, undefined or empty, the function returns false. 
		Ex. :: ThisThing == undefined

	if both variables are equal, the function returns true.
		Ex. :: var ThisThing = 'samiam', ThatThing = 'samiam';

	if the second variable is a property of the first, the function returns true. 
		Ex. :: obj.property; ThatThing.ThisThing;

	if the first variable is a key, or value of an object, the function returns true. 
		Ex. :: obj = { LookingFor: 'ThisThing' }

	is a string in that thing?
		if ( IsItIn( 'thisthing', thatthing ) ) { … magic … }



# IsA()
This function determines whether the first variable is a type of the second variable. [Arrays are returned as objects.]

	Ex.	IsA( variable, typeof );
		if ( IsA( variable, 'null' ) ) { … magic … }
		if ( IsA( variable, 'object' ) ) { … magic … }
		if ( IsA( variable, 'number' ) ) { … magic … }
		if ( IsA( variable, 'string' ) ) { … magic … }
		if ( IsA( variable, 'boolean' ) ) { … magic … }
		if ( IsA( variable, 'undefined' ) ) { … magic … }




# GetType()
This function returns the type of variable passed. [Arrays are returned as objects.]

Returns	::	string	::	possible values: null || undefined || boolean || number || string || object

	Ex. GetType( variable )



# GetArray()
This function returns an array from a string passed with a delimeter.

	Ex. GetArray( variable )
	
		//return the current url as an object array
		return GetArray( window.location.href );
		
		
		
# Is_type_()?
A variety of simple functions to return a boolean if the variable passed matches the type.

	• IsObject()		//	IsIt typeof object		::	IsObject( variable )
	• IsFunction()		//	IsIt typeof function	::	IsFunction( variable )
	• IsBoolean()		//	IsIt typeof boolean?	::	IsBoolean( variable )
	• IsNumber()		//	IsIt typeof number?		::	IsNumber( variable )
	• IsString()		//	IsIt typeof string?		::	IsString( variable )



# IsStringInElement()
This function is used by IsItIn() on string elements

Returns ::	boolean	:: true, when element is found in string

	Ex. IsStringInElement( LookForThis, InVariable )

		if ( IsStringInElement( ThisThing, ThatThing ) ) { … magic … }
		if ( IsStringInElement( 'ThisThing', ThatThing ) ) { … magic … }
		

# jyonif()	[Just Yes Or No Is Fine]
When a simple yes or no will do, this function returns a lowercase string valued 'yes' or 'no' to replace a boolean value, true or false, 1 or 0.

Returns	:: string	::	possible values: 'yes' || 'no'

	Ex. jyonif( variable )
	

# YesNo()
An easier to remember alias for jyonif()

Returns	:: string	::	possible values: 'yes' || 'no'

	Ex. YesNo( variable )
	
	
