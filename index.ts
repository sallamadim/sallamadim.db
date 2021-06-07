declare module "sallamadim.db" {
export class Database {
constructor(file?: string)
private file: string
public set(data: string, value: any): void
public fetch(data: string): any;
public get(data: string): any;
public add(data: string, value: number): void;
public substr(data: string, value: number): void;
public has(data: string): boolean;
public clearDatabase(): void;
public fetchAll(): object;
public push(array: string, value: any): void;
public unpush(array: string, value: any): void;
public delete(array: string, index: number | string): void;
}
}