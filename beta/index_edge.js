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
                                rect: ['7.7%', '24.3%', '84.6%', '52.9%', 'auto', 'auto'],
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
                                    rect: ['0.8%', '2.3%', '97.6%', '97.7%', 'auto', 'auto'],
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
                                    rect: ['1.2%', '5.5%', '97.5%', '94.5%', 'auto', 'auto'],
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
                                rect: ['0%', '52.4%', '100%', '0.6%', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'L',
                                type: 'text',
                                rect: ['44.5%', '41.9%', 'auto', 'auto', 'auto', 'auto'],
                                text: "L<br>",
                                align: "center",
                                font: ['germania-one, sans-serif', [24, "px"], "rgba(84,89,148,1)", "600", "none solid rgb(84, 89, 148)", "normal", "break-word", "nowrap"],
                                transform: [[],[],[],['8.52941','7.5619']]
                            },
                            {
                                id: 'LCopy2',
                                type: 'text',
                                rect: ['73.3%', '41.8%', 'auto', 'auto', 'auto', 'auto'],
                                text: "R",
                                align: "center",
                                font: ['germania-one, sans-serif', [24, "px"], "rgba(84,89,148,1)", "600", "none solid rgb(84, 89, 148)", "normal", "break-word", "nowrap"],
                                transform: [[],[],[],['8.52941','7.5619']]
                            },
                            {
                                id: 'E',
                                type: 'text',
                                rect: ['61.8%', '-10.9%', 'auto', 'auto', 'auto', 'auto'],
                                text: "E",
                                align: "center",
                                font: ['germania-one, sans-serif', [24, "px"], "rgba(84,89,148,1)", "600", "none solid rgb(84, 89, 148)", "normal", "break-word", "nowrap"],
                                transform: [[],[],[],['8.52941','7.5619']]
                            },
                            {
                                id: 'LCopy3',
                                type: 'text',
                                rect: ['82.7%', '-9.5%', 'auto', 'auto', 'auto', 'auto'],
                                text: "Y<br>",
                                align: "center",
                                font: ['germania-one, sans-serif', [24, "px"], "rgba(84,89,148,1)", "600", "none solid rgb(84, 89, 148)", "normal", "break-word", "nowrap"],
                                transform: [[],[],[],['8.52941','7.5619'],['47.3369%','53.7267%']]
                            },
                            {
                                id: 'LCopy',
                                type: 'text',
                                rect: ['52.9%', '-10.7%', 'auto', 'auto', 'auto', 'auto'],
                                text: "L<br>",
                                align: "center",
                                font: ['germania-one, sans-serif', [24, "px"], "rgba(84,89,148,1)", "600", "none solid rgb(84, 89, 148)", "normal", "break-word", "nowrap"],
                                transform: [[],[],[],['8.52941','7.5619']]
                            },
                            {
                                id: 'A',
                                type: 'text',
                                rect: ['35.5%', '-10.9%', 'auto', 'auto', 'auto', 'auto'],
                                text: "A",
                                align: "center",
                                font: ['germania-one, sans-serif', [24, "px"], "rgba(84,89,148,1)", "600", "none solid rgb(84, 89, 148)", "normal", "break-word", "nowrap"],
                                transform: [[],[],[],['8.52941','7.5619']]
                            },
                            {
                                id: 'G',
                                type: 'text',
                                rect: ['24.6%', '-10.9%', 'auto', 'auto', 'auto', 'auto'],
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
                                    text: "loacte",
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
                                    fill: ["rgba(0,0,0,0)",im+"gallerypic1.jpg",'0px','0px'],
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
                                    rect: ['121px', '49px', 'undefined', 'undefined', 'auto', 'auto']
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
                                    borderRadius: ["15px", "15px", "15px", "15px 15px"],
                                    fill: ["rgba(87,90,88,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","solid"],
                                    c: [
                                    {
                                        id: 'tab',
                                        type: 'rect',
                                        rect: ['4.8%', '9.5%', '90.7%', '77.8%', 'auto', 'auto'],
                                        fill: ["rgba(0,0,0,1.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","solid"]
                                    },
                                    {
                                        id: 'Text9',
                                        type: 'text',
                                        rect: ['25.3%', '38.6%', 'auto', 'auto', 'auto', 'auto'],
                                        text: "{ COMING SOON }",
                                        align: "left",
                                        font: ['arvo, serif', [40, "px"], "rgba(1,168,192,1)", "400", "none solid rgb(1, 168, 192)", "normal", "break-word", "nowrap"]
                                    }]
                                }]
                            },
                            {
                                id: 'tennis',
                                type: 'rect',
                                rect: ['auto', 'auto', '15.6%', '5.6%', '0.2%', '40.5%'],
                                cursor: 'pointer',
                                opacity: '0.80487804878049',
                                fill: ["rgba(97,99,127,0.25)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
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
                                fill: ["rgba(97,99,127,0.25)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                transform: [[],[],[],['0.7464','0.86776']],
                                c: [
                                {
                                    id: 'wushuCopy19',
                                    type: 'text',
                                    rect: ['3%', '0%', '96.5%', '104.9%', 'auto', 'auto'],
                                    opacity: '1',
                                    text: "Swimming",
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
                                fill: ["rgba(97,99,127,0.25)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
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
                                fill: ["rgba(97,99,127,0.25)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
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
                                fill: ["rgba(97,99,127,0.25)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                transform: [[],[],[],['0.7464','0.86776']],
                                c: [
                                {
                                    id: 'wushuCopy29',
                                    type: 'text',
                                    rect: ['auto', 'auto', '203px', '43px', '-1px', '0px'],
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
                                fill: ["rgba(97,99,127,0.25)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
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
                                fill: ["rgba(97,99,127,0.25)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
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
                                fill: ["rgba(97,99,127,0.25)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
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
                                fill: ["rgba(97,99,127,0.25)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                transform: [[],[],[],['0.7464','0.86776']],
                                c: [
                                {
                                    id: 'wushuCopy26',
                                    type: 'text',
                                    rect: ['-1.2%', '-7.9%', '103.5%', '107.5%', 'auto', 'auto'],
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
                                fill: ["rgba(97,99,127,0.25)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
                                transform: [[],[],[],['0.7464','0.86776']],
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
                                fill: ["rgba(97,99,127,0.25)"],
                                stroke: [0,"rgba(255,255,255,1.00)","dotted"],
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
                                fill: ["rgba(97,99,127,0.25)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
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
                                fill: ["rgba(97,99,127,0.25)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
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
                                fill: ["rgba(97,99,127,0.25)"],
                                stroke: [0,"rgba(255,255,255,1.00)","solid"],
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
                                fill: ["rgba(0,0,0,0)",im+"main_bg.jpg",'0px','0px']
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
                                rect: ['32%', '300.6%', '42.4%', '11.5%', 'auto', 'auto'],
                                opacity: '0.17073170731707',
                                fill: ["rgba(0,0,0,0)",im+"parakram15.png",'0px','0px']
                            },
                            {
                                id: 'scoll_down2',
                                symbolName: 'scoll_down',
                                type: 'rect',
                                rect: ['45.6%', '77.6%', '113', '113', 'auto', 'auto'],
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
                                fill: ["rgba(0,0,0,0)",im+"gallerypic1.jpg",'0px','0px'],
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
                                fill: ["rgba(0,0,0,0)",im+"gallerypic2.jpg",'0px','0px'],
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
                                fill: ["rgba(0,0,0,0)",im+"10.jpg",'0px','0px']
                            },
                            {
                                id: 'gallerypic7',
                                type: 'image',
                                rect: ['52.7%', '51.7%', '38.8%', '21.2%', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"gallerypic7.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'gallerypic3',
                                type: 'image',
                                rect: ['-43.1%', '23.7%', '47.3%', '29.3%', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"gallerypic3.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                                transform: [[],[],[],['0.82','0.72444']]
                            },
                            {
                                id: 'gallerypic4',
                                type: 'image',
                                rect: ['72.1%', '23.7%', '40.2%', '29.3%', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"gallerypic4.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                                transform: [[],[],[],['0.96499','0.72444']]
                            },
                            {
                                id: 'gallerypic5',
                                type: 'image',
                                rect: ['8.7%', '79.3%', '38.8%', '21.2%', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"gallerypic5.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'gallerypic6',
                                type: 'image',
                                rect: ['52.7%', '79.1%', '38.8%', '21.2%', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"gallerypic6.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            }]
                        },
                        {
                            id: 'contacts',
                            type: 'rect',
                            rect: ['0%', '87.5%', '100%', '13.3%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(9,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "contactsclass",
                            c: [
                            {
                                id: 'sponsorsdiv',
                                type: 'rect',
                                rect: ['0%', '81.7%', '100%', '17.6%', 'auto', 'auto'],
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
                                rect: ['0%', '17.5%', '99.9%', '12.4%', 'auto', 'auto'],
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
                                    align: "left",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'cordi1Copy2',
                                    type: 'text',
                                    rect: ['78%', '38.5%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0.0085470085470086',
                                    text: "Shivashish Kumar<br>+91-7277088340",
                                    align: "left",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'cordi1Copy3',
                                    type: 'text',
                                    rect: ['46.8%', '38.4%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0.0085470085470086',
                                    text: "Saurabh Tripathi<br>+91-7277088340",
                                    align: "left",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'coordi',
                                    type: 'text',
                                    rect: ['47.3%', '-5.3%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "Co-ordinator",
                                    align: "left",
                                    font: ['arvo, serif', [30, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                }]
                            },
                            {
                                id: 'technical',
                                type: 'group',
                                rect: ['0%', '61.9%', '99.9%', '12.4%', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Rectangle7Copy2',
                                    type: 'rect',
                                    rect: ['0.3%', '27.7%', '2%', '6.2%', 'auto', 'auto'],
                                    overflow: 'hidden',
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'cordi1Copy9',
                                    type: 'text',
                                    rect: ['46.3%', '158.5%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0.034188034188034',
                                    text: "Shivashish Kumar<br>+91-7277088340",
                                    align: "left",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'cordi1Copy8',
                                    type: 'text',
                                    rect: ['20.8%', '37.9%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0.034188034188034',
                                    text: "Saurabh Tripathi<br>+91-7277088340",
                                    align: "left",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'coordiCopy2',
                                    type: 'text',
                                    rect: ['44.3%', '168.8%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0.0085470085470085',
                                    text: "Technical Head",
                                    align: "left",
                                    font: ['arvo, serif', [30, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                }]
                            },
                            {
                                id: 'coordigroupCopy',
                                type: 'group',
                                rect: ['0.3%', '36.8%', '100.2%', '12.4%', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Rectangle7Copy',
                                    type: 'rect',
                                    rect: ['-0.3%', '64.3%', '100%', '6.2%', 'auto', 'auto'],
                                    overflow: 'hidden',
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'anurag',
                                    type: 'text',
                                    rect: ['8%', '71%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0.0085470085470086',
                                    text: "Anurag Amrit<br>+91-7654737309",
                                    align: "left",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'rite',
                                    type: 'text',
                                    rect: ['77.5%', '69.8%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0.0085470085470086',
                                    text: "Ritesh Kumar<br>+91-8674807325",
                                    align: "left",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'abhi',
                                    type: 'text',
                                    rect: ['27.9%', '70.6%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0.0085470085470086',
                                    text: "Abhishek Singh<br>+91-9006747680",
                                    align: "left",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'abhiCopy',
                                    type: 'text',
                                    rect: ['60.3%', '69.9%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0.034188034188034',
                                    text: "Rishikesh Ranjan<br>+91-7209172787",
                                    align: "left",
                                    font: ['cuprum, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                },
                                {
                                    id: 'coordiCopy',
                                    type: 'text',
                                    rect: ['45.4%', '32.6%', 'auto', 'auto', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "Co-coordinator",
                                    align: "left",
                                    font: ['arvo, serif', [30, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '799.8%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1133,
                    autoPlay: false,
                    labels: {
                        "menuend": 144
                    },
                    data: [
                        [
                            "eid2031",
                            "left",
                            1008,
                            18,
                            "linear",
                            "${coordi}",
                            '46.68%',
                            '47.3%'
                        ],
                        [
                            "eid2218",
                            "left",
                            1026,
                            107,
                            "linear",
                            "${coordi}",
                            '46.68%',
                            '45.59%'
                        ],
                        [
                            "eid2072",
                            "left",
                            1054,
                            17,
                            "linear",
                            "${coordiCopy}",
                            '43.46%',
                            '45.44%'
                        ],
                        [
                            "eid2096",
                            "left",
                            1071,
                            11,
                            "linear",
                            "${coordiCopy}",
                            '45.44%',
                            '44.89%'
                        ],
                        [
                            "eid1946",
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
                            1106,
                            27,
                            "linear",
                            "${cordi1Copy8}",
                            '158.91%',
                            '37.86%'
                        ],
                        [
                            "eid1401",
                            "top",
                            450,
                            24,
                            "easeOutBounce",
                            "${LCopy3}",
                            '-9.48%',
                            '43.19%'
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
                            "eid2092",
                            "opacity",
                            1067,
                            31,
                            "linear",
                            "${abhiCopy}",
                            '0.034188034188034',
                            '1'
                        ],
                        [
                            "eid2074",
                            "opacity",
                            1067,
                            31,
                            "linear",
                            "${abhi}",
                            '0.008547008968889713',
                            '1'
                        ],
                        [
                            "eid2084",
                            "width",
                            1078,
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
                            1000,
                            31,
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
                            "eid2081",
                            "left",
                            1067,
                            31,
                            "linear",
                            "${anurag}",
                            '44.2%',
                            '7.95%'
                        ],
                        [
                            "eid2045",
                            "width",
                            1018,
                            18,
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
                            '41.81%'
                        ],
                        [
                            "eid2075",
                            "left",
                            1067,
                            31,
                            "linear",
                            "${abhi}",
                            '44.5%',
                            '27.86%'
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
                            "eid2061",
                            "opacity",
                            1000,
                            31,
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
                            1000,
                            31,
                            "linear",
                            "${cordi1Copy2}",
                            '0.008547008968889713',
                            '1'
                        ],
                        [
                            "eid2046",
                            "left",
                            1018,
                            18,
                            "linear",
                            "${Rectangle7}",
                            '51.48%',
                            '0%'
                        ],
                        [
                            "eid2100",
                            "left",
                            1078,
                            15,
                            "linear",
                            "${coordiCopy2}",
                            '45.36%',
                            '44.25%'
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
                            "eid2078",
                            "opacity",
                            1067,
                            31,
                            "linear",
                            "${rite}",
                            '0.008547008968889713',
                            '1'
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
                            1106,
                            27,
                            "linear",
                            "${cordi1Copy8}",
                            '0.034188034188034',
                            '1'
                        ],
                        [
                            "eid2073",
                            "top",
                            1067,
                            31,
                            "linear",
                            "${abhi}",
                            '258.95%',
                            '70.61%'
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
                            1067,
                            31,
                            "linear",
                            "${rite}",
                            '199.16%',
                            '69.84%'
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
                            "eid2198",
                            "opacity",
                            1078,
                            13,
                            "linear",
                            "${coordiCopy2}",
                            '0.008547008968889713',
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
                            "eid2029",
                            "top",
                            1008,
                            18,
                            "linear",
                            "${coordi}",
                            '117.12%',
                            '-5.3%'
                        ],
                        [
                            "eid2219",
                            "top",
                            1026,
                            107,
                            "linear",
                            "${coordi}",
                            '117.12%',
                            '116.91%'
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
                            "eid2215",
                            "left",
                            1133,
                            0,
                            "linear",
                            "${contacts}",
                            '0%',
                            '0%'
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
                            "eid2070",
                            "top",
                            1054,
                            17,
                            "linear",
                            "${coordiCopy}",
                            '188.74%',
                            '32.62%'
                        ],
                        [
                            "eid2097",
                            "top",
                            1071,
                            11,
                            "linear",
                            "${coordiCopy}",
                            '32.62%',
                            '25.76%'
                        ],
                        [
                            "eid2071",
                            "opacity",
                            1054,
                            17,
                            "linear",
                            "${coordiCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid218",
                            "top",
                            49,
                            228,
                            "linear",
                            "${parakram15}",
                            '40.83%',
                            '266.8%'
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
                            "eid2106",
                            "left",
                            1106,
                            27,
                            "linear",
                            "${cordi1Copy8}",
                            '46.88%',
                            '20.76%'
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
                            "eid2076",
                            "left",
                            1067,
                            31,
                            "linear",
                            "${rite}",
                            '43.99%',
                            '77.48%'
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
                            "eid2056",
                            "left",
                            1000,
                            31,
                            "linear",
                            "${cordi1Copy2}",
                            '46.71%',
                            '78.04%'
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
                            "eid2090",
                            "top",
                            1067,
                            31,
                            "linear",
                            "${abhiCopy}",
                            '273.06%',
                            '69.9%'
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
                            "eid1398",
                            "top",
                            450,
                            17,
                            "easeOutBounce",
                            "${LCopy}",
                            '-10.73%',
                            '41.94%'
                        ],
                        [
                            "eid2082",
                            "height",
                            1078,
                            20,
                            "linear",
                            "${Rectangle7Copy}",
                            '0.85%',
                            '6.16%'
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
                            1000,
                            31,
                            "linear",
                            "${cordi1}",
                            '149.77%',
                            '41.02%'
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
                            "eid2057",
                            "top",
                            1000,
                            31,
                            "linear",
                            "${cordi1Copy2}",
                            '150.09%',
                            '38.52%'
                        ],
                        [
                            "eid2102",
                            "top",
                            1078,
                            15,
                            "linear",
                            "${coordiCopy2}",
                            '165.26%',
                            '168.75%'
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
                            "eid1706",
                            "top",
                            0,
                            121,
                            "linear",
                            "${main_bg2}",
                            '0.01%',
                            '21.25%'
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
                            "eid2033",
                            "opacity",
                            1008,
                            18,
                            "linear",
                            "${coordi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2116",
                            "opacity",
                            1106,
                            27,
                            "linear",
                            "${cordi1Copy9}",
                            '0.034188034188034',
                            '1'
                        ],
                        [
                            "eid2201",
                            "height",
                            1113,
                            20,
                            "linear",
                            "${Rectangle7Copy2}",
                            '0.85%',
                            '6.16%'
                        ],
                        [
                            "eid777",
                            "opacity",
                            105,
                            16,
                            "linear",
                            "${parakram15}",
                            '1',
                            '0.17073170731707'
                        ],
                        [
                            "eid779",
                            "opacity",
                            268,
                            5,
                            "linear",
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
                            "eid2079",
                            "top",
                            1067,
                            31,
                            "linear",
                            "${anurag}",
                            '258.25%',
                            '71.02%'
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
                            "eid1397",
                            "top",
                            434,
                            16,
                            "easeOutBounce",
                            "${L}",
                            '-10.73%',
                            '41.94%'
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
                            "eid2203",
                            "width",
                            1113,
                            20,
                            "linear",
                            "${Rectangle7Copy2}",
                            '1.95%',
                            '100%'
                        ],
                        [
                            "eid2095",
                            "font-size",
                            1082,
                            0,
                            "linear",
                            "${coordiCopy}",
                            '30px',
                            '30px'
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
                            "eid655",
                            "border-width",
                            0,
                            338,
                            "linear",
                            "${Events}",
                            '0px',
                            '2px'
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
                            "eid1395",
                            "top",
                            424,
                            17,
                            "easeOutBounce",
                            "${G}",
                            '-10.86%',
                            '41.81%'
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
                            1113,
                            20,
                            "linear",
                            "${contacts}",
                            '86.92%',
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
                            1067,
                            31,
                            "linear",
                            "${abhiCopy}",
                            '45.67%',
                            '60.33%'
                        ],
                        [
                            "eid2060",
                            "top",
                            1000,
                            31,
                            "linear",
                            "${cordi1Copy3}",
                            '149.91%',
                            '38.36%'
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
                            1067,
                            31,
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
                            "eid2112",
                            "left",
                            1106,
                            27,
                            "linear",
                            "${cordi1Copy9}",
                            '46.33%',
                            '73.78%'
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
                            "eid2059",
                            "left",
                            1000,
                            31,
                            "linear",
                            "${cordi1Copy3}",
                            '46.74%',
                            '46.78%'
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
                            "eid2114",
                            "top",
                            1106,
                            27,
                            "linear",
                            "${cordi1Copy9}",
                            '158.5%',
                            '39.87%'
                        ],
                        [
                            "eid1948",
                            "left",
                            0,
                            0,
                            "linear",
                            "${main_bg2}",
                            '-0.02%',
                            '-0.02%'
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
                            "eid2204",
                            "top",
                            1133,
                            0,
                            "linear",
                            "${Rectangle7Copy2}",
                            '27.7%',
                            '27.7%'
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
                            "eid1399",
                            "top",
                            451,
                            16,
                            "easeOutBounce",
                            "${E}",
                            '-10.86%',
                            '41.81%'
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
                            "eid1400",
                            "top",
                            441,
                            16,
                            "easeOutBounce",
                            "${LCopy2}",
                            '-10.86%',
                            '41.81%'
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
                            "eid2202",
                            "left",
                            1113,
                            20,
                            "linear",
                            "${Rectangle7Copy2}",
                            '100.54%',
                            '0.25%'
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
                            "eid2037",
                            "opacity",
                            1000,
                            31,
                            "linear",
                            "${cordi1}",
                            '0.008546999655663967',
                            '1'
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
                            "eid2083",
                            "left",
                            1078,
                            20,
                            "linear",
                            "${Rectangle7Copy}",
                            '49.39%',
                            '-0.33%'
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
                            "eid2066",
                            "height",
                            1018,
                            18,
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
                            rect: ['0%', '0%', '98.3%', '98.1%', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'scoll_down',
                            opacity: '0',
                            type: 'ellipse',
                            fill: ['rgba(46,51,98,0.00)']
                        },
                        {
                            transform: [[], ['90'], [], ['2.76189', '2.66503']],
                            id: 'Text14',
                            opacity: '0',
                            rect: ['48.1%', '42.2%', 'auto', 'auto', 'auto', 'auto'],
                            align: 'center',
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            text: '&gt;',
                            type: 'text'
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
                            "eid1726",
                            "opacity",
                            0,
                            1000,
                            "easeInQuint",
                            "${scoll_down}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1725",
                            "opacity",
                            0,
                            1000,
                            "easeInQuint",
                            "${Text14}",
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
                            rect: [null, null, '6.2%', '17.4%']
                        }
                    }
                },
                timeline: {
                    duration: 65000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1983",
                            "top",
                            5000,
                            5000,
                            "linear",
                            "${eventslide}",
                            '0px',
                            '-59px'
                        ],
                        [
                            "eid1984",
                            "top",
                            10000,
                            5000,
                            "linear",
                            "${eventslide}",
                            '-59px',
                            '-140px'
                        ],
                        [
                            "eid1985",
                            "top",
                            15000,
                            5000,
                            "linear",
                            "${eventslide}",
                            '-140px',
                            '-208px'
                        ],
                        [
                            "eid1986",
                            "top",
                            20000,
                            5000,
                            "linear",
                            "${eventslide}",
                            '-208px',
                            '-287px'
                        ],
                        [
                            "eid1987",
                            "top",
                            25000,
                            5000,
                            "linear",
                            "${eventslide}",
                            '-287px',
                            '-366px'
                        ],
                        [
                            "eid1988",
                            "top",
                            30000,
                            5000,
                            "linear",
                            "${eventslide}",
                            '-366px',
                            '-582px'
                        ],
                        [
                            "eid1989",
                            "top",
                            35000,
                            10000,
                            "linear",
                            "${eventslide}",
                            '-582px',
                            '-659px'
                        ],
                        [
                            "eid1990",
                            "top",
                            45000,
                            5000,
                            "linear",
                            "${eventslide}",
                            '-659px',
                            '-723px'
                        ],
                        [
                            "eid1991",
                            "top",
                            50000,
                            5000,
                            "linear",
                            "${eventslide}",
                            '-723px',
                            '-784px'
                        ],
                        [
                            "eid1992",
                            "top",
                            55000,
                            4775,
                            "linear",
                            "${eventslide}",
                            '-784px',
                            '-867px'
                        ],
                        [
                            "eid1993",
                            "top",
                            59775,
                            5225,
                            "linear",
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
                            "eid1971",
                            "clip",
                            5000,
                            5000,
                            "linear",
                            "${eventslide}",
                            [0,79,65.33349609375,0],
                            [58.666748046875,79,146.666748046875,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1972",
                            "clip",
                            10000,
                            5000,
                            "linear",
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
                            "linear",
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
                            "linear",
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
                            "linear",
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
                            "linear",
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
                            "linear",
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
                            "linear",
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
                            "linear",
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
                            "linear",
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
                            "linear",
                            "${eventslide}",
                            [868,79,950.666748046875,0],
                            [952,79,1002.666748046875,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-807759015");
