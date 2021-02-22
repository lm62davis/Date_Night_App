import { clearChildren } from "./app.js"
import {activityJSON} from "./activityJson.js"

const randomize = function(list) {
    //console.log(list)
    //console.log(list.length + " list lngth")
    let randomNumber = Math.floor(Math.random() * list.length)
    //console.log(randomNumber)
    let generatedActivity = list[randomNumber]
    return generatedActivity

}
let activityByCategory = [] 
let activityName;
let spokeName = function () {
    activityName = randomize(activityByCategory);
    // activityNameElement.innerText = activityName; 
    return activityName;
    }

const activitySection = function(activityJSON) {

    const mainElement = document.createElement("div");
    mainElement.classList.add("main-container")

    const activityElement = document.createElement("div");
    activityElement.classList.add("food-container")
    mainElement.appendChild(activityElement)

    const activityDropdownLabel = document.createElement("select")
    activityDropdownLabel.classList.add("activity-dropdown")
    activityElement.appendChild(activityDropdownLabel)

    const defaultActivityDropdown = document.createElement("option")
    defaultActivityDropdown.selected = true
    defaultActivityDropdown.innerText = "Select an activity type"
    activityDropdownLabel.appendChild(defaultActivityDropdown) 

    const activityWheel = document.createElement("div")
    activityWheel.setAttribute("id","chart")
    mainElement.appendChild(activityWheel);

   
    let activityType = []
    // console.log(restaurant_name)
    activityJSON.forEach(activity => {
        activityType.push(activity.type);
       console.log(activityType)
       
    });

    let finalActivityList = Array.from(new Set(activityType))   //removes duplicates
    console.log(finalActivityList);

    

    //create dropdown options
    for (let i = 0; i < finalActivityList.length; i++) {
        const option = finalActivityList[i];
        const dropdown = document.createElement("option");
        dropdown.innerText = option;
        dropdown.value = option;
        activityDropdownLabel.appendChild(dropdown)        
    }

    activityByCategory = [] 

    activityDropdownLabel.addEventListener("change", () => {
            wheelAnimation();
            activityByCategory = [] 
            activityJSON.forEach(activity => {
                if(activity.type === activityDropdownLabel.value) {      //find alternative to event.target.value
                    activityByCategory.push(activity.name)
                }
            })
          });
        console.log(activityByCategory)
    
        // alert("You chose " + event.target.value)


    
    const activityButton = document.createElement("button")
    activityButton.innerText = "Generate"
    activityElement.appendChild(activityButton)
    const activityNameElement = document.createElement("section")

    activityButton.addEventListener("click", () => { 
        console.log(activityName)
          //test to make sure selected is not default value. if to diff just switch back to label & input 
        // wheelAnimation();
        activityName = randomize(activityByCategory);
        activityNameElement.innerText = activityName; 
        activityElement.appendChild(activityNameElement)       
    });

    //wheel code
    let wheelAnimation = function () {
    let padding = {top:20, right:40, bottom:0, left:0},
            w = 500 - padding.left - padding.right,
            h = 500 - padding.top  - padding.bottom,
            r = Math.min(w, h)/2,
            rotation = 0,
            oldrotation = 0,
            picked = 100000,
            oldpick = [],
            color = d3.scale.category20();//category20c()
            //randomNumbers = getRandomNumbers();
        //http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results
        let data = [
                    {"label":"Hello",  "value":1},
                    {"label":spokeName(),  "value":2},
                    {"label":spokeName(),  "value":3},
                    {"label":spokeName(),  "value":4},

        ];
        let svg = d3.select('#chart')
            .append("svg")
            .data([data])
            .attr("width",  w + padding.left + padding.right)
            .attr("height", h + padding.top + padding.bottom);
        let wheelContainer = svg.append("g")
            .attr("class", "chartholder")
            .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");
        let vis = wheelContainer
            .append("g");
            
        let pie = d3.layout.pie().sort(null).value(function(d){return 1;});
        // declare an arc generator function
        let arc = d3.svg.arc().outerRadius(r);
        // select paths, use arc generator to draw
        let arcs = vis.selectAll("g.slice")
            .data(pie)
            .enter()
            .append("g")
            .attr("class", "slice");
            
        arcs.append("path")
            .attr("fill", function(d, i){ return color(i); })
            .attr("d", function (d) { return arc(d); });
        // add the text
        arcs.append("text").attr("transform", function(d){
                d.innerRadius = 0;
                d.outerRadius = r;
                d.angle = (d.startAngle + d.endAngle)/2;
                return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
            })
            .attr("text-anchor", "end")
            .text( function(d, i) {
                return data[i].label;
            });
        wheelContainer.on("click", spin);
        function spin(d){
            
            wheelContainer.on("click", null);
            //all slices have been seen, all done
            console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
            if(oldpick.length == data.length){
                console.log("done");
                wheelContainer.on("click", null);
                return;
            }
            let  ps       = 360/data.length,
                 pieslice = Math.round(1440/data.length),
                 rng      = Math.floor((Math.random() * 1440) + 360);
                
            rotation = (Math.round(rng / ps) * ps);
            
            picked = Math.round(data.length - (rotation % 360)/ps);
            picked = picked >= data.length ? (picked % data.length) : picked;
            if(oldpick.indexOf(picked) !== -1){
                d3.select(this).call(spin);
                return;
            } else {
                oldpick.push(picked);
            }
            rotation += 90 - Math.round(ps/2);
            vis.transition()
                .duration(3000)
                .attrTween("transform", rotTween)
                .each("end", function(){
                    //mark question as seen
                    d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                        .attr("fill", "#111");
                    //populate question
                    d3.select("#question h1")
                        .text(data[picked].question);
                    oldrotation = rotation;
              
                    /* Get the result value from object "data" */
                    console.log(data[picked].value)
              
                    /* Comment the below line for restrict spin to sngle time */
                    wheelContainer.on("click", spin);
                });
        }
        //make arrow
        svg.append("g")
            .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2)+padding.top) + ")")
            .append("path")
            .attr("d", "M-" + (r*.15) + ",0L0," + (r*.05) + "L0,-" + (r*.05) + "Z")
            .style({"fill":"black"});
        //draw spin circle
        wheelContainer.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 60)
            .style({"fill":"white","cursor":"pointer"});
        //spin text
        wheelContainer.append("text")
            .attr("x", 0)
            .attr("y", 15)
            .attr("text-anchor", "middle")
            .text("SPIN")
            .style({"font-weight":"bold", "font-size":"30px"});
        
        
        function rotTween(to) {
          let i = d3.interpolate(oldrotation % 360, rotation);
          return function(t) {
            return "rotate(" + i(t) + ")";
          };
        }
        
        
        function getRandomNumbers(){
            let array = new Uint16Array(1000);
            let scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
            if(window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function"){
                window.crypto.getRandomValues(array);
                console.log("works");
            } else {
                //no support for crypto, get crappy random numbers
                for(let i=0; i < 1000; i++){
                    array[i] = Math.floor(Math.random() * 100000) + 1;
                }
            }
            return array;
        }
    };
    

    return mainElement
}

export {activitySection}
