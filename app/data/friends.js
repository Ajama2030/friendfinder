// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  	{
    	name: 'Will Smith',
		photo: 'https://www.google.com/search?q=will+smith+images&tbm=isch&source=iu&pf=m&ictx=1&fir=s7STQOJehllF8M%253A%252Ctu4wcnI8CYP8IM%252C_&usg=__nLJOgFMydriroutNPCGiRrCmZjc%3D&sa=X&ved=0ahUKEwipqIifz5PXAhXnlVQKHeWyAp8Q9QEILDAB#imgrc=s7STQOJehllF8M',
		scores: [1, 3, 1, 1, 3, 3, 5, 1, 5, 5]
	},
	{
		name: 'Kobe Bryant',
		photo: 'http://www.gettyimages.com/photos/kobe-bryant?excludenudity=true&sort=mostpopular&mediatype=photography&phrase=kobe%20bryant&family=editorial',
		scores: [5, 3, 5, 5, 5, 3, 4, 3, 3, 3]
	},
	{

		name: 'Keven Durant',
		photo: 'http://img.mindbodygreen.com/image/upload/c_limit,w_738,f_auto/ftr/natalie-olympics.jpghttp://www.eduinreview.com/blog/2016/12/kevin-durants-educational-background-how-educated-is-he/',
		scores: [2, 1, 5, 2, 1, 1, 1, 5, 1, 1]

	}];
		


// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
