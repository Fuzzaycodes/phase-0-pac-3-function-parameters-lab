function introduction(name = "user"){
   return `Hi my name is ${name}.`;
}
function introductionWithLanguage(name,language){
 return   `Hi my name is ${name} and i'm learning to program in ${language}`;
}
function introductionWithLanguageOptional(name,language = "javascript"){
    return   `Hi my name is ${name} and i'm learning to program in ${language}`;
   }
console.log(introduction());
console.log(introductionWithLanguage());
console.log(introductionWithLanguageOptional());