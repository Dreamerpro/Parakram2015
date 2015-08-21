/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'cuprum, sans-serif': '<script src=\"http://use.edgefonts.net/cuprum:n4:all.js\"></script>',
            'germania-one, sans-serif': '<script src=\"http://use.edgefonts.net/germania-one:n4:all.js\"></script>',
            'arvo, serif': '<script src=\"http://use.edgefonts.net/arvo:n4,i4,n7,i7:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            "https://code.jquery.com/jquery-2.1.1.min.js",
            js+"EdgeCommons.js",
            js+"smooth_scroll.js",
            "http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js",
            "http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ScrollToPlugin.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Aboutpage',
                            type: 'rect',
                            rect: ['-0.5%', '75%', '101%', '12.5%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [2,"rgba(0,0,0,1)","none"],
                            userClass: "aboutclass",
                            transform: [[],[],[],['0.99067']],
                            c: [
                            {
                                id: 'aboutholder',
                                type: 'rect',
                                rect: ['7.6%', '24.1%', '84.5%', '53.5%', 'auto', 'auto'],
                                fill: ["rgba(21,29,22,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],[],[],['1.18235','1.9241']]
                            },
                            {
                                id: 'Rectangle8',
                                type: 'rect',
                                rect: ['0.1%', '19%', '100%', '75.7%', 'auto', 'auto'],
                                overflow: 'hidden',
                                fill: ["rgba(39,98,76,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Text5',
                                type: 'text',
                                rect: ['3.5%', '5.8%', 'auto', 'auto', 'auto', 'auto'],
                                clip: 'rect(1.4271869659423828px 292px 11.920686721801758px 0px)',
                                text: "ABOUT ",
                                align: "center",
                                font: ['arvo, serif', [500, "%"], "rgba(255,255,255,1.00)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"],
                                transform: [[],[],[],['0.93696','0.93401']]
                            },
                            {
                                id: 'Text11',
                                type: 'text',
                                rect: ['29.4%', '23.9%', 'auto', 'auto', 'auto', 'auto'],
                                opacity: '0',
                                text: "ISM",
                                align: "center",
                                font: ['cuprum, sans-serif', [500, "%"], "rgba(21,29,22,1.00)", "400", "none solid rgb(62, 101, 159)", "normal", "break-word", "nowrap"],
                                transform: [[],[],[],['0.86503','0.67676']]
                            },
                            {
                                id: 'Text11Copy',
                                type: 'text',
                                rect: ['71.6%', '84%', 'auto', 'auto', 'auto', 'auto'],
                                opacity: '0.05982905982906',
                                text: "PARAKRAM",
                                align: "center",
                                font: ['cuprum, sans-serif', [500, "%"], "rgba(21,29,22,1.00)", "400", "none solid rgb(62, 101, 159)", "normal", "break-word", "nowrap"],
                                transform: [[],[],[],['0.76832','0.67676']]
                            },
                            {
                                id: 'Rectangle11',
                                type: 'rect',
                                rect: ['50.3%', '19.3%', '0.2%', '82%', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [2,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'ismabout',
                                type: 'rect',
                                rect: ['-51.6%', '36.2%', '48.7%', '52.7%', 'auto', 'auto'],
                                overflow: 'hidden',
                                opacity: '1',
                                fill: ["rgba(10,17,31,1)"],
                                stroke: [0,"rgb(0, 0, 0)","solid"],
                                c: [
                                {
                                    id: 'Text4',
                                    type: 'text',
                                    rect: ['3%', '2.3%', '95.2%', '97.6%', 'auto', 'auto'],
                                    overflow: 'auto',
                                    text: "The Indian School of Mines was established on 9th December 1926, by Lord Irwin, the then Viceroy of India with disciplines of Mining and Applied Geology. In 1967 it was granted the status of a deemed university. Situated in the heart of the country's prime coking coal belt, the campus spreads over an area of 393 acres. The fully residential campus with all the facilities of a world class academic institute currently has 17 different Departments and over 200 faculty, and over 5000 students.<br><br>The institute currently offers programmes which includes B. Tech., M. Tech., M. Sc. Tech., and MBA. In addition the School also offers M. Phil. and full time as well as part time Ph. D. programmes in the field of engineering, Sciences, Management and Humanities and Social Sciences. ISM also awards D.Sc. as the highest degree of academic achievement. The admission to the four year and the five year graduate courses are through the prestigious IIT-JEE examination.",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(160,196,183,1.00)", "normal", "none", "", "break-word", ""]
                                }]
                            },
                            {
                                id: 'ismaboutCopy',
                                type: 'rect',
                                rect: ['100.5%', '24.4%', '49%', '26.4%', 'auto', 'auto'],
                                overflow: 'hidden',
                                opacity: '1',
                                fill: ["rgba(10,17,31,1)"],
                                stroke: [0,"rgb(0, 0, 0)","solid"],
                                c: [
                                {
                                    id: 'Text4Copy',
                                    type: 'text',
                                    rect: ['1.2%', '5.5%', '96.9%', '94.7%', 'auto', 'auto'],
                                    overflow: 'auto',
                                    text: "Two words won't define Parakram, but it still is our Annual Sports Meet, held every year in the colds of February. This season, pay us a visit, flex your muscles, show your strength, be a rage, make your game and winning shall take care of itself. We ISM invite you to our cold soil, fill it with the thump of your breath, let this steam burn you.<br><br>Show your PARAKRAM.",
                                    align: "justify",
                                    font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(160,196,183,1.00)", "normal", "none", "", "break-word", ""]
                                }]
                            }]
                        },
                        {
                            id: 'gallery',
                            type: 'rect',
                            rect: ['0%', '37.5%', '100%', '12.5%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(10,17,31,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","solid"],
                            userClass: "galleryclass",
                            c: [
                            {
                                id: 'topline',
                                type: 'rect',
                                rect: ['0%', '52.9%', '100%', '0.6%', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'L',
                                type: 'text',
                                rect: ['44.6%', '40.6%', 'auto', 'auto', 'auto', 'auto'],
                                text: "L<br>",
                                align: "center",
                                font: ['germania-one, sans-serif', [24, "px"], "rgba(84,89,148,1)", "600", "none solid rgb(84, 89, 148)", "normal", "break-word", "nowrap"],
                                transform: [[],[],[],['8.52941','7.5619']]
                            },
                            {
                                id: 'LCopy2',
                                type: 'text',
                                rect: ['73.3%', '40.8%', 'auto', 'auto', 'auto', 'auto'],
                                text: "R",
                                align: "center",
                                font: ['germania-one, sans-serif', [24, "px"], "rgba(84,89,148,1)", "600", "none solid rgb(84, 89, 148)", "normal", "break-word", "nowrap"],
                                transform: [[],[],[],['8.52941','7.5619']]
                            },
                            {
                                id: 'E',
                                type: 'text',
                                rect: ['61.8%', '40.7%', 'auto', 'auto', 'auto', 'auto'],
                                text: "E",
                                align: "center",
                                font: ['germania-one, sans-serif', [24, "px"], "rgba(84,89,148,1)", "600", "none solid rgb(84, 89, 148)", "normal", "break-word", "nowrap"],
                                transform: [[],[],[],['8.52941','7.5619']]
                            },
                            {
                                id: 'LCopy3',
                                type: 'text',
                                rect: ['82.7%', '41.8%', 'auto', 'auto', 'auto', 'auto'],
                                text: "Y<br>",
                                align: "center",
                                font: ['germania-one, sans-serif', [24, "px"], "rgba(84,89,148,1)", "600", "none solid rgb(84, 89, 148)", "normal", "break-word", "nowrap"],
                                transform: [[],[],[],['8.52941','7.5619'],['47.3369%','53.7267%']]
                            },
                            {
                                id: 'LCopy',
                                type: 'text',
                                rect: ['52.9%', '40.8%', 'auto', 'auto', 'auto', 'auto'],
                                text: "L<br>",
                                align: "center",
                                font: ['germania-one, sans-serif', [24, "px"], "rgba(84,89,148,1)", "600", "none solid rgb(84, 89, 148)", "normal", "break-word", "nowrap"],
                                transform: [[],[],[],['8.52941','7.5619']]
                            },
                            {
                                id: 'A',
                                type: 'text',
                                rect: ['35.8%', '40.7%', 'auto', 'auto', 'auto', 'auto'],
                                text: "A",
                                align: "center",
                                font: ['germania-one, sans-serif', [24, "px"], "rgba(84,89,148,1)", "600", "none solid rgb(84, 89, 148)", "normal", "break-word", "nowrap"],
                                transform: [[],[],[],['8.52941','7.5619']]
                            },
                            {
                                id: 'G',
                                type: 'text',
                                rect: ['24.3%', '40.7%', 'auto', 'auto', 'auto', 'auto'],
                                text: "G",
                                align: "center",
                                font: ['germania-one, sans-serif', [24, "px"], "rgba(84,89,148,1)", "600", "none solid rgb(84, 89, 148)", "normal", "break-word", "nowrap"],
                                transform: [[],[],[],['8.52941','7.5619']]
                            },
                            {
                                id: 'Text6',
                                type: 'text',
                                rect: ['70.9%', '57.9%', '149px', '25px', 'auto', 'auto'],
                                clip: 'rect(21.987104415893555px 149px 25px 0px)',
                                text: "Past Memories...",
                                align: "center",
                                font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(84, 89, 148)", "normal", "break-word", ""],
                                transform: [[],[],[],['1.31658','1.75862']]
                            },
                            {
                                id: 'gallaarrow',
                                type: 'group',
                                rect: ['43.4%', '61.1%', '7.5%', '10.8%', 'auto', 'auto'],
                                opacity: '0',
                                c: [
                                {
                                    id: 'arrowgallery',
                                    type: 'rect',
                                    rect: ['20.7%', '13.6%', '56.3%', '72%', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","solid"],
                                    transform: [[],['43']]
                                },
                                {
                                    id: 'Rectangle6',
                                    type: 'rect',
                                    rect: ['0%', '-1.3%', '100%', '51%', 'auto', 'auto'],
                                    fill: ["rgba(10,17,31,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                }]
                            }]
                        },
                        {
                            id: 'menu',
                            type: 'rect',
                            rect: ['0%', '12.5%', '100%', '12.5%', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0.91869918699187',
                            fill: ["rgba(73,33,33,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","solid"],
                            userClass: "menusclasses",
                            c: [
                            {
                                id: 'fb',
                                type: 'rect',
                                rect: ['47.1%', '60.9%', '11.6%', '20.6%', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(26,34,116,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                userClass: "menu",
                                c: [
                                {
                                    id: 'Text15',
                                    type: 'text',
                                    rect: ['6%', '77.2%', 'auto', 'auto', 'auto', 'auto'],
                                    text: "facebook",
                                    align: "center",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"],
                                    transform: [[],[],[],['0.84536','0.89286']]
                                },
                                {
                                    id: 'facebook292',
                                    type: 'image',
                                    rect: ['21.2%', '19.3%', '53.2%', '50.6%', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"facebook29.svg",'0px','0px']
                                }]
                            },
                            {
                                id: 'about',
                                type: 'rect',
                                rect: ['33.6%', '16.5%', '11.6%', '20.6%', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '0',
                                fill: ["rgba(223,80,80,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                userClass: "menu",
                                c: [
                                {
                                    id: 'Rectangle5',
                                    type: 'rect',
                                    rect: ['22.2%', '19.6%', '53%', '49.8%', 'auto', 'auto'],
                                    fill: ["rgba(223,80,80,0.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],[],[],['1.25925','1.24955']],
                                    c: [
                                    {
                                        id: 'help1',
                                        type: 'image',
                                        rect: ['2.5%', '-0.1%', '100%', '100%', 'auto', 'auto'],
                                        fill: ["rgba(0,0,0,0)",im+"help1.svg",'0px','0px']
                                    }]
                                },
                                {
                                    id: 'Text10Copy',
                                    type: 'text',
                                    rect: ['2.3%', '81%', '49.7%', '14%', 'auto', 'auto'],
                                    text: "About",
                                    align: "center",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", ""],
                                    transform: [[],[],[],['0.79291','0.9866']]
                                }]
                            },
                            {
                                id: 'homemenu',
                                type: 'rect',
                                rect: ['8.8%', '38.6%', '11.6%', '20.3%', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(77,35,78,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                userClass: "menu",
                                c: [
                                {
                                    id: 'Text10Copy2',
                                    type: 'text',
                                    rect: ['6.1%', '76.6%', '49.9%', '14%', 'auto', 'auto'],
                                    text: "home",
                                    align: "center",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", ""],
                                    transform: [[],[],[],['0.79291','0.9866']]
                                },
                                {
                                    id: 'dwelling1',
                                    type: 'image',
                                    rect: ['27.2%', '21.9%', '45.3%', '44.3%', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"dwelling1.svg",'0px','0px']
                                }]
                            },
                            {
                                id: 'fbCopy5',
                                type: 'rect',
                                rect: ['8.8%', '60.7%', '11.6%', '20.6%', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(41,82,44,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                userClass: "menu",
                                c: [
                                {
                                    id: 'pin56',
                                    type: 'image',
                                    rect: ['23.7%', '21.2%', '52%', '50.1%', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"pin56.svg",'0px','0px']
                                },
                                {
                                    id: 'Text7',
                                    type: 'text',
                                    rect: ['13.9%', '78.6%', 'auto', 'auto', 'auto', 'auto'],
                                    text: "locate",
                                    align: "center",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                }]
                            },
                            {
                                id: 'twitter',
                                type: 'rect',
                                rect: ['59.5%', '60.7%', '11.6%', '20.6%', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(71,133,224,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                userClass: "menu",
                                c: [
                                {
                                    id: 'Text15Copy',
                                    type: 'text',
                                    rect: ['7.4%', '77%', 'auto', 'auto', 'auto', 'auto'],
                                    text: "twitter",
                                    align: "center",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"],
                                    transform: [[],[],[],['0.84536','0.89286']]
                                },
                                {
                                    id: 'twitter38',
                                    type: 'image',
                                    rect: ['23%', '21.5%', '58.8%', '50%', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"twitter38.svg",'50%','50%','87px','66px', 'no-repeat']
                                }]
                            },
                            {
                                id: 'gallerymenu',
                                type: 'rect',
                                rect: ['47%', '16.4%', '43.6%', '42.5%', 'auto', 'auto'],
                                overflow: 'hidden',
                                cursor: 'pointer',
                                opacity: '0',
                                fill: ["rgba(80,92,223,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                userClass: "menu",
                                c: [
                                {
                                    id: 'gallerypic12',
                                    type: 'image',
                                    rect: ['-0.2%', '-1.3%', '101.6%', '105.2%', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"2.JPG",'0px','0px'],
                                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                                    transform: [[],[],[],['1','1.01307']]
                                },
                                {
                                    id: 'Rectangle4',
                                    type: 'rect',
                                    rect: ['0%', '84.5%', '100%', '11.8%', 'auto', 'auto'],
                                    opacity: '1',
                                    fill: ["rgba(32,35,106,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],[],[],['1','1.6']],
                                    c: [
                                    {
                                        id: 'Text13',
                                        type: 'text',
                                        rect: ['38.8%', '20.4%', 'auto', 'auto', 'auto', 'auto'],
                                        text: "GALLERY",
                                        font: ['cuprum, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"],
                                        transform: [[],[],[],['1.07136','0.71428']]
                                    }]
                                }]
                            },
                            {
                                id: 'registermenu',
                                type: 'rect',
                                rect: ['72.1%', '60.6%', '18.6%', '20.6%', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(120,80,223,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                userClass: "menu",
                                c: [
                                {
                                    id: 'Text8',
                                    type: 'text',
                                    rect: ['7.7%', '79.4%', 'auto', 'auto', 'auto', 'auto'],
                                    text: "contacts",
                                    align: "center",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"],
                                    transform: [[],[],[],['0.93048','0.9174']]
                                },
                                {
                                    id: 'address17',
                                    type: 'image',
                                    rect: ['29.7%', '22.8%', '40.3%', '44.1%', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"address17.svg",'0px','0px']
                                }]
                            },
                            {
                                id: 'sponsors',
                                type: 'rect',
                                rect: ['22%', '38.8%', '23.3%', '42.6%', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(140,147,75,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                userClass: "menu",
                                c: [
                                {
                                    id: 'Text16',
                                    type: 'text',
                                    rect: ['5%', '89.2%', 'auto', 'auto', 'auto', 'auto'],
                                    text: "sponsors",
                                    align: "left",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'handshake1',
                                    type: 'image',
                                    rect: ['30.7%', '34.3%', '37.5%', '27.4%', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"handshake1.svg",'0px','0px']
                                }]
                            },
                            {
                                id: 'eventsmenu',
                                type: 'rect',
                                rect: ['15.8%', '16.5%', '23.3%', '20.6%', 'auto', 'auto'],
                                overflow: 'hidden',
                                cursor: 'pointer',
                                opacity: '0',
                                fill: ["rgba(183,46,89,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                userClass: "menu",
                                c: [
                                {
                                    id: 'Text10',
                                    type: 'text',
                                    rect: ['2.7%', '81.3%', '24.9%', '14%', 'auto', 'auto'],
                                    text: "Events",
                                    align: "center",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", ""],
                                    transform: [[],[],[],['0.79291','0.9866']]
                                },
                                {
                                    id: 'eventslide',
                                    symbolName: 'eventslide',
                                    type: 'rect',
                                    rect: ['31.6%', '24.6%', 'undefined', 'undefined', 'auto', 'auto']
                                }]
                            },
                            {
                                id: 'registrationmenu',
                                type: 'rect',
                                rect: ['101.1%', '5.9%', '14%', '6.1%', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '0',
                                fill: ["rgba(76,84,116,0.00)"],
                                stroke: [0,"rgb(0, 0, 0)","solid"],
                                userClass: "menu",
                                c: [
                                {
                                    id: 'Text12',
                                    type: 'text',
                                    rect: ['23.5%', '12.9%', 'auto', 'auto', 'auto', 'auto'],
                                    text: "Registration",
                                    font: ['cuprum, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                                },
                                {
                                    id: 'register',
                                    type: 'image',
                                    rect: ['4.5%', '11.1%', '17.9%', '74.7%', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"register.svg",'0px','0px']
                                }]
                            }]
                        },
                        {
                            id: 'Events',
                            type: 'rect',
                            rect: ['0%', '25%', '99.8%', '12.4%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","dotted"],
                            userClass: "eventsclass",
                            c: [
                            {
                                id: 'Events2',
                                type: 'image',
                                rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Events.png",'0px','0px']
                            },
                            {
                                id: 'eventinfo',
                                type: 'rect',
                                rect: ['17%', '-7.4%', '70%', '100%', 'auto', 'auto'],
                                fill: ["rgba(255,7,7,0.00)",[270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","solid"],
                                c: [
                                {
                                    id: 'Rectangle10',
                                    type: 'rect',
                                    rect: ['0.3%', '14.5%', '99.7%', '1.1%', 'auto', 'auto'],
                                    opacity: '0.008130081300813',
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","solid"]
                                },
                                {
                                    id: 'tabshadow',
                                    type: 'rect',
                                    rect: ['11.7%', '32.6%', '80%', '58.2%', 'auto', 'auto'],
                                    borderRadius: ["15px", "15px", "15px", "15px 15px"],
                                    fill: ["rgba(126,130,127,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","solid"]
                                },
                                {
                                    id: 'bigtab',
                                    type: 'rect',
                                    rect: ['8.4%', '29.7%', '80%', '58.2%', 'auto', 'auto'],
                                    overflow: 'visible',
                                    borderRadius: ["15px", "15px", "15px", "15px 15px"],
                                    fill: ["rgba(87,90,88,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","solid"],
                                    c: [
                                    {
                                        id: 'screenCopy',
                                        type: 'rect',
                                        rect: ['5%', '10%', '90.8%', '77.3%', 'auto', 'auto'],
                                        fill: ["rgba(0,0,0,1.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","solid"],
                                        userClass: "screen"
                                    },
                                    {
                                        id: 'Text9',
                                        type: 'text',
                                        rect: ['22.3%', '41.1%', 'auto', 'auto', 'auto', 'auto'],
                                        text: "{SELECT AN EVENT TO LAOD}",
                                        align: "center",
                                        font: ['germania-one, sans-serif', [40, "px"], "rgba(6,209,247,1.00)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                    },
                                    {
                                        id: 'screen',
                                        type: 'rect',
                                        rect: ['5%', '10%', '90.8%', '77.3%', 'auto', 'auto'],
                                        overflow: 'hidden',
                                        fill: ["rgba(0,0,0,0.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","solid"],
                                        userClass: "screen"
                                    },
                                    {
                                        id: 'others',
                                        display: 'block',
                                        type: 'rect',
                                        rect: ['4.8%', '9.9%', '90.9%', '77.4%', 'auto', 'auto'],
                                        fill: ["rgba(0,0,0,1.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","none"],
                                        c: [
                                        {
                                            id: 'shoot',
                                            type: 'rect',
                                            rect: ['auto', 'auto', '53.5%', '19%', '43.9%', '54.9%'],
                                            cursor: 'pointer',
                                            opacity: '1',
                                            fill: ["rgba(97,99,127,0.00)"],
                                            stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                            userClass: "menui",
                                            transform: [[],[],[],['0.7464','0.86776']],
                                            c: [
                                            {
                                                id: 'wushu',
                                                type: 'text',
                                                rect: ['auto', 'auto', '103.2%', '107.7%', '1.5%', '-9.9%'],
                                                text: "Shooting Workshop",
                                                align: "center",
                                                font: ['germania-one, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", ""],
                                                transform: [[],[],[],['0.96636','0.7834']]
                                            }]
                                        },
                                        {
                                            id: 'hand',
                                            type: 'rect',
                                            rect: ['auto', 'auto', '53.5%', '19%', '1.2%', '54.1%'],
                                            cursor: 'pointer',
                                            opacity: '1',
                                            fill: ["rgba(97,99,127,0.00)"],
                                            stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                            userClass: "menui",
                                            transform: [[],[],[],['0.7464','0.86776']],
                                            c: [
                                            {
                                                id: 'wushuCopy',
                                                type: 'text',
                                                rect: ['auto', 'auto', '103.2%', '107.7%', '1.5%', '-9.9%'],
                                                text: "Handball",
                                                align: "center",
                                                font: ['germania-one, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", ""],
                                                transform: [[],[],[],['0.96636','0.7834']]
                                            }]
                                        },
                                        {
                                            id: 'karate',
                                            type: 'rect',
                                            rect: ['auto', 'auto', '53.5%', '19%', '25.6%', '27.3%'],
                                            cursor: 'pointer',
                                            opacity: '1',
                                            fill: ["rgba(97,99,127,0.00)"],
                                            stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                            userClass: "menui",
                                            transform: [[],[],[],['0.7464','0.86776']],
                                            c: [
                                            {
                                                id: 'wushuCopy2',
                                                type: 'text',
                                                rect: ['auto', 'auto', '103.2%', '107.7%', '1.5%', '-9.9%'],
                                                text: "Karate",
                                                align: "center",
                                                font: ['germania-one, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", ""],
                                                transform: [[],[],[],['0.96636','0.7834']]
                                            }]
                                        }]
                                    },
                                    {
                                        id: 'Rectangle3',
                                        type: 'rect',
                                        rect: ['89.3%', '13.4%', '4.6%', '7.2%', 'auto', 'auto'],
                                        cursor: 'pointer',
                                        fill: ["rgba(255,255,255,1.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","solid"],
                                        c: [
                                        {
                                            id: 'innerblack',
                                            type: 'rect',
                                            rect: ['24.6%', '18.3%', '50%', '50%', 'auto', 'auto'],
                                            fill: ["rgba(0,0,0,1.00)"],
                                            stroke: [0,"rgb(0, 0, 0)","solid"]
                                        }]
                                    }]
                                }]
                            },
                            {
                                id: 'tennis',
                                type: 'rect',
                                rect: ['auto', 'auto', '15.6%', '5.6%', '0.2%', '40.5%'],
                                cursor: 'pointer',
                                opacity: '0.80487804878049',
                                fill: ["rgba(97,99,127,0.00)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                userClass: "menui",
                                transform: [[],[],[],['0.7464','0.86776']],
                                c: [
                                {
                                    id: 'wushuCopy33',
                                    type: 'text',
                                    rect: ['3%', '0%', '98%', '107.5%', 'auto', 'auto'],
                                    text: "Squash",
                                    align: "center",
                                    font: ['germania-one, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", ""],
                                    transform: [[],[],[],['0.96636','0.7834']]
                                }]
                            },
                            {
                                id: 'swim',
                                type: 'rect',
                                rect: ['auto', 'auto', '15.6%', '5.6%', '0.2%', '32.7%'],
                                cursor: 'pointer',
                                opacity: '1',
                                fill: ["rgba(97,99,127,0.00)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                userClass: "menui",
                                transform: [[],[],[],['0.7464','0.86776']],
                                c: [
                                {
                                    id: 'wushuCopy19',
                                    type: 'text',
                                    rect: ['3%', '0%', '96.5%', '104.9%', 'auto', 'auto'],
                                    opacity: '1',
                                    text: "Handball",
                                    align: "center",
                                    font: ['germania-one, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", ""],
                                    transform: [[],[],[],['0.96636','0.7834']]
                                }]
                            },
                            {
                                id: 'lawn',
                                type: 'rect',
                                rect: ['auto', 'auto', '15.6%', '5.6%', '0%', '56.8%'],
                                cursor: 'pointer',
                                opacity: '1',
                                fill: ["rgba(97,99,127,0.00)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                userClass: "menui",
                                transform: [[],[],[],['0.7464','0.86776']],
                                c: [
                                {
                                    id: 'wushuCopy32',
                                    type: 'text',
                                    rect: ['auto', 'auto', '96.5%', '107.5%', '1.5%', '-10%'],
                                    text: "Lawn Tennis",
                                    align: "center",
                                    font: ['germania-one, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", ""],
                                    transform: [[],[],[],['0.96636','0.7834']]
                                }]
                            },
                            {
                                id: 'table',
                                type: 'rect',
                                rect: ['auto', 'auto', '15.6%', '5.7%', '0%', '47.6%'],
                                cursor: 'pointer',
                                opacity: '1',
                                fill: ["rgba(97,99,127,0.00)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                userClass: "menui",
                                transform: [[],[],[],['0.7464','0.86776']],
                                c: [
                                {
                                    id: 'wushuCopy31',
                                    type: 'text',
                                    rect: ['auto', 'auto', '101.4%', '104.9%', '-2%', '-4.9%'],
                                    text: "Table Tennis",
                                    align: "center",
                                    font: ['germania-one, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", ""],
                                    transform: [[],[],[],['0.96636','0.7834']]
                                }]
                            },
                            {
                                id: 'gaming',
                                type: 'rect',
                                rect: ['auto', 'auto', '15.6%', '5.6%', '0.1%', '64.8%'],
                                cursor: 'pointer',
                                opacity: '1',
                                fill: ["rgba(97,99,127,0.00)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                userClass: "menui",
                                transform: [[],[],[],['0.7464','0.86776']],
                                c: [
                                {
                                    id: 'wushuCopy29',
                                    type: 'text',
                                    rect: ['auto', 'auto', '102%', '107.5%', '-0.5%', '0%'],
                                    text: "Gaming",
                                    align: "center",
                                    font: ['germania-one, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", ""],
                                    transform: [[],[],[],['0.96636','0.7834']]
                                }]
                            },
                            {
                                id: 'volleyball',
                                type: 'rect',
                                rect: ['auto', 'auto', '15.6%', '5.6%', '0.2%', '24.9%'],
                                cursor: 'pointer',
                                opacity: '1',
                                fill: ["rgba(97,99,127,0.00)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                userClass: "menui",
                                transform: [[],[],[],['0.7464','0.86776']],
                                c: [
                                {
                                    id: 'wushuCopy20',
                                    type: 'text',
                                    rect: ['3.5%', '-5%', '93%', '107.5%', 'auto', 'auto'],
                                    text: "Volleyball",
                                    align: "center",
                                    font: ['germania-one, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", ""],
                                    transform: [[],[],[],['0.96636','0.7834']]
                                }]
                            },
                            {
                                id: 'basketballCopy',
                                type: 'rect',
                                rect: ['3.4%', '37.8%', '15.6%', '5.6%', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '1',
                                fill: ["rgba(97,99,127,0.00)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                userClass: "menui",
                                transform: [[],[],[],['0.7464','0.86776']],
                                c: [
                                {
                                    id: 'wushuCopy28',
                                    type: 'text',
                                    rect: ['-2%', '-2.1%', '103.5%', '107.5%', 'auto', 'auto'],
                                    text: "Basketball",
                                    align: "center",
                                    font: ['germania-one, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", ""],
                                    transform: [[],[],[],['0.96636','0.7834']]
                                }]
                            },
                            {
                                id: 'badminton',
                                type: 'rect',
                                rect: ['3.3%', '29.5%', '15.6%', '5.6%', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '1',
                                fill: ["rgba(97,99,127,0.00)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                userClass: "menui",
                                transform: [[],[],[],['0.7464','0.86776']],
                                c: [
                                {
                                    id: 'wushuCopy27',
                                    type: 'text',
                                    rect: ['-0.2%', '-2.9%', '103.7%', '107.5%', 'auto', 'auto'],
                                    text: "Badminton",
                                    align: "center",
                                    font: ['germania-one, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", ""],
                                    transform: [[],[],[],['0.96636','0.7834']]
                                }]
                            },
                            {
                                id: 'athletics',
                                type: 'rect',
                                rect: ['3.4%', '21.7%', '15.6%', '5.6%', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '1',
                                fill: ["rgba(97,99,127,0.00)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                userClass: "menui",
                                transform: [[],[],[],['0.7464','0.86776']],
                                c: [
                                {
                                    id: 'wushuCopy26',
                                    type: 'text',
                                    rect: ['-1.2%', '-10.1%', '103.6%', '127.8%', 'auto', 'auto'],
                                    text: "Athletics",
                                    align: "center",
                                    font: ['germania-one, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", ""],
                                    transform: [[],[],[],['0.96636','0.7834']]
                                }]
                            },
                            {
                                id: 'boxing',
                                type: 'rect',
                                rect: ['3.4%', '53.8%', '15.6%', '5.6%', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '1',
                                fill: ["rgba(97,99,127,0.00)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                userClass: "menui",
                                transform: [[],[],['0','-1'],['0.7464','0.86776']],
                                c: [
                                {
                                    id: 'wushuCopy25',
                                    type: 'text',
                                    rect: ['-0.7%', '0%', '103.5%', '107.5%', 'auto', 'auto'],
                                    opacity: '1',
                                    text: "Boxing",
                                    align: "center",
                                    font: ['germania-one, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", ""],
                                    transform: [[],[],[],['0.96636','0.7834']]
                                }]
                            },
                            {
                                id: 'billiards',
                                type: 'rect',
                                rect: ['3.4%', '46%', '15.6%', '5.7%', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '1',
                                fill: ["rgba(97,99,127,0.00)"],
                                stroke: [0,"rgba(255,255,255,1.00)","dotted"],
                                userClass: "menui",
                                transform: [[],[],[],['0.7464','0.86776']],
                                c: [
                                {
                                    id: 'wushuCopy24',
                                    type: 'text',
                                    rect: ['-1.2%', '0%', '103.5%', '104.9%', 'auto', 'auto'],
                                    text: "Billiards",
                                    align: "center",
                                    font: ['germania-one, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", ""],
                                    transform: [[],[],[],['0.96636','0.7834']]
                                }]
                            },
                            {
                                id: 'chess',
                                type: 'rect',
                                rect: ['3.4%', '61.8%', '15.6%', '5.7%', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '1',
                                fill: ["rgba(97,99,127,0.00)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                userClass: "menui",
                                transform: [[],[],[],['0.7464','0.86776']],
                                c: [
                                {
                                    id: 'wushuCopy23',
                                    type: 'text',
                                    rect: ['-0.5%', '-4%', '103.5%', '115%', 'auto', 'auto'],
                                    opacity: '1',
                                    text: "Chess",
                                    align: "center",
                                    font: ['germania-one, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", ""],
                                    transform: [[],[],[],['0.96636','0.7834']]
                                }]
                            },
                            {
                                id: 'Cricket',
                                type: 'rect',
                                rect: ['3.5%', '46.3%', '15.6%', '5.6%', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '0',
                                fill: ["rgba(97,99,127,0.00)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                userClass: "menui",
                                transform: [[],[],[],['0.7464','0.86776']],
                                c: [
                                {
                                    id: 'wushuCopy21',
                                    type: 'text',
                                    rect: ['0.4%', '-6.8%', '103.5%', '115.3%', 'auto', 'auto'],
                                    text: "Cricket",
                                    align: "center",
                                    font: ['germania-one, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", ""],
                                    transform: [[],[],[],['0.96636','0.7834']]
                                }]
                            },
                            {
                                id: 'Football',
                                type: 'rect',
                                rect: ['84.1%', '21.7%', '15.6%', '5.6%', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '0',
                                fill: ["rgba(105,107,131,0.00)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                userClass: "menui",
                                transform: [[],[],[],['0.7464','0.86776']],
                                c: [
                                {
                                    id: 'wushuCopy11',
                                    type: 'text',
                                    rect: ['-0.2%', '-3.4%', '103.6%', '107.8%', 'auto', 'auto'],
                                    text: "Football",
                                    align: "center",
                                    font: ['germania-one, sans-serif', [40, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", ""],
                                    transform: [[],[],[],['0.96636','0.7834']]
                                }]
                            },
                            {
                                id: 'Group',
                                type: 'group',
                                rect: ['47.4%', '3.4%', '12.6%', '6.7%', 'auto', 'auto'],
                                opacity: '0',
                                transform: [[],[],[],['1.57971','1.72916']],
                                c: [
                                {
                                    id: 'TextCopy',
                                    type: 'text',
                                    rect: ['18.5%', '23.5%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '1',
                                    text: "EVENTS",
                                    align: "center",
                                    font: ['arvo, serif', [24, ""], "rgba(84,87,127,1.00)", "600", "none", "", "break-word", "nowrap"],
                                    transform: [[],[],[],['1.57447','1.47621']]
                                },
                                {
                                    id: 'Text',
                                    type: 'text',
                                    rect: ['17.9%', '15.1%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '1',
                                    text: "EVENTS",
                                    align: "center",
                                    font: ['arvo, serif', [24, ""], "rgba(255,255,255,1.00)", "600", "none", "", "break-word", "nowrap"],
                                    transform: [[],[],[],['1.57447','1.47621']]
                                }]
                            }]
                        },
                        {
                            id: 'home',
                            type: 'rect',
                            rect: ['0px', '0px', '100%', '12.5%', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0.91056910569106',
                            fill: ["rgba(46,51,98,0.80)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "homeclass",
                            c: [
                            {
                                id: 'main_bg2',
                                type: 'image',
                                rect: ['0%', '21.3%', '100%', '100%', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"main_bg.jpg",'0px','0px'],
                                userClass: "bgclass"
                            },
                            {
                                id: 'Rectangle2',
                                type: 'rect',
                                rect: ['-20.7%', '84.2%', '18.9%', '8.4%', 'auto', 'auto'],
                                fill: ["rgba(196,223,155,1.00)"],
                                stroke: [0,"rgb(255, 255, 255)","solid"],
                                transform: [[],[],['-14']],
                                c: [
                                {
                                    id: 'Text3',
                                    type: 'text',
                                    rect: ['3.5%', '32.4%', 'auto', 'auto', 'auto', 'auto'],
                                    text: "INDIAN SCHOOL OF MINES, DHANBAD",
                                    align: "left",
                                    font: ['cuprum, sans-serif', [100, "%"], "rgba(46,17,17,1.00)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"],
                                    transform: [[],[],['14']]
                                }]
                            },
                            {
                                id: 'Text2',
                                type: 'text',
                                rect: ['86.5%', '63.9%', 'auto', 'auto', 'auto', 'auto'],
                                text: "13-15 FEB",
                                align: "left",
                                font: ['cuprum, sans-serif', [150, "%"], "rgba(255,255,255,1)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'top_left',
                                type: 'group',
                                rect: ['21.6%', '24.8%', '3.7%', '7%', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Rectangle',
                                    type: 'rect',
                                    rect: ['49.9%', '50%', '50%', '50%', 'auto', 'auto'],
                                    fill: ["rgba(0,234,255,1.00)"],
                                    stroke: [0,"rgb(255, 255, 255)","solid"]
                                },
                                {
                                    id: 'RectangleCopy',
                                    type: 'rect',
                                    rect: ['0%', '0%', '50%', '50%', 'auto', 'auto'],
                                    fill: ["rgba(0,234,255,1.00)"],
                                    stroke: [0,"rgb(255, 255, 255)","solid"]
                                }]
                            },
                            {
                                id: 'bot_right',
                                type: 'group',
                                rect: ['95.5%', '90.6%', '3.7%', '7%', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'RectangleCopy3',
                                    type: 'rect',
                                    rect: ['50%', '50%', '50%', '50%', 'auto', 'auto'],
                                    fill: ["rgba(0,234,255,1.00)"],
                                    stroke: [0,"rgb(255, 255, 255)","solid"]
                                },
                                {
                                    id: 'RectangleCopy2',
                                    type: 'rect',
                                    rect: ['0%', '0%', '50%', '50%', 'auto', 'auto'],
                                    fill: ["rgba(0,234,255,1.00)"],
                                    stroke: [0,"rgb(255, 255, 255)","solid"]
                                }]
                            },
                            {
                                id: 'bot_left',
                                type: 'group',
                                rect: ['1.3%', '90.6%', '3.7%', '6.9%', 'auto', 'auto'],
                                transform: [[],['90']],
                                c: [
                                {
                                    id: 'RectangleCopy9',
                                    type: 'rect',
                                    rect: ['50%', '50%', '50%', '50%', 'auto', 'auto'],
                                    fill: ["rgba(0,234,255,1.00)"],
                                    stroke: [0,"rgb(255, 255, 255)","solid"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'RectangleCopy8',
                                    type: 'rect',
                                    rect: ['0%', '0%', '50%', '50%', 'auto', 'auto'],
                                    fill: ["rgba(0,234,255,1.00)"],
                                    stroke: [0,"rgb(255, 255, 255)","solid"],
                                    transform: [[],['90']]
                                }]
                            },
                            {
                                id: 'bot_leftCopy',
                                type: 'group',
                                rect: ['95.3%', '1.8%', '3.7%', '6.9%', 'auto', 'auto'],
                                transform: [[],['90']],
                                c: [
                                {
                                    id: 'RectangleCopy5',
                                    type: 'rect',
                                    rect: ['50%', '50%', '50%', '50%', 'auto', 'auto'],
                                    fill: ["rgba(0,234,255,1.00)"],
                                    stroke: [0,"rgb(255, 255, 255)","solid"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'RectangleCopy4',
                                    type: 'rect',
                                    rect: ['0%', '0%', '50%', '50%', 'auto', 'auto'],
                                    fill: ["rgba(0,234,255,1.00)"],
                                    stroke: [0,"rgb(255, 255, 255)","solid"],
                                    transform: [[],['90']]
                                }]
                            },
                            {
                                id: 'parakram15',
                                type: 'image',
                                rect: ['31.1%', '41.1%', '42.4%', '11.5%', 'auto', 'auto'],
                                opacity: '0.17073170731707',
                                fill: ["rgba(0,0,0,0)",im+"parakram15.png",'0px','0px']
                            },
                            {
                                id: 'scoll_down2',
                                symbolName: 'scoll_down',
                                type: 'rect',
                                rect: ['45.7%', '85.7%', '113', '113', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '1'
                            }]
                        },
                        {
                            id: 'gallerypics',
                            type: 'rect',
                            rect: ['0%', '50%', '99.6%', '24.9%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [2,"rgb(0, 0, 0)","dotted"],
                            c: [
                            {
                                id: 'gallerypic1',
                                type: 'image',
                                rect: ['8.8%', '5.4%', '38.6%', '21.3%', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"gallery/1.JPG",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                                transform: [[],[],[],['1.00549']]
                            },
                            {
                                id: 'left',
                                type: 'rect',
                                rect: ['-62.1%', '-1.9%', '54.6%', '37.5%', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['-34']]
                            },
                            {
                                id: 'gallerypic2',
                                type: 'image',
                                rect: ['52.9%', '5.7%', '38.7%', '21.3%', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"gallery/2.JPG",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'leftCopy',
                                type: 'rect',
                                rect: ['48.6%', '0.2%', '47.1%', '39.5%', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [2,"rgb(0, 0, 0)","none"],
                                transform: [[],['-34']]
                            },
                            {
                                id: '_10',
                                type: 'image',
                                rect: ['8.7%', '79%', '38.8%', '21.2%', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"gallery/8.JPG",'0px','0px']
                            },
                            {
                                id: 'gallerypic7',
                                type: 'image',
                                rect: ['52.7%', '51.7%', '38.8%', '21.2%', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"9.jpg",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'gallerypic3',
                                type: 'image',
                                rect: ['-43.1%', '23.7%', '47.3%', '29.3%', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"gallery/3.JPG",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                                transform: [[],[],[],['0.82','0.72444']]
                            },
                            {
                                id: 'gallerypic4',
                                type: 'image',
                                rect: ['72.1%', '23.7%', '40.2%', '29.3%', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"gallery/4.jpg",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                                transform: [[],[],[],['0.96499','0.72444']]
                            },
                            {
                                id: 'gallerypic5',
                                type: 'image',
                                rect: ['8.7%', '79.3%', '38.8%', '21.2%', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"gallery/5.jpg",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'gallerypic6',
                                type: 'image',
                                rect: ['52.7%', '79.1%', '38.8%', '21.2%', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"6.JPG",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            }]
                        },
                        {
                            id: 'contacts',
                            type: 'rect',
                            rect: ['0%', '87.2%', '100%', '13.3%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(9,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "contactsclass",
                            c: [
                            {
                                id: 'sponsorsdiv',
                                type: 'rect',
                                rect: ['0%', '84.6%', '100%', '14.8%', 'auto', 'auto'],
                                fill: ["rgba(11,41,8,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Text14',
                                type: 'text',
                                rect: ['46.7%', '2.9%', 'auto', 'auto', 'auto', 'auto'],
                                clip: 'rect(0px 139.9925537109375px 1.6011261940002441px 0px)',
                                text: "CONTACTS",
                                font: ['arvo, serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"],
                                transform: [[],[],[],['2.8722','2.87891']]
                            },
                            {
                                id: 'coordigroup',
                                type: 'group',
                                rect: ['0.1%', '32.6%', '99.9%', '12.4%', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Rectangle7',
                                    type: 'rect',
                                    rect: ['51.5%', '31.9%', '100%', '6.2%', 'auto', 'auto'],
                                    overflow: 'hidden',
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'cordi1',
                                    type: 'text',
                                    rect: ['8.5%', '41%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0.0085470085470086',
                                    text: "Suraj Kumar Sinha<br>+91-7677395706",
                                    align: "center",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'cordi1Copy2',
                                    type: 'text',
                                    rect: ['78%', '38.5%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0.0085470085470086',
                                    text: "Shivashish Kumar<br>+91-7277088340",
                                    align: "center",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'cordi1Copy3',
                                    type: 'text',
                                    rect: ['44%', '40%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0.0085470085470086',
                                    text: "Saurabh Tripathi<br>+91-7277088340",
                                    align: "center",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'coordi',
                                    type: 'text',
                                    rect: ['-0.1%', '120.1%', '100%', '39%', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "Co-ordinators",
                                    align: "center",
                                    font: ['arvo, serif', [30, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", ""]
                                }]
                            },
                            {
                                id: 'technical',
                                type: 'group',
                                rect: ['0%', '65.4%', '99.9%', '12.4%', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Rectangle7Copy2',
                                    type: 'rect',
                                    rect: ['45.7%', '11.9%', '100.1%', '4.2%', 'auto', 'auto'],
                                    overflow: 'hidden',
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'cordi1Copy8',
                                    type: 'text',
                                    rect: ['0%', '33.3%', '100%', '61.1%', 'auto', 'auto'],
                                    opacity: '0.034188034188034',
                                    text: "Marungsha  Brahma<br>  +91-8252835469",
                                    align: "center",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", ""]
                                },
                                {
                                    id: 'coordiCopy2',
                                    type: 'text',
                                    rect: ['0%', '-25.3%', '100%', '39%', 'auto', 'auto'],
                                    opacity: '0.0085470085470085',
                                    text: "Technical Head",
                                    align: "center",
                                    font: ['arvo, serif', [30, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", ""]
                                }]
                            },
                            {
                                id: 'sportsec',
                                type: 'group',
                                rect: ['0.1%', '17.9%', '99.9%', '12.4%', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Rectangle7Copy3',
                                    type: 'rect',
                                    rect: ['49.9%', '15.8%', '6.7%', '3.2%', 'auto', 'auto'],
                                    overflow: 'hidden',
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'cordi1Copy',
                                    type: 'text',
                                    rect: ['46.4%', '237.6%', '100%', '61.1%', 'auto', 'auto'],
                                    opacity: '0.008130081300813',
                                    text: "  Rishabh Kumar<br>+91-8877208081",
                                    align: "center",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", ""]
                                },
                                {
                                    id: 'coordiCopy3',
                                    type: 'text',
                                    rect: ['-0.1%', '-23.2%', '100%', '39%', 'auto', 'auto'],
                                    opacity: '0.032520325203252',
                                    text: "Sports Secretary",
                                    align: "center",
                                    font: ['arvo, serif', [30, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", ""]
                                }]
                            },
                            {
                                id: 'coordigroupCopy',
                                type: 'group',
                                rect: ['0.1%', '45%', '100.2%', '12.4%', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Rectangle7Copy',
                                    type: 'rect',
                                    rect: ['51.4%', '67.5%', '100%', '6.2%', 'auto', 'auto'],
                                    overflow: 'hidden',
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'anurag',
                                    type: 'text',
                                    rect: ['8.2%', '74.7%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0.0085470085470086',
                                    text: "Anurag Amrit<br>+91-7654737309",
                                    align: "center",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'rite',
                                    type: 'text',
                                    rect: ['78.3%', '73.7%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0.0085470085470086',
                                    text: "Ritesh Kumar<br>+91-8674807325",
                                    align: "center",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'abhi',
                                    type: 'text',
                                    rect: ['27.9%', '74.7%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0.0085470085470086',
                                    text: "Abhishek Singh<br>+91-9006747680",
                                    align: "center",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'abhiCopy',
                                    type: 'text',
                                    rect: ['60.3%', '74.7%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0.034188034188034',
                                    text: "Akash Prabhakar<br>+91-7209706466",
                                    align: "center",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'coordiCopy',
                                    type: 'text',
                                    rect: ['-0.1%', '29.6%', '100%', '39%', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "Co-coordinators",
                                    align: "center",
                                    font: ['arvo, serif', [30, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", ""]
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '799.8%', 'auto', 'auto'],
                            sizeRange: ['1360px','1600px','',''],
                            overflow: 'visible',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1130,
                    autoPlay: false,
                    labels: {
                        "menuend": 144
                    },
                    data: [
                        [
                            "eid1800",
                            "top",
                            140,
                            24,
                            "easeOutQuint",
                            "${gallerymenu}",
                            '16.64%',
                            '16.39%'
                        ],
                        [
                            "eid179",
                            "left",
                            0,
                            533,
                            "linear",
                            "${bot_right}",
                            '75.88%',
                            '95.47%'
                        ],
                        [
                            "eid2317",
                            "height",
                            0,
                            0,
                            "linear",
                            "${main_bg2}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid2108",
                            "top",
                            1109,
                            13,
                            "linear",
                            "${cordi1Copy8}",
                            '158.91%',
                            '33.33%'
                        ],
                        [
                            "eid1401",
                            "top",
                            450,
                            24,
                            "easeOutBounce",
                            "${LCopy3}",
                            '-9.48%',
                            '41.81%'
                        ],
                        [
                            "eid2324",
                            "skewY",
                            482,
                            0,
                            "linear",
                            "${boxing}",
                            '-1deg',
                            '-1deg'
                        ],
                        [
                            "eid2098",
                            "font-size",
                            1054,
                            0,
                            "linear",
                            "${coordi}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid1968",
                            "opacity",
                            222,
                            68,
                            "linear",
                            "${Group}",
                            '0',
                            '0.98373983739837'
                        ],
                        [
                            "eid1816",
                            "top",
                            132,
                            32,
                            "easeOutQuint",
                            "${fb}",
                            '61.14%',
                            '60.89%'
                        ],
                        [
                            "eid1822",
                            "top",
                            140,
                            32,
                            "easeOutQuint",
                            "${registermenu}",
                            '60.85%',
                            '60.6%'
                        ],
                        [
                            "eid1443",
                            "background-color",
                            633,
                            0,
                            "linear",
                            "${registermenu}",
                            'rgba(120,80,223,1.00)',
                            'rgba(120,80,223,1.00)'
                        ],
                        [
                            "eid441",
                            "top",
                            0,
                            533,
                            "linear",
                            "${Rectangle2}",
                            '83%',
                            '84.17%'
                        ],
                        [
                            "eid1902",
                            "opacity",
                            929,
                            30,
                            "easeOutQuint",
                            "${Text11}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2074",
                            "opacity",
                            1095,
                            18,
                            "linear",
                            "${abhi}",
                            '0.008547008968889713',
                            '1'
                        ],
                        [
                            "eid2084",
                            "width",
                            1095,
                            20,
                            "linear",
                            "${Rectangle7Copy}",
                            '1.95%',
                            '100%'
                        ],
                        [
                            "eid1815",
                            "left",
                            132,
                            32,
                            "easeOutQuint",
                            "${fbCopy5}",
                            '15.77%',
                            '8.82%'
                        ],
                        [
                            "eid2034",
                            "left",
                            1049,
                            13,
                            "linear",
                            "${cordi1}",
                            '46.33%',
                            '8.53%'
                        ],
                        [
                            "eid1833",
                            "left",
                            567,
                            66,
                            "linear",
                            "${leftCopy}",
                            '48.63%',
                            '109.15%'
                        ],
                        [
                            "eid2033",
                            "opacity",
                            1031,
                            18,
                            "linear",
                            "${coordi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2045",
                            "width",
                            1049,
                            13,
                            "linear",
                            "${Rectangle7}",
                            '1.95%',
                            '99.97%'
                        ],
                        [
                            "eid1396",
                            "top",
                            434,
                            16,
                            "easeOutBounce",
                            "${A}",
                            '-10.86%',
                            '40.66%'
                        ],
                        [
                            "eid2075",
                            "left",
                            1095,
                            18,
                            "linear",
                            "${abhi}",
                            '44.5%',
                            '27.86%'
                        ],
                        [
                            "eid1807",
                            "top",
                            132,
                            32,
                            "easeOutQuint",
                            "${sponsors}",
                            '39%',
                            '38.75%'
                        ],
                        [
                            "eid2061",
                            "opacity",
                            1049,
                            13,
                            "linear",
                            "${cordi1Copy3}",
                            '0.008547008968889713',
                            '1'
                        ],
                        [
                            "eid1813",
                            "top",
                            132,
                            32,
                            "easeOutQuint",
                            "${fbCopy5}",
                            '60.9%',
                            '60.65%'
                        ],
                        [
                            "eid1963",
                            "left",
                            929,
                            30,
                            "linear",
                            "${Text11}",
                            '29.42%',
                            '7.84%'
                        ],
                        [
                            "eid2132",
                            "opacity",
                            285,
                            13,
                            "easeInQuad",
                            "${swim}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1955",
                            "opacity",
                            500,
                            33,
                            "linear",
                            "${gallaarrow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2058",
                            "opacity",
                            1049,
                            13,
                            "linear",
                            "${cordi1Copy2}",
                            '0.008547008968889713',
                            '1'
                        ],
                        [
                            "eid2046",
                            "left",
                            1049,
                            13,
                            "linear",
                            "${Rectangle7}",
                            '51.48%',
                            '0%'
                        ],
                        [
                            "eid1809",
                            "left",
                            132,
                            32,
                            "easeOutQuint",
                            "${sponsors}",
                            '28.93%',
                            '21.98%'
                        ],
                        [
                            "eid2364",
                            "display",
                            277,
                            0,
                            "linear",
                            "${others}",
                            'block',
                            'none'
                        ],
                        [
                            "eid178",
                            "top",
                            0,
                            533,
                            "linear",
                            "${bot_leftCopy}",
                            '24.93%',
                            '1.81%'
                        ],
                        [
                            "eid1488",
                            "top",
                            667,
                            67,
                            "linear",
                            "${gallerypic7}",
                            '79%',
                            '51.7%'
                        ],
                        [
                            "eid1490",
                            "top",
                            767,
                            55,
                            "easeOutQuad",
                            "${gallerypic7}",
                            '51.7%',
                            '75.26%'
                        ],
                        [
                            "eid2273",
                            "width",
                            1020,
                            21,
                            "linear",
                            "${Rectangle7Copy3}",
                            '6.7%',
                            '100.1%'
                        ],
                        [
                            "eid1470",
                            "left",
                            633,
                            67,
                            "easeOutBounce",
                            "${gallerypic4}",
                            '99.36%',
                            '52%'
                        ],
                        [
                            "eid1340",
                            "top",
                            316,
                            10,
                            "easeOutElastic",
                            "${athletics}",
                            '-1.32%',
                            '21.73%'
                        ],
                        [
                            "eid2110",
                            "opacity",
                            1109,
                            13,
                            "linear",
                            "${cordi1Copy8}",
                            '0.034188034188034',
                            '1'
                        ],
                        [
                            "eid2073",
                            "top",
                            1095,
                            18,
                            "linear",
                            "${abhi}",
                            '258.95%',
                            '74.74%'
                        ],
                        [
                            "eid2052",
                            "top",
                            990,
                            18,
                            "linear",
                            "${Rectangle8}",
                            '19%',
                            '18.79%'
                        ],
                        [
                            "eid2077",
                            "top",
                            1095,
                            18,
                            "linear",
                            "${rite}",
                            '199.16%',
                            '73.68%'
                        ],
                        [
                            "eid1337",
                            "top",
                            308,
                            11,
                            "easeOutQuint",
                            "${badminton}",
                            '6.49%',
                            '29.54%'
                        ],
                        [
                            "eid2187",
                            "bottom",
                            305,
                            11,
                            "easeOutCubic",
                            "${lawn}",
                            '79.85%',
                            '56.8%'
                        ],
                        [
                            "eid1333",
                            "left",
                            297,
                            14,
                            "easeOutQuart",
                            "${billiards}",
                            '3.49%',
                            '3.36%'
                        ],
                        [
                            "eid2172",
                            "opacity",
                            286,
                            12,
                            "easeInCirc",
                            "${tennis}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1939",
                            "opacity",
                            910,
                            0,
                            "linear",
                            "${tennis}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2377",
                            "width",
                            277,
                            0,
                            "linear",
                            "${others}",
                            '90.9%',
                            '90.9%'
                        ],
                        [
                            "eid2092",
                            "opacity",
                            1095,
                            18,
                            "linear",
                            "${abhiCopy}",
                            '0.034188034188034',
                            '1'
                        ],
                        [
                            "eid2259",
                            "left",
                            1020,
                            21,
                            "linear",
                            "${cordi1Copy}",
                            '46.43%',
                            '0%'
                        ],
                        [
                            "eid2379",
                            "top",
                            277,
                            0,
                            "linear",
                            "${others}",
                            '9.89%',
                            '9.89%'
                        ],
                        [
                            "eid2322",
                            "background-color",
                            482,
                            0,
                            "linear",
                            "${chess}",
                            'rgba(97,99,127,0.00)',
                            'rgba(97,99,127,0.00)'
                        ],
                        [
                            "eid2267",
                            "top",
                            1020,
                            21,
                            "linear",
                            "${coordiCopy3}",
                            '205.61%',
                            '-23.24%'
                        ],
                        [
                            "eid1484",
                            "top",
                            666,
                            67,
                            "linear",
                            "${gallerypic6}",
                            '79.11%',
                            '51.53%'
                        ],
                        [
                            "eid2376",
                            "height",
                            277,
                            0,
                            "linear",
                            "${others}",
                            '77.39%',
                            '77.39%'
                        ],
                        [
                            "eid2183",
                            "opacity",
                            297,
                            14,
                            "easeOutQuart",
                            "${table}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2198",
                            "opacity",
                            1095,
                            14,
                            "linear",
                            "${coordiCopy2}",
                            '0.008547008968889713',
                            '1'
                        ],
                        [
                            "eid2129",
                            "opacity",
                            277,
                            13,
                            "easeInQuad",
                            "${volleyball}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1808",
                            "opacity",
                            132,
                            32,
                            "easeOutQuint",
                            "${sponsors}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2071",
                            "opacity",
                            1078,
                            17,
                            "linear",
                            "${coordiCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1327",
                            "left",
                            285,
                            13,
                            "easeInQuad",
                            "${chess}",
                            '3.49%',
                            '3.36%'
                        ],
                        [
                            "eid1331",
                            "top",
                            297,
                            14,
                            "easeOutQuart",
                            "${billiards}",
                            '22.92%',
                            '45.97%'
                        ],
                        [
                            "eid1823",
                            "opacity",
                            140,
                            32,
                            "easeOutQuint",
                            "${registermenu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1791",
                            "top",
                            121,
                            32,
                            "easeOutQuint",
                            "${eventsmenu}",
                            '16.53%',
                            '16.28%'
                        ],
                        [
                            "eid1790",
                            "left",
                            121,
                            32,
                            "easeOutQuint",
                            "${eventsmenu}",
                            '15.78%',
                            '8.83%'
                        ],
                        [
                            "eid2321",
                            "background-color",
                            482,
                            0,
                            "linear",
                            "${Cricket}",
                            'rgba(97,99,127,0.00)',
                            'rgba(97,99,127,0.00)'
                        ],
                        [
                            "eid2330",
                            "background-color",
                            482,
                            0,
                            "linear",
                            "${gaming}",
                            'rgba(97,99,127,0.00)',
                            'rgba(97,99,127,0.00)'
                        ],
                        [
                            "eid2029",
                            "top",
                            1031,
                            18,
                            "linear",
                            "${coordi}",
                            '120.12%',
                            '-6.64%'
                        ],
                        [
                            "eid1342",
                            "left",
                            316,
                            10,
                            "easeOutElastic",
                            "${athletics}",
                            '3.53%',
                            '3.4%'
                        ],
                        [
                            "eid2241",
                            "background-color",
                            132,
                            21,
                            "linear",
                            "${registrationmenu}",
                            'rgba(76,84,116,0)',
                            'rgba(76,84,116,0.00)'
                        ],
                        [
                            "eid1814",
                            "opacity",
                            132,
                            32,
                            "easeOutQuint",
                            "${fbCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1832",
                            "skewX",
                            1000,
                            0,
                            "linear",
                            "${gallerypic3}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid2310",
                            "left",
                            0,
                            68,
                            "easeInQuint",
                            "${scoll_down2}",
                            '45.68%',
                            '45.6%'
                        ],
                        [
                            "eid2280",
                            "left",
                            68,
                            14,
                            "linear",
                            "${scoll_down2}",
                            '45.6%',
                            '45.81%'
                        ],
                        [
                            "eid2333",
                            "background-color",
                            482,
                            0,
                            "linear",
                            "${tennis}",
                            'rgba(97,99,127,0.00)',
                            'rgba(97,99,127,0.00)'
                        ],
                        [
                            "eid2239",
                            "opacity",
                            132,
                            21,
                            "linear",
                            "${registrationmenu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2226",
                            "left",
                            441,
                            0,
                            "linear",
                            "${G}",
                            '24.3%',
                            '24.3%'
                        ],
                        [
                            "eid218",
                            "top",
                            0,
                            192,
                            "easeInCubic",
                            "${parakram15}",
                            '40.83%',
                            '266.8%'
                        ],
                        [
                            "eid1949",
                            "top",
                            132,
                            0,
                            "linear",
                            "${menu}",
                            '12.5%',
                            '12.5%'
                        ],
                        [
                            "eid2257",
                            "left",
                            1109,
                            13,
                            "linear",
                            "${cordi1Copy8}",
                            '0.02%',
                            '0.01%'
                        ],
                        [
                            "eid1745",
                            "left",
                            322,
                            0,
                            "easeOutBack",
                            "${eventinfo}",
                            '16.95%',
                            '16.95%'
                        ],
                        [
                            "eid2120",
                            "left",
                            140,
                            32,
                            "easeOutQuint",
                            "${twitter}",
                            '61.2%',
                            '59.5%'
                        ],
                        [
                            "eid2070",
                            "top",
                            1078,
                            17,
                            "linear",
                            "${coordiCopy}",
                            '188.74%',
                            '29.62%'
                        ],
                        [
                            "eid2053",
                            "width",
                            990,
                            18,
                            "linear",
                            "${Rectangle8}",
                            '100.01%',
                            '99.58%'
                        ],
                        [
                            "eid1824",
                            "left",
                            140,
                            32,
                            "easeOutQuint",
                            "${registermenu}",
                            '79.06%',
                            '72.11%'
                        ],
                        [
                            "eid2332",
                            "background-color",
                            482,
                            0,
                            "linear",
                            "${table}",
                            'rgba(97,99,127,0.00)',
                            'rgba(97,99,127,0.00)'
                        ],
                        [
                            "eid2171",
                            "bottom",
                            286,
                            12,
                            "easeInCirc",
                            "${tennis}",
                            '63.59%',
                            '40.54%'
                        ],
                        [
                            "eid2169",
                            "bottom",
                            482,
                            0,
                            "linear",
                            "${tennis}",
                            '40.54%',
                            '40.54%'
                        ],
                        [
                            "eid2327",
                            "background-color",
                            482,
                            0,
                            "linear",
                            "${badminton}",
                            'rgba(97,99,127,0.00)',
                            'rgba(97,99,127,0.00)'
                        ],
                        [
                            "eid2078",
                            "opacity",
                            1095,
                            18,
                            "linear",
                            "${rite}",
                            '0.008547008968889713',
                            '1'
                        ],
                        [
                            "eid2325",
                            "background-color",
                            482,
                            0,
                            "linear",
                            "${boxing}",
                            'rgba(97,99,127,0.00)',
                            'rgba(97,99,127,0.00)'
                        ],
                        [
                            "eid1954",
                            "height",
                            305,
                            0,
                            "linear",
                            "${homemenu}",
                            '20.3%',
                            '20.3%'
                        ],
                        [
                            "eid2256",
                            "left",
                            1109,
                            6,
                            "linear",
                            "${Rectangle7Copy2}",
                            '45.71%',
                            '0.05%'
                        ],
                        [
                            "eid2100",
                            "left",
                            1095,
                            17,
                            "linear",
                            "${coordiCopy2}",
                            '0%',
                            '0.01%'
                        ],
                        [
                            "eid1938",
                            "background-color",
                            649,
                            133,
                            "linear",
                            "${gallerypics}",
                            'rgba(255,255,255,1)',
                            'rgba(21,29,22,1.00)'
                        ],
                        [
                            "eid2133",
                            "right",
                            285,
                            13,
                            "easeInQuad",
                            "${swim}",
                            '-0.06%',
                            '0.07%'
                        ],
                        [
                            "eid1341",
                            "opacity",
                            316,
                            10,
                            "easeOutElastic",
                            "${athletics}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1811",
                            "opacity",
                            121,
                            32,
                            "easeOutQuint",
                            "${homemenu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1398",
                            "top",
                            450,
                            17,
                            "easeOutBounce",
                            "${LCopy}",
                            '-10.73%',
                            '40.83%'
                        ],
                        [
                            "eid2083",
                            "left",
                            1095,
                            20,
                            "linear",
                            "${Rectangle7Copy}",
                            '51.42%',
                            '-0.33%'
                        ],
                        [
                            "eid1952",
                            "skewX",
                            305,
                            0,
                            "linear",
                            "${fbCopy5}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid1834",
                            "top",
                            567,
                            66,
                            "linear",
                            "${leftCopy}",
                            '0.23%',
                            '-1.77%'
                        ],
                        [
                            "eid2188",
                            "opacity",
                            305,
                            11,
                            "easeOutCubic",
                            "${lawn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2076",
                            "left",
                            1095,
                            18,
                            "linear",
                            "${rite}",
                            '43.99%',
                            '78.33%'
                        ],
                        [
                            "eid2131",
                            "bottom",
                            285,
                            13,
                            "easeInQuad",
                            "${swim}",
                            '55.76%',
                            '32.71%'
                        ],
                        [
                            "eid2315",
                            "top",
                            0,
                            121,
                            "linear",
                            "${main_bg2}",
                            '0.01%',
                            '21.25%'
                        ],
                        [
                            "eid2331",
                            "background-color",
                            482,
                            0,
                            "linear",
                            "${swim}",
                            'rgba(97,99,127,0.00)',
                            'rgba(97,99,127,0.00)'
                        ],
                        [
                            "eid2255",
                            "width",
                            1109,
                            6,
                            "linear",
                            "${Rectangle7Copy2}",
                            '13.9%',
                            '100.05%'
                        ],
                        [
                            "eid1338",
                            "opacity",
                            308,
                            11,
                            "easeOutQuint",
                            "${badminton}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1967",
                            "clip",
                            833,
                            55,
                            "linear",
                            "${Text5}",
                            [1.4271869659423828,292,11.920686721801758,0],
                            [1.4271869659423828,292,97.57281494140625,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid2378",
                            "left",
                            277,
                            0,
                            "linear",
                            "${others}",
                            '4.84%',
                            '4.84%'
                        ],
                        [
                            "eid2279",
                            "top",
                            1095,
                            0,
                            "linear",
                            "${Rectangle7Copy}",
                            '67.45%',
                            '67.45%'
                        ],
                        [
                            "eid2090",
                            "top",
                            1095,
                            18,
                            "linear",
                            "${abhiCopy}",
                            '273.06%',
                            '74.74%'
                        ],
                        [
                            "eid2102",
                            "top",
                            1095,
                            17,
                            "linear",
                            "${coordiCopy2}",
                            '165.26%',
                            '-25.26%'
                        ],
                        [
                            "eid2082",
                            "height",
                            1095,
                            20,
                            "linear",
                            "${Rectangle7Copy}",
                            '0.85%',
                            '6.16%'
                        ],
                        [
                            "eid1818",
                            "left",
                            132,
                            32,
                            "easeOutQuint",
                            "${fb}",
                            '54.01%',
                            '47.06%'
                        ],
                        [
                            "eid1334",
                            "top",
                            305,
                            11,
                            "easeOutCubic",
                            "${basketballCopy}",
                            '14.73%',
                            '37.78%'
                        ],
                        [
                            "eid2184",
                            "right",
                            297,
                            14,
                            "easeOutQuart",
                            "${table}",
                            '-0.09%',
                            '0.04%'
                        ],
                        [
                            "eid2035",
                            "top",
                            1049,
                            13,
                            "linear",
                            "${cordi1}",
                            '149.77%',
                            '41.02%'
                        ],
                        [
                            "eid1835",
                            "left",
                            567,
                            66,
                            "linear",
                            "${left}",
                            '4.01%',
                            '-62.14%'
                        ],
                        [
                            "eid1491",
                            "left",
                            734,
                            33,
                            "linear",
                            "${_10}",
                            '8.71%',
                            '8.7%'
                        ],
                        [
                            "eid2182",
                            "bottom",
                            297,
                            14,
                            "easeOutQuart",
                            "${table}",
                            '70.61%',
                            '47.56%'
                        ],
                        [
                            "eid2192",
                            "top",
                            316,
                            10,
                            "easeOutElastic",
                            "${Football}",
                            '-1.32%',
                            '21.73%'
                        ],
                        [
                            "eid1335",
                            "opacity",
                            305,
                            11,
                            "easeOutCubic",
                            "${basketballCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2237",
                            "left",
                            132,
                            21,
                            "linear",
                            "${registrationmenu}",
                            '101.09%',
                            '82.89%'
                        ],
                        [
                            "eid985",
                            "height",
                            223,
                            44,
                            "linear",
                            "${Events}",
                            '12.43%',
                            '12.45%'
                        ],
                        [
                            "eid1378",
                            "height",
                            267,
                            38,
                            "easeOutBounce",
                            "${Events}",
                            '12.45%',
                            '12.5%'
                        ],
                        [
                            "eid2072",
                            "left",
                            1078,
                            17,
                            "linear",
                            "${coordiCopy}",
                            '-0.13%',
                            '-0.09%'
                        ],
                        [
                            "eid2057",
                            "top",
                            1049,
                            13,
                            "linear",
                            "${cordi1Copy2}",
                            '150.09%',
                            '38.52%'
                        ],
                        [
                            "eid2031",
                            "left",
                            1031,
                            18,
                            "linear",
                            "${coordi}",
                            '-0.11%',
                            '-0.1%'
                        ],
                        [
                            "eid2047",
                            "height",
                            990,
                            18,
                            "linear",
                            "${Rectangle8}",
                            '82.5%',
                            '75.66%'
                        ],
                        [
                            "eid1792",
                            "top",
                            121,
                            32,
                            "easeOutQuint",
                            "${about}",
                            '16.71%',
                            '16.46%'
                        ],
                        [
                            "eid1874",
                            "top",
                            153,
                            596,
                            "linear",
                            "${about}",
                            '16.46%',
                            '16.25%'
                        ],
                        [
                            "eid1956",
                            "top",
                            500,
                            33,
                            "linear",
                            "${gallaarrow}",
                            '61.11%',
                            '94.67%'
                        ],
                        [
                            "eid1486",
                            "top",
                            666,
                            67,
                            "linear",
                            "${gallerypic5}",
                            '79.31%',
                            '51.18%'
                        ],
                        [
                            "eid2130",
                            "right",
                            277,
                            13,
                            "easeInQuad",
                            "${volleyball}",
                            '-0.06%',
                            '0.07%'
                        ],
                        [
                            "eid213",
                            "top",
                            0,
                            105,
                            "linear",
                            "${Text2}",
                            '53.19%',
                            '63.87%'
                        ],
                        [
                            "eid1810",
                            "top",
                            121,
                            32,
                            "easeOutQuint",
                            "${homemenu}",
                            '38.85%',
                            '38.6%'
                        ],
                        [
                            "eid187",
                            "top",
                            0,
                            533,
                            "linear",
                            "${bot_left}",
                            '60.92%',
                            '90.56%'
                        ],
                        [
                            "eid2173",
                            "right",
                            286,
                            12,
                            "easeInCirc",
                            "${tennis}",
                            '0.06%',
                            '0.19%'
                        ],
                        [
                            "eid2170",
                            "right",
                            482,
                            0,
                            "linear",
                            "${tennis}",
                            '0.19%',
                            '0.19%'
                        ],
                        [
                            "eid2296",
                            "left",
                            1020,
                            21,
                            "linear",
                            "${coordiCopy3}",
                            '-0.14%',
                            '-0.07%'
                        ],
                        [
                            "eid2334",
                            "background-color",
                            482,
                            0,
                            "linear",
                            "${lawn}",
                            'rgba(97,99,127,0.00)',
                            'rgba(97,99,127,0.00)'
                        ],
                        [
                            "eid777",
                            "opacity",
                            47,
                            13,
                            "easeInCubic",
                            "${parakram15}",
                            '1',
                            '0.17073170731707'
                        ],
                        [
                            "eid779",
                            "opacity",
                            184,
                            4,
                            "easeInCubic",
                            "${parakram15}",
                            '0.91869948610542',
                            '1'
                        ],
                        [
                            "eid2189",
                            "bottom",
                            308,
                            11,
                            "easeOutQuint",
                            "${gaming}",
                            '110.87%',
                            '64.8%'
                        ],
                        [
                            "eid207",
                            "left",
                            0,
                            105,
                            "linear",
                            "${Text2}",
                            '62.42%',
                            '86.52%'
                        ],
                        [
                            "eid177",
                            "left",
                            0,
                            533,
                            "linear",
                            "${bot_leftCopy}",
                            '75.76%',
                            '95.29%'
                        ],
                        [
                            "eid2275",
                            "left",
                            1020,
                            21,
                            "linear",
                            "${Rectangle7Copy3}",
                            '49.93%',
                            '0.13%'
                        ],
                        [
                            "eid2079",
                            "top",
                            1095,
                            18,
                            "linear",
                            "${anurag}",
                            '258.25%',
                            '74.74%'
                        ],
                        [
                            "eid1400",
                            "top",
                            441,
                            16,
                            "easeOutBounce",
                            "${LCopy2}",
                            '-10.86%',
                            '40.83%'
                        ],
                        [
                            "eid1397",
                            "top",
                            434,
                            16,
                            "easeOutBounce",
                            "${L}",
                            '-10.73%',
                            '40.56%'
                        ],
                        [
                            "eid1893",
                            "left",
                            929,
                            25,
                            "linear",
                            "${ismabout}",
                            '-51.57%',
                            '-0.04%'
                        ],
                        [
                            "eid185",
                            "left",
                            0,
                            533,
                            "linear",
                            "${bot_left}",
                            '21.55%',
                            '1.25%'
                        ],
                        [
                            "eid2193",
                            "opacity",
                            316,
                            10,
                            "easeOutElastic",
                            "${Football}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1404",
                            "top",
                            482,
                            34,
                            "easeOutBounce",
                            "${Text6}",
                            '131.69%',
                            '57.93%'
                        ],
                        [
                            "eid2228",
                            "left",
                            450,
                            0,
                            "linear",
                            "${L}",
                            '44.59%',
                            '44.59%'
                        ],
                        [
                            "eid1936",
                            "left",
                            990,
                            0,
                            "linear",
                            "${Rectangle11}",
                            '50.26%',
                            '50.26%'
                        ],
                        [
                            "eid442",
                            "left",
                            0,
                            533,
                            "linear",
                            "${Rectangle2}",
                            '10.23%',
                            '-20.7%'
                        ],
                        [
                            "eid1489",
                            "left",
                            734,
                            33,
                            "linear",
                            "${gallerypic7}",
                            '52.73%',
                            '52.92%'
                        ],
                        [
                            "eid1806",
                            "opacity",
                            140,
                            24,
                            "easeOutQuint",
                            "${gallerymenu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2210",
                            "top",
                            1110,
                            20,
                            "linear",
                            "${contacts}",
                            '87.19%',
                            '87.5%'
                        ],
                        [
                            "eid2128",
                            "bottom",
                            277,
                            13,
                            "easeInQuad",
                            "${volleyball}",
                            '47.95%',
                            '24.9%'
                        ],
                        [
                            "eid1796",
                            "opacity",
                            121,
                            32,
                            "easeOutQuint",
                            "${eventsmenu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2088",
                            "left",
                            1095,
                            18,
                            "linear",
                            "${abhiCopy}",
                            '45.67%',
                            '60.33%'
                        ],
                        [
                            "eid2060",
                            "top",
                            1049,
                            13,
                            "linear",
                            "${cordi1Copy3}",
                            '149.91%',
                            '40.03%'
                        ],
                        [
                            "eid1804",
                            "opacity",
                            121,
                            32,
                            "easeOutQuint",
                            "${about}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2080",
                            "opacity",
                            1095,
                            18,
                            "linear",
                            "${anurag}",
                            '0.008546999655663967',
                            '1'
                        ],
                        [
                            "eid2191",
                            "right",
                            308,
                            11,
                            "easeOutQuint",
                            "${gaming}",
                            '0.11%',
                            '0.11%'
                        ],
                        [
                            "eid2271",
                            "height",
                            1020,
                            21,
                            "linear",
                            "${Rectangle7Copy3}",
                            '3.16%',
                            '4.2%'
                        ],
                        [
                            "eid1801",
                            "left",
                            140,
                            24,
                            "easeOutQuint",
                            "${gallerymenu}",
                            '53.98%',
                            '47.03%'
                        ],
                        [
                            "eid2263",
                            "opacity",
                            1020,
                            21,
                            "linear",
                            "${cordi1Copy}",
                            '0.008130081300813',
                            '1'
                        ],
                        [
                            "eid1326",
                            "opacity",
                            285,
                            13,
                            "easeInQuad",
                            "${chess}",
                            '0',
                            '1'
                        ],
                        [
                            "eid428",
                            "top",
                            0,
                            533,
                            "linear",
                            "${top_left}",
                            '24.79%',
                            '1.47%'
                        ],
                        [
                            "eid1325",
                            "top",
                            285,
                            13,
                            "easeInQuad",
                            "${chess}",
                            '38.76%',
                            '61.81%'
                        ],
                        [
                            "eid2269",
                            "opacity",
                            1020,
                            21,
                            "linear",
                            "${coordiCopy3}",
                            '0.032520325203252',
                            '0.967896580696106'
                        ],
                        [
                            "eid1320",
                            "opacity",
                            277,
                            13,
                            "easeInQuad",
                            "${Cricket}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1836",
                            "top",
                            567,
                            66,
                            "linear",
                            "${left}",
                            '-5.11%',
                            '-1.87%'
                        ],
                        [
                            "eid1937",
                            "top",
                            990,
                            0,
                            "linear",
                            "${Rectangle11}",
                            '19.3%',
                            '19.3%'
                        ],
                        [
                            "eid1897",
                            "left",
                            917,
                            37,
                            "linear",
                            "${ismaboutCopy}",
                            '100.47%',
                            '50.93%'
                        ],
                        [
                            "eid1960",
                            "top",
                            929,
                            25,
                            "linear",
                            "${Text11Copy}",
                            '84.03%',
                            '66.06%'
                        ],
                        [
                            "eid180",
                            "top",
                            0,
                            533,
                            "linear",
                            "${bot_right}",
                            '61.13%',
                            '90.58%'
                        ],
                        [
                            "eid1412",
                            "clip",
                            482,
                            34,
                            "easeOutBounce",
                            "${Text6}",
                            [21.987104415893555,149,25,0],
                            [0.7585391402244568,149,25,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid2059",
                            "left",
                            1049,
                            13,
                            "linear",
                            "${cordi1Copy3}",
                            '46.74%',
                            '43.98%'
                        ],
                        [
                            "eid1487",
                            "top",
                            667,
                            67,
                            "linear",
                            "${_10}",
                            '79%',
                            '51%'
                        ],
                        [
                            "eid1492",
                            "top",
                            767,
                            55,
                            "easeOutQuad",
                            "${_10}",
                            '51%',
                            '75.19%'
                        ],
                        [
                            "eid1994",
                            "background-color",
                            167,
                            0,
                            "easeOutQuint",
                            "${fbCopy5}",
                            'rgba(41,82,44,1.00)',
                            'rgba(41,82,44,1.00)'
                        ],
                        [
                            "eid2261",
                            "top",
                            1020,
                            21,
                            "linear",
                            "${cordi1Copy}",
                            '237.55%',
                            '33.3%'
                        ],
                        [
                            "eid2048",
                            "left",
                            990,
                            18,
                            "linear",
                            "${Rectangle8}",
                            '0%',
                            '0.06%'
                        ],
                        [
                            "eid1395",
                            "top",
                            424,
                            17,
                            "easeOutBounce",
                            "${G}",
                            '-10.86%',
                            '40.69%'
                        ],
                        [
                            "eid2323",
                            "background-color",
                            482,
                            0,
                            "linear",
                            "${billiards}",
                            'rgba(97,99,127,0.00)',
                            'rgba(97,99,127,0.00)'
                        ],
                        [
                            "eid2190",
                            "opacity",
                            308,
                            11,
                            "easeOutQuint",
                            "${gaming}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2022",
                            "clip",
                            1031,
                            36,
                            "linear",
                            "${Text14}",
                            [0,139.9925537109375,1.6011261940002441,0],
                            [0,140.45700073242188,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid2311",
                            "top",
                            0,
                            68,
                            "easeInQuint",
                            "${scoll_down2}",
                            '85.66%',
                            '77.6%'
                        ],
                        [
                            "eid2281",
                            "top",
                            68,
                            14,
                            "linear",
                            "${scoll_down2}",
                            '77.6%',
                            '100.06%'
                        ],
                        [
                            "eid2081",
                            "left",
                            1095,
                            18,
                            "linear",
                            "${anurag}",
                            '44.2%',
                            '8.18%'
                        ],
                        [
                            "eid426",
                            "left",
                            0,
                            533,
                            "linear",
                            "${top_left}",
                            '21.64%',
                            '1.22%'
                        ],
                        [
                            "eid2316",
                            "left",
                            0,
                            0,
                            "linear",
                            "${main_bg2}",
                            '-0.02%',
                            '-0.02%'
                        ],
                        [
                            "eid1820",
                            "opacity",
                            140,
                            32,
                            "easeOutQuint",
                            "${twitter}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2194",
                            "left",
                            316,
                            10,
                            "easeOutElastic",
                            "${Football}",
                            '84.23%',
                            '84.1%'
                        ],
                        [
                            "eid2329",
                            "background-color",
                            482,
                            0,
                            "linear",
                            "${volleyball}",
                            'rgba(97,99,127,0.00)',
                            'rgba(97,99,127,0.00)'
                        ],
                        [
                            "eid1316",
                            "left",
                            277,
                            13,
                            "easeInQuad",
                            "${Cricket}",
                            '3.49%',
                            '3.36%'
                        ],
                        [
                            "eid1339",
                            "left",
                            308,
                            11,
                            "easeOutQuint",
                            "${badminton}",
                            '3.43%',
                            '3.3%'
                        ],
                        [
                            "eid2328",
                            "background-color",
                            482,
                            0,
                            "linear",
                            "${basketballCopy}",
                            'rgba(97,99,127,0.00)',
                            'rgba(97,99,127,0.00)'
                        ],
                        [
                            "eid1399",
                            "top",
                            451,
                            16,
                            "easeOutBounce",
                            "${E}",
                            '-10.86%',
                            '40.69%'
                        ],
                        [
                            "eid1329",
                            "opacity",
                            286,
                            12,
                            "easeInCirc",
                            "${boxing}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2326",
                            "background-color",
                            482,
                            0,
                            "linear",
                            "${athletics}",
                            'rgba(97,99,127,0.00)',
                            'rgba(97,99,127,0.00)'
                        ],
                        [
                            "eid1328",
                            "top",
                            286,
                            12,
                            "easeInCirc",
                            "${boxing}",
                            '30.7%',
                            '53.75%'
                        ],
                        [
                            "eid1817",
                            "opacity",
                            132,
                            32,
                            "easeOutQuint",
                            "${fb}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1812",
                            "left",
                            121,
                            32,
                            "easeOutQuint",
                            "${homemenu}",
                            '15.75%',
                            '8.8%'
                        ],
                        [
                            "eid1904",
                            "opacity",
                            929,
                            25,
                            "easeOutBounce",
                            "${Text11Copy}",
                            '0.05982905982906',
                            '1'
                        ],
                        [
                            "eid1793",
                            "left",
                            121,
                            32,
                            "easeOutQuint",
                            "${about}",
                            '40.55%',
                            '33.6%'
                        ],
                        [
                            "eid1330",
                            "left",
                            286,
                            12,
                            "easeInCirc",
                            "${boxing}",
                            '3.49%',
                            '3.36%'
                        ],
                        [
                            "eid1311",
                            "top",
                            267,
                            40,
                            "easeOutBack",
                            "${eventinfo}",
                            '100.63%',
                            '-7.43%'
                        ],
                        [
                            "eid1746",
                            "top",
                            307,
                            15,
                            "easeOutBack",
                            "${eventinfo}",
                            '-7.43%',
                            '-10.36%'
                        ],
                        [
                            "eid2037",
                            "opacity",
                            1049,
                            13,
                            "linear",
                            "${cordi1}",
                            '0.008546999655663967',
                            '1'
                        ],
                        [
                            "eid2056",
                            "left",
                            1049,
                            13,
                            "linear",
                            "${cordi1Copy2}",
                            '46.71%',
                            '78.04%'
                        ],
                        [
                            "eid2336",
                            "background-color",
                            482,
                            0,
                            "linear",
                            "${Football}",
                            'rgba(105,107,131,0.00)',
                            'rgba(105,107,131,0.00)'
                        ],
                        [
                            "eid1862",
                            "height",
                            911,
                            43,
                            "linear",
                            "${Rectangle11}",
                            '0%',
                            '80.09%'
                        ],
                        [
                            "eid1934",
                            "height",
                            954,
                            36,
                            "linear",
                            "${Rectangle11}",
                            '80.09%',
                            '82%'
                        ],
                        [
                            "eid1332",
                            "opacity",
                            297,
                            14,
                            "easeOutQuart",
                            "${billiards}",
                            '0',
                            '1'
                        ],
                        [
                            "eid653",
                            "background-color",
                            0,
                            223,
                            "linear",
                            "${Events}",
                            'rgba(0,0,0,1.00)',
                            'rgba(71,74,108,1)'
                        ],
                        [
                            "eid2196",
                            "left",
                            633,
                            67,
                            "easeOutBounce",
                            "${gallerypic3}",
                            '-43.06%',
                            '4.3%'
                        ],
                        [
                            "eid2066",
                            "height",
                            1049,
                            13,
                            "linear",
                            "${Rectangle7}",
                            '0.85%',
                            '6.16%'
                        ],
                        [
                            "eid1318",
                            "top",
                            277,
                            13,
                            "easeInQuad",
                            "${Cricket}",
                            '46.26%',
                            '69.31%'
                        ]
                    ]
                }
            },
            "scoll_down": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['26.6%', '9.7%', '46.9%', '36.3%', 'auto', 'auto'],
                            id: 'right3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right3.svg', '0px', '0px']
                        },
                        {
                            rect: ['26.6%', '28.5%', '46.9%', '36.3%', 'auto', 'auto'],
                            id: 'right3Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right3.svg', '0px', '0px']
                        },
                        {
                            rect: ['26.5%', '46.6%', '46.9%', '36.3%', 'auto', 'auto'],
                            id: 'right3Copy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '113px', '113px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid2307",
                            "opacity",
                            249,
                            498,
                            "easeInQuint",
                            "${right3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2309",
                            "opacity",
                            500,
                            500,
                            "easeInQuint",
                            "${right3Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2304",
                            "opacity",
                            0,
                            500,
                            "easeInQuint",
                            "${right3}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "eventslide": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '79px', '1000px', 'auto', 'auto'],
                            id: 'eventslide',
                            type: 'image',
                            clip: 'rect(0px 79px 64px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/eventslide3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '6.2%', '17.4%']
                        }
                    }
                },
                timeline: {
                    duration: 65000,
                    autoPlay: true,
                    data: [
                        [
                            "eid2282",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${eventslide}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1984",
                            "top",
                            10000,
                            5000,
                            "easeOutExpo",
                            "${eventslide}",
                            '-140px',
                            '-140px'
                        ],
                        [
                            "eid1985",
                            "top",
                            15000,
                            5000,
                            "easeOutExpo",
                            "${eventslide}",
                            '-140px',
                            '-208px'
                        ],
                        [
                            "eid1986",
                            "top",
                            20000,
                            5000,
                            "easeOutExpo",
                            "${eventslide}",
                            '-208px',
                            '-287px'
                        ],
                        [
                            "eid1987",
                            "top",
                            25000,
                            5000,
                            "easeOutExpo",
                            "${eventslide}",
                            '-287px',
                            '-366px'
                        ],
                        [
                            "eid1988",
                            "top",
                            30000,
                            5000,
                            "easeOutExpo",
                            "${eventslide}",
                            '-366px',
                            '-582px'
                        ],
                        [
                            "eid1989",
                            "top",
                            35000,
                            10000,
                            "easeOutExpo",
                            "${eventslide}",
                            '-582px',
                            '-659px'
                        ],
                        [
                            "eid1990",
                            "top",
                            45000,
                            5000,
                            "easeOutExpo",
                            "${eventslide}",
                            '-659px',
                            '-723px'
                        ],
                        [
                            "eid1991",
                            "top",
                            50000,
                            5000,
                            "easeOutExpo",
                            "${eventslide}",
                            '-723px',
                            '-784px'
                        ],
                        [
                            "eid1992",
                            "top",
                            55000,
                            4775,
                            "easeOutExpo",
                            "${eventslide}",
                            '-784px',
                            '-867px'
                        ],
                        [
                            "eid1993",
                            "top",
                            59775,
                            5225,
                            "easeOutExpo",
                            "${eventslide}",
                            '-867px',
                            '-952px'
                        ],
                        [
                            "eid1969",
                            "clip",
                            0,
                            5000,
                            "linear",
                            "${eventslide}",
                            [0,79,64,0],
                            [0,79,65.33349609375,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1972",
                            "clip",
                            10000,
                            5000,
                            "easeOutExpo",
                            "${eventslide}",
                            [58.666748046875,79,146.666748046875,0],
                            [141.33349609375,79,220,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1973",
                            "clip",
                            15000,
                            5000,
                            "easeOutExpo",
                            "${eventslide}",
                            [141.33349609375,79,220,0],
                            [209.33349609375,79,285.33349609375,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1974",
                            "clip",
                            20000,
                            5000,
                            "easeOutExpo",
                            "${eventslide}",
                            [209.33349609375,79,285.33349609375,0],
                            [288,79,374.6669921875,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1975",
                            "clip",
                            25000,
                            5000,
                            "easeOutExpo",
                            "${eventslide}",
                            [288,79,374.6669921875,0],
                            [364,79,442.6669921875,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1976",
                            "clip",
                            30000,
                            5000,
                            "easeOutExpo",
                            "${eventslide}",
                            [364,79,442.6669921875,0],
                            [581.33349609375,79,668.000244140625,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1977",
                            "clip",
                            40000,
                            5000,
                            "easeOutExpo",
                            "${eventslide}",
                            [581.33349609375,79,668.000244140625,0],
                            [658.6669921875,79,725.333740234375,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1978",
                            "clip",
                            45000,
                            5000,
                            "easeOutExpo",
                            "${eventslide}",
                            [658.6669921875,79,725.333740234375,0],
                            [722.6669921875,79,788.000732421875,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1979",
                            "clip",
                            50000,
                            5000,
                            "easeOutExpo",
                            "${eventslide}",
                            [722.6669921875,79,788.000732421875,0],
                            [786.6669921875,79,873.333740234375,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1980",
                            "clip",
                            55000,
                            4775,
                            "easeOutExpo",
                            "${eventslide}",
                            [786.6669921875,79,873.333740234375,0],
                            [868,79,950.666748046875,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1981",
                            "clip",
                            59775,
                            5225,
                            "easeOutExpo",
                            "${eventslide}",
                            [868,79,950.666748046875,0],
                            [952,79,1002.666748046875,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "eventcontent": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0%', '0.1%', '99.9%', '100.6%', 'auto', 'auto'],
                            id: 'tab',
                            stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '690px', '324px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Loading": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-3.7%', '0.5%', 'auto', 'auto', 'auto', 'auto'],
                            font: ['arvo, serif', [40, 'px'], 'rgba(1,168,192,1)', '400', 'none solid rgb(1, 168, 192)', 'normal', 'break-word', 'nowrap'],
                            opacity: '1',
                            id: 'Text9',
                            text: '{SELECT AN EVENT TO LOAD}',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '79%', '19.8%']
                        }
                    }
                },
                timeline: {
                    duration: 100,
                    autoPlay: false,
                    data: [
                        [
                            "eid2345",
                            "opacity",
                            0,
                            100,
                            "linear",
                            "${Text9}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "shooting": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['4.06% 25%', '0% 0%', '0% 0%', '4.06% 25%'],
                            id: 'alert',
                            stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                            cursor: 'pointer',
                            rect: ['84.9%', '0.1%', '100.2%', '96.7%', 'auto', 'auto'],
                            transform: [[], [], [], ['1', '1.01017']],
                            clip: 'rect(0px 23px 32px 0px)',
                            fill: ['rgba(99,69,138,1.00)'],
                            c: [
                            {
                                rect: ['7%', '-3.6%', '99.6%', '100%', 'auto', 'auto'],
                                transform: [[], [], [], ['0.85878']],
                                id: 'Rectangle9',
                                stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(136,96,188,1.00)']
                            },
                            {
                                rect: ['-60px', '-8px', 'auto', 'auto', 'auto', 'auto'],
                                transform: [[], [], [], ['0.40268', '0.47826']],
                                font: ['germania-one, sans-serif', [40, 'px'], 'rgba(6,209,247,1)', '400', 'none solid rgb(6, 209, 247)', 'normal', 'break-word', 'nowrap'],
                                id: 'Text17',
                                text: 'Shooting Workshop',
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '20%', '7.9%']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid2355",
                            "left",
                            0,
                            500,
                            "linear",
                            "${alert}",
                            '84.87%',
                            '0%'
                        ],
                        [
                            "eid2351",
                            "clip",
                            0,
                            500,
                            "linear",
                            "${alert}",
                            [0,23,32,0],
                            [0,152,32,-1.140625],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid2353",
                            "top",
                            0,
                            500,
                            "linear",
                            "${alert}",
                            '1.7%',
                            '0.15%'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-807759015");
