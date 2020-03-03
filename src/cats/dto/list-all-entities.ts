import { CreateCatDto } from "./create-cat.dto";

export class ListAllEntities {
    cats: CreateCatDto[];
    limit: number;
}