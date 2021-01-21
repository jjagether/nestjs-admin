import { EntitySubscriberInterface, InsertEvent, UpdateEvent, EntityManager } from 'typeorm';
import { Connection } from '../utils/typeormProxy';
import AdminUser from './adminUser.entity';
interface IAdminUserService<T> extends EntitySubscriberInterface<T> {
    OBJECTID: string;
}
export declare class AdminUserService implements IAdminUserService<AdminUser> {
    readonly connection: Connection;
    private readonly entityManager;
    OBJECTID: string;
    constructor(connection: Connection, entityManager: EntityManager);
    listenTo(): typeof AdminUser;
    hashPassword(password: string): string;
    comparePassword(adminUser: AdminUser, password: string): boolean;
    beforeInsert(event: InsertEvent<AdminUser>): void;
    beforeUpdate(event: UpdateEvent<AdminUser>): void;
    create(email: string, password: string): Promise<void>;
    findOne(email: string): Promise<AdminUser | undefined>;
    validateAdminCredentials(email: string, password: string): Promise<{
        id: string;
        email: string;
    }>;
}
export {};
