//Send array of objects from servlet to JSP
if (request.getParameter("todo").equals("show_article_list")) {
         try {
             Article[] articles = this.getArticleList();

             request.setAttribute("articles", articles);
            RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("article/article_list.jsp");
            dispatcher.forward(request, response);
         } catch (Exception e) {
         }
     }

    public Article[] getArticleList() throws Exception {
    db data = new db();
    Connection con = data.OpenConnection();

    PreparedStatement statement = con.prepareStatement("SELECT * FROM `article`");
    ResultSet result = statement.executeQuery();


    int size = 0;  
    if (result != null)   
    {  
        if (result.last()) {
            size = result.getRow();
            result.beforeFirst();
        }
    }  

    Article[] articles = new Article[size];
    int i = 0;
    while(result.next()){
        articles[i] = new Article (
                result.getInt(1),
                result.getString(2),
                result.getString(3),
                result.getString(4));
        i++;        
    }

    return articles;
  }
	
public class Article {
public Integer getId(){return id;}

public String getTitle(){return title;}
public void setTitle(String title){this.title = title;}

public String getText(){return text;}
public void set(String text){this.text = text;}

public String getDescription(){return description;}
public void setDescription(String description){this.description= description;}

private Integer id;
private String title;
private String text;
private String description;

public Article(Integer Id, String Title, String Text, String Description)
{
    id = Id;
    title = Title;
    text = Text;
    description = Description;
}
}
	
request.getAttribute("articles");
	
Article[] articles = (Article[]) request.getAttribute("articles");
	
<%@ page import="yourpackage.Article"%>
	
public class Article {
    private int id;
    private String title;

    public Article(int id, String title) {
        this.id = id;
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

}
	
public class TestServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Article[] articles =
                new Article[] {new Article(1, "Article one"), new Article(2, "Article two")};
        request.setAttribute("articles", articles);

        RequestDispatcher dispatcher = request.getRequestDispatcher("/index.jsp");
        dispatcher.forward(request, response);
    }

}
	
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
  <c:forEach items="${articles}" var="article">
    <c:out value="${article.id} ${article.title}"/><br />
  </c:forEach>
</body>
</html>
	
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

    1 Article one<br />

    2 Article two<br />

</body>
</html>