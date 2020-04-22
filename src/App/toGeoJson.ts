type Geometry = {
  type: string;
  coordinates: number[]
}

type featureProperties = {
  [key: string]: string;
}

type Feature = {
  type: string;
  geometry: Geometry;
  properties: featureProperties
}

type itemObject = {
  [key: string]: any;
}

type GeoJSON = {
  type: string;
  features: Feature[]
}

const toGeoJson = (data: object[]) => {
  const geojson = {
    type: "FeatureCollection",
    features: []
  } as GeoJSON

  for (let i = 0; i < data.length; i++) {
    const item = data[i] as itemObject

    if (!item['経度'] || !item['緯度'] || !item['店名']) {
      return;
    }

    const feature = {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [Number(item['経度']), Number(item['緯度'])]
      },
      properties: {}
    } as Feature

    for (let i = 0; i < Object.keys(item).length; i++) {
      const key = Object.keys(item)[i]
      feature.properties[key] = item[key]
    }

    geojson.features.push(feature)
  }

  console.log(geojson)

  return geojson
}

export default toGeoJson;