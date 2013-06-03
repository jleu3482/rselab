function GetSiteSearchResults(newWindow,frameObject,frameObjectName,fontFace,fontSize,fontColour,linkFace,linkSize,linkColour,resultsText)
{
var sTerms="";
var iDepth = 0;
var sURL = new String(window.location.href);
if (sURL.indexOf("?") > 0)
{
var arrParams = sURL.split("?");
var arrURLParams = arrParams[1].split("&");
for (var i=0;i<arrURLParams.length;i++)
{
var sParam = arrURLParams[i].split("=");
var sValue = unescape(sParam[1]);
if( sParam[0] == frameObjectName)
	sTerms = sValue;
if( sParam[0] == "depth")
	iDepth = parseInt(sValue);
}
}
var d=frameObject.document;
if (sTerms=="") {d.open(); d.write("<html><head></head><body style=\"background: transparent;\"></body></html>"); d.close();return;}
var sBack=""; for (i=0; i<iDepth; i++) sBack+='..\\\\';
d.open();
d.write("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">");
d.write("<html lang=\"en\">");
d.write("<head>");
d.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">");
d.write("</head>");
d.write("<body style=\"margin: 0px 0px 0px 0px; font-family: "+fontFace+"; font-size: "+fontSize+"; color: "+fontColour+"; background: transparent;\">");
d.write("<div id=\"wpSearchResults\"></div>");
d.write("<script type=\"text/javascript\">");
d.write("var wordMap = new Array(\" rolling stock engineering laboratories what think cannot labs technical where train inventions crazy ideas come from most enthusiastic engineers hong kong just ready their hands dirty advanced electronics production grade mechanical technologies project jan→feb take instance vibration measurement system which clocks speeds 168mhz measuring axis using true state-of-the-art nanotech mems sensor everything done pure real time writing data card mega bytes seconds mapped fat32 file it's exciting achievement that's thats months worth small battery powered device design vision wifi bluetooth devices development right mar→ want smaller lower power able more currently developing miniature designs with help shenzhen manufactures fabricate layer pcbs components addition have successfully made first kalman filter means ability predict position based accelerometer measurements keep touch free email projects that leap doing around highly skilled nurbs modeling simulation microcontroller programming arduino international market research \",\" rolling stock engineering laboratories about labs first started work improvement exercise changing vibration data logging done know it's tedious after conducting large amount research discovered that tools learnt much more than just measurement study advanced micrcontrollers such stm32 high speed prototyping arduino enable develop safety monitoring devices quite nicely vision supported strong ecosystem near depots which provide necessary place test things live next shenzhen great convenient manufacturing 	the corporation shining reputation help innovations consultancy projects future 	management supports innovation least some support team consists mechanical engineers from equip with microelectronics design simulation knowledge delve into electro-mechanical passion john leung chip guru andy pang sharp passionate about arduino \",\" rolling stock engineering laboratories portfolio \",\" rolling stock engineering laboratories contact info contribute this site questions please email leung john pang andy stock phone contact 2993 3978 \",\" \");");
d.write("var pageMap = new Array(\"Home\",\"About\",\"Portfolio\",\"Contact\",\"Search Results\");");
d.write("var linkMap = new Array(\"index.html\",\"about.html\",\"portfolio.html\",\"contact.html\",\"page5.html\");");
d.write("var preMap = new Array(\"Rolling  STOck Engineering LAboratories do what  you think you cannot do RSE Labs is the technical hub where train inventions and crazy ideas come from   We got the most enthusiastic engineers in Hong\",\"Rolling  STOck Engineering LAboratories About RSE Labs first started as a work improvement exercise for changing the way vibration data logging is done  As we all know it's tedious    After conducting\",\"Rolling  STOck Engineering LAboratories Portfolio \",\"Rolling  STOck Engineering LAboratories Contact Got any info to contribute to this site or any questions - Please email  Leung John   Pang Andy  We are at 10 F HQ T ESD Rolling Stock Engineering  Our \",\"\");");
d.write("function doNav(ind)");
d.write("{");
if (newWindow)
d.write("		 window.open(\""+sBack+"\"+linkMap[ind],\"_blank\");");
else
d.write("		 parent.window.location.href=linkMap[ind];");
d.write("}");
d.write("function wpDoSearch(searchTerms){");
d.write("var terms = searchTerms.split(\" \");");
d.write("if (terms==\"\") return;");
d.write("var results = \"\";");
d.write("var resultscount = 0;");
d.write("for (var i=0; i<wordMap.length; i++)");
d.write("{");
d.write("			var found=true;");
d.write("			for (var j=0; j<terms.length; j++)");
d.write("					if (wordMap[i].indexOf(terms[j].toLowerCase())==-1) found=false;");
d.write("			if (found)");
d.write("			{");
d.write("				 results+=\"<a style=\\\"cursor: pointer; font-family: "+linkFace+"; font-size: "+linkSize+"; color: "+linkColour+"; \\\" onclick=\\\"doNav(\"+i+\");\\\"><u>\"+pageMap[i]+\"</u></a><br>\"+preMap[i]+\"...<br><br>\";");
d.write("				 resultscount++;");
d.write("			}");
d.write("}");
d.write("document.getElementById(\"wpSearchResults\").innerHTML=resultscount+\" "+resultsText+" \"+searchTerms+\"<br><br>\"+results;");
d.write("}");
while(sTerms.indexOf("\"") != -1 ) {
sTerms = sTerms.replace("\"","");
};
d.write("wpDoSearch(\""+sTerms+"\");");
d.write("</script>");
d.write("</body></html>");
d.close();
}