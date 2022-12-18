var characters = 
{
  "default":{
    "poses":{
    },
    "name":"ตัวเลือก"
  },

  "alice":{
    "poses":{
      "default":"img/1Donut.png",
      "happy":"img/1Donut.png"
    },
    "name":"Donut(โดนัท)"
  },

  "bobby":{
    "poses":{
      "default":"img/2Ako.png",
      "happy":"img/1Ako.png",
	  "haha":"img/Ako7.png"
    },
    "name":"Ako(อาโกะ)"
  }
  
}; 
 var places = 
{
	"street" : {
		"name":"The street",
    	"image":"img/st.png"
    },
	"dead":{
		"name":"The dead",
		"image":"img/deadse.jpg"
	}
}; 

 var story = 
[
	{
		"title": "Start",
		"tags": "",
		"body": "<<place street>>\n{{bobby,happy}} 1<b>1</b>\n{{bobby}} บทพูด 1 \n{{bobby}} บทพูด2 ?\n[[ตอบ1.|explanation]]\n[[ตอบ2.|awkward_pause]]",
		"position": {
			"x": 615,
			"y": 109
		},
		"colorID": 0
	},
	{	
		"title": "awkward_pause",
		"tags": "",
		"body": "{{bobby}} บท2\n//This is awkward. Why did you say no?\n1\n{{bobby}} 2\n[[3]]\n[[...So, about that secret ending?|secret]] <<random 5>>\n{{bobby}} บ.4\n[[ได้|explanation]]\n[[ไม่ เริ่มลูป|awkward_pause]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},
	{
		"title": "explanation",
		"tags": "",
		"body": "{{bobby}} บท1.\n{{bobby}} 11\n{{bobby}}22?\n[[ต.1|you_lier]]\n[[ต.2|go_read_it]]\n[[ต.3|i_know_right]]",
		"position": {
			"x": 615,
			"y": 540
		},
		"colorID": 0
	},
	{
		"title": "i_know_right",
		"tags": "",
		"body": "{{bobby,happy}} 3.1\n//Well, I care. But yeah, the doc sucks for now. Sorry.\n[[{{bobby}} 3.2|thanks_bobby]]",
		"position": {
			"x": 856,
			"y": 887
		},
		"colorID": 0
	},
	{
		"title": "you_lier",
		"tags": "",
		"body": "<<string liedToBobby true>>\n{{bobby}} ต่อจาก1 \n{{bobby,happy}} ต่อจาก1.1\n[[{{bobby}} ต่ออีกที|thanks_bobby]]",
		"position": {
			"x": 374,
			"y": 890
		},
		"colorID": 0
	},
	{
		"title": "go_read_it",
		"tags": "",
		"body": "{{bobby,happy}} 2.1\n{{bobby}} 2.1\n{{bobby}} 2.2\n{{bobby}} 2.3\n[[{{bobby,happy}} 2.4 ต่อไปกับ อีกที|thanks_bobby]]",
		"position": {
			"x": 611,
			"y": 887
		},
		"colorID": 0
	},
	{
		"title": "thanks_bobby",
		"tags": "",
		"body": "{{bobby}} ต่ออีกที\n{{bobby,happy}} ต่ออีกที\n{{alice}} ตัวละคร2 พูด\n{{bobby,happy}} ทักทาย\n{{alice}} ตอบกลับ\n[[{{bobby}} 1111122\n]] <<string liedToBobby == true>>\n{{alice,happy}} ตอบตอบ\n[[{{bobby,happy}} จบละ|end]]",
		"position": {
			"x": 606,
			"y": 1272
		},
		"colorID": 0
	},
	{
		"title": "secret",
		"tags": "",
		"body": "[[{{bobby,happy}} ฉากลับ |end]]",
		"position": {
			"x": 1210,
			"y": 1279
		},
		"colorID": 0
	}
	
];

