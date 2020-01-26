// X ON / OFF
// X Change Volume
// X Change Channel
// Size / Resolution
// Type: LCD / LED
// Ports
// Power

const tv = {
    resolation: '4K',
    size: 42,
    type: 'LED',
    isTurnedOn: false,
    toggleOower: function(){
        tv.isTurnedOn = !tv.isTurnedOn;
       /* if (tv.isTarnOn === true){
             tv.isTurnedOn =false;
     }else{
        tv.isTurnedOn = true;
          } */
     },
// Volume
     volume: 9000,
     increaseVolume: function(){
         tv.volume += 1;
     },
     decreaseVolume: function(){
         tv.volume -= 1;
     },
// Channel
     currentChannel: 42,
     changeChannelTo: function(channelNumber){
         tv.currentChannel = channelNumber;
     },
     increaseChannel: function(){
         tv.changeChannelTo(tv.currentChannel + 1);
     },
     decreaseChannel: function(){
         tv.changeChannelTo(tv,this.currentChannel - 1)
     },
     madeIn: 'SEI',

};

// Date and Time of the Run
// Distance Covered in Meters
// Time Taken in Seconds
// Name, Age, Email, Address, IBAN
// Total Distance  of all Runs
// Longest Run Distance
// Average Spped of All Runs
 
const user = {
    name: 'Ranen Khlabi',
    Email: 'Ranen-Alkhlabi@hotmail.com',
    address: 'N/A',
    age: 22,
    runs: [
        {
            date: '2030-01-01 12:00:00',
            distance: 10,
            timeTaken: 1200000,
        },

        {
            date: '2042-02-02 01:00:00',
            distance: 12,
            timeTaken: 1199999,
        },
    ],
    totalDistance: function(){
        let total = 0;
        for(let i=0; i< user.runs.length; i++){
            total += user.runs[i].distance;
        }
        return total;
    },
    longestRunDistance: function(){
        let longestRun = 0;
        for(let i=0; i<user.runs.length; i++ ){
            if(user.runs[i].distance > longestRun){
                longestRun = user.runs[i].distance;
            }
        }
        return longestRun;
    },
    averageSpped: function(){}
};

// use this

const user = {
    name: 'some Name',
    Email: 'ssss@hotmail.com',
    address: 'N/A',
    age: 22,
    runs: [
        {
            date: '2030-01-01 12:00:00',
            distance: 10,
            timeTaken: 1200000,
        },

        {
            date: '2042-02-02 01:00:00',
            distance: 12,
            timeTaken: 1199999,
        },
    ],
    totalDistance: function(){
        let total = 0;
        for(let i=0; i< this.runs.length; i++){
            total += this.runs[i].distance;
        }
        return total;
    },
    longestRunDistance: function(){
        let longestRun = 0;
        for(let i=0; i< this.runs.length; i++ ){
            if(user.runs[i].distance > longestRun){
                longestRun = this.runs[i].distance;
            }
        }
        return longestRun;
    },
    averageSpped: function(){}
};