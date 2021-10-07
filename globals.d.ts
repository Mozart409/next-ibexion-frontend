type SendGpxData = {
  gPXDaten: unknown
  fahrergewicht: number
  bikegewicht: number
  fahrerleistung: number
  bikeleistung: number
}

type ResponseGpxData = {
  Fahrtdauer: Date
  Energiebedarf: number
  BilddatenFahrtdauer: []
  BilddatenEnergiebedarf: []
}
