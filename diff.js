const diff = (ang1, ang2) => {
   
  if (ang2 <= 180 || (ang1 + ang2) > 360) {
   return (ang2 - ang1);
  }
 
  else {
   return (360 - (ang1 + ang2));
  }

 }


console.log(diff(100, 300));