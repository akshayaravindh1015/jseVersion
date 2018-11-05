export class AppVersionsService{
  getAllJSEVersions(){
        return [
              [
                {  "feature" : "Feature 1" , "aStatus":"enabled" , "sStatus":"notApplicable" } ,
                {  "feature" : "Feature 2" , "aStatus":"enabled" , "sStatus":"Applicable" } ,
                {  "feature" : "Feature 3" , "aStatus":"Applicable" , "sStatus":"enabled" } ,
                {  "feature" : "Feature 4" , "aStatus":"notApplicable" , "sStatus":"enabled" } ,
                {  "feature" : "Feature 5" , "aStatus":"Applicable" , "sStatus":"enabled" } ,

              ],
              [
                {  "feature" : "Feature 1" , "aStatus":"enabled" , "sStatus":"notApplicable" } ,
                {  "feature" : "Feature 2" , "aStatus":"Applicable" , "sStatus":"notApplicable" } ,
                {  "feature" : "Feature 3" , "aStatus":"Applicable" , "sStatus":"enabled" } ,
                {  "feature" : "Feature 4" , "aStatus":"notApplicable" , "sStatus":"enabled" } 
              ],[
                {  "feature" : "Feature 1" , "aStatus":"enabled" , "sStatus":"notApplicable" } ,
                {  "feature" : "Feature 2" , "aStatus":"Applicable" , "sStatus":"Applicable" } ,
                {  "feature" : "Feature 3" , "aStatus":"notApplicable" , "sStatus":"enabled" } ,
                {  "feature" : "Feature 4" , "aStatus":"Applicable" , "sStatus":"notApplicable" } ,
                {  "feature" : "Feature 5" , "aStatus":"Applicable" , "sStatus":"Applicable" } ,
                {  "feature" : "Feature 6" , "aStatus":"notApplicable" , "sStatus":"enabled" } 

              ],
              [
                {  "feature" : "Feature 1" , "aStatus":"Applicable" , "sStatus":"enabled" } ,
                {  "feature" : "Feature 2" , "aStatus":"notApplicable" , "sStatus":"Applicable" } ,
                {  "feature" : "Feature 3" , "aStatus":"enabled" , "sStatus":"notApplicable" }
 
              ],
              [
                {  "feature" : "Feature 1" , "aStatus":"Applicable" , "sStatus":"notApplicable" } ,
                {  "feature" : "Feature 2" , "aStatus":"notApplicable" , "sStatus":"Applicable" } ,
                {  "feature" : "Feature 3" , "aStatus":"Applicable" , "sStatus":"notApplicable" } ,
                {  "feature" : "Feature 4" , "aStatus":"notApplicable" , "sStatus":"enabled" },
                {  "feature" : "Feature 5" , "aStatus":"Applicable" , "sStatus":"enabled" } ,
                {  "feature" : "Feature 6" , "aStatus":"notApplicable" , "sStatus":"notApplicable" } ,
                {  "feature" : "Feature 7" , "aStatus":"notApplicable" , "sStatus":"enabled" } ,
                {  "feature" : "Feature 8" , "aStatus":"Applicable" , "sStatus":"notApplicable" } 
              ]
        ];
    }
}