function mooncakeSays(message){
 let mooncake='(5.o)';
 if( !message) {
   return '{mooncake} cookity!';
 }
  return '${mooncake} ${message}';
}
module.exports.mooncakSays = mooncakeSays;

  
