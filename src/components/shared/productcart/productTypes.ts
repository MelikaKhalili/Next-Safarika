export interface Service {
  name: string;
  status: boolean;
}

export interface RoomInformation {
  Room: string;
  Bed: string;
}

export interface Comment {
  Commentator: string;
  Opinion: string;
}

export interface Est {
  Return: string;
}

export interface ProductProps {
  id: string;
  createdAt: string;
  Image: string[];
  TourName: string;
  Los: string;
  Pres: string;
  Quantity: string;
  Price: string;
  Star: string;
  Moveday: string;
  Status: string;
  Tourleader: string;
  TourleaderImage: string;
  classTour: string;
  Tripduration: string;
  StartTravel: string;
  Origin: string;
  Destination: string;
  AccomType: string;
  Transportation: string;
  Agegroup: string;
  People: string;
  Difficulty: string;
  DifficultyDiscription: string;
  Category: string;
  Airline: string;
  startTravelDataTime: string;
  startTravelTime: string;
  EndTravelDataTime: string;
  EndTravelTime: string;
  Est: Est;
  Travelattractions: string;
  DayOne: string;
  DayTwo: string;
  DayThree: string;
  DayFour: string;
  Tourservices: string;
  Services: Service[];
  Residencename: string;
  ResidenceAbout: string;
  RoomInformation: RoomInformation[];
  ResidenceImage: string[];
  Facilities: string[];
  Essentials: string[];
  TripbeforInformation: Record<string, string>[];
  Conditions: string;
  CancleRulesTour: string;
  Comments: Comment[];
}
