import { promises as fs } from 'fs';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const loadJson = async (path: string) => {
  const buffer = await fs.readFile(path);
  return JSON.parse(buffer.toString());
};

export const saveJson = async (path: string, data: any) => {
  const json = JSON.stringify(data);
  await fs.writeFile(path, json);
};  
