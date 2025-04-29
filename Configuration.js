function getConfiguration(config) 
{ 
	config.addressLabel = {en: "DevEUI", es: "DevEUI"};
}

function getEndpoints(deviceAddress, endpoints)
{
  endpoints.addEndpoint("1", "Humidity sensor", endpointType.humiditySensor);
  endpoints.addEndpoint("2", "Temperature sensor", endpointType.temperatureSensor);
  endpoints.addEndpoint("3", "CO₂ sensor", endpointType.ppmConcentrationSensor, ppmConcentrationSensorSubType.carbonDioxide);
  endpoints.addEndpoint("4", "Presence sensor", endpointType.iasSensor, iasEndpointSubType.presenceSensor);
  endpoints.addEndpoint("5", "Illumination sensor", endpointType.lightSensor);
  endpoints.addEndpoint("6", "TVOC sensor", endpointType.ppmConcentrationSensor, ppmConcentrationSensorSubType.voc);
  endpoints.addEndpoint("7", "Barometric Pressure", endpointType.pressureSensor);
  endpoints.addEndpoint("8", "AQI", endpointType.airQualityIndexSensor);

}

function validateDeviceAddress(address, result)
{
  if (address.length != 16) {
    result.ok = false;
    result.errorMessage = {
      en: "The address must be 16 characters long.", 
      es: "La dirección debe tener exactamente 16 caracteres."
    };
  }
}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = false;
}