
export interface InvitationData {
  name: string;
  age?: string;
  date: string;
  time: string;
  location: string;
  style: string;
}

export interface DecorIdea {
  photoZone: string;
  hallDecor: string;
  colors: string[];
}

export enum AppSection {
  Home = 'home',
  OfficialInvites = 'official',
  DigitalInvites = 'digital',
  DecorDesign = 'decor'
}
