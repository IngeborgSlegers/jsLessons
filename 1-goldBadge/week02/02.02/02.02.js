/*
Challenge (Arrays):
Color List:

Create a function that can take in arrays.
Create an array of colors
Create an array of suffixes for placement (i.e. st (for 1st), nd (for 2nd), rd (for 3rd), etc)

In the function, filter through both arrays and print out the placement and the color for each individual colors (i.e. 1st is green, 2nd is blue, 3rd is red, 4th is orange, etc) until all of the colors are listed out with the appropriate placement.

Not to make it too hard on yourself, you can stop the count at ten
*/
let colors = ['red','orange','coral','yellow','green','teal','blue','indigo','violet','black']
let suf = ['st','nd','rd','th','th','th','th','th','th','th']
function colorNums(color,sufx){
   for(let x =0; x<10;x++){
       console.log(`${x+1}${sufx[x]} is ${color[x]} `)
   }
}
colorNums(colors,suf);

/*
DOM Walk Through 
Assign API Gitbook

Go through gitbook with class

API Walk Through

Rest of day work through book
*/