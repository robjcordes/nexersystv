//	HYPE.documents["00bigoffer"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "00bigoffer_Resources";
	var documentName = "00bigoffer";
	var documentLoaderFilename = "00bigoffer_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_100 == "undefined") {
		if(typeof window.HYPE_100_DocumentsToLoad == "undefined") {
			window.HYPE_100_DocumentsToLoad = new Array();
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=100';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var hypeDoc = new HYPE_100();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",aS:"i",d:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aZ:"i",A:"c",Y:"i",aL:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"3":{c:445,d:267,I:"Solid",J:"Solid",K:"Solid",g:"#FFFFFF",L:"Solid",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:1,C:"#A0A0A0",z:"2",P:1,D:"#A0A0A0",a:477,b:16},"4":{aV:8,w:"<div><b style=\"font-size: 12px;\">To take advantage of Nexersys financing follow these simply steps.</b></div><div><font class=\"Apple-style-span\" face=\"Arial, Helvetica, sans-serif\"><br></font></div><div><font class=\"Apple-style-span\" face=\"Arial, Helvetica, sans-serif\">1. Click on the \u201cApply for Financing\u201d button below.</font></div><div><font class=\"Apple-style-span\" face=\"Arial, Helvetica, sans-serif\">2. You will be taken to a new tab in your browser where you will fill out the application&nbsp;</font></div><div><font class=\"Apple-style-span\" face=\"Arial, Helvetica, sans-serif\">&nbsp; &nbsp; &nbsp;on Helpcard Credit\u2019s secure website.</font></div><div><font class=\"Apple-style-span\" face=\"Arial, Helvetica, sans-serif\">3. You should request a credit amount of $3000. The website will then walk you through&nbsp;</font></div><div><font class=\"Apple-style-span\" face=\"Arial, Helvetica, sans-serif\">&nbsp; &nbsp; &nbsp;the form to collect your information. Hit submit once the application is complete.</font></div><div><font class=\"Apple-style-span\" face=\"Arial, Helvetica, sans-serif\">4. If a decision is pending or if you receive approval, you will be given a 7-digit&nbsp;</font></div><div><font class=\"Apple-style-span\" face=\"Arial, Helvetica, sans-serif\">&nbsp; &nbsp; reference number \u2013 write it down.</font></div><div><font class=\"Apple-style-span\" face=\"Arial, Helvetica, sans-serif\">5. Within 1.5 minutes, you should receive a credit decision. If you do not receive a&nbsp;</font></div><div><font class=\"Apple-style-span\" face=\"Arial, Helvetica, sans-serif\">&nbsp; &nbsp; decision in 1.5 minutes, a link to check the status will be emailed to you.</font></div><div><font class=\"Apple-style-span\" face=\"Arial, Helvetica, sans-serif\">6. Your approval status will also be emailed to you.</font></div><div><font class=\"Apple-style-span\" face=\"Arial, Helvetica, sans-serif\">7. Once approved, use the 7-digit reference number you wrote down to purchase your&nbsp;</font></div><div><font class=\"Apple-style-span\" face=\"Arial, Helvetica, sans-serif\">&nbsp; &nbsp; Nexersys. Click Buy Now to enter the shopping cart, add your Nexersys, any&nbsp;</font></div><div><font class=\"Apple-style-span\" face=\"Arial, Helvetica, sans-serif\">&nbsp; &nbsp; accessories you would like to purchase and your shipping method.</font></div><div><font class=\"Apple-style-span\" face=\"Arial, Helvetica, sans-serif\">8. When you check out, select \u201cFinancing\u201d as your method of payment and enter your&nbsp;</font></div><div><font class=\"Apple-style-span\" face=\"Arial, Helvetica, sans-serif\">&nbsp; &nbsp; 7-digit reference number in the blank for \u201cReference Number\u201d.</font></div><div><font class=\"Apple-style-span\" face=\"Arial, Helvetica, sans-serif\">9. Congratulations, your order is complete!</font></div>",x:"visible",a:482,Z:"break-word",y:"preserve",aS:8,r:"inline",z:"3",k:"div",j:"absolute",aT:8,d:239,t:11,c:421,b:25,G:"#000000",aU:8,v:"normal"},"2":{o:"content-box",h:"00offer-large.png",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",aA:{type:5,goToURL:"https://application.hcmerchantservices.com/?m=EFq6P1j6P4NiCKSo5yiruQ==",openInNewWindow:true},k:"div",z:"1",d:378,c:940,aP:"pointer"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
	var javascripts = [];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("00bigoffer_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

