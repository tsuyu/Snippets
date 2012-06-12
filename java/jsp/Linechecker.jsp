<%@ page language="java"  import="java.net.*"%>
<html>
<head>
<title>Link checker in java and get link status code</title>
</head>
<body>
<%

    int code=0;
    
    try{
        URL url = new URL("http://easywayserver.com/");

        HttpURLConnection link=(HttpURLConnection)url.openConnection();
        code=link.getResponseCode();
    }
    catch(BindException e)
    {
        code=1;
        e.printStackTrace();
    }
    catch(ConnectException e)
    {
        code=2;
        e.printStackTrace();
    }
    catch(HttpRetryException e)
    {
        code=3;
        e.printStackTrace();
    }
    catch(MalformedURLException e)
    {
        code=4;
        e.printStackTrace();
    }
    catch(NoRouteToHostException e)
    {
        code=5;
        e.printStackTrace();
    }
    catch(PortUnreachableException e)
    {
        code=6;
        e.printStackTrace();
    }
    catch(ProtocolException e)
    {
        code=7;
        e.printStackTrace();
    }
    catch(SocketException e)
    {
        code=8;
        e.printStackTrace();
    }
    catch(SocketTimeoutException e)
    {
        code=9;
        e.printStackTrace();
    }
    catch(UnknownHostException e)
    {
        code=10;
        e.printStackTrace();
    }
    catch(UnknownServiceException e)
    {
        code=11;
        e.printStackTrace();
    }
    
    
out.println("Code ....................."+code);

%>

</body>
</html>