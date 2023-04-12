<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add New Category</title>
</head>
<body>
	
	<form method="post">
		<table style="background-color: lightgrey; margin: auto">
			<tr>
				<td>Enter User First Name</td>
				<td><input type="text" name="firstName"  /></td>
			</tr>
				<tr>
				<td>Enter User Last Name</td>
				<td><input type="text" name="lastName"/></td>
			</tr>
			<tr>
				<td>Enter Your Email</td>
				<td><input type="email" name="email" /></td>
			</tr>
			<tr>
				<td>Enter Your Password</td>
				<td><input type="password" name="password" /></td>
			</tr>
			<tr>
				<td><input type="submit" value="Sign up" /></td>
			</tr>
		</table>
	</form>
</body>
</html>