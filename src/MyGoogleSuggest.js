import React from 'react'
import $ from 'jquery'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class SimpleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: 'San Francisco, CA' }
  }
onChange =(address) => {
this.setState({ address });
geocodeByAddress(this.state.address)
  .then(results => getLatLng(results[0]))
  .then(latLng => {
    console.log("firing");
    this.setState({ lat: latLng.lat , long: latLng.lng })
    console.log(this.state);
  })
  .catch(error => console.error('Error', error));
  this.props.onChange(this.state);

}

  // processRequest = () => {
  //   const lat = 47.559440;
  //   const long = -122.363188;
  //
  //   const tempPoint = {
  //     type: 'Point',
  //     coordinates: [
  //       long,
  //       lat
  //     ]
  //   };

    // return this.getResponse(lat, long);
  // }

  // getResponse = (lat, long) => {
  //   let constructed_url = "https://data.kingcounty.gov/resource/xhy5-rgaa.json?$where=intersects(the_geom, 'POINT ("
  //   constructed_url += long.toString()
  //   constructed_url += " "
  //   constructed_url += lat.toString()
  //   constructed_url += ")')"
  //
  //   $.ajax({
  //     //https://data.seattle.gov/resource/n99g-k8uj.json?$where=intersects(the_geom,%20%27POINT%20(-122.4218242%2047.662893)%27)
  //     url: constructed_url,
  //     type: "GET",
  //     data: {
  //       "$limit" : 5000,
  //       "$$app_token" : "ZblfCkOVREKx1lb1pdaqTTYud"
  //     }
  //   }).done(function(data) {
  //     console.log(data);
  //     //console.log("eva: data" ,data);
  //   });
  // }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <form>
        <PlacesAutocomplete inputProps={inputProps} />
      </form>
    )
  }
}

export default SimpleForm
