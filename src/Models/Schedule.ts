export interface Schedule {
  scheduleId: number;
  flightName: string;
  seatCapacity: number;
  startLocation: string;
  destination: string;
  travelDate: string;
  arrivalTime: string;
  departureTime: string;
  fare: number;
}
