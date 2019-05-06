/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
        address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
	{
	  module: 'internet-monitor',
            position: 'top_center',
            header: 'Internet Monitor',
            config:{
                type: '',
                maxTime: 20000,
                updateInterval: 0,
                verbose: false,
                displayStrength: true,
                displaySpeed: true,
                strengthIconSize: 80,
                maxGaugeScale: 100,
		wifiSymbol:{
                    size: 50,
                    fullColor: '#3afc25',
                    almostColor: '#ffff0c',
                    halfColor: '#ff8c00',
	            noneColor: '#ff1111'
		},
            },
	},
                      {
                        module: "MMM-soccer",
                        position: "top_left",
                        config: {
                                api_key: "e353fb53195b43b1a574d8f829f35d13",
                                show: 'ENGLAND',
                                logos:true,
				 leagues: {
                                   ENGLAND: 'PL',
                                          },
                                  }
                       },

		{
		module: "MMM-Snow",
		position: "fullscreen_above",
		config: { // See 'Configuration options' for more information.
			flakeCount: 100,
			theme: "love"			
		}
	},

                {
			module: "currentweather",
			position: "top_right",
			header: "    오늘의 날씨",
			config: {
				location: "Seoul",
				locationID: "1835847",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "f167f10ed5044b1a287054c8ccfb6730",
                                
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "날씨",
			config: {
				location: "Anyang",
				locationID: "1835847",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "f167f10ed5044b1a287054c8ccfb6730"
			}
		},
	            
              
                    {
                  module: "MMM-Modulebar",                  // main icon module
                  position: "top_right", 

                   config: {
                   showBorder:false,
                   direction:"column",
                   buttons: {
                   
                                   
                     "1": {             //youtube icon
	                  module: "MMM-Modulebar1",
                          text: "",   
                          img:"https://png.pngtree.com/element_origin_min_pic/16/10/05/1057f46865db089.jpg",
                          width:"50",
                          height:"50",             
                          },
                     "2": {              //webtoon icon
	                  module: "MMM-iFrame",                      
                          text: "",   
                          img:"https://apprecs.org/gp/images/app-icons/300/ec/com.nhn.android.webtoon.jpg",
                          width:"50",
                          height:"50",             
                          },

                             },
                           }
                    },
  


                       {
	               module: "MMM-Globe",                 // photo
	               position: "center",
	               config: {
		                 style: 'geoColor',
		                 imageSize: 300,
		                 ownImagePath:'http://rammb.cira.colostate.edu/ramsdis/online/images/thumb/himawari-8/full_disk_ahi_natural_color.jpg',
		                 updateInterval: 10*60*1000
	                       }
                       },     


 

		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
                        config : {
                        display:"none",
			 
		}

                        
		},

		{
			module: "compliments",
			position: "lower_third"
		},

		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "사회 , 경제  ",
						url: "http://media.daum.net/rss/part/primary/entertain/rss2.xml" 
					},
					{
						title: "스포츠  ",
						url: "http://media.daum.net/rss/today/primary/sports/rss2.xml" 
					},
					{
						title: "연예  ",
						url: "http://api.sbs.co.kr/xml/news/rss.jsp?pmDiv=entertainment" 
					},
					{
						title: "IT , 과학  ",
						url: "http://media.daum.net/rss/part/primary/digital/rss2.xml" 
					},
				],
				showSourceTitle: true,
				showPublishDate: false


			}
		},

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
