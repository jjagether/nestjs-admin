import { EntityMetadata, SelectQueryBuilder } from '../utils/typeormProxy';
import { EntityType, MaybePromise } from '../types';
import DefaultAdminSite from './adminSite';
import { WidgetConstructor } from './widgets/widget.interface';
import { Request, Response } from 'express';
export declare type ListActionHandler = (request: Request, response: Response) => MaybePromise<void>;
export declare type ListAction = {
    label: string;
    action: ListActionHandler;
};
export declare type ChangeActionHandler = (entity: object, request: Request, response: Response) => MaybePromise<void>;
export declare type ChangeAction = {
    label: string;
    action: ChangeActionHandler;
};
declare abstract class AdminEntity {
    private readonly adminSite;
    abstract entity: EntityType;
    listDisplay: string[] | null;
    listActions: ListAction[];
    changeActions: ChangeAction[];
    searchFields: string[] | null;
    resultsPerPage: number;
    widgets: {
        [propertyName: string]: WidgetConstructor;
    };
    constructor(adminSite: DefaultAdminSite);
    get repository(): import("typeorm").Repository<unknown>;
    get metadata(): EntityMetadata;
    get name(): string;
    getFields(form: 'add' | 'change'): string[];
    getWidgets(form: 'add' | 'change', entity?: object): any[];
    validateListConfig(): void;
    private validateDisplayFields;
    private validateSearchFields;
    protected buildSearchQueryOptions(query: SelectQueryBuilder<unknown>, alias: string, searchParam: string): SelectQueryBuilder<unknown>;
    protected buildPaginationQueryOptions(query: SelectQueryBuilder<unknown>, page: number): SelectQueryBuilder<unknown>;
    getEntityList(page: number, searchString: string): Promise<{
        entities: unknown[];
        count: number;
    }>;
}
export default AdminEntity;
