<%@ page language="java" %>
<%@ page import="org.w3c.dom.*" %>
<%@ page import="javax.xml.parsers.DocumentBuilder" %>
<%@ page import="javax.xml.parsers.DocumentBuilderFactory" %>
<%
    DocumentBuilderFactory dbf=DocumentBuilderFactory.newInstance();
    DocumentBuilder db =dbf.newDocumentBuilder();
    Document doc=db.parse("c:\\books.xml");
    
    
    NodeList nl = doc.getElementsByTagName("book");
    
%>
<html>
<head>
<title>How to read XML file in JAVA</title>
</head>
<body>
<%

for(int i=0;i<nl.getLength();i++)
{
  NodeList nameNlc=    doc.getElementsByTagName("name");
  Element nameElements=(Element)nameNlc.item(i);
  String nameTagValue=nameElements.getChildNodes().item(0).getNodeValue();
  
  
  NodeList authorNlc=    doc.getElementsByTagName("author");
  Element authorElements=(Element)authorNlc.item(i);
  String authorTagValue=authorElements.getChildNodes().item(0).getNodeValue();
  
  NodeList dateNlc=    doc.getElementsByTagName("publication-date");
  Element dateElements=(Element)dateNlc.item(i);
  String dateTagValue=dateElements.getChildNodes().item(0).getNodeValue();
  
  out.println("name :"+nameTagValue+"<br>");    
  out.println("author :"+authorTagValue+"<br>");    
  out.println("publication-date :"+dateTagValue+"<br><br>");    
}

%>

</body>
</html>