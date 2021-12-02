/*
File:   cmdline.js
author: Ordonez

Call Example:
node cmdline.js "table=T;pk=k1,k2;columns=A,B,C"
*/
params=process.argv[2];
if (process.argv.length==2) {
  console.log("Error: no parameters");
  process.exit();
}
else {
 l=params.split(";")

 param=[]
 for (i=0;i<l.length;i++)
   param[i]=l[i].split("=");

 for (i=0;i<param.length;i++)
   console.log(param[2][0]);
}