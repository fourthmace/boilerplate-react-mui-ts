export interface UserLevelType {
  user_level_id: string;
  name: string;
}

export interface UserType {
  user_id: string;
  email: string;
  user_level_id: string;
  user_level: UserLevelType;
}

export interface PaginationUsersType {
  pages: number;
  users: UserType[];
}

// Form Types
export interface UserIForm {
  user_id?: string;
  email: string;
  user_level: UserLevelType | {};
  password?: string;
}

export interface UserInput {
  user_id?: string;
  email: string;
  user_level_id: string;
  password?: string;
}
