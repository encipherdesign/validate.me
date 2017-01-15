/*
 * VALIDATE ME
 * 
 * IS		::	bool	::	returns whether or not a value exists/is not null/undefined  
 * IS IT	::	str		::	returns what you expect || false
 * IS IT IN	:: bool		:: index of
 * IS IS	::	type	::	returns ? typeof()
 * Brent Pruitt
 * Concept Not Code. 2017
 * 
 */
console.log( 'am i validated?' );

var StringTest = 'EqualsStringTest';
var BoolTest = false;
var NumberTest = 3;
var ObjTest = ['array','of','strings'];


/*
 * does the thing exist/have value? 
 * 
 * if ( IsIt( thing ) ) { … magic … }
 * if ( IsIt( thing ) == 'this' ) { … magic … }
 * if ( IsIt( thing ) == obj ) { … magic … }
 * 
 */

if ( IsIt( false ) ){
	console.log( '?false=false: it is! it is: ' + IsIt( false ) );
} else {
	console.log( '?false≠false: else if, it is: ' + IsIt( false ) );
}
if ( IsIt( true ) ){
	console.log( '?true=true: it is true! it is: ' + IsIt( false ) );
} else {
	console.log( '?true≠true: else if, it is: ' + IsIt( false ) );
}
if ( ! IsIt( BoolTest ) ){
	console.log( '[! BoolTest=F] it is ! ' + BoolTest + '! it is: ' + IsIt( BoolTest ) );
} else {
	console.log( '[! BoolTest=F] else if, it is !: ' + IsIt( BoolTest ) );
}
if ( IsIt( BoolTest ) ){
	console.log( '[BoolTest=F] it is ' + BoolTest + '! it is: ' + IsIt( BoolTest ) );
} else {
	console.log( '[BoolTest=F] else if, it is: ' + IsIt( BoolTest ) );
}
var BoolTest = true;
if ( ! IsIt( BoolTest ) ){
	console.log( '[!BoolTest=T] it is ! ' + BoolTest + '! it is: ' + IsIt( BoolTest ) );
} else {
	console.log( '[!BoolTest=T] else if, it is !: ' + IsIt( BoolTest ) );
}
if ( IsIt( BoolTest ) ){
	console.log( '[BoolTest=T] it is ' + BoolTest + '! it is: ' + IsIt( BoolTest ) );
} else {
	console.log( '[BoolTest=T] else if, it is: ' + IsIt( BoolTest ) );
}

if ( IsIt( StringTest ) ){
	console.log( '?StringTest: it is! it is: ' + IsIt( StringTest ) );
} else {
	console.log( '?StringTest: else if, it is: ' + IsIt( StringTest ) );
}
if ( IsIt( StringTest ) == 'StringTest' ){
	console.log( '?StringTest="StringTest": it is! it is: ' + IsIt( StringTest ) );
} else {
	console.log( '?StringTest="StringTest": else if, it is: ' + IsIt( StringTest ) );
}
if ( IsIt( StringTest ) != 'StringTest' ){
	console.log( '?StringTest!="StringTest": it is! it is: ' + IsIt( StringTest ) );
} else {
	console.log( '?StringTest!="StringTest": else if, it is: ' + IsIt( StringTest ) );
}
if ( IsIt( StringTest ) !== 'StringTest' ){
	console.log( '?StringTest!=="StringTest": it is! it is: ' + IsIt( StringTest ) );
} else {
	console.log( '?StringTest!=="StringTest": else if, it is: ' + IsIt( StringTest ) );
}
if ( IsIt( StringTest ) == 'EqualsStringTest' ){
	console.log( '?StringTest=="EqualsStringTest": it is! it is: ' + IsIt( StringTest ) );
} else {
	console.log( '?StringTest=="EqualsStringTest": else if, it is: ' + IsIt( StringTest ) );
}
if ( IsIt( StringTest ) == StringTest ){
	console.log( '?StringTest==StringTest: it is! it is: ' + IsIt( StringTest ) );
} else {
	console.log( '?StringTest==StringTest: else if, it is: ' + IsIt( StringTest ) );
}

