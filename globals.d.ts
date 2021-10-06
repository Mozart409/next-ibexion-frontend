type SendGpxData = {
  GPXDaten: string
  Fahrergewicht: number
  Bikegewicht: number
  Fahrerleistung: number
  Bikeleistung: number
}

type ResponseGpxData = {
  Fahrtdauer: Date
  Energiebedarf: number
  BilddatenFahrtdauer: []
  BilddatenEnergiebedarf: []
}
