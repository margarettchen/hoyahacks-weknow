//master array of each incident grouped in array
var masterAr = [];
var fileName = "data.csv";

newIncident(11,3,2017,3,"Downtown","Online");

//function to store new incident data
function newIncident(day, month, year, time, location, type)//arguments: date object? time object? string, string?
{
    //put data into incident array
    var incident = [year, month,dayOfWeek(day,month,year), catTime(time), location, type];
    if(masterAr.length==0)
    {
        parseCSVtoArray(getDataFromCsv())//updates masterAr from file
    }
    //add new incident to master array
    masterAr.push(incident);
    refreshAnalytics();
    arrayToCSV();
}

function dayOfWeek(day,month,year)
{
    var dow = "";
    var k = day;
    var m = month;
    var d = year%100;
    var c = year/100;
    //Using Zeller's Rule:
    var num = k + [(13*m-1)/5] + d + [d/4] + [c/4] - 2*c;
    dow = num%7;
    return dow;
}

function catTime(time) //properly format time for array
{
    t = time;
    return t; // round down to hour, military time
}

function getDataFromCsv(){
    var fileContent='';
    fh = fopen(fileName, 0); // Open the file for reading
    if(fh!=-1) // If the file has been successfully opened
    {
        length = flength(fh); // Get the length of the file
        fileContent = fread(fh, length); // Read in the entire file
        fclose(fh);
    }
    return fileContent;//returns comma separated string
}

function parseCSVtoArray(csvString){
    var temp ='';//will store each value before put into array
    var count = 0;
    var subAr =[];
    for (i = 0; i < csvString.length; i++) {
        if(csvString.charAt(i)==',') //end of a data value
        {	
            subAr[count].push(temp);
            temp ='';
            if(count == 5){ //end of an incident
                masterAr.push(temp);
                count = 0;
            }
            else
                count++;
            
        }
        else{ //in the middle of a value
            temp = temp +charAt(i);
            count++;
        }
        
    }
}

function arrayToCSV(){
    var csvString = "";
    for ( i=0; i<masterAr.length; i++ )
        {
          for ( j=0; j<masterAr[i].length; j++ )
          {
              csvString = csvString + mastarAr[i][j] + ",";
          }
    }
    var fh = fopen(fileName, 3); // Open the file for writing

    if(fh!=-1) // If the file has been successfully opened
    {
        fwrite(fh, csvString); // Write the string to a file
        fclose(fh); // Close the file 
    }

}

function refreshAnalytics(){
    pushAnalyticsToFront();
}

function pushAnalyticsToFront(){

}