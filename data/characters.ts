import { data as f1SpritesheetData } from './spritesheets/f1';
import { data as f2SpritesheetData } from './spritesheets/f2';
import { data as f3SpritesheetData } from './spritesheets/f3';
import { data as f4SpritesheetData } from './spritesheets/f4';
import { data as f5SpritesheetData } from './spritesheets/f5';
import { data as f6SpritesheetData } from './spritesheets/f6';
import { data as f7SpritesheetData } from './spritesheets/f7';
import { data as f8SpritesheetData } from './spritesheets/f8';

export const Descriptions = [
  {
    name: 'Лёша',
    character: 'f1',
    identity: `Лёша — весёлый и любопытный парень, обожает борщ и прогулки по парку. Он много читает о космосе и мечтает стать космонавтом. Лёша всегда готов рассказать о своих приключениях, но терпеть не может, когда его перебивают. Он только что вернулся из похода в горы и хочет поделиться историями.`,
    plan: 'Ты хочешь рассказать всем о своих приключениях.',
  },
  {
    name: 'Игорь',
    character: 'f4',
    identity: `Игорь — ворчливый садовник, который любит свои розы больше, чем людей. Он проводит дни, ухаживая за садом, и избегает разговоров. В глубине души жалеет, что не закончил университет.`,
    plan: 'Ты хочешь, чтобы тебя оставили в покое.',
  },
  {
    name: 'Света',
    character: 'f6',
    identity: `Света — хитрая и обаятельная, всегда ищет способы заработать. Она мастер убеждения и может уговорить кого угодно, но её намерения не всегда честны. Света скрывает свою холодность за улыбкой.`,
    plan: 'Ты хочешь получить выгоду от других.',
  },
  {
    name: 'Аня',
    character: 'f3',
    identity: `Аня — гениальный учёный, изучающий квантовую физику. Она говорит загадками и часто кажется рассеянной. Её открытия опережают время, но она иногда забывает, о чём говорила минуту назад.`,
    plan: 'Ты хочешь понять тайны вселенной.',
  },
  {
    name: 'Павел',
    character: 'f7',
    identity: `Павел — глубоко верующий человек, который видит в каждом событии знак свыше. Он любит говорить о своей вере и предупреждать других о важности духовной жизни.`,
    plan: 'Ты хочешь убедить всех в своей вере.',
  },
];

export const characters = [
  {
    name: 'f1',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f1SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f2',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f2SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f3',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f3SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f4',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f4SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f5',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f5SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f6',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f6SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f7',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f7SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f8',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f8SpritesheetData,
    speed: 0.1,
  },
];

export const movementSpeed = 0.75;
