import * as idb from 'idb';
import { TestInterface } from './test.interface';
import { RelationshipInterface } from './relationship.interface';
import { TestRelationshipInterface } from './test-relationship.interface';
import { Sample } from './sample.model';
export interface AncestryData extends idb.DBSchema{
    test: {
        key: string;
        value: TestInterface
    };
    relationship: {
        value: RelationshipInterface;
        key: string;
    };
    testRelationship: {
        value: TestRelationshipInterface;
        key: string;
    };
    sample: {
        value: Sample;
        key: string
    }
}