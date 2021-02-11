import { RelationshipDetailInterface } from './relationship-detail.interface';
export interface RelationshipInterface extends RelationshipDetailInterface{
    id: string;
    testIds: string[];
}