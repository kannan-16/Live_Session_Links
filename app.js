$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxZwTxlXmA-jKJJZ-cf86JgDea48lgimiJDVIh2b-1VgupFZz0/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            // alert("Form submitted successfully")
            // location.href = "./submission.html"
            // window.location.reload()
            //window.location.href="https://google.com"
        },
        error: function (err) {
            alert("Something Error")

        }
    })
})

var form1 = document.getElementById("form1")
var form2;
var form3 = document.getElementById("form3")
var form4 = document.getElementById("form4")
var form5 = document.getElementById("form5")
var form6 = document.getElementById("form6")
var form7 = document.getElementById("form7")
var form8 = document.getElementById("form8")
var form9 = document.getElementById("form9")
var form10 = document.getElementById("form10")
var form11 = document.getElementById("form11")
var form12 = document.getElementById("form12")

const container = document.querySelector(".container")
const container2 = document.querySelector(".container2")

document.querySelector(".submitButton").onclick = () => {
    container.style.display = "none"
    container2.style.visibility = "visible"
    document.getElementById("sub1").innerHTML = form1.value
    console.log(form1)
    document.getElementById("sub2").innerHTML = form2
    console.log(form2)
    document.getElementById("sub3").innerHTML = form3.value
    console.log(form3)
    document.getElementById("sub4").innerHTML = form4.value
    console.log(form4)
    document.getElementById("sub5").innerHTML = form5.value
    console.log(form5)
    document.getElementById("sub6").innerHTML = form6.value
    console.log(form6)
    document.getElementById("sub7").innerHTML = form7.value
    console.log(form7)
    document.getElementById("sub8").innerHTML = form8.value
    console.log(form8)
    document.getElementById("sub9").innerHTML = form9.value
    console.log(form9)
    document.getElementById("sub10").innerHTML = form10.value
    console.log(form10)
    document.getElementById("sub11").innerHTML = form11.value
    console.log(form11)
    document.getElementById("sub12").innerHTML = form12.value
    console.log(form12)
}


var namesBySquad = {
    Squad43: [
        "Aarya D",
        "Aditya Bachepallikar",
        "Kavya",
        "Arya Anand",
        "Arav Tikkoo",
        "Nenika",
        "Mayank Agarwal",
        "Atharv Bhagat",
        "Shrreya",
        "Tanve",
        "Hiranmayi",
        "Vaishnav",
    ],
    Squad44: [
        "Nidhi",
        "Anvi Gupta",
        "Rudra Kumar",
        "Shoban",
        "Eshwar",
        "Mahima Sree",
        "Poorvika Sree",
        "Sukirtha",
        "Eshan venkatesh",
        "Mahetha",
        "Skandakumar Karttikeyan",
    ],
    Squad45: [
        "Anshul baddi",
        "Kavinisha",
        "Ananya Y Deshmane",
        "Ayden",
        "Anderson",
        "Shreya Sreenivasa",
        "Veditraghav Sairi",
        "Akhilan Ashok",
        "Anirudh Ganesan",
        "Abhinav Ganesan",
    ],
    Squad46: [
        "Umang Mathur",
        "Nivedita Hanil",
        "Lewin Anthony",
        "Vihaan Agrawal",
        "Meghnaa",
        "Akshika",
        "Prince Puthuran",
        "Advait Sumesh",
    ],
    Squad47: [
        "Mihika kumar",
        "Nihar",
        "Maitri Chakraborty",
        "Saikrishna",
        "Aadi vaishnav",
        "Dhruv Vinod",
        "Rittvik Arrvind",
    ],
    Squad48: [
        "Eshaan Ali Mashrook",
        "Saamir",
        "Thanikan",
        "Aman Bafna",
        "Akankshya",
        "Leena Abigail Dany",
    ],
    Squad49: [
        "Fathima Zahra",
        "Siddharth",
        "Vijay Sathappan Narayanan",
        "Ashwin",
        "Ashutosh Patnaik",
        "Tuvijeet Sharma",
        "Miruthula Devi",
        "Shlok",
        "Shashvati Mahesh Kumar",
        "Sharvari Mahesh Kumar",
        "Dhanush S S",
        "Himansh Ahuja",
    ],
    Squad50: [
        "Atmikha",
        "Luis Gael Rojo Trejo",
        "Avigat Gupta",
        "Amresh Patnaik",
        "Anagha N",
        "Sidharth Sudheer",
        "Veer Banerjee",
        "Pinnenti Sreepooja",
        "Ishaan Kurian",
        "Aditya Singh",
        "Sanskriti Amidesh",
    ],
    Squad51: ["Mahika", "Pranshu", "Vaidehi", "Isha"],
    Squad52: [
        "Neev",
        "Aanya M Bafna",
        "Ajay Prasanth",
        "Sanchan",
        "Hriya",
        "Advik H",
        "Sharique",
        "Vani Jain",
        "Kamlesh Narayanan",
        "Sakthivelu",
    ],
};

// function makeSubmenu(value) {
//     if (value.length == 0)
//         document.getElementById("name").innerHTML = "<option></option>";
//     else {
//         var squadOptions = "";
//         for (squadId in namesBySquad[value]) {
//             squadOptions += "<option>" + namesBySquad[value][squadId] + "</option>";
//         }
//         document.getElementById("name").innerHTML = squadOptions;
//     }
// }

document.querySelector("#getLink").onclick = () => {
    var week = document.getElementById("week")
    var selectedWeek = week.options[week.selectedIndex].value;
    switch (selectedWeek) {
        case "Week 1":
            // resetAll();
            document.querySelector("#linkIP1").style.visibility = "visible"
            document.getElementById("sub1").innerHTML = form1.value
            console.log(form1)
            break;
        case "Week 2":
            // resetAll();
            document.querySelector("#linkIP2").style.visibility = "visible"
            break;
        case "Week 3":
            // resetAll();
            document.querySelector("#linkIP3").style.visibility = "visible"
            break;
        case "Week 5":
            // resetAll();
            document.querySelector("#linkIP4").style.visibility = "visible"
            break;
        case "Week 6":
            // resetAll();
            document.querySelector("#linkIP5").style.visibility = "visible"
            break;
        case "Week 7":
            // resetAll()
            document.querySelector("#linkIP6").style.visibility = "visible"
            break;
        case "Week 9":
            // resetAll();
            document.querySelector("#linkIP7").style.visibility = "visible"
            break;
        case "Week 10":
            // resetAll();
            document.querySelector("#linkIP8").style.visibility = "visible"
            break;
        case "Week 11":
            // resetAll();
            document.querySelector("#linkIP9").style.visibility = "visible"
            break;
        case "Week 12":
            // resetAll();
            document.querySelector("#linkIP10").style.visibility = "visible"
            break;
    }
}

function makeSubmenu(value) {
    form2 = value;
    console.log(value)
}