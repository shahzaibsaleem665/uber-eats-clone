import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import './AddressSearch.css'
import { useHistory } from 'react-router-dom';

const AddressSearch = () => {
  const [address, setAddress] = useState('');
  const history = useHistory();

  const handleSelect = async (selectedAddress) => {
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);
      console.log('Selected Address:', selectedAddress);
      console.log('Coordinates:', latLng);
      setAddress(selectedAddress);
      history.push(`/feed?address=${encodeURIComponent(selectedAddress)}`);

    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const handleInputChange = (newAddress) => {
    setAddress(newAddress);
  }; 

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className='inputField'>
            <input
              {...getInputProps({
                placeholder: 'Enter Delivery address',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className, onClick: () => handleSelect(suggestion.description)
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default AddressSearch;
