import http.client

conn = http.client.HTTPSConnection("api.meethue.com") 
#payload = "{\"on\":true, \"bri\":75, \"xy\":[0.1,0.1]}"
payload = "{\"alert\":\"lselect\"}"

headers = {
    'Authorization': "Bearer 4SIqVigeH28KNTJ9zB4dKOcDyA3B",
    'Content-Type': "application/json",
    'Cache-Control': "no-cache",
    'Postman-Token': "b0d71b7c-86f0-47f4-aa40-7236fc35cf9b"
}

conn.request("PUT", "/bridge/0/groups/0/action", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))

