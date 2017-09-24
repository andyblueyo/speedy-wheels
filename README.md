
# speedy-wheels
## Running this Website
On your local machine run `npm install` and `npm start`
## Data
### Input
```
{
age: provdied
mobility: provided
origin_as_street: provided
origin_lat: generated
origin_long: generated
destination_as_street: provided
destination_lat: generated
destination_long: generated
}
```
### Output
```
[
{
service_name: "service1"
requirements: [age: 65]
area: area1
phone: "800-111-6666"
operator: "king county bus"
},
{
service_name: "service2"
requirements: [age: 75]
area: area2
phone: "800-222-6666"
operator: "senior bus"
}
]
```
