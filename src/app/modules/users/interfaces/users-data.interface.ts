import { UserInterface } from './user.interface';

export interface UsersDataInterface {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    // data: Array<UserInterface>;
    data: UserInterface[];
}
