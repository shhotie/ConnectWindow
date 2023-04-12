<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<table style="background-color: lightgrey; margin: auto">
				<caption>Available Products</caption>
				<tr>
						<td>${requestScope.user.id}</td>
						<td>${requestScope.user.firstName}</td>
						<td>${requestScope.user.lastName}</td>
						<td>${requestScope.user.email}</td>
						<td>${requestScope.user.password}</td>
						<td>${requestScope.user.dob}</td>
				</tr>
			</table>
</body>
</html>