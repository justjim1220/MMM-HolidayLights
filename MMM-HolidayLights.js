/* MagicMirror Module MMM-HolidayLights
 *
 * A modification of MMM-Xmas By cowboysdude
 * (He's got a lot of really cool module for MM2!)
 *
 * I made this module after playing around with MMM-Xmas to re-learn
 * css animations. Thanks John!!!
 * 
 * this module shows a string of flashing lights across the top of your MM2
 * That have different colors of lights corresponding to the 'holiday', or
 * 'season', or 'celebrated day' that you choose to place in the code.
 *
 * NOT tested with Raspberry Pi or Linux-Based systems.
 * It DOES work with Windows 10!!!
 *
 * version: 2.0.0
 *
 * By Jim Hallock (justjim1220@gmail.com)
 *
 * Licensed with a crapload of good ole' Southern Sweet Tea
 * and a lot of Cheyenne Extreme Menthol cigars!!! 
 *
 */

Module.register("MMM-HolidayLights", {
   
    defaults: {
        css: "",
        // Holidays: "Valentine" "NewYears" "Christmas" "Halloween" "FourthOfJuly" "Easter"
        // Seasons: "Winter" "Autumn" "Spring" "Summer"
        // Celebrations/events: "MardiGras" "Pride" 
        // NFL Team Colors: "Chiefs" "Cowboys" "Broncos"
        updateInterval: 5 * 1000
    },

    getStyles: function() {
        return ["modules/MMM-HolidayLights/css/" + this.config.css + ".css"];
    },

    start: function() {
        Log.info("Starting module: " + this.name);
          console.log("Running Lights....");
          },
   
    getDom: function() {
    	    var wrapper = document.createElement("ul");
            wrapper.classList.add("strand");
            wrapper.innerHTML = "<li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>";
        return wrapper;
    },
});