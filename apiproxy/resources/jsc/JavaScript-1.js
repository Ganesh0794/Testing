var response=JSON.parse(context.getVariable("calloutResponse.content"))
context.setVariable("access_token",response.access_token)