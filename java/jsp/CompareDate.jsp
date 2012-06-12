<%@ page language="java" import="java.util.*" %>
<%
  java.util.Date date1=new java.util.Date("05/21/2009");
  java.util.Date date2=new java.util.Date("05/21/2009");
%>
<html>
  <head>
    <title>How to compare date in java</title>
  </head>
  <body>
  <%
   out.println("date1 :"+date1);
   out.print("<br>");
   out.println("date2 :"+date2);
   out.print("<br>");
   out.println(date1.compareTo(date2));
   
   if(date1.compareTo(date2)<0)
   {
       // return -1 if date1 is less than date2
       out.println("<br>1. Date1 is less than date2");  
   }
   else if(date1.compareTo(date2)>0)
   {
       // return 1 if date1 is greater than date2
       out.println("<br>1. Date1 is greater than date2");  
   }
   else
   {
       // return 0 if date1 is equal to date2
       out.println("<br>1. Date1 is equal to date2");  
   }
   
   /// other ways to comparing date
   if(date1.after(date2))
   {
       //  if date1 is greater than date2
       out.println("<br>2. Date1 is greater than date2");
   }
   else if(date1.before(date2))
   {
       // if date1 is less than date2
       out.println("<br>2. Date1 is less than date2");   
   }
   else if(date1.equals(date2))
   {
       // if date1 is equal to date2
       out.println("<br>2. Date1 is equal to date2");  
   }
  %>
  </body>
</html>