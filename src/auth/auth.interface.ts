export interface Authentication {
    signInByLocal(name:string,email: string, password: string): Promise<{ success: boolean, user: any }>;
    validate(token: string): Promise<{ success: boolean, userId: string }>;
    signInByGoogle?(email: string): Promise<{ success: boolean, userId: string }>;
    signInByGithhub?(email: string): Promise<{ success: boolean, userId: string }>;
    signInByFacebook?(email: string): Promise<{ success: boolean, userId: string }>;
    login(email: string, password: string):Promise<{ success: boolean, user: any }>;
    logout(userId:string):void;

}