if ( IsIt( ObjTest ) ){
	console.log( '?ObjTest: it is! it is: ' + IsIt( ObjTest ) );
} else {
	console.log( '?ObjTest: else if, it is: ' + IsIt( ObjTest ) );
}
if ( IsIt( ObjTest ) == 'ObjTest' ){
	console.log( '?ObjTest="ObjTest": it is! it is: ' + IsIt( ObjTest ) );
} else {
	console.log( '?ObjTest="ObjTest": else if, it is: ' + IsIt( ObjTest ) );
}
if ( IsIt( ObjTest ) != 'ObjTest' ){
	console.log( '?ObjTest!="ObjTest": it is! it is: ' + IsIt( ObjTest ) );
} else {
	console.log( '?ObjTest!="ObjTest": else if, it is: ' + IsIt( ObjTest ) );
}
if ( IsIt( ObjTest ) == {} ){
	console.log( '?ObjTest=={}: it is! it is: ' + IsIt( ObjTest ) );
} else {
	console.log( '?ObjTest=={}: else if, it is: ' + IsIt( ObjTest ) );
}
if ( IsIt( ObjTest ) == ObjTest ){
	console.log( '?ObjTest==ObjTest: it is! it is: ' + IsIt( ObjTest ) );
} else {
	console.log( '?ObjTest==ObjTest: else if, it is: ' + IsIt( ObjTest ) );
}
if ( IsIt( ObjTest ) == ['array','of','strings'] ){
	console.log( '?ObjTest==["array","of","strings"]: it is! it is: ' + IsIt( ObjTest ) );
} else {
	console.log( '?ObjTest==["array","of","strings"]: else if, it is: ' + IsIt( ObjTest ) );
}
if ( IsIt( ObjTest ) == 'array,of,strings' ){
	console.log( '?ObjTest=={"array,of,strings"}: it is! it is: ' + IsIt( ObjTest ) );
} else {
	console.log( '?ObjTest=={"array,of,strings"}: else if, it is: ' + IsIt( ObjTest ) );
}



if ( IsIt( NumberTest ) ){
	console.log( '?NumberTest: it is! it is: ' + IsIt( NumberTest ) );
} else {
	console.log( '?NumberTest: else if, it is: ' + IsIt( NumberTest ) );
}
if ( IsIt( NumberTest ) == 'NumberTest' ){
	console.log( '?NumberTest="ObjTest": it is! it is: ' + IsIt( NumberTest ) );
} else {
	console.log( '?NumberTest="NumberTest": else if, it is: ' + IsIt( NumberTest ) );
}
if ( IsIt( NumberTest ) != 'NumberTest' ){
	console.log( '?NumberTest!="NumberTest": it is! it is: ' + IsIt( NumberTest ) );
} else {
	console.log( '?NumberTest!="NumberTest": else if, it is: ' + IsIt( NumberTest ) );
}
if ( IsIt( NumberTest ) == 3 ){
	console.log( '?ObjTest==3: it is! it is: ' + IsIt( NumberTest ) );
} else {
	console.log( '?ObjTest==3: else if, it is: ' + IsIt( NumberTest ) );
}
if ( IsIt( NumberTest ) == NumberTest ){
	console.log( '?NumberTest==NumberTest: it is! it is: ' + IsIt( NumberTest ) );
} else {
	console.log( '?NumberTest==NumberTest: else if, it is: ' + IsIt( NumberTest ) );
}
if ( IsIt( NumberTest ) == ObjTest.length ){
	console.log( '?ObjTest==ObjTest.length: it is! it is: ' + IsIt( NumberTest ) );
} else {
	console.log( '?ObjTest==ObjTest.length: else if, it is: ' + IsIt( NumberTest ) );
}
if ( IsIt( NumberTest ) == 'array,of,strings' ){
	console.log( '?ObjTest=={"array,of,strings"}: it is! it is: ' + IsIt( ObjTest ) );
} else {
	console.log( '?ObjTest=={"array,of,strings"}: else if, it is: ' + IsIt( ObjTest ) );
}


/*
 * is it in the thing? 
 * if ( IsItIn( thisthing, thatthing ) ) { … magic … }
 * 
 */
console.log( 'Is "In" in Sin In? ' + IsItIn( 'In', 'Sin'  ) + ', jyonif:  ' + jyonif( IsItIn( 'In', 'Sin'  ) ) );
console.log( 'Is "Sin" in "In"? ' + IsItIn( 'In', 'Sin'  ) );
console.log( 'Is "Sin" In? ' + IsItIn( 'Sin', 'in'  ) );
console.log( 'Is "sin" in "in" In? ' + IsItIn( 'sin', 'in'  ) );
console.log( 'Is "in" in "sin" In? ' + IsItIn( 'in', 'sin'  ) );

var IsInInSinItIsNotIn = IsItIn( 'In', 'Sin' );
var thisvalue = 'Is Acutally Defined!';
var X = thisvalue;

console.log( 'var X = thisvalue && X is ' + X + ' && thisvalue = ' + thisvalue + ', jyonif:  ' + jyonif( X ) + ', ' + jyonif( thisvalue ) );
console.log( 'var IsInInSinItIsNotIn = IsItIn( "In", "Sin" ) && IsInInSinItIsNotIn = ' + IsInInSinItIsNotIn + ', jyonif: ' + jyonif( IsInInSinItIsNotIn ) );
console.log( 'IsItIn( "of", ObjTest ) ' + IsItIn( 'of', ObjTest ) + ', jyonif: ' + jyonif( IsItIn( 'of', ObjTest ) ) );
console.log( 'IsItIn( ObjTest, "of" ) ' + IsItIn( ObjTest, 'of' ) + ', jyonif: ' + jyonif( IsItIn( ObjTest, 'of' ) ) );
