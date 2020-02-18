const diff = (ang1, ang2) => {
   
  if ((ang2 - ang1) <= 180) {
   return (ang2 - ang1);
  }
  else if (ang1 < 180 && ang2 > 180) {
   return ((360 - ang2) + ang1);
  }
  else {
   return (360 - (ang1 + ang2));
  }

 }


console.log(diff(0, 181